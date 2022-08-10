package com.hjlooft.xsltBldr2015.services;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

@Service
public class ServeSampleService {
    
    public void serve(String sampleName, HttpServletResponse response) throws IOException{

        String rootLocation = new File("").getAbsolutePath() + File.separator;   
        File sampleFile = new File(rootLocation +  File.separator + "samples" + File.separator + sampleName + ".xml");

        BufferedReader br =  new BufferedReader(new FileReader(sampleFile));
        BufferedWriter bw = new BufferedWriter(response.getWriter());
        String line = null; //not declared within while loop
        try {
            while (( line = br.readLine()) != null){
                String curLine =  line;
                bw.append(curLine);
                //Process line
            }

        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {

            br.close();

        }
        

        bw.flush();
        bw.close();
    } 

}
