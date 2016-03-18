/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author root
 */
public class IndexHandler extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        String url = "http://news.zing.vn/Han-man-song-Mekong-Tham-hoa-duoc-bao-truoc-post634596.html";
        PrintWriter p = resp.getWriter();
        Document doc1 = null;
        try {
            doc1 = Jsoup.connect(url).get();
        } catch (IOException ex) {
            Logger.getLogger(IndexHandler.class.getName()).log(Level.SEVERE, null, ex);
        }
        Element contentDiv = doc1.select("section[class=main]").first();
        Elements text = contentDiv.getAllElements();
        for (Element element : text) {
            if (element.nodeName().equals("h1")) {
                p.write("<h1>" + element.html() + "</h1>");
            }
            else if(element.nodeName().equals("p") && !element.hasAttr("class")){
                if(element.getElementsByTag("img") == null || element.getElementsByTag("img").isEmpty()){
                    p.write("<p>" + element + "</p>");
                }
            }
        }
       
    }

}
