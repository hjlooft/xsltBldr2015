var xslt_divify_str = '<?xml version="1.0"?>\
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\
	<xsl:output method="html"/>\
	<xsl:param name="class">tagBox</xsl:param>\
	<xsl:template match="/">\
		<xsl:copy>\
			<xsl:apply-templates select="*"/>\
		</xsl:copy>\
	</xsl:template>\
	<xsl:template match="node()">\
		<xsl:if test="name()">\
			<div class="{$class}" draggable="true">\
				<xsl:if test="not(*)">\
					<xsl:attribute name="title">\
						<xsl:value-of select="."/>\
					</xsl:attribute>\
				</xsl:if>\
				<xsl:copy-of select="@id"/>\
				<xsl:value-of select="name()"/>\
				<xsl:apply-templates select="@*[name()!=\'id\']"/>\
				<xsl:apply-templates select="node()"/>\
			</div>\
		</xsl:if>\
	</xsl:template>\
		<xsl:template match="@*[name()!=\'id\']">\
		<div class="atr" id="{concat(../@id,\'@\',name())}" draggable="true">\
				<xsl:if test="not(*)">\
					<xsl:attribute name="title">\
						<xsl:value-of select="."/>\
					</xsl:attribute>\
				</xsl:if>\
			<xsl:text>@</xsl:text><xsl:value-of select="name()"/>\
		</div>\
	</xsl:template>\
</xsl:stylesheet>';

var xslt_addid_str = '<?xml version="1.0"?>\
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\
	<xsl:strip-space elements="*"/>\
	<xsl:param name="filterOnOff" select="\'on\'"/>\
	<xsl:template match="/">\
		<xsl:copy>\
			<xsl:apply-templates select="node()|@*"/>\
		</xsl:copy>\
	</xsl:template>\
	<xsl:template match="node()">\
		<xsl:if test="(name(.) and not(preceding-sibling::*[name()=name(current())])) or $filterOnOff=\'off\'">\
			<xsl:copy>\
				<xsl:attribute name="id">\
					<xsl:value-of select="generate-id()"/>\
				</xsl:attribute>\
				<xsl:if test="$filterOnOff=\'on\'">\
				<xsl:value-of select="text()"/>\
				</xsl:if>\
				<xsl:apply-templates select="node()|@*"/>\
			</xsl:copy>\
		</xsl:if>\
	</xsl:template>\
	<xsl:template match="@*">\
		<xsl:copy>\
			<xsl:apply-templates select="node()|@*"/>\
		</xsl:copy>\
	</xsl:template>\
</xsl:stylesheet>';

var xslt_prettify_str_ff = '<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:output method="xml" indent="yes"/><xsl:param name="noFilter"/><xsl:param name="indent-increment" select="\'   \'" /><xsl:template match="*"><xsl:param name="indent" select="\'&#xA;\'"/><xsl:value-of select="$indent"/><xsl:copy><xsl:choose><xsl:when test="$noFilter=\'false\'"><xsl:copy-of select="@*[name()!=\'id\' and name()!=\'fakeDocFn\' and name()!=\'gl_param\']" /></xsl:when><xsl:when test="$noFilter=\'true\'"><xsl:copy-of select="@*"/></xsl:when></xsl:choose><xsl:apply-templates><xsl:with-param name="indent" select="concat($indent, $indent-increment)"/></xsl:apply-templates><xsl:if test="*"><xsl:value-of select="$indent"/></xsl:if></xsl:copy></xsl:template><xsl:template match="comment()|processing-instruction()"><xsl:copy /></xsl:template><!-- WARNING: this is dangerous. Handle with care --><xsl:template match="text()[normalize-space(.)=\'\']"/></xsl:stylesheet>';

var xslt_prettify_str = '<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:output method="xml" indent="yes"/><xsl:strip-space elements="*"/><xsl:param name="noFilter"/><xsl:template match="node()|@*"><xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy></xsl:template><xsl:template match="@id|@fakeDocFn|@gl_param"><xsl:if test="$noFilter=\'true\'"><xsl:copy-of select="."/></xsl:if></xsl:template></xsl:stylesheet>';

var xslt_templ_divider_str = '<?xml version="1.0"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:output method="xml"/><xsl:template match="node()|@*"><xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy></xsl:template><xsl:template match="xsl:template"><xsl:text>&#10;  </xsl:text><xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>	</xsl:template></xsl:stylesheet>';

var xslt_addid = parser.parseFromString(xslt_addid_str,"text/xml");
var xslt_divify = parser.parseFromString(xslt_divify_str,"text/xml");
var xslt_prettify;
if(navigator.userAgent.indexOf("Firefox")==-1){
	xslt_prettify = parser.parseFromString(xslt_prettify_str,"text/xml");	
}else{
	xslt_prettify = parser.parseFromString(xslt_prettify_str_ff,"text/xml");
}
var xslt_templ_divider = parser.parseFromString(xslt_templ_divider_str,"text/xml");


var proc_addid = new XSLTProcessor();
var proc_divify = new  XSLTProcessor();
var proc_prettify = new  XSLTProcessor();
var proc_templ_divider = new XSLTProcessor();
proc_addid.importStylesheet(xslt_addid);
proc_divify.importStylesheet(xslt_divify);
proc_prettify.importStylesheet(xslt_prettify);
proc_templ_divider.importStylesheet(xslt_templ_divider);