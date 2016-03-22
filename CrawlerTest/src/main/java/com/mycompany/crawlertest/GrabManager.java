/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import static com.mycompany.crawlertest.GrabPage.TIMEOUT;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.StopWatch;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

/**
 *
 * @author root
 */
public class GrabManager {
    
    public static final int THREAD_COUNT = 5;
    private static final long PAUSE_TIME = 1000;
    
    private Set<URL> masterList = new HashSet<>();
    private List<Future<GrabPage>> futures = new ArrayList<>();
    private ExecutorService executorService = Executors.newFixedThreadPool(THREAD_COUNT);
    
    private String urlBase;
    private final int maxDepth;
    private final int maxUrls;
    
    public GrabManager(int maxDepth, int maxUrls) {
        this.maxDepth = maxDepth;
        this.maxUrls = maxUrls;
    }
    
    public void go(URL start) throws InterruptedException, IOException {
        // stay within same site
        urlBase = start.toString().replaceAll("(.*//.*/).*", "$1");
        StopWatch stopWatch = new StopWatch();
        
        stopWatch.start();
        
        submitNewURL(start, 0);
        
        while (checkPageGrabs()) ;
        stopWatch.stop();
        
        System.out.println("Found " + masterList.size() + " urls");
        System.out.println("in " + stopWatch.getTime() / 1000 + " seconds");
        
        for (String url : Uttils.URLS) {
          
            if(!url.contains("http"))
            {
                url = start.getProtocol() + "://" + start.getHost() + url;
                //System.out.println("com.mycompany.crawlertest.GrabManager.go() : " + );
            }
            try{
              Document document = Jsoup.parse(new URL(url), TIMEOUT);
              if(document.getElementsByTag("h1") != null && document.getElementsByTag("h1").size()!=0){
                  Elements videoTag = document.getElementsByTag("iframe");
                  if(videoTag != null && videoTag.size() !=0){
                     if(videoTag.get(0).hasAttr("allowfullscreen")){
                         String tag = videoTag.get(0).toString();
                         System.out.println(document.getElementsByTag("h1").get(0).text() + " ___  " + tag);
                     }
                  }
              }
            }catch(Exception EX){
                System.out.println("ERROR : " + EX.getMessage());
            }
             //processHeaders(document.select("h1"));
        }
    }
    
    private void submitNewURL(URL url, int depth) {
        if (shouldVisit(url, depth)) {
            masterList.add(url);
            GrabPage grabPage = new GrabPage(url, depth);
            Future<GrabPage> future = executorService.submit(grabPage);
            futures.add(future);
            
        }
    }

    /**
     */
    private boolean shouldVisit(URL url, int depth) {
        if (masterList.contains(url)) {
            return false;
        }
        if (!url.toString().startsWith(urlBase)) {
            return false;
        }
        if (url.toString().endsWith(".pdf")) {
            return false;
        }
        if (depth > maxDepth) {
            return false;
        }
        if (masterList.size() >= maxUrls) {
            return false;
        }
        return true;
    }
    
    private boolean checkPageGrabs() throws InterruptedException {
        Thread.sleep(PAUSE_TIME);
        Set<GrabPage> pageSet = new HashSet<>();
        Iterator<Future<GrabPage>> iterator = futures.iterator();
        
        while (iterator.hasNext()) {
            Future<GrabPage> future = iterator.next();
            if (future.isDone()) {
                iterator.remove();
                try {
                    pageSet.add(future.get());
                } catch (InterruptedException e) {  // skip pages that load too slow
                } catch (ExecutionException e) {
                }
            }
        }
        for (GrabPage grabPage : pageSet) {
            addNewURLs(grabPage);
        }
        
        return (futures.size() > 0);
    }
    
    private void addNewURLs(GrabPage grabPage) {
        for (URL url : grabPage.getUrlList()) {
            if (url.toString().contains("#")) {
                try {
                    url = new URL(StringUtils.substringBefore(url.toString(), "#"));
                } catch (MalformedURLException e) {
                }
            }
            
            submitNewURL(url, grabPage.getDepth() + 1);
        }
    }
    
    public void write(String path) throws IOException {
        FileUtils.writeLines(new File(path), masterList);
    }
    
}
