/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Callable;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author root
 */
public class GrabPage implements Callable<GrabPage> {

    static final int TIMEOUT = 60000;   // one minute

    private URL url;
    private int depth;
    private Set<URL> urlList = new HashSet<>();

    public GrabPage(URL url) {
        this.url = url;
    }

    public GrabPage(URL url, int depth) {
        this.url = url;
        this.depth = depth;
    }

    @Override
    public GrabPage call() throws Exception {
        Document document = null;
        document = Jsoup.parse(url, TIMEOUT);
        //processHeaders(document.select("h1"));
        processLinks(document.select("a[href]"));
        return this;
    }

    private void processLinks(Elements links) {
        for (Element link : links) {
            String href = link.attr("href");
            if (StringUtils.isBlank(href)
                    || href.startsWith("#")) {
                continue;
            }
            try {
                URL nextUrl = new URL(url, href);
                Uttils.URLS.add(href);
                urlList.add(nextUrl);
            } catch (MalformedURLException e) { // ignore bad urls
            }
        }
    }

    public Set<URL> getUrlList() {
        return urlList;
    }

    public int getDepth() {
        return depth;
    }

    public void dump() {
        for (URL url1 : urlList) {
            System.out.println("Links to " + url1.toString());
        }
    }

    private void processHeaders(Elements select) {
          for (Element link : select) {
            String header = link.text() + "___" + depth;
            if (StringUtils.isBlank(header)
                    || header.startsWith("#")) {
                continue;
            }
            Uttils.HEADERS.add(header);
        }
    }

}
