/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import java.io.IOException;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;


/**
 *
 * @author root
 */
public class Main {

    public static void main(String[] args) throws IOException, Exception {
        Server server = new Server(1993);

        ServletContextHandler servletContext = new ServletContextHandler(ServletContextHandler.SESSIONS);
        servletContext.setContextPath("/");
        servletContext.addServlet(IndexHandler.class, "");

        ContextHandler contextHandler = new ContextHandler("/");
        contextHandler.setResourceBase("public/");
        contextHandler.setHandler(new ResourceHandler());

        HandlerList handlers = new HandlerList();
        handlers.setHandlers(new Handler[]{servletContext, contextHandler});

        server.setHandler(handlers);
        server.start();
        System.out.println(("Server started"));
        long num = 30;
        System.out.println(System.currentTimeMillis() - num * 86400000);
        System.out.println(System.currentTimeMillis());
        server.join();
    }
}
