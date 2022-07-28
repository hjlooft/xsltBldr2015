const reqResSamples =
{
    "InventionstatusBereitstellen": {
        "req": "<InventionstatusBereitstellenRequest xmlns=\"http://www.komlefom.de/proxlef/mixtool\"><EndsuAN>49/2777/43/7MA1</EndsuAN></InventionstatusBereitstellenRequest>",
        "res": "<ns2:InventionstatusBereitstellenResponse xmlns=\"http://www.komlefom.de/proxlef/mixtool/basetypes\" xmlns:ns2=\"http://www.komlefom.de/proxlef/mixtool\"><ns2:Daten><EndsuAN>[ENDSU with /]!!!!</EndsuAN><Betriebsstatus>inBetrieb</Betriebsstatus><Nutzungsstatus>provisionierungstauglich</Nutzungsstatus><Equipmentnummer>[Equipmentnummer FPX]!!!!!</Equipmentnummer><Materialnummer>[Materialnummer FPX]!!!!</Materialnummer><Typname>[MSAN / DSLAM from proxlef Kennung]!!!!</Typname><Hersteller>[Hersteller FPX]!!!!</Hersteller><Typ>[Typ FPX]!!!</Typ><Domain_Name>ZDCN_5</Domain_Name><ZDCN_IP_Adresse>169.169.1.1</ZDCN_IP_Adresse><MAT_ID>[UNIQUE Number]!!!</MAT_ID><Sperre><Sperrgrund>KP7Sperre</Sperrgrund><Prozesse>G1,G2,G3,G5,G10,ChangePort,NMS_Konfiguration</Prozesse><Notiz>InfoNotizSperre</Notiz><Beginn>2014-11-09T12:00:00</Beginn><Ende>2014-11-09T12:00:00</Ende></Sperre><Card><Slotnummer_abs>[109]!!!</Slotnummer_abs><Typname>Ethernet_Linecard</Typname><Slotnummer_rel>[9]!!!</Slotnummer_rel><Nutzungsstatus>provisionierungstauglich</Nutzungsstatus><Betriebsstatus>inBetrieb</Betriebsstatus><Equipmentnummer>[123455400012]!!!</Equipmentnummer><Materialnummer>[40247135]!!!</Materialnummer><Port><Portnummer>2</Portnummer><Typname>Port</Typname><EthernetLink>false</EthernetLink><Betriebsstatus>ausserBetrieb</Betriebsstatus></Port></Card></ns2:Daten></ns2:InventionstatusBereitstellenResponse>"
    },
    "readBildDb": {
        "req": "<readBildDbReq xmlns=\"http://slt.xsystems.com/SL-T_MynationGNB\"><ListHeader><Version>1.0</Version><ConsumerID>GNB</ConsumerID><ListID>9b9a0b99-f880-4188-a343-c2e9a97d55dc</ListID><ListDate>2015-04-30T13:21:20.102+03:00</ListDate></ListHeader><EntryReadReq><EntryID>6c953ad3-c3df-4b0b-a8ea-c4c3a58a17ab</EntryID><EntryReference><ProjektInstanzID>49N2777N1023N7MA1OABFEB4ED2BF649</ProjektInstanzID></EntryReference></EntryReadReq><EntryReadReq><EntryID>c24f5a74-5f30-43bd-b2bf-3c6dfcbf0564</EntryID><EntryReference><ProjektInstanzID>49N2777N1023N7MA1O7DCDD97BAD0E42</ProjektInstanzID></EntryReference></EntryReadReq><EntryReadReq><EntryID>c2b26c76-841a-4b56-9bd5-1b568b459b97</EntryID><EntryReference><ProjektInstanzID>49N2777N1023N7MA1OF22150BDF2F545</ProjektInstanzID></EntryReference></EntryReadReq><EntryReadReq><EntryID>9f554738-a533-41b0-9e31-93ac7ace04da</EntryID><EntryReference><ProjektInstanzID>49N2777N1023N7MA1OEB3192C861BD4F</ProjektInstanzID></EntryReference></EntryReadReq></readBildDbReq>",
        "res": "<p:readBildDbReply xmlns:p=\"http://slt.xsystems.com/SL-T_MynationGNB\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://slt.xsystems.com/SL-T_MynationGNB sltMynationGNB.xsd \"><p:ListHeader><p:Version>1.0</p:Version><p:ConsumerID>GNB2amig</p:ConsumerID><p:ListID>123456</p:ListID><p:ListDate>2015-04-30T13:21:20.102+03:00</p:ListDate></p:ListHeader><p:ListMessage><p:Code>10</p:Code><p:Messagetext>p:Messagetext</p:Messagetext></p:ListMessage><p:Entry><p:EntryReadReq><p:EntryID>p:EntryID</p:EntryID><p:EntryReference><p:ProjektInstanzID>49N2777N1023N7MA1OABFEB4ED2BF649</p:ProjektInstanzID></p:EntryReference></p:EntryReadReq><p:EntryMessage><p:Code>10</p:Code><p:Messagetext>p:Messagetext</p:Messagetext></p:EntryMessage><p:EntryData><p:TnbaID>TNBA-5844-112e</p:TnbaID></p:EntryData></p:Entry><p:Entry><p:EntryReadReq><p:EntryID>p:EntryID</p:EntryID><p:EntryReference><p:ProjektInstanzID>49N2777N1023N7MA1O7DCDD97BAD0E42</p:ProjektInstanzID></p:EntryReference></p:EntryReadReq><p:EntryMessage><p:Code>10</p:Code><p:Messagetext>p:Messagetext</p:Messagetext></p:EntryMessage><p:EntryData><p:TnbaID>TNBA-5844-116e</p:TnbaID></p:EntryData></p:Entry><p:Entry><p:EntryReadReq><p:EntryID>p:EntryID</p:EntryID><p:EntryReference><p:ProjektInstanzID>49N2777N1023N7MA1OF22150BDF2F545</p:ProjektInstanzID></p:EntryReference></p:EntryReadReq><p:EntryMessage><p:Code>10</p:Code><p:Messagetext>p:Messagetext</p:Messagetext></p:EntryMessage><p:EntryData><p:TnbaID>TNBA-5844-114e</p:TnbaID></p:EntryData></p:Entry><p:Entry><p:EntryReadReq><p:EntryID>p:EntryID</p:EntryID><p:EntryReference><p:ProjektInstanzID>49N2777N1023N7MA1OEB3192C861BD4F</p:ProjektInstanzID></p:EntryReference></p:EntryReadReq><p:EntryMessage><p:Code>10</p:Code><p:Messagetext>p:Messagetext</p:Messagetext></p:EntryMessage><p:EntryData><p:TnbaID>TNBA-5844-113e</p:TnbaID></p:EntryData></p:Entry></p:readBildDbReply>"
    },
    "updateBildDb": {
        "req": "<updateBildDbReq xmlns=\"http://slt.xsystems.com/SL-T_MynationGNB\"><ListHeader><Version>1.0</Version><ConsumerID>GNB</ConsumerID><ListID>8552adc5-157e-4d92-a1bc-b4cabba5a6b0</ListID><ListDate>2015-04-30T10:52:10.079+03:00</ListDate></ListHeader><EntryUpdateReq><EntryID>12c49d89-0686-496c-bb56-ad1e7d4e167f</EntryID><EntryReference><TnbaID>TNBA-5844-107e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811778</LineID_GNB></UpdateData></EntryUpdateReq><EntryUpdateReq><EntryID>c6d5bbc7-46f8-4e9f-835a-ba580319b862</EntryID><EntryReference><TnbaID>TNBA-5844-105e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811779</LineID_GNB></UpdateData></EntryUpdateReq><EntryUpdateReq><EntryID>7c7c2e6c-fe02-4440-90a7-7e1a9c6bd9ad</EntryID><EntryReference><TnbaID>TNBA-5844-104e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811780</LineID_GNB></UpdateData></EntryUpdateReq><EntryUpdateReq><EntryID>c3e3a18f-c422-44ea-a369-eef6b7223328</EntryID><EntryReference><TnbaID>TNBA-5844-106e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811781</LineID_GNB></UpdateData></EntryUpdateReq></updateBildDbReq>",
        "res": "<updateBildDbReply xmlns=\"http://slt.xsystems.com/SL-T_MynationGNB\"><ListHeader xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><Version>1.0</Version><ConsumerID>GNB</ConsumerID><ListID>8552adc5-157e-4d92-a1bc-b4cabba5a6b0</ListID><ListDate>2015-04-30T10:52:10.079+03:00</ListDate></ListHeader><ListMessage><Code>10</Code><Messagetext>4 positive Ergebnisse. 0 negative Ergebnisse.</Messagetext></ListMessage><Entry><EntryUpdateReq><EntryID>12c49d89-0686-496c-bb56-ad1e7d4e167f</EntryID><EntryReference><TnbaID>TNBA-5844-107e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811778</LineID_GNB></UpdateData></EntryUpdateReq><EntryMessage><Code>10</Code></EntryMessage></Entry><Entry><EntryUpdateReq><EntryID>c6d5bbc7-46f8-4e9f-835a-ba580319b862</EntryID><EntryReference><TnbaID>TNBA-5844-105e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811779</LineID_GNB></UpdateData></EntryUpdateReq><EntryMessage><Code>10</Code></EntryMessage></Entry><Entry><EntryUpdateReq><EntryID>7c7c2e6c-fe02-4440-90a7-7e1a9c6bd9ad</EntryID><EntryReference><TnbaID>TNBA-5844-104e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811780</LineID_GNB></UpdateData></EntryUpdateReq><EntryMessage><Code>10</Code></EntryMessage></Entry><Entry><EntryUpdateReq><EntryID>c3e3a18f-c422-44ea-a369-eef6b7223328</EntryID><EntryReference><TnbaID>TNBA-5844-106e</TnbaID></EntryReference><UpdateData><LineID_GNB>DEU.DTGmbH.3811781</LineID_GNB></UpdateData></EntryUpdateReq><EntryMessage><Code>10</Code></EntryMessage></Entry></updateBildDbReply>"
    },
    "ExecuteDiagnosticsType": {
        "req": "<ns5:ExecuteDiagnosticsType xmlns=\"http://schemas.komlefom.net/csdg_v01.01\" xmlns:ns2=\"http://services.sdeu.komlefom.net/ServAndResMgmt/TestAndDiagno/DiagnosticsManagementProvider_v02.00/types\" xmlns:ns3=\"http://system-services.s-home.komlefom.de/ServiceManagement/OIS_Services_v01.00/common\" xmlns:ns4=\"http://system-services.s-home.komlefom.de/ServiceManagement/ServiceTestAndDiagnostics/DiagnosticsManagement_v02.00/types\" xmlns:ns5=\"uri\"><ns2:context><technicalContext><from>de.komlefom.GNB.mynation.OpsceneGateway</from><routingInfo>Opscene.readAnAncpStatus</routingInfo><messageId>82495d7d-5079-408b-a787-da4c484b99e5</messageId><currentSenderTimestampUTC>2015-04-30T10:23:10.096Z</currentSenderTimestampUTC><expiryOffsetInMillis>60000</expiryOffsetInMillis></technicalContext><businessContext><processId>797a39c2-dd2b-453d-815b-9e44124078f9</processId><processTypeId>unknown_process_type</processTypeId></businessContext></ns2:context><ns2:data><ns4:executeDiagnostics><ns4:messageID><ns3:value>797a39c2-dd2b-453d-815b-9e44124078f9</ns3:value></ns4:messageID><ns4:diagnostic><ns3:specification><ns3:specificationName>Diagnostic Spec</ns3:specificationName><ns3:specificationID>Diagnostic Spec</ns3:specificationID><ns3:characteristic><ns3:characteristicID>SpecificationType</ns3:characteristicID><ns3:characteristicValue>Diagnostic</ns3:characteristicValue></ns3:characteristic><ns3:characteristic><ns3:characteristicID>TestName</ns3:characteristicID><ns3:characteristicValue>READ_AN_ANCP_STATUS</ns3:characteristicValue></ns3:characteristic><ns3:characteristic><ns3:characteristicID>TestInput</ns3:characteristicID><ns3:characteristicValue xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:nil=\"true\"/><ns3:characteristic><ns3:characteristicID>InputData</ns3:characteristicID><ns3:characteristicValue xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:nil=\"true\"/><ns3:characteristic><ns3:characteristicID>PortInformation</ns3:characteristicID><ns3:characteristicValue xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:nil=\"true\"/><ns3:characteristic><ns3:characteristicID>PortInformation.endsuAccessNode</ns3:characteristicID><ns3:characteristicValue>49/2777/1023/7MA1</ns3:characteristicValue></ns3:characteristic><ns3:characteristic><ns3:characteristicID>PortInformation.slot</ns3:characteristicID><ns3:characteristicValue>2</ns3:characteristicValue></ns3:characteristic><ns3:characteristic><ns3:characteristicID>PortInformation.port</ns3:characteristicID><ns3:characteristicValue>1</ns3:characteristicValue></ns3:characteristic></ns3:characteristic></ns3:characteristic></ns3:characteristic></ns3:specification></ns4:diagnostic></ns4:executeDiagnostics></ns2:data></ns5:ExecuteDiagnosticsType>",
        "res": "<ns5:ExecuteDiagnosticsCallbackType xmlns=\"http://schemas.komlefom.net/csdg_v01.01\" xmlns:ns2=\"http://services.sdeu.komlefom.net/ServAndResMgmt/TestAndDiagno/DiagnosticsManagementConsumer_v02.00/types\" xmlns:ns3=\"http://system-services.s-home.komlefom.de/ServiceManagement/OIS_Services_v01.00/common\" xmlns:ns4=\"http://system-services.s-home.komlefom.de/ServiceManagement/ServiceTestAndDiagnostics/DiagnosticsManagement_v02.00/types\" xmlns:ns5=\"uri\"><ns2:context><technicalContext><from>de.komlefom.ngssm.oss.Opscene.Opscene:NBI</from><routingInfo>de.komlefom.ngssm.oss.Opscene.Opscene:NBI:DiagnosticsManagementConsumer_HPSA_RMK</routingInfo><messageId>82495d7d-5079-408b-a787-da4c484b99e5</messageId><currentSenderTimestampUTC>2015-04-30T10:23:10.267Z</currentSenderTimestampUTC><expiryOffsetInMillis>120000</expiryOffsetInMillis></technicalContext><businessContext><processId>soapUi-AN_ANCP_STATUS</processId><processTypeId>soapUi-1</processTypeId></businessContext></ns2:context><ns2:data><ns4:executeDiagnosticsCallback><ns4:messageID><ns3:value>797a39c2-dd2b-453d-815b-9e44124078f9</ns3:value><ns3:sequence>1</ns3:sequence></ns4:messageID><ns4:diagnostic><ns3:specification><ns3:specificationName>Diagnostic Response Spec</ns3:specificationName><ns3:specificationID>Diagnostic Response Spec</ns3:specificationID><ns3:characteristic><ns3:characteristicID>SpecificationType</ns3:characteristicID><ns3:characteristicValue>Diagnostic</ns3:characteristicValue></ns3:characteristic><ns3:characteristic><ns3:characteristicID>TestResponse</ns3:characteristicID><ns3:characteristicValue>Good</ns3:characteristicValue></ns3:characteristic></ns3:specification></ns4:diagnostic></ns4:executeDiagnosticsCallback></ns2:data></ns5:ExecuteDiagnosticsCallbackType>"
    },
    "setAccessData": {
        "req": "<ns3:SetAccessDataRequestType xmlns=\"http://schemas.komlefom.net/csdg_v01.01\" xmlns:ns2=\"http://services.sdeu.komlefom.net/ServAndResMgmt/TechOrderMgmt/SetAccessDataGNB_v01.00/types\" xmlns:ns3=\"uri\"><ns2:context><technicalContext><from>GNB_MIG</from><routingInfo>NC_RMC_IDM-SET_ACC_DATA</routingInfo><messageId>10076</messageId><currentSenderTimestampUTC>2015-04-30T10:56:50.116Z</currentSenderTimestampUTC><expiryOffsetInMillis>600000</expiryOffsetInMillis></technicalContext><businessContext><processId>10076</processId><processTypeId>GNB_MIG-SET_ACC_DATA</processTypeId></businessContext></ns2:context><ns2:data><ns2:TransactionID>10076</ns2:TransactionID><ns2:Accounts><ns2:GUID>100049019000001951410001</ns2:GUID><ns2:Characteristics><ns2:LineID>DEU.DTGmbH.2940960</ns2:LineID><ns2:GuaranteedBandwidthDownstream>10944</ns2:GuaranteedBandwidthDownstream><ns2:GuaranteedBandwidthUpstream>704</ns2:GuaranteedBandwidthUpstream><ns2:UserAuthRequired>0</ns2:UserAuthRequired></ns2:Characteristics></ns2:Accounts><ns2:Accounts><ns2:GUID>100049019000002903500001</ns2:GUID><ns2:Characteristics><ns2:LineID>DEU.DTGmbH.2940961</ns2:LineID><ns2:GuaranteedBandwidthDownstream>10944</ns2:GuaranteedBandwidthDownstream><ns2:GuaranteedBandwidthUpstream>704</ns2:GuaranteedBandwidthUpstream><ns2:UserAuthRequired>0</ns2:UserAuthRequired></ns2:Characteristics></ns2:Accounts><ns2:Accounts><ns2:GUID>100049019000002155800001</ns2:GUID><ns2:Characteristics><ns2:LineID>DEU.DTGmbH.2940962</ns2:LineID><ns2:GuaranteedBandwidthDownstream>27968</ns2:GuaranteedBandwidthDownstream><ns2:GuaranteedBandwidthUpstream>2784</ns2:GuaranteedBandwidthUpstream><ns2:UserAuthRequired>0</ns2:UserAuthRequired></ns2:Characteristics></ns2:Accounts><ns2:Accounts><ns2:GUID>100049019000001849310001</ns2:GUID><ns2:Characteristics><ns2:LineID>DEU.DTGmbH.2940963</ns2:LineID><ns2:GuaranteedBandwidthDownstream>12096</ns2:GuaranteedBandwidthDownstream><ns2:GuaranteedBandwidthUpstream>1140</ns2:GuaranteedBandwidthUpstream><ns2:UserAuthRequired>0</ns2:UserAuthRequired></ns2:Characteristics></ns2:Accounts></ns2:data></ns3:SetAccessDataRequestType>",
        "res": "<ns3:SetAccessDataResponseType xmlns=\"http://schemas.komlefom.net/csdg_v01.01\" xmlns:ns2=\"http://services.sdeu.komlefom.net/ServAndResMgmt/TechOrderMgmt/SetAccessDataGNB_v01.00/types\" xmlns:ns3=\"uri\"><ns2:context><technicalContext><from>GNB</from><currentSenderTimestampUTC>2014-12-08T09:54:00.591+01:00</currentSenderTimestampUTC></technicalContext></ns2:context><ns2:data><ns2:TransactionID>10076</ns2:TransactionID><ns2:Accounts><ns2:GUID>100049019000001951410001</ns2:GUID><ns2:ServiceResult><ns2:ReturnCode>0</ns2:ReturnCode><ns2:ReturnText>AText</ns2:ReturnText></ns2:ServiceResult></ns2:Accounts><ns2:Accounts><ns2:GUID>100049019000002903500001</ns2:GUID><ns2:ServiceResult><ns2:ReturnCode>0</ns2:ReturnCode><ns2:ReturnText>AText</ns2:ReturnText></ns2:ServiceResult></ns2:Accounts><ns2:Accounts><ns2:GUID>100049019000002155800001</ns2:GUID><ns2:ServiceResult><ns2:ReturnCode>0</ns2:ReturnCode><ns2:ReturnText>AText</ns2:ReturnText></ns2:ServiceResult></ns2:Accounts><ns2:Accounts><ns2:GUID>100049019000001849310001</ns2:GUID><ns2:ServiceResult><ns2:ReturnCode>0</ns2:ReturnCode><ns2:ReturnText>AText</ns2:ReturnText></ns2:ServiceResult></ns2:Accounts></ns2:data></ns3:SetAccessDataResponseType>"
    },
    "JavaでUUIDを挿入": {
        "req": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><mynationCreateRequest><control><system>1</system><version>1</version><transid>31</transid><timestamp>2014-12-05T14:36:00.649+01:00</timestamp></control><data><endsu>49_2777_46_7MA1</endsu><rfs><subscriber-id>ef4af6ad-4c16-4f73-a94b-c83588311003</subscriber-id><subscription-id>288097001134702</subscription-id><keyb>0977571619A2B73FE050007F0100325E</keyb><aaa_profile_typ>Triple Play</aaa_profile_typ><sperre><kundensperre>true</kundensperre><betreibersperre>true</betreibersperre><sperre_debitorisch>true</sperre_debitorisch></sperre><service_profile><qos_profil_list><qos_profil><component_id>66e9afd8-68cd-41d3-a164-7b70c14fbf6d</component_id><qos_value>1200026</qos_value></qos_profil></qos_profil_list><feste_ipadresse><ist_statisch>false</ist_statisch></feste_ipadresse><internet_enabled>true</internet_enabled><voip_enabled>true</voip_enabled><anschlussbilanzierung>6</anschlussbilanzierung><ip_filter_id>kein</ip_filter_id><fon_aktiv>false</fon_aktiv><iptv_enabled>true</iptv_enabled></service_profile><network_profile_list><network_profile><component_id>c72b513d-c9e6-4158-bb67-bad750b5456a</component_id><anschlussvariante>Erstanbindung</anschlussvariante><line_id>DEU.DTGmbH.a277746</line_id><klsid>KLS-12460</klsid><bandbreite_max_upstream>2800</bandbreite_max_upstream><bandbreite_max_downstream>17696</bandbreite_max_downstream><bandbreite_min_upstream>832</bandbreite_min_upstream><bandbreite_min_downstream>12096</bandbreite_min_downstream><bandbreite_garantiert_downstream>12096</bandbreite_garantiert_downstream><bandbreite_garantiert_upstream>832</bandbreite_garantiert_upstream><access_port_type>ADSL2+</access_port_type><first_mile_protokoll>Ethernet</first_mile_protokoll></network_profile></network_profile_list><user_profile_list><user_profile><guid>100049019000002013700001</guid><isthauptnutzer>true</isthauptnutzer><access_credentials><auth_methods>1</auth_methods></access_credentials></user_profile></user_profile_list></rfs><rfs><keyb>1787988098DB7091234123e134713284</keyb></rfs><rfs><keyb>2347823123A2B73FE050007F9240134E</keyb></rfs></data></mynationCreateRequest>",
        "res": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><mynationCreateResponse><control><system>1</system><version>1</version><transid>$transid$</transid><timestamp>$timestamp$</timestamp></control><data><endsu>$endsu$</endsu><idont><keya>$keya$</keya><keyb>$keyb$</keyb><result>0</result></idont></data></mynationCreateResponse>"
    },
    "GetLineId": {
        "req": "<RequestGetLineId><Control><TransactionId>000000010000</TransactionId><Timestamp>2015-05-13T09:14:00.252Z</Timestamp></Control><PoolSize>2</PoolSize></RequestGetLineId>",
        "res": "<ResponseGetLineId><Control><TransactionId>$TransactionId$</TransactionId><Timestamp>$Timestamp$</Timestamp></Control><Success>true</Success><LineIdPool><LineId>DEU.DTGmbH.A277740</LineId><LineId>DEU.DTGmbH.B277740</LineId></LineIdPool></ResponseGetLineId>"
    },
    "MT_EQDATA": {
        "req": "<ns3:MT_EQDATA_REQ xmlns:ns1=\"http://messaging.ei.smobile.net/datatypes\" xmlns:ns3=\"http://komlefom.de/xi/NGERP_EXTD_PSL_INT/global/WMS/Equipment/Read\"><eiMessageContext><ns1:sender>GNB_MIG</ns1:sender><ns1:correlationId>a2b97fa3420341f5b888</ns1:correlationId></eiMessageContext><data><MT_EQDATA_REQ><KOPF><PARTNER>BS_mixtool</PARTNER><ANFO_KEN>a2b97fa3420341f5b888</ANFO_KEN></KOPF><EQUI><SORTIERFELD>49/2777/40/7MA1</SORTIERFELD></EQUI></MT_EQDATA_REQ></data></ns3:MT_EQDATA_REQ>",
        "res": "<ns3:MT_EQDATA_RESPV2 xmlns:ns1=\"http://messaging.ei.smobile.net/datatypes\" xmlns:ns3=\"http://komlefom.de/xi/NGERP_EXTD_PSL_INT/global/WMS/Equipment/Read/V2\"><eiMessageContext><ns1:correlationId>$CORRELATIONID$</ns1:correlationId></eiMessageContext><data><MT_EQDATA_RESPV2><KOPF><PARTNER>BS_mixtool</PARTNER><ANFO_KEN>ID_Consumer_1</ANFO_KEN></KOPF><EQUI><EQUNR>202777400000123456</EQUNR><TPLNR>000251-277740-001-002-003-004</TPLNR><SUBMT>40244440</SUBMT><KTEXT_MAT>MSAN</KTEXT_MAT><ANSDAT>20131106</ANSDAT><ENDSU>49/2777/40/7MA1</ENDSU><AKTION>Umba</AKTION><DIENSTEKENNUNG>DK</DIENSTEKENNUNG><PLANUNGSGERAETENAME>PLANUNGSGERAETENAME</PLANUNGSGERAETENAME><VPSZ>49/2777/40</VPSZ><STAR_ID>1277740</STAR_ID><ADR_ID>12777401</ADR_ID><NKZ>931</NKZ><VPZ>70</VPZ><GEBA>1</GEBA><RAUM>2</RAUM><REIHE>3</REIHE><PLATZ>4</PLATZ><ASB>2</ASB><KVZ>343</KVZ><S_PKT>33</S_PKT><IWERK>DE01</IWERK><INGRP>A12</INGRP><FLTYP>T</FLTYP><AUFNR>32</AUFNR><KTEXT_SM>Test-Auftrag1</KTEXT_SM></EQUI><EQUI><EQUNR>202777401000123456</EQUNR><TPLNR>000251-277740-101-002-003-004</TPLNR><HEQUI>202777400000123456</HEQUI><HEQNR>1</HEQNR><SUBMT>40247125</SUBMT><KTEXT_MAT>Linecard</KTEXT_MAT><ANSDAT>20131106</ANSDAT><AWSTAT>Neu</AWSTAT><AKTION>Umba</AKTION><DIENSTEKENNUNG>DK</DIENSTEKENNUNG><PLANUNGSGERAETENAME>PLANUNGSGERAETENAMELC</PLANUNGSGERAETENAME><VPSZ>49/2777/40</VPSZ><STAR_ID>2277740</STAR_ID><ADR_ID>32777403</ADR_ID><NKZ>931</NKZ><VPZ>70</VPZ><GEBA>1</GEBA><RAUM>2</RAUM><REIHE>3</REIHE><PLATZ>4</PLATZ><ASB>2</ASB><KVZ>343</KVZ><S_PKT>33</S_PKT><IWERK>DE01</IWERK><INGRP>A12</INGRP><FLTYP>T</FLTYP><AUFNR>32</AUFNR><KTEXT_SM>Test-Auftrag2</KTEXT_SM></EQUI><STATUS><TYPE>S</TYPE><NUMBER>1</NUMBER><MESSAGE>Success</MESSAGE></STATUS></MT_EQDATA_RESPV2></data></ns3:MT_EQDATA_RESPV2>"
    },
    "ProduktinstanzdatenExportieren": {
        "req": "<ns2:ProduktinstanzdatenExportierenRequest xmlns=\"http://www.komlefom.de/proxlef/mixtool/basetypes\" xmlns:ns2=\"http://www.komlefom.de/proxlef/mixtool\"><messageCorrelationId>429dd4c1-0404-4512-894c-c838ca6c2ebc</messageCorrelationId><ns2:endsuAN>49/2777/40/7MA1</ns2:endsuAN></ns2:ProduktinstanzdatenExportierenRequest>",
        "res": "<ns2:ProduktinstanzdatenExportierenCallback xmlns=\"http://www.komlefom.de/proxlef/mixtool/basetypes\" xmlns:ns2=\"http://www.komlefom.de/proxlef/mixtool\"><messageCorrelationId>$CORRELATIONID$</messageCorrelationId><ns2:Daten><endsuAN>49/2777/40/7MA1</endsuAN><dslLinecard><Slotnummer_abs>101</Slotnummer_abs><Slotnummer_rel>1</Slotnummer_rel><dslPort><portnummer>1</portnummer><ProjektInstanzID>101750362060000000054927774001</ProjektInstanzID><produkt_status>in_betrieb</produkt_status><physAccessID>101750362060000000054927774001</physAccessID><bb_anschluss><bb_up_min>364</bb_up_min><bb_up_max>10048</bb_up_max><bb_down_min>716</bb_down_min><bb_down_max>51392</bb_down_max></bb_anschluss><bb_service><bb_up_min>2784</bb_up_min><bb_up_max>10048</bb_up_max><bb_down_min>27968</bb_down_min><bb_down_max>51392</bb_down_max></bb_service><bb_up_g>2784</bb_up_g><bb_down_g>27968</bb_down_g><kls_id>596011</kls_id><apn>0001</apn><zuordnung>Wholesale</zuordnung><lsz>910</lsz><leitungskey>1401</leitungskey><asb>2777</asb><iptv>true</iptv><ueVerfahren>VDSL-V</ueVerfahren><esel>111</esel><eselMin>111</eselMin><eselMus>-111.5</eselMus></dslPort><dslPort><portnummer>2</portnummer><ProjektInstanzID>101750362060000000054927774002</ProjektInstanzID><produkt_status>in_betrieb</produkt_status><physAccessID>101750362060000000054927774002</physAccessID><bb_anschluss><bb_up_min>364</bb_up_min><bb_up_max>10048</bb_up_max><bb_down_min>716</bb_down_min><bb_down_max>51392</bb_down_max></bb_anschluss><bb_service><bb_up_min>2784</bb_up_min><bb_up_max>10048</bb_up_max><bb_down_min>27968</bb_down_min><bb_down_max>51392</bb_down_max></bb_service><bb_up_g>2784</bb_up_g><bb_down_g>27968</bb_down_g><kls_id>596011</kls_id><apn>0001</apn><zuordnung>Wholesale</zuordnung><lsz>910</lsz><leitungskey>1402</leitungskey><asb>2777</asb><iptv>true</iptv><ueVerfahren>VDSL-V</ueVerfahren><esel>343</esel><eselMin>343</eselMin><eselMus>-122.5</eselMus></dslPort></dslLinecard></ns2:Daten></ns2:ProduktinstanzdatenExportierenCallback>"
    },
    "configureRequest": {
        "req": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><ns5:configureRequest xmlns=\"http://www.tmforum.org/mtop/fmw/xsd/cosd/v1\" xmlns:ns2=\"http://www.tmforum.org/mtop/fmw/xsd/gen/v1\" xmlns:ns3=\"http://www.tmforum.org/mtop/nrb/xsd/crmd/v1\" xmlns:ns4=\"http://www.tmforum.org/mtop/fmw/xsd/nam/v1\" xmlns:ns5=\"http://www.ericsson.com/mtop/cm/xsd/cc/v1-0\" xmlns:ns6=\"http://www.tmforum.org/mtop/fmw/xsd/hdr/v1\" xmlns:ns7=\"http://www.tmforum.org/mtop/fmw/xsd/msg/v1\" xmlns:ns8=\"http://www.tmforum.org/mtop/fmw/xsd/comd/v1\"><ns5:configureData><vendorExtensions><ns2:nvsList><ns2:nvs><ns2:name>ARG_Fail_Script</ns2:name><ns2:value/></ns2:nvs><ns2:nvs><ns2:name>ARG_Script</ns2:name><ns2:value>-endsuAN 49_2777_46_7MA1 -vendor ADTRAN -typAN MSAN -kennerAnnexB n -shdslLC n -dualhomed n  -line_1 1;1;DEU.DTGmbH.a277746;9;1</ns2:value></ns2:nvs></ns2:nvsList></vendorExtensions><ns5:script>GNB2a_Mynation_AN.xml</ns5:script><ns5:action>Execution</ns5:action></ns5:configureData></ns5:configureRequest>",
        "res": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><ns2:configureResponse xmlns:ns2=\"http://www.ericsson.com/mtop/cm/xsd/cc/v1-0\"  xmlns=\"http://www.tmforum.org/mtop/fmw/xsd/gen/v1\"  xmlns:ns4=\"http://www.tmforum.org/mtop/fmw/xsd/msg/v1\"  xmlns:ns3=\"http://www.tmforum.org/mtop/fmw/xsd/hdr/v1\"  xmlns:ns5=\"http://www.tmforum.org/mtop/fmw/xsd/cosd/v1\"  xmlns:ns6=\"http://www.tmforum.org/mtop/nrb/xsd/crmd/v1\"  xmlns:ns7=\"http://www.tmforum.org/mtop/fmw/xsd/nam/v1\"  xmlns:ns8=\"http://www.tmforum.org/mtop/fmw/xsd/comd/v1\"><ns2:vendorExtensions><nvsList><nvs><name>ARG_Script</name><value>Script : file:///opt/marconi/soi-scriptserver-utils/scripts/GNBMynation.ksh Arguments : $Request ARG_Script value$ Gefundene Values: $Gefundene Values$  =START-OSIC-ADTRAN-SCRIPT==================================================================================== REST= ANZAHL_CUSTOMER_CONFIGS=1080 =ZUSAMMENFASSUNG-OSIC-ADTRAN-SCRIPT==================================================================================== AnzSynchronisierterPortsVorMig=782;AnzSynchronisierterPortsNachMig=775;AnzPPPoESessionNachMig=781;AnzDHCPSessionsVorMig=50;AnzDHCPSessionsNachMig=5;AnzCustomerConfigsInRequest=2; =ENDE-OSIC-ADTRAN-SCRIPT==================================================================================== End time : Tue Dec 02 18:48:10 EET 2014</value></nvs></nvsList></ns2:vendorExtensions></ns2:configureResponse>"
    }
}