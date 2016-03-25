/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Calendar;
import java.util.Properties;
import org.jsoup.Connection;

/**
 *
 * @author root
 */
public class DBUtils {

    public static void main(String[] args) throws InterruptedException, IOException {
        Properties prop = new Properties();
        InputStream input = null;
        String database = "";
        String dbuser = "";
        String dbpass = "";
        try {

            String filename = "config.properties";
            input = DBUtils.class.getClassLoader().getResourceAsStream(filename);
            if (input == null) {
                System.out.println("Sorry, unable to find " + filename);
                return;
            }

            //load a properties file from class path, inside static method
            prop.load(input);

            //get the property value and print it out
            database = prop.getProperty("database");
            dbuser = prop.getProperty("dbuser");
            dbpass = prop.getProperty("dbpassword");

        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        GrabManager grabManager = new GrabManager(2, 200);
        grabManager.go(new URL("http://xabuon.com/"));

        try {
            // create a mysql database connection
            String myUrl = "jdbc:mysql://localhost:3306/" + database;
            Class.forName("com.mysql.jdbc.Driver");
            java.sql.Connection conn = DriverManager.getConnection(myUrl, dbuser, dbpass);

            // create a sql date object so we can use it in our INSERT statement
            Calendar calendar = Calendar.getInstance();
            java.sql.Date startDate = new java.sql.Date(calendar.getTime().getTime());

            // the mysql insert statement
            String query = "insert into wp_post_meta (product_id, domain, link, title, video)"
                    + " values (?, ?, ?, ?, ?)";

            // create the mysql insert preparedstatement
            for (String arg : Uttils.URLS) {
                String url = arg;
                PreparedStatement preparedStmt = conn.prepareStatement(query);
                preparedStmt.setInt(1, 1001);
                preparedStmt.setString(2, "xaluan.com");
                preparedStmt.setString(3, url);
                preparedStmt.setString(4, url);
                preparedStmt.setString(5, url);

                // execute the preparedstatement
                preparedStmt.execute();
            }

            conn.close();
        } catch (Exception e) {
            System.err.println("Got an exception!");
            System.err.println(e.getMessage());
        }

    }
}
