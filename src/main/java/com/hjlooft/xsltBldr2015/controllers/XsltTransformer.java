package com.hjlooft.xsltBldr2015.controllers;

import java.io.IOException;
import java.io.StringReader;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
	value = "/parrot", 
  method = RequestMethod.POST, 
  produces = "application/xml"
)
public class XsltTransformer extends HttpServlet {

	/**
	 * 
	 */
	String xml = "";
	String xsl = "";
	
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		if(req.getParameter("type").equals("request")){
			xml = req.getParameter("contents");
			//System.out.println(xml);
		} else if(req.getParameter("type").equals("stylesheet")){
			System.out.println("raw contents string is:" +req.getParameter("contents"));
			xsl = req.getParameter("contents");
			
			if(!xml.isEmpty()){
				
				resp.setContentType("text/xml; charset=UTF-8");
				
			    Source xmlSource = new StreamSource(new StringReader(xml));
			    Source xsltSource = new StreamSource(new StringReader(xsl));

			    TransformerFactory transFact = TransformerFactory.newInstance(); //new net.sf.saxon.TransformerFactoryImpl();

			    Transformer trans = null;
				try {
					trans = transFact.newTransformer(xsltSource);
				} catch (TransformerConfigurationException e) {
					e.printStackTrace();
				}

			    try {
					trans.transform(xmlSource, new StreamResult(resp.getWriter()));
				} catch (TransformerException e) {
					e.printStackTrace();
				}
				
			}
		}
	}
	
}
