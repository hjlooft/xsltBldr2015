package com.hjlooft.xsltBldr2015.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hjlooft.xsltBldr2015.services.ServeSampleService;

@RestController
@RequestMapping(path = "/api")
public class ServeSamplesController {
    
    @Autowired
    ServeSampleService sampleService;

    @RequestMapping(value = "/sample/{sampleName}", method = RequestMethod.GET, 
    produces = MediaType.TEXT_PLAIN_VALUE)
    public void serveSample(@PathVariable String sampleName, HttpServletResponse response) {

//        return "sampleName is: " + sampleName;
        try {
            sampleService.serve(sampleName, response);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

}
