package com.hjlooft.xsltBldr2015.utils;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class XmlUtils {
        /**
     * Get the first child element
     * @param parent
     * @return
     */
    public static Element getFirstChildElement(Node parent) {
        NodeList childs = parent.getChildNodes();
        for (int i = 0; i < childs.getLength(); i++) {
            Node child = childs.item(i);
            if (child instanceof Element) {
                return (Element) child;
            }
        }
        return null;
    }

    public static DocumentBuilder getDocumentBuilder(Boolean namespaceAware) throws ParserConfigurationException{

        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        DocumentBuilder newDocumentBuilder = dbf.newDocumentBuilder();
        return newDocumentBuilder;

    }

}
