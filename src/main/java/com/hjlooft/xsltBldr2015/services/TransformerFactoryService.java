package com.hjlooft.xsltBldr2015.services;

import java.io.FileInputStream;
import java.io.InputStream;
import javax.xml.transform.*;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamSource;

import org.w3c.dom.Document;
import org.w3c.dom.Node;

public class TransformerFactoryService {

    private final String basedir;
    private final TransformerFactory factory;
    
    public TransformerFactoryService(String basedir, Node docBusinessobject){
        if(basedir.endsWith("/"))
            this.basedir = basedir;
        else
            this.basedir = basedir+"/";
        
        this.factory = TransformerFactory.newInstance();
        //this.factory.setURIResolver(new SystemResourceURIResolver(this.basedir));
        this.factory.setURIResolver(new SystemResourceURIResolver(this.basedir, docBusinessobject));
    }

    public Transformer newTransformer(Document stylesheetDoc)
            throws TransformerConfigurationException{
        //         System.out.println(ClassLoader.getSystemResource(this.basedir+stylesheet));
        // InputStream is = ClassLoader.getSystemResourceAsStream(this.basedir+stylesheet);
        return this.factory.newTransformer(new DOMSource(stylesheetDoc));
    }
    
    private static class SystemResourceURIResolver implements URIResolver{

        //private final String basedir;
        private final Node docBusinessobject;

        SystemResourceURIResolver(String basedir, Node docBusinessobject){
            //this.basedir = basedir;
            this.docBusinessobject = docBusinessobject;
        }
        
        public Source resolve(String href, String base)throws TransformerException {
            
            try {
                // InputStream is = new FileInputStream(basedir + href);
    
                // return new StreamSource(is);
                return new DOMSource(docBusinessobject);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }
    }
}