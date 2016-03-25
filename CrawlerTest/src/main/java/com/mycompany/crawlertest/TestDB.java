/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.crawlertest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author root
 */
public class TestDB {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost/jakarta247h_com_c1";   
        String username = "java";
        String password = "password";

        System.out.println("Connecting database...");

        try (Connection connection = DriverManager.getConnection(url, "root", "password")) {
            System.out.println("Database connected!");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
