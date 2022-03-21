import React from 'react'

const HTML = `<table style="width: 1002px; border-collapse: collapse; margin-left: -1.7pt; border-image: none;" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr style="height: 16.5pt;">
<td style="background: #fabf8f; padding: 0cm 5.4pt; border: 1pt solid windowtext; width: 269.35pt; height: 16.5pt;" colspan="2" valign="top" width="359">
<p style="margin: 6pt 0cm; text-align: center; line-height: normal;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;">Italy</span></strong></p>
</td>
<td style="background: #fabf8f; border-width: 1pt 1pt 1pt medium; border-style: solid solid solid none; border-color: windowtext windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt; height: 16.5pt;" rowspan="2" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;"> </span></strong></p>
<p style="margin: 6pt 0cm 0pt; text-align: center; line-height: normal;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;">Malta</span></strong></p>
</td>
<td style="background: #fabf8f; border-width: 1pt 1pt 1pt medium; border-style: solid solid solid none; border-color: windowtext windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm; height: 16.5pt;" rowspan="2" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;"> </span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 8pt;">Tunisia, Libya, Accidents, SAR, </span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 8pt;">Migrant Smuggling, Repatriation</span></strong></p>
</td>
<td style="background: #fabf8f; border-width: 1pt 1pt 1pt medium; border-style: solid solid solid none; border-color: windowtext windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt; height: 16.5pt;" rowspan="2" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;"> </span></strong></p>
<p style="margin: 6pt 0cm 0pt; text-align: center; line-height: normal;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;">Diplomacy, Politics, Law</span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;"> </span></strong></p>
</td>
</tr>
<tr style="height: 16.45pt;">
<td style="background: #fabf8f; border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt; height: 16.45pt;" valign="top" width="161">
<p style="margin: 6pt 0cm; text-align: center; line-height: normal;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;">Lampedusa</span></strong></p>
</td>
<td style="background: #fabf8f; border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt; height: 16.45pt;" valign="top" width="198">
<p style="margin: 6pt 0cm; text-align: center; line-height: normal;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;">Italy South</span></strong></p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><strong><span style="font-size: 8pt;">2013 month:        777</span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><strong><span style="font-size: 8pt;">2013 cumul.:  12'045</span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><span style="font-size: 8pt;">2012 month:         715</span></p>
<p style="line-height: normal; margin-bottom: 0pt;"><span style="font-size: 8pt;">2012 cumul.:      4'172</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:     1'059</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:  21'093</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   month:       459</span></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:    5'646</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:   1'993</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   month:       323</span></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:    1'891</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Victims</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:         0</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:     765</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><span style="font-size: 8pt;">2012   month:       15</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:     307</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Total Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong><span style="font-size: 8pt;">month:     1'836</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong><span style="font-size: 8pt;">cumul.:  35'131</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong></strong><span style="font-size: 8pt;">Tunisia:         88</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><span style="font-size: 8pt;">Libya:       1'698</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><span style="font-size: 8pt;">other:           50</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <span style="font-size: 8pt;">370 migrants resecued by two naval ships near Lampedusa  <a href="http://palermo.repubblica.it/cronaca/2013/11/29/news/sbarchi_soccorsi_370_migranti_due_navi_della_marina_in_azione-72248650/?ref=search"><span style="color: #0000ff;">Rep 30.11.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Navy reinforces 'Canale di Sicilia' presence</span> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span> <span style="font-size: 8pt;"><a href="http://www.agrigentoflash.it/2013/11/20/lampedusa-soccorsi-in-mare-arrivano-i-rinforzi/"><span style="color: #0000ff;">AF 20.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Trapani</span> (Sicily): Arrival of 76 North Africans rescued in a com-bined operation by GC and navy</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-family: arial,helvetica,sans-serif; font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/11/29/foto/marettimo_intercettati_50_migranti-72305518/1/?ref=search#1"><span style="color: #0000ff;">Rep 29.11</span>.</a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-size: 8pt;">Winter in southern Italy</span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p> </p>
<p> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Libyan coastguard stops tree boats with 300 West Africans from leaving; boats registered in Malta</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">   <a href="http://www.timesofmalta.com/articles/view/20131129/local/libyas-coastguard-picks-up-almost-300-african-migrants.496840#.UpmfTrl3vmI"><span style="color: #0000ff;">ToM 29.11.</span></a> / </span><span style="color: #0000ff; font-family: arial,helvetica,sans-serif; font-size: 8pt;"><a href="http://www.libyaherald.com/2013/11/29/navy-picks-up-300-more-asylum-seekers/#axzz2m7CseiKe"><span style="color: #0000ff;">LH 29.11.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="color: #3366ff;"><span style="font-size: 8pt; font-family: arial,helvetica,sans-serif;"> </span><span style="font-size: 8pt; font-family: arial,helvetica,sans-serif; color: #0000ff;"><a href="http://www.timesofmalta.com/articles/view/20131208/local/No-Maltese-boats-in-Libya-incident.498016#.UqRdwN-A0eE"><span style="color: #0000ff;">ToM 8.12.</span></a></span></span><br /><span style="color: #0000ff;">  </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  <span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">EUBAM trains Libyan coast guard in search and rescue techniques</span> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.libyaherald.com/2013/11/21/safety-at-sea-training-boosts-coastguard-skills/#axzz2lOFOaexP"><span style="color: #0000ff;">LH 21.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">EUROSUR to start operation on 2 December   <a href="http://europa.eu/rapid/press-release_IP-13-1182_en.htm"><span style="color: #0000ff;">EUCOM 29.11.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">European Council declaration on Mo-bility Partnership with Tunisia; 'Sea-horse Mediterraneo' mentioned</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  </span><span style="color: #0000ff;"><span style="font-size: 8pt;"><a href="http://ffm-online.org/wp-content/uploads/2013/12/tun-EU-mob-partnersch-2013-11-entw.pdf"><span style="color: #0000ff;">EUCL 25.11.</span></a></span> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Meeting of the EU's 'Mediterranean Task Force'  <a href="http://www.bruxelles2.eu/securite/frontieres/la-lutte-contre-limmigration-devient-un-sujet-europeen.html"><span style="color: #0000ff;">B2 21.11.</span></a></span> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center;"><span style="font-size: 8pt;">Publication of EEAS paper on external relations perspective of migration flow in the Mediterranean  </span><a href="http://register.consilium.europa.eu/pdf/en/13/st16/st16394.en13.pdf"><span style="color: #0000ff; font-size: 8pt;">EUCL 19.11.</span></a></p>
<p style="text-align: center;"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> According to Italian government 35'085 maritime migrants arrived by mid-October  </span><a href="http://ffm-online.org/2013/11/19/italien-statistik-boat-people-vor-allem-syrische-und-eritreische-fluechtlinge/"><span style="color: #0000ff;">FFM 19.11.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">GC rescues 61 sSAfricans 60 NM south of island</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/lampedusa-61-migranti-alla-deriva-soccorsi-dalla-guardia-costiera/221757/"><span style="color: #0000ff;">BS 17.11.</span></a> / </span><span style="color: #0000ff; font-size: 8pt;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/lampedusa-soccorso-gommone-alla-deriva-tutti-salvi/146964/145481?ref=search"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-size: 8pt;">Heavy storms</span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Catania</span> (Sicily): Navy intercepts 176 Syrians and</span><span style="font-size: 8pt;"> arrests 16 migrant smugglers </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://siracusa.blogsicilia.it/salvati-176-migranti-a-capo-passero-la-nave-madre-e-affondata/220305/"><span style="color: #0000ff;">BS 10.11.</span></a> / <span style="color: #0000ff;"><a href="http://palermo.repubblica.it/cronaca/2013/11/10/news/blitz_della_marina_con_sommergibile_arrestati_16_scafisti_al_largo_di_siracusa-70685269/"><span style="color: #0000ff;">Rep 10.11.</span></a> </span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/11/11/Immigrazione-Catania-scafisti-fermati_9599793.html"><span style="color: #0000ff;">ANSA 11.11.</span></a> / </span><a href="http://www.libyaherald.com/2013/11/10/italian-navy-arrests-suspected-people-smugglers-at-sea/#axzz2k5jY1UoQ"><span style="color: #0000ff;">LH 10.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://catania.blogsicilia.it/la-san-marco-porta-a-catania-le-speranze-di-176-migranti/220374/"><span style="color: #0000ff;">BS 12.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p> </p>
<p>  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">The EU Foreign Affairs Council discusses Libyan situation and issues eight-point statement  <a href="http://www.consilium.europa.eu/uedocs/cms_data/docs/pressdata/EN/foraff/139632.pdf"><span style="color: #0000ff;">EUCL 18.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">EU Ombudsman calls on FRONTEX to deal with complaints about funda-mental rights infringements, including on 'push-back'   </span><span style="font-size: 8pt;"><a href="http://www.ombudsman.europa.eu/showResource?resourceId=1384417749904_press_release_2013_17_EN.pdf&amp;type=pdf&amp;download=true&amp;lang=en"><span style="color: #0000ff;">EUOmb 14.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="margin-bottom: 0pt; text-align: center; line-height: normal;" align="center"><span style="font-size: 8pt;">Union for the Mediterranean to hold meeting on migration in Italy during second part of 2014 <a href="http://www.ansamed.info/ansamed/it/notizie/rubriche/enpi/2013/11/13/Immigrazione-fonti-Ue-Italia-summit-Euromed-2014_9612180.html"><span style="color: #0000ff;">EuroMed 13.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">UNHCR statement about alleged</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">FRONTEX push-back practices</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <span style="color: #0000ff;"><a href="http://ffm-online.org/2013/11/14/unhcr-statement-zu-frontex-push-backs-www-unhcr-gr/"><span style="color: #0000ff;">UNHCR 12.11.</span></a></span> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Enrico Letta visits Malta; he and PM Muscat do not want to see a failed Libyan state and ask EU to assist in removal of failed asylum seekers</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  </span><span style="font-size: 8pt;"><a href="http://www.maltatoday.com.mt/en/newsdetails/news/national/Italian-prime-minister-Letta-in-Malta-to-hold-bilateral-talks-20131111"><span style="color: #0000ff;">MT 11.11.</span></a> </span>  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p> </p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;">750 migrants at Reception Center  <a href="http://www.agrigentoflash.it/2013/11/05/lampedusa-trasferiti-50-migranti-750-ospiti-del-centro-daccoglienza/"><span style="color: #0000ff;">AF 4.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;">GC rescues 29 Syrians south of island </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/11/03/Soccorsi-29-migranti-piccola-barca_9562227.html"><span style="color: #0000ff;">ANSA 3.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">In rough seas navy rescues two boats with 317 mi-grants </span><span style="font-size: 8pt;">aboard </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span><a href="http://www.agrigentoflash.it/2013/11/02/immigrazione-lampedusa-due-interventi-di-soccorso-salvati-3-neonati/"><span style="color: #0000ff; font-size: 8pt;">AF 2.11.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">According to Italian Defense Minister 1'800 migrants have so far been rescued under 'Mare Nostrum'  <a href="http://www.agrigentoflash.it/2013/11/09/lampedusa-operazione-mare-nostrum-gia-salvati-1-800-migranti/"><span style="color: #0000ff;">AF 9.11.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Navy and GC rescue 545 migrants and take them to different ports  <a href="http://www.agrigentoflash.it/2013/11/04/lampedusa-nuova-ondata-di-sbarchi-salvati-in-mare-oltre-500-migranti/"><span style="color: #0000ff;">AF 4.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <span style="color: #000000;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/11/04/Immigrazione-12-sbarcano-Favignana_9566467.html"><span style="color: #000000;">Trapani</span></a></span> (Sicily): 12 migrants stopped after surprise landing</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/11/04/Immigrazione-12-sbarcano-Favignana_9566467.html"><span style="color: #0000ff;">ANSA 4.11.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Navy rescues 200 migrants and takes them to Sicilian port</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/continuano-gli-sbarchi-200-migranti-soccorsi-nel-canale-sicilia/218737/"><span style="color: #0000ff;">BS 3.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Lecce</span> (Apulia): GdF arrest two migrant smugglers trying to escape on a rubber dingy after unloading 50 Pakistanis</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  <a href="http://www.ansa.it/web/notizie/regioni/puglia/2013/11/02/Sbarco-migranti-catturati-due-scafisti_9557247.html"><span style="color: #0000ff;">ANSA 2.11.</span></a> / <a href="http://video.repubblica.it/edizione/bari/bloccato-gommone-a-bordo-cinquanta-migranti/145337/143862?ref=search"><span style="color: #0000ff;">video Rep</span></a> !</span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Seven migrants rescued by AFM on 29 October to be reunited with their families in Sicily  <a href="http://www.maltatoday.com.mt/en/newsdetails/news/national/Malta-Italy-to-reunite-seven-migrants-with-relatives-20131106"><span style="color: #0000ff;">MT 6.11.</span></a></span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Arrest of Somali accused of orga-nizing 3 October voyage with 366 casualties <a href="http://palermo.repubblica.it/cronaca/2013/11/08/news/uno_degli_organizzatori_del_viaggio_finito_in_tragedia_individuato_fra_i_migranti_del_centro_di_lampedusa-70483718/"><span style="color: #0000ff;">Rep 9.11.</span></a>, <a href="http://video.repubblica.it/dossier/lampedusa-strage-di-migranti/strage-lampedusa-arrestato-somalo-organizzo-la-traversata/145896/144416?ref=search"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">According to Syrian physician who survived 11 October tragedy 268 migrants died  <a href="http://espresso.repubblica.it/inchieste/2013/11/07/news/la-verita-sul-naufragio-di-lampedusa-quella-strage-si-poteva-evitare-1.140363"><span style="color: #0000ff;">L'Espresso 8.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;">Malta regularly participates in FRONTEX organized repatriation flights to sSAfrica  <a href="http://www.timesofmalta.com/articles/view/20131105/local/Malta-already-taking-part-in-Frontex-return-flights.493315#.UnkS9ttbDmJ"><span style="color: #0000ff;">ToM 5.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Italy to start aerial and electronic</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">border surveillance in Libya to control irregular migration  <a href="http://www.libyaherald.com/2013/11/03/italy-to-commence-aerial-and-electronic-border-surveillance-zeidan/#axzz2jZkGWv9M"><span style="color: #0000ff;">LH 3.11.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">AFM crew participate in Greek</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">FRONTEX operation  </span><a href="http://www.timesofmalta.com/articles/view/20131101/local/afm-in.492887#.UnS0l9tbDmI"><span style="color: #0000ff; font-size: 8pt;">ToM 1.11.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">EUBAM praises Libyan coastguard for rescuing 150 migrants stranded on a rubber dinghy  <a href="http://www.libyaherald.com/2013/11/01/eu-border-assistance-mission-praises-coastguard-for-rescuing-150-migrants/#axzz2jOuoCBYL"><span style="color: #0000ff;">LH 1.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Western allies express concern about stability in Libya <a href="http://www.libyaherald.com/2013/11/08/western-allies-express-concern-about-stability-in-libya/#axzz2k5jY1UoQ"><span style="color: #0000ff;">LH 8.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">UN Special Rapporteur on human rights situation in Eritrea on official visit to Tunisia and Malta  <span style="color: #0000ff;"><a href="http://www.maltatoday.com.mt/en/newsdetails/news/national/UN-expert-to-meet-Eritrean-refugees-in-Tunisia-and-Malta-20131107"><span style="color: #0000ff;">MT 7.11.</span></a> </span></span></p>
</td>
</tr>
</tbody>
</table>`

const mevent = () => <div dangerouslySetInnerHTML={{ __html: HTML }} />

export default mevent
