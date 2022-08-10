package com.hjlooft.xsltBldr2015.controllers;

import static com.hjlooft.xsltBldr2015.utils.CommonUtils.renderErrorHTML;
import static com.hjlooft.xsltBldr2015.utils.XmlUtils.getDocumentBuilder;
import static com.hjlooft.xsltBldr2015.utils.XmlUtils.getFirstChildElement;

import java.io.File;
import java.io.IOException;
import java.io.StringReader;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.xml.sax.InputSource;

import com.hjlooft.xsltBldr2015.services.TransformerFactoryService;

@RestController
@RequestMapping(path = "/api")
public class TransformController {

  /**
   * @param posted_transform_data
   * @param response
   */
  @CrossOrigin
  @RequestMapping(value = "/transform", method = RequestMethod.POST, consumes = MediaType.APPLICATION_XML_VALUE, produces = MediaType.ALL_VALUE)
  public void handleTransformRequest(@RequestBody String posted_transform_data, HttpServletResponse response) {

    response.setContentType("appiclation/xml");

    // set up file system variables
    String rootLocation = new File("").getAbsolutePath() + File.separator;
    // URI for URI resolver for relative path references in transform code
    String xsltFileDir = rootLocation + "xslt" + File.separator;
    // for storing business object data as xml files
    String businessObjectDataDir = rootLocation + "xml_data" + File.separator;

    // retrieve xml fragments (request, stylesheet,
    // business object data) from posted data
    
    Document doc = convertStringToXMLDocument(posted_transform_data);

    /**
     * ********* REQUEST XML FRAGMENT *******
     * get the REQUEST XML FRAGMENT.
     * Will be passed as DOMSOURCE
     * into the transformer's transform method later on
     * ***************************************************
     */
    Element elemReqMessage = getFirstChildElement((Element) doc.getElementsByTagName("request").item(0));

    /**
     * ****** STYLESHEET XSL FRAGMENT ********
     * get the STYLESHEET XSL FRAGMENT
     * and create a document to set
     * as stylesheet of transformer
     * ***************************************************
     */
    Document docStylesheet = null;
    
    try {

      Node elemStylesheetWrapper = doc.getElementsByTagName("stylesheet").item(0);
      System.out.println("elemStylesheetWrapper == null: " + elemStylesheetWrapper == null);
      if (elemStylesheetWrapper == null) {
        Exception e = new Exception();
        e.initCause(new IOException("No space memory"));
        throw e;

        //throw new MalformedParametersException("cannot find stylesheet data");
      }

      Element elemStylesheet = getFirstChildElement(elemStylesheetWrapper);


      docStylesheet = getDocumentBuilder(true).newDocument();
      Node elemStylesheetForImport = docStylesheet.importNode(elemStylesheet, true);
      docStylesheet.appendChild(elemStylesheetForImport);

    } catch (ParserConfigurationException e1) {
      // TODO Auto-generated catch block
      e1.printStackTrace();
    } catch (Exception ex){
       try {
        renderErrorHTML(response, ex, 400);
      } catch (IOException | ServletException e) {
        e.printStackTrace();
      }
    }

    /**
    * ******** BUSINESS OBJECT DATA ***********
    * get the BUSINESS OBJECT DATA xml fragment
    * and store it to the businessObjectDataDir
    * ***************************************** */
    Element elemBusinessObjectData = getFirstChildElement((Element) doc.getElementsByTagName("business_object_data").item(0));

    Document docBusinessobject = null;
    try {
      docBusinessobject = getDocumentBuilder(true).newDocument();
      Node elemBusinessdataForImport = docBusinessobject.importNode(elemBusinessObjectData, true);
      docBusinessobject.appendChild(elemBusinessdataForImport);
    } catch (ParserConfigurationException e1) {
      // TODO Auto-generated catch block
      e1.printStackTrace();
    }

    // // get business object name for generating name for xml file
    // String businessObjectName = elemBusinessObjectData.getTagName().toLowerCase().replace(":", "_");

    // File businessObjectDataFile = new File(businessObjectDataDir + businessObjectName + ".xml");
    // System.out.println(businessObjectDataFile.getName());

    // // create instance of transformerFactory for storing xml data
    // TransformerFactory transfFactory = TransformerFactory.newInstance();

    // try {

    //   businessObjectDataFile.createNewFile();
    //   Transformer trans;
    //   trans = transfFactory.newTransformer();
    //   DOMSource source = new DOMSource(elemBusinessObjectData);
    //   StreamResult result = new StreamResult(businessObjectDataFile);
    //   trans.transform(source, result);

    // } catch (IOException ioe) {
    //   // TODO Auto-generated catch block
    //   ioe.printStackTrace();
    // } catch (TransformerConfigurationException tce) {
    //   // TODO Auto-generated catch block
    //   tce.printStackTrace();
    // } catch (TransformerException tfe) {
    //     try {
    //       renderErrorHTML(response, tfe, 400);
    //     } catch (IOException | ServletException e) {
    //       e.printStackTrace();
    //     }
    // }


    /**
    * ******** PERFORM THE TRANSFORM *********
    * ***************************************** */

    // 1. SystemStylesheetLoader のインスタンスを生成する
    TransformerFactoryService loader = new TransformerFactoryService(xsltFileDir, docBusinessobject);

    // 2. Transformer のインスタンスを生成する

    try {
      Transformer transformer = loader.newTransformer(docStylesheet);

      transformer.transform(
          new DOMSource(elemReqMessage),
          new StreamResult(response.getWriter()));
    } catch (TransformerConfigurationException tce) {
      // TODO Auto-generated catch block
      //tce.printStackTrace();
      try {
        renderErrorHTML(response, tce, 400);
        return;
      } catch (IOException | ServletException e) {
        e.printStackTrace();
      }
    } catch (TransformerException te) {
      // TODO Auto-generated catch block
      te.printStackTrace();
    } catch (IOException ioe) {
      // TODO Auto-generated catch block
      ioe.printStackTrace();
    } finally {
              /**
    * ******** CLEAN-UP *********
    * delete business object data file
    * ***************************************** */
      //businessObjectDataFile.delete();
    }


  }

  private static Document convertStringToXMLDocument(String xmlString) {
    // Parser that produces DOM object trees from XML content
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    factory.setNamespaceAware(true);
    // API to obtain DOM Document instance
    DocumentBuilder builder = null;
    try {
      // Create DocumentBuilder with default configuration
      builder = factory.newDocumentBuilder();

      // Parse the content to Document object
      Document doc = builder.parse(new InputSource(new StringReader(xmlString)));
      return doc;
    } catch (Exception e) {
      e.printStackTrace();
    }
    return null;
  }

}
