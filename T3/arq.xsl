<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="/">
        <xsl:result-document href="site/index.html">
            <html>
                <head>
                    <title>Arquiossítios</title>
                </head>
                <body>
                    <h2>Arquiossítios</h2>
                    <h3>Índice de Arquiossítios</h3>
                    <ol>
                        <xsl:apply-templates select="//ARQELEM" mode="indice">
                            <xsl:sort select="IDENTI"/>
                        </xsl:apply-templates>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    
    <!-- Templates para o índice -->
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="i{generate-id()}"/>
            <a href="{generate-id()}.html">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>
    
    
    <!-- Templates para o conteúdo -->
    <xsl:template match="ARQELEM">
        <xsl:result-document href="site/{generate-id()}.html">
            <html>
                <head>
                    <title><xsl:value-of select="IDENTI"/></title>
                </head>
                <body>
                    <h1><xsl:value-of select="IDENTI"/></h1>
                    <table width="100%">
                        <xsl:choose>
                            <xsl:when test="TIPO/@ASSUNTO">
                                <tr>
                                    <th width="10%"><b>Tipo: </b></th>
                                    <td><xsl:value-of select="TIPO/@ASSUNTO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="DESCRI">
                                <tr>
                                    <th width="10%"><b>Descrição: </b></th>
                                    <td><xsl:value-of select="DESCRI"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="CRONO">
                                <tr>
                                    <th width="10%"><b>Cronologia:</b></th>
                                    <td><xsl:value-of select="CRONO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        
                        <xsl:choose>
                            <xsl:when test="LUGAR">
                                <tr>
                                    <th width="10%"><b>Lugar: </b></th>
                                    <td><xsl:value-of select="LUGAR"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="FREGUE">
                                <tr>
                                    <th width="10%"><b>Freguesia: </b></th>
                                    <td><xsl:value-of select="FREGUE"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="CONCEL">
                                <tr>
                                    <th width="10%"><b>Concelho: </b></th>
                                    <td><xsl:value-of select="CONCEL"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="CODADM">
                                <tr>
                                    <th width="10%"><b>Código: </b></th>
                                    <td><xsl:value-of select="CODADM"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="LATITU">
                                <tr>
                                    <th width="10%"><b>Latitude: </b></th>
                                    <td><xsl:value-of select="LATITU"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="LONGIT">
                                <tr>
                                    <th width="10%"><b>Longitude: </b></th>
                                    <td><xsl:value-of select="LONGIT"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="ALTITU">
                                <tr>
                                    <th width="10%"><b>Altitude: </b></th>
                                    <td><xsl:value-of select="ALTITU"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="ACESSO">
                                <tr>
                                    <th width="10%"><b>Acesso: </b></th>
                                    <td><xsl:value-of select="ACESSO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="QUADRO">
                                <tr>
                                    <th width="10%"><b>Quadro: </b></th>
                                    <td><xsl:value-of select="QUADRO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="DESARQ">
                                <tr>
                                    <th width="10%"><b>Desarq: </b></th>
                                    <td><xsl:value-of select="DESARQ"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="INTERP">
                                <tr>
                                    <th width="10%"><b>Interp: </b></th>
                                    <td><xsl:value-of select="INTERP"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="DEPOSI">
                                <tr>
                                    <th width="10%"><b>Deposi: </b></th>
                                    <td><xsl:value-of select="DEPOSI"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="BIBLIO">
                                <tr>
                                    <th width="10%"><b>Biblio: </b></th>
                                    <td><xsl:value-of select="BIBLIO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="AUTOR">
                                <tr>
                                    <th width="10%"><b>Autor: </b></th>
                                    <td><xsl:value-of select="AUTOR"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="DATA">
                                <tr>
                                    <th width="10%"><b>Data: </b></th>
                                    <td><xsl:value-of select="DATA"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                    </table>
                    <address>
                        [<a href="index.html#i{generate-id()}">Voltar ao início</a>]
                    </address> 
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
</xsl:stylesheet>