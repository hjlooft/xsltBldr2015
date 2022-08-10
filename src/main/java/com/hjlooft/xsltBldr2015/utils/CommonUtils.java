package com.hjlooft.xsltBldr2015.utils;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

public class CommonUtils {

    public static void renderErrorHTML(HttpServletResponse response, Exception ex, Integer statusCode) throws IOException, ServletException {
        response.setStatus(statusCode);
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");
        PrintWriter pw = response.getWriter();
        // just show a simple error page for now.
        pw.println("<p>");
        pw.println(ex.getMessage());
        pw.println("</p>");
        pw.println("<pre>");
        ex.printStackTrace(pw);
        pw.println("</pre>");
    }
}
