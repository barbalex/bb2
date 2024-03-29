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
<p style="margin: 6pt 0cm 0pt; text-align: center; line-height: normal;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 9pt;">Diplomacy, Politics, Law</span></strong></p>
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
<p style="line-height: normal; margin-bottom: 0pt;"><strong><span style="font-size: 8pt;">2013 month:       861</span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><strong><span style="font-size: 8pt;">2013 cumul.:  12'906</span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><span style="font-size: 8pt;">2012 month:         450</span></p>
<p style="line-height: normal; margin-bottom: 0pt;"><span style="font-size: 8pt;">2012 cumul.:      4'622</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:     2'001</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:  23'094</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   month:        176</span></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:     5'822</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:   1'993</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   month:       -</span></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:    1'891</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Victims</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:         1     </span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:     766</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><span style="font-size: 8pt;">2012   month:         2</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:     309</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Total Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:     2'862</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:  37'993</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong></strong><span style="font-size: 8pt;">2013 Tunisia:        352</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><span style="font-size: 8pt;">2013 Libya:      28'334</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><span style="font-size: 8pt;">2013 Other:       9'307</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><span style="font-size: 8pt;">Reports about Italian navy having rescued 200 mi-grants south of Lampe-dusa  <a href="http://www.maltatoday.com.mt/en/newsdetails/news/world/Italian-navy-rescues-200-migrants-20131218"><span style="color: #0000ff;">MT 18.12.</span></a></span></p>
<p style="text-align: center;"><span style="font-size: 8pt;"> <a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/lampedusa-gommone-alla-deriva-soccorsi-100-migranti/150629/149135?ref=search"><span style="color: #0000ff;">Rep video</span></a> !!!</span></p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><span style="font-size: 8pt;">Navy rescues 110 West Africans travelling on a rubber dinghy; <strong>one person found dead</strong></span></p>
<p style="text-align: center;"><span style="font-size: 8pt;"><strong> </strong></span><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/17/Immigrazione-gommone-sud-Lampedusa_9793304.html"><span style="color: #0000ff;">ANSA 17.12.</span></a> </span></span></p>
<p style="text-align: center;"><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/lampedusa-soccorso-un-gommone-con-cento-migranti-a-bordo/150456/148963?ref=search"><span style="color: #0000ff;">video Rep</span></a> / </span></span><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/17/Migrante-morto-barca-sud-Lampedusa_9794670.html"><span style="font-size: 8pt; color: #0000ff;">ANSA 17.12.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Two naval ships rescue 226 migrants 100 NM south of island; some West Africans; by 15 De-</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">cember </span><span style="font-size: 8pt;">a total of 351 arrivals reported</span> </p>
<p align="center"><span style="color: #0000ff; font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/sbarchi-in-sicilia-anche-in-inverno-220-migranti-verso-lampedusa/227529/"><span style="color: #0000ff;">BS 14.12.</span></a> / <span style="color: #0000ff; font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/15/Giunti-Lampedusa-76-migranti-soccorsi_9781243.html"><span style="color: #0000ff;">ANSA 15.2.</span></a> </span></span><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://agrigento.blogsicilia.it/sbarcati-a-lampedusa-76-migranti-soccorsi-ieri-nel-canale-di-sicilia/227545/"><span style="color: #0000ff;">BS 15.12.</span></a> </span> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: left;"> </p>
<p style="margin-bottom: 0pt; text-align: center; line-height: normal;" align="center"> </p>
<p style="margin-bottom: 0pt; text-align: center; line-height: normal;" align="center"> </p>
<p style="margin-bottom: 0pt; text-align: center; line-height: normal;" align="center"> </p>
<p style="text-align: center;"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Otranto</span> (Apulia): Carabinieri stop 39 migrants after clandestine landing  </span><span style="color: #0000ff; font-size: x-small;"><a href="http://www.ansa.it/web/notizie/regioni/puglia/2013/12/21/Rintracciati-39-migranti-Otranto_9812487.html"><span style="color: #0000ff;">ANSA 21.12.</span></a></span></p>
<p> </p>
<p>   </p>
<p style="text-align: center;"><span style="font-size: 8pt;"> <span style="text-decoration: underline;">Pozzallo</span> (Sicily): Navy rescues</span></p>
<p style="text-align: center;"><span style="font-size: 8pt;">98 migrants detected by unmanned 'Predator' drone </span></p>
<p style="text-align: center;"><span style="font-size: 8pt;"> <a href="http://ragusa.blogsicilia.it/mare-nostrum-soccorsi-98-migranti-nel-canale-di-sicilia/228400/"><span style="color: #0000ff;">BS 19.12.</span></a> / </span><span style="font-size: 8pt;"> <a href="http://www.corrierediragusa.it/articoli/cronache/palermo/24651-sbarcano-a-pozzallo-98-migranti-intercettati-da-predator.html"><span style="color: #0000ff;">CdR 19.12.</span></a></span></p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<p><span style="font-size: 8pt;"> </span></p>
<p> </p>
<p>  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p> </p>
<p> </p>
<p><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p><span style="font-size: 8pt;"> </span></p>
<p> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Rubber dinghy with 45 migrants heading for Sicily  <a href="http://agrigento.blogsicilia.it/sbarchi-in-sicilia-anche-in-inverno-220-migranti-verso-lampedusa/227529/"><span style="color: #0000ff;">BS 14.12.</span></a></span><span style="font-size: 8pt;"><br /></span></p>
<p> </p>
<p> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="margin-bottom: 0pt; text-align: center; line-height: normal;" align="center"> <span style="color: inherit; font-family: inherit; font-size: inherit;"> </span></p>
<p style="margin-bottom: 0pt; text-align: center; line-height: normal;" align="center"><strong><span style="font-size: 8pt;">Storms over Southern Italy   </span></strong><span style="color: inherit; font-family: inherit; font-size: inherit;"> </span><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/26/Maltempo-vento-Sicilia_9824865.html"><span style="color: #0000ff;">ANSA 26.12.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">List of 500 missing Tunisian 'harra-gas' to be handed over to UN and EU shortly   TAP 18.12.</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Libyan coast guard prevents two boats with 195 migrants from departing for Europe  <a href="http://www.libyaherald.com/2013/12/17/libyan-coastguard-rescues-195-migrants/#axzz2nrCSPZnv"><span style="color: #0000ff;">LH 17.12.</span></a>  </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Libyan coast guard rescues 92 sSAfricans  <a href="http://www.zeit.de/news/2013-12/16/libyen-fluechtlinge-mehr-als-90-bootsfluechtlinge-vor-libyen-aus-seenot-gerettet-16215204"><span style="color: #0000ff;">Zeit 16.12.</span></a> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">EU Summit final document</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt; color: #0000ff;"><a href="http://www.consilium.europa.eu/uedocs/cms_data/docs/pressdata/en/ec/140245.pdf"><span style="color: #0000ff;">EUCL 20.12.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> At Brussels<span style="font-size: 8pt;"> summit Maltese PM Muscat demands more EU repatriation action; anticipates return of 1000 migrants who failed to get asylum</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.maltatoday.com.mt/en/newsdetails/news/national/1-000-migrants-could-face-repatriation-Muscat-20131219"><span style="color: #0000ff;">MT 19.12.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  <span style="font-size: 8pt;">NGOs and media criticize conditions at Lampedusa Reception Center as inhuman; authorities and EU react   <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/17/Lampedusa-proteste-dopo-immagini-choc_9794077.html"><span style="color: #0000ff;">ANSA 17.12.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.timesofmalta.com/articles/view/20131218/local/eu-threatens-italy-with-legal-action-over-migrants.499555#.UrGj8N-A0eE"></a><a href="http://www.timesofmalta.com/articles/view/20131218/local/eu-threatens-italy-with-legal-action-over-migrants.499555#.UrGj8N-A0eE"><span style="color: #0000ff;">ToM 18.12.</span></a> / <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/18/Lampedusa-inchiesta-Procura-Agrigento_9796131.html"><span style="color: #0000ff;">ANSA 18.12.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">   </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">   </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Mehdi Jomaa elected Tunisian Prime Minister on 14 December; will head transitional technocrat government to be formed early 2014</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://en.wikipedia.org/wiki/Mehdi_Jomaa"><span style="color: #0000ff;">Mehdi Jomaa </span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
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
<p> </p>
<p> </p>
<p> </p>
<p><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">In a night operation navy rescues 200 migrants off Lampedusa </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <span style="color: #0000ff;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/doppio-intervento-marina-militare-200-migranti-soccorsi-a-largo-di-lampedusa/149410/147917?ref=search"><span style="color: #0000ff;">Rep 8.12 video</span></a></span></span><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p> </p>
<p><span style="font-size: 8pt;">Navy rescues 244 sSAfricans 120 NM south of Lampedusa</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/mare-nostrum-il-salvataggio-all-alba-di-244-migranti/149978/148485?ref=search"><span style="color: #0000ff;">Rep 10.12. video !</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Trapani</span> (Sicily): Arrival of 8 Tunisians after landing on Marettim island  </span><span style="color: #0000ff; font-family: arial,helvetica,sans-serif; font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/12/11/news/abcora_sbarchi_a_marettimo_arrivati_otto_tunisini-73356942/?ref=search"><span style="color: #0000ff;">Rep 10.12.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Augusta</span> (Sicily): Three naval ships rescue 1019 migrants off Lampedusa as part of 'Mare Nostrum' </span><span style="color: #0000ff; font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/12/10/news/migranti_operazione_mare_nostrum_in_1000_salvati_al_largo_di_lampedusa-73193224/?ref=search"><span style="color: #0000ff;">Rep 10.12.</span></a> / <a href="http://siracusa.blogsicilia.it/mille-disperati-verso-augusta-migranti-soccorsi-a-sud-di-lampedusa/226479/"><span style="color: #0000ff;">BS 10.12.</span></a><br /></span><span style="color: #0000ff; font-size: 8pt;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/lampedusa-operazione-mare-nostrum-continuano-i-salvataggi-in-alto-mare/149727/148234?ref=search"><span style="color: #0000ff;">Rep 10.12. video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Trapani</span> (Sicily): Navy rescues 52 Tunisians off Pantelleria and takes them to Sicily  <span style="color: #0000ff;"><a href="http://palermo.repubblica.it/cronaca/2013/12/09/news/pantelleria_in_salvo_52_migranti_mercantile_sperona_peschereccio-73156100/?ref=search"><span style="color: #0000ff;">Rep 9.12.</span></a></span><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC guides 113 Egyptians and Syrians into port</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <span style="color: #0000ff;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/08/Immigrazione-113-sbarcano-Siracusa_9745050.html"><span style="color: #0000ff;">ANSA 8.12.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Otranto</span> (Apulia): Police stop nine Pakistanis and discover abandoned boat  <span style="color: #0000ff;"><span style="color: #0000ff;"><a href="http://bari.repubblica.it/cronaca/2013/12/07/news/barcone-72925410/?ref=search">Rep 7.12.</a></span></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"><span style="color: #0000ff;"><br /></span></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"><span style="color: #0000ff;"><br /></span></span></span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Libyan coast guard rescues 175 migrants<a href="http://www.libyaherald.com/2013/12/10/two-migrant-boats-caught-off-tripoli-coast/#axzz2o7rYvIT1"><span style="color: #0000ff;">LH 10.12.</span></a></span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p> </p>
<p> <span style="font-size: 8pt; color: inherit; font-family: inherit;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center;"><span style="font-size: 8pt;">Italy wants EU to continue 'Mare Nostrum' operation in 2014</span></p>
<p style="text-align: center;"><span style="color: #0000ff;"><a href="http://www.tmnews.it/web/sezioni/news/bonino-sostengo-unilaterale-a-mare-nostrum-scade-a-fine-anno-PN_20131209_00113.shtml"><span style="color: #0000ff;">TM News 10.12.</span></a></span></p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"><span style="font-size: 8pt; color: #333300;"><span style="color: #000000;">FRONTEX Code of Conduct for Return Operations published</span>  <a href="http://frontex.europa.eu/news/frontex-code-of-conduct-for-return-operations-published-x1a0c0"><span style="color: #0000ff;">FRONTEX 9.12.</span></a></span></p>
<p style="text-align: center;"> <span style="color: inherit; font-family: inherit; font-size: inherit;"> </span></p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
<p style="text-align: center;"> </p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center;"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC and navy rescue 115 migrants off Capo Passero  <span style="color: #0000ff;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/07/Immigrazione-soccorsi-105-migranti_9741384.html"><span style="color: #0000ff;">ANSA 6.12.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/siracusa-115-siriani-soccorsi-dalla-guardia-costiera/149277/147786?ref=search"><span style="color: #0000ff;"><span>video Rep</span></span></a><span> !</span></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Spartivento</span> (Calabria): Navy rescues 120 Syrians  <span style="color: #0000ff;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/06/Soccorso-barcone-120-migranti_9740493.html"><span style="color: #0000ff;">ANSA 6.12.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="color: #0000ff;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/barcone-alla-deriva-120-siriani-soccorsi-a-capo-spartivento/149253/147762?ref=vd-auto"><span style="color: #0000ff;">video Rep</span></a> !</span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Crotone</span> (Calabria): GC and navy rescue 139 Syrians in heavy sea; one Egyptian and two other traffickers arrested </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span><a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/12/01/Immigrazione-barcone-deriva_9708902.html"><span style="color: #0000ff; font-size: 8pt;">ANSA 1.12.</span></a> / <span style="font-size: 8pt;"><a href="http://www.repubblica.it/cronaca/2013/12/02/news/barcone_migranti_alla_deriva_in_calabria-72470694/?ref=search"><span style="color: #0000ff;">Rep 2.12. video</span></a> / <a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/12/02/Barcone-deriva-migranti-salvo_9713598.html"><span style="color: #0000ff;">ANSA 2.12.</span></a> / </span><span style="font-size: 8pt;"><a href="http://www.repubblica.it/cronaca/2013/12/03/news/barcone_deriva_crotone_arrestati_scafisti-72576600/?ref=search"><span style="color: #0000ff;">Rep 3.12.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <strong><span style="font-size: 8pt;">Storms continue</span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/12/01/Maltempo-domani-ancora-piogge-Sud_9709585.html"><span style="color: #0000ff;">ANSA 1.12.</span></a></span>  </p>
<p> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p> </p>
<p> </p>
<p> </p>
<p style="text-align: center;"><span style="font-size: 8pt;">5 &amp; 6 December: EU JHA Council Meeting provisional summary  </span></p>
<p style="text-align: center;"><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://www.consilium.europa.eu/uedocs/cms_data/docs/pressdata/en/jha/139938.pdf"><span style="color: #0000ff;">EUCL 6.12.</span></a> </span></span></p>
<p> </p>
<p style="text-align: center;"><span style="font-size: 10pt;"><span style="font-size: 8pt;">'Task Force Mediterranean' document identifies 5 areas of action</span></span></p>
<p style="text-align: center;"><span style="font-size: 10pt;"><span style="font-size: 8pt;"> </span></span><span style="color: #0000ff;"><a href="http://www.consilium.europa.eu/uedocs/cms_data/docs/pressdata/en/jha/139937.pdf"><span style="color: #0000ff;">EUCL 5.12.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">'Burden sharing' not part of EU 'Task Force' proposals   <span style="color: #0000ff;"><a href="http://www.timesofmalta.com/articles/view/20131205/local/Burden-sharing-not-in-new-EU-proposals.497600#.UqA_MN-A0eF"><span style="color: #0000ff;">ToM 5.12.</span></a></span><br /></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center;"><span style="font-size: 8pt;">'Task Force Mediterranean': Com-mission submits report to Council and Parliament </span><span style="font-size: 8pt;"> <span style="color: #0000ff;"><a href="http://ec.europa.eu/dgs/home-affairs/what-is-new/news/news/docs/20131204_communication_on_the_work_of_the_task_force_mediterranean_en.pdf"><span style="color: #0000ff;">EUCOM 4.12.</span></a></span> </span></p>
<p style="text-align: center;"> <span style="font-size: 8pt; color: #0000ff;"><a href="http://europa.eu/rapid/press-release_IP-13-1199_en.htm"><span style="color: #0000ff;">EUCOM 4.12.</span></a> </span><span style="font-size: 8pt; color: #0000ff;">/ </span><span style="font-size: 8pt; color: #0000ff;"><span style="color: #0000ff;"><a href="http://www.maltatoday.com.mt/en/newsdetails/news/national/Migration-task-force-identifies-38-actions-to-address-Mediterranean-flows-20131204"><span style="color: #0000ff;">MT 4.12.</span></a> </span></span> </p>
<p> </p>
</td>
</tr>
</tbody>
</table>`

const mevent = () => <div dangerouslySetInnerHTML={{ __html: HTML }} />

export default mevent
