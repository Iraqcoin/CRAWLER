/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.Scanner;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author root
 */
public class Scraper {

    //The url of the website
    private static final String webSiteURL = "http://ovuinhi.com/playlist/tuyen-tap-nhung-bai-hat-hay-nhat-cua-mr-siro.html";

    //The path of the folder that you want to save the images to
    private static String folderPath = "";
    static Integer lastPage = 0;
    static Integer LP = 0;

    public static void main(String[] args) throws UnknownHostException, IOException {
        Scanner in = new Scanner(System.in);
        System.out.print("Please enter the folder path: ");
        final String path = in.nextLine();
        folderPath = path;
        System.out.print("Please enter the ammount of pages to be scraped: ");
        final Integer lp = in.nextInt();
        // start downloading loop
        try {
            //Connect to the website and get the html - take a look at "page/" THis is how teh pages are seperated
            Document doc = Jsoup.connect(webSiteURL).get();
            //Get all elements with img tag ,
            Elements img = doc.getElementsByTag("img");

            for (Element el : img) {
                //for each element get the srs url
                String src = el.absUrl("src");
                System.out.println("Image Found!");
                System.out.println("src attribute is : " + src);
                getImages(src);
            }
        } catch (IOException ex) {
            System.err.println("There was an error: " + ex);
        }
    }

    private static void getImages(String src) throws IOException {
        int indexname = src.lastIndexOf("/");

        if (indexname == src.length()) {
            src = src.substring(1, indexname);
        }
        indexname = src.lastIndexOf("/");
        String name = src.substring(indexname, src.length());
        System.out.println(name);
        //Open a URL Stream
        URL url = new URL(src);
        InputStream in = url.openStream();
        OutputStream out = new BufferedOutputStream(new FileOutputStream(folderPath + name));
        for (int b; (b = in.read()) != -1;) {
            out.write(b);
        }
        out.close();
        in.close();
    }
}
