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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-family: 'Arial','sans-serif'; font-size: 8pt;">Tunisia, Libya, Accidents, SAR, </span></strong></p>
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
<p style="line-height: normal; margin-bottom: 0pt;"><strong><span style="font-size: 8pt;">2013 month:     2'420</span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><strong><span style="font-size: 8pt;">2013 cumul.:    9'433</span></strong></p>
<p style="line-height: normal; margin-bottom: 0pt;"><span style="font-size: 8pt;">2012 month:         325</span></p>
<p style="line-height: normal; margin-bottom: 0pt;"><span style="font-size: 8pt;">2012 cumul.:      2'385</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:      5'119</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:   15'250</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   month:        713</span></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:     4'667</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:          0</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:   1'676</span></strong></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   month:         91</span></p>
<p style="margin: 0cm 0cm 0pt 5px; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:    1'568</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Victims</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><strong><span style="font-size: 8pt;">2013 month:       18</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><strong><span style="font-size: 8pt;">2013 cumul.:     141</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><span style="font-size: 8pt;">2012   month:       80</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; line-height: normal;"><span style="font-size: 8pt;">2012   cumul.:     292</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 6pt;" align="center"><strong><span style="text-decoration: underline;"><span style="font-size: 8pt;">Total Arrivals</span></span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong><span style="font-size: 8pt;">month:     7'539</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong><span style="font-size: 8pt;">cumul.:   26'359</span></strong></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><strong></strong><span style="font-size: 8pt;">Tunisia:         198</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><span style="font-size: 8pt;">Libya:       17'588</span></p>
<p style="margin: 0cm 0cm 0pt 35.4pt; text-align: justify; line-height: normal;"><span style="font-size: 8pt;">other:        8'573</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;">14 Tunisians rescued by</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">helicopter near Lampione</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/30/14-migranti-salvati-Guardia-costiera_9382775.html"><span style="color: #0000ff;">ANSA 30.9.</span></a> / <a href="http://www.agrigentoflash.it/2013/09/30/lampione-14-migranti-naufragati-sullisolotto-salvati-da-un-elicottero/"><span style="color: #0000ff;">AF 30.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/migranti-verso-lampedusa-soccorsi-due-barconi/211163/"><span style="color: #0000ff;">BS 30.9.</span></a> / <a href="http://agrigento.blogsicilia.it/evitata-un-altra-tragedia-del-mare-14-tunisini-salvati-sullisola-di-lampione/211439/"><span style="color: #0000ff;">BS 1.10.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Brancaleone</span> (Calabria): Surprise landing of 100 migrants of different nationality  <a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/09/30/Immigrazione-cento-arrivati-Calabria_9385306.html"><span style="color: #0000ff;">ANSA 30.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;"><span style="color: #000000; text-decoration: underline;">Trapani</span></span> (Sicily): Merchant ship takes 106 sSAfricans to Trapani</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://trapani.blogsicilia.it/ancora-sos-nel-canale-di-sicilia-barcone-con-migranti-verso-trapani/211295/"><span style="color: #0000ff;">BS 30.9.</span></a> / <a href="http://agrigento.blogsicilia.it/migranti-verso-lampedusa-soccorsi-due-barconi/211163/"><span style="color: #0000ff;">BS 30.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/30/foto/erano_in_107_sul_gommone_accolti_al_porto_di_trapani-67602295/1/?ref=search#1"><span style="color: #0000ff;">photo</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Ragusa</span> (Sicily): Surprise arrival of approx. 150 East Africans; boat hits sandbank in rough sea near Sampieri; <strong>13 drown</strong> trying to swim ashore; many disperse; two traffickers arrested</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://siciliamigranti.blogspot.ch/2013/09/tragico-sbarco-sampieri-tredici-i.html"><span style="color: #0000ff;">SM 30.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/30/news/sbarco_tragico_a_ragusa_annegano_tredici_immigrati-67571864/"><span style="color: #0000ff;">photos</span></a> / </span><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/30/Sbarco-Ragusano-decina-morti_9382352.html"><span style="color: #0000ff;">ANSA 30.9.</span></a> / <a href="http://ragusa.blogsicilia.it/drammatico-sbarco-a-scicli-una-decina-di-morti-fra-i-migranti/211190/"><span style="color: #0000ff;">BS 30.9.</span></a> / <a href="http://siciliamigranti.blogspot.ch/2013/11/eritreo-investito-dopo-il-tragico.html"><span style="color: #0000ff;">SM 10.11.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span>  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">GC and military rescue 250</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">sSAfricans 50 NM off Lampedusa; debarkation at Porto Empedocle</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span><span style="color: #0000ff; font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/28/Oltre-400-migranti-arrivati-Sicilia_9374888.html"><span style="color: #0000ff;">ANSA 28.9.</span></a> / </span><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://palermo.repubblica.it/cronaca/2013/09/28/news/sbarchi_senza_fine_in_sicilia_soccorsi_altri_400_migranti-67446623/?ref=search"><span style="color: #0000ff;">Rep 28.9.</span></a> </span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="color: #0000ff;"> </span><span style="color: #0000ff;"><a href="GC%20and%20military%20rescue%20250%20migrants%20%20ANSA%2028.9."><span style="color: #0000ff;">Rep video</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Pozzallo</span> (Sicily): Arrival of two boats with 117 and 67 sSAfricans  </span><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/28/Oltre-400-migranti-arrivati-Sicilia_9374888.html"><span style="color: #0000ff;">ANSA 28.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/28/Immigrazione-117-arrivati-Siracusano_9374327.html"><span style="color: #0000ff;">ANSA 28.9.</span></a> / </span><span style="font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/immigrazione-400-profughi-salvati-nelle-acque-di-pozzallo-e-lampedusa/210980/"><span style="color: #0000ff;">BS 28.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Agrigento</span> (Sicily): Undetected landing of 30 North Africans near Punta Bianca  <a href="http://www.agrigentoflash.it/2012/10/23/agrigento-sbarcati-una-quindicina-di-migranti/"><span style="color: #0000ff;">AF 27.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.agrigentoflash.it/2013/09/27/siculiana-fermati-5-migranti-appena-sbarcati/"><span style="color: #0000ff;">AF 27.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><strong>Storm warning for Southern Italy</strong></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/29/Maltempo-allerta-meteo-temporali-sud_9380534.html"><span style="color: #0000ff;">ANSA 29.9.</span></a> </span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Tunisian Coast Guard prevents 'harragas' from departing for Italy; no details mentioned  TAP 27.9.</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">UNHCR September Update for Libya mentions 4'619 departures; my figure is roughly identical, around 4'400 !  <a href="http://www.unhcr.org/52541a149.html"><span style="color: #0000ff;">UNHCR Update </span></a></span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">At UN General Assembly meeting PM Zeidan discusses Libyan security recon-struction needs with foreign ministers of France, Italy, Germany and the US  </span><span style="font-size: 8pt;"> <a href="http://www.libyaherald.com/2013/09/29/libya-and-uk-consolidate-new-security-relationship/#axzz2gHs53Kys"><span style="color: #0000ff;">LH 29.9.</span></a> </span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Arrival of another three boats with 313 migrants   <a href="http://www.repubblica.it/cronaca/2013/09/26/news/immigrazione_istat_salvati-67311090/?ref=search"><span style="color: #0000ff;">Rep 26.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">GC and GdF rescue 398 Syrians; GC, military and FRONTEX vessel rescue another 111; 1'250 mi-grants at Reception Center</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/25/Maxisbarco-Lampedusa-sono-oltre-500_9355823.html"><span style="color: #0000ff;">ANSA 25.9.</span></a> / </span><span style="font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/09/25/news/migranti_sbarchi_a_ripetizione_in_dodici_ore_arrivano_in_ottocento-67220248/?ref=search"><span style="color: #0000ff;">Rep 25.9. </span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/emergenze-immigrazione-altri-700-sbracati-fra-lampedusa-e-siracusa/210434/"><span style="color: #0000ff;">BS 25.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Brindisi</span> (Apulia): 2 Syrian youngsters found hiding in a vehicle arriving by ferry from Greece  <a href="http://www.ansa.it/web/notizie/regioni/puglia/2013/09/26/Siria-due-profughi-bloccati-Brindisi_9365835.html"><span style="color: #0000ff;">ANSA 26.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Roccella Jonica</span> (Calabria): Rescue of 155 Syrians, first by marchant vessel, then by GC</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/09/26/Immigrazione-155-soccorsi-Calabria_9366015.html"><span style="color: #0000ff;">ANSA 26.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Augusta</span> (Sicily): Arrival of 117 migrants on board of German merchant vessel 'Fuji' <a href="http://www.repubblica.it/cronaca/2013/09/26/news/immigrazione_istat_salvati-67311090/?ref=search"><span style="color: #0000ff;">Rep 26.9</span></a></span><a href="http://www.repubblica.it/cronaca/2013/09/26/news/immigrazione_istat_salvati-67311090/?ref=search">.</a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Palermo</span> (Sicily): 183 Somali migrants rescued by container ship 'King Julius'  <a href="http://palermo.blogsicilia.it/migranti-soccorsi-a-lampedusa-domani-a-palermo/210688/"><span style="color: #0000ff;">BS 26.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/27/Approdati-Palermo-183-somali-soccorsi_9368678.html"><span style="color: #0000ff; font-size: 8pt;">ANSA 27.9.</span></a> / <span style="font-size: 8pt;"><a href="http://palermo.blogsicilia.it/immigrazione-183-profughi-somali-sbarcati-al-porto-di-palermo/210787/"><span style="color: #0000ff;">BS 27.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/09/27/foto/a_palermo_183_profughi_africani_le_immagini_dell_accoglienza-67381195/1/?ref=search#1"><span style="color: #0000ff;">photo</span></a> / <a href="http://video.repubblica.it/edizione/palermo/accolti-a-palermo-180-profughi-africani/141188/139726?ref=vd-auto"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): Arrival of 181</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Syrians at night; 70 children</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://palermo.repubblica.it/cronaca/2013/09/25/news/migranti_sbarchi_a_ripetizione_in_dodici_ore_arrivano_in_ottocento-67220248/?ref=search"><span style="color: #0000ff;">Rep 25.9.</span></a> / </span><span style="font-size: 8pt;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/siracusa-soccorsi-200-profughi-70-sono-bambini/140973/139511?ref=search"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Porto Empedocle</span> (Sicily): GC and military rescue 86 migrants </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/09/25/news/migranti_sbarchi_a_ripetizione_in_dodici_ore_arrivano_in_ottocento-67220248/?ref=search"><span style="color: #0000ff;">Rep 25.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">42 'harragas' stopped by Tunisian Coast Guard; six others rescued from sinking boat, <strong>three missing </strong></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">TAP 25.9. </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">170 migrants travelling on two boats rescued by GC</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://agrigento.blogsicilia.it/emergenza-sbarchi-170-migranti-salvati-al-largo-di-lampedusa/210234/"><span style="color: #0000ff;">BS 24.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  <span style="font-size: 8pt;">184 East Africans rescued by GC  <a href="http://palermo.repubblica.it/cronaca/2013/09/23/news/nuovo_sbarco_a_lampedusa_soccorsi_184_migranti_somali-67080718/?ref=search"><span style="color: #0000ff;">Rep 23.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><a href="http://tg24.sky.it/tg24/cronaca/2013/09/23/immigrati_immigrazione_sbarchi_sicilia_lampedusa_siracusa.html"><span style="color: #0000ff;">GL 23.9.</span></a> / <a href="http://www.agrigentoflash.it/2013/09/23/lampedusa-in-due-giorni-arrivati-274-migranti/"><span style="color: #0000ff;">AF 23.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">94 migrants rescued by GC</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.agrigentoflash.it/2013/09/23/lampedusa-in-due-giorni-arrivati-274-migranti/"><span style="color: #0000ff;">AF 23.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;">200 Eritreans protest against Dublin regulation and identification measures</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/18/Migranti-Lampedusa-riconoscimento_9320774.html"><span style="color: #0000ff;">ANSA 18.9.</span></a> / <a href="http://siciliamigranti.blogspot.ch/2013/09/lampedusa-200-eritrei-scendono-in.html"><span style="color: #0000ff;">SM 19.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> GC rescue two boats, one with 36 sSAfricans, another with 68  <a href="http://corrieredelmezzogiorno.corriere.it/palermo/notizie/cronaca/2013/16-settembre-2013/ancora-sbarchi-tratti-salvo-103-migranti-2223118811094.shtml"><span style="color: #0000ff;">CdM 17.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/09/17/news/eemergenza_sbarchi_nel_canale_di_sicilia_soccorsi_mille_migranti_su_cinque_barconi-66703040/"><span style="color: #0000ff;">Rep 17.9.</span></a> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): 83 migrants abandoned on tiny island by</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">'facilitators' and rescued by volunteers  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/24/Immigrazione-83-approdati-siracusano_9353329.html"><span style="color: #0000ff;">ANSA 24.9.</span></a>  </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Lecce</span> (Apulia): 32 'Asians' forced to walk ashore by migrant smugglers, including babies  </span><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/puglia/2013/09/23/Sbarco-migranti-Salento-Bimbi-acqua-_9346990.html"><span style="color: #0000ff;">ANSA 23.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): 115 migrants rescued by GC  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/21/Barcone-soccorso-mare-Siracusano_9335403.html"><span style="color: #0000ff;">ANSA 21.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC and FRONTEX vessel rescue 424 Syrians; <strong>one person found dead on board </strong> <span style="color: #0000ff;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/20/Immigrazione-350-barca-verso-Siracusa_9331959.html"><span style="color: #0000ff;">ANSA 20.9</span></a>.  </span></span><span style="font-size: 8pt;"><span style="color: #0000ff;"><a href="http://palermo.repubblica.it/cronaca/2013/09/20/news/migranti_emergenza_infinita_nuovo_sbarco_a_pozzallo-66956788/?ref=search"><span style="color: #0000ff;">Rep 22.9.</span></a>   </span><a href="http://video.repubblica.it/edizione/palermo/siracusa-soccorso-barcone-400-persone-a-bordo-muore-una-donna/140657/139192?ref=search"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Three boats rescued by GC, GdF, navy and merchant ships;</span><span style="font-size: 8pt;"> 149 </span><span style="font-size: 8pt;">Syrians taken to Catania, 226 sSAfricans to Pozzallo, 284 sSAfricans to Gioia Tauro (Calabria)</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  </span><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/17/Immigrazione-mille-canale-Sicilia_9312486.html"><span style="color: #0000ff;">ANSA 17.9.</span></a> / <span style="color: #0000ff;"><a href="http://palermo.repubblica.it/cronaca/2013/09/17/news/eemergenza_sbarchi_nel_canale_di_sicilia_soccorsi_mille_migranti_su_cinque_barconi-66703040/"><span style="color: #0000ff;">Rep 17.9.</span></a> </span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><a href="http://www.maltatoday.com.mt/en/newsdetails/news/national/270-migrants-still-at-sea-AFM-and-Italians-alerted-to-give-assistance-20130917"><span style="color: #0000ff;">MT 17.9.</span></a> / <span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/18/Immigrazione-sbarcati-Catania-149_9317895.html"><span style="color: #0000ff;">ANSA 18.9.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="font-size: 8pt;"><a href="http://oltrelostretto.blogsicilia.it/sicilia-terra-di-profughi-mille-ieri-altri-270-in-arrivo/209313/"><span style="color: #0000ff;">BS 18.9.</span></a> / <a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/sbarco-a-catania-il-pianto-dei-bambini-siriani/140325/138860?ref=search"><span style="color: #0000ff;">video</span></a> / <a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/sicilia-sbarchi-senza-sosta-mille-migranti-in-poche-ore/140362/138897?ref=search"><span style="color: #0000ff;">video</span></a> </span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/09/18/Migranti-giunti-porto-Gioia-Tauro_9319571.html"><span style="color: #0000ff;">ANSA 18.9.</span></a> / <a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/09/19/Migranti-Calabria-265-sono-andati-via_9324050.html"><span style="color: #0000ff;">ANSA 19.9.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Libya to order advanced border</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">security equipment and to strengthen cooperation with Egypt and Sudan   </span><span style="font-size: 8pt;"> <a href="http://www.libyaherald.com/2013/09/23/defence-ministry-about-to-order-advanced-border-security-equipment/#axzz2fpFLEHX7"><span style="color: #0000ff;">LH 23.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Libyan Coast Guard intercepts boat carrying 207 East-Africans  <a href="http://www.libyaherald.com/2013/09/22/eu-to-work-with-libya-to-stem-illegal-migrant-tide/#axzz2filaU4ZY"><span style="color: #0000ff;">LH 22.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">At Madrid EU members agree to support Libya within framework of 'Seahorse Mediterraneo' program meant to combat irregular migration</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.libyaherald.com/2013/09/22/eu-to-work-with-libya-to-stem-illegal-migrant-tide/#axzz2filaU4ZY"><span style="color: #0000ff;">LH 22.9.</span></a> / <a href="http://www.ansamed.info/ansamed/en/news/sections/politics/2013/09/19/Immigration-Seahorse-Mediterraneo-border-control_9324814.html"><span style="color: #0000ff;">ANSAmed 19.9.</span></a></span></p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">GC rescues two boats, one with 36 Nigerians and a second with 68 other migrants  <a href="http://palermo.repubblica.it/cronaca/2013/09/16/news/soccorsi_103_migranti_al_largo_di_lampedusa-66621066/"><span style="color: #0000ff;">Rep 16.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="color: #0000ff; font-size: 8pt;"><a href="http://www.agrigentoflash.it/2013/09/16/lampedusa-sbarcati-altri-104-immigrati/"><span style="color: #0000ff;">AF 16.9.</span></a> </span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Arrival of 500 sSAfricans on two boats, one with 221</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">another with 279 migrants  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/13/Due-barconi-migranti-Lampedusa_9292927.html"><span style="color: #0000ff;">ANSA 13.9.</span></a> / <a href="http://corrieredelmezzogiorno.corriere.it/palermo/notizie/cronaca/2013/13-settembre-2013/sbarchi-senza-sosta-poche-oregiunti-sicilia-500-migranti-2223075462956.shtml"><span style="color: #0000ff;">CdM 13.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">31 North-Africans stopped by police after landing</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/11/Trentuno-migranti-strada-Lampedusa_9281108.html"><span style="color: #0000ff;">ANSA 11.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): Arrest of 3 Egyptians accused of migrant smuggling  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/16/Immigrazione-fermati-3-basisti-egiziani_9306554.html"><span style="color: #0000ff;">ANSA 16.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): Surprise</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">landing of 150 Syrians near Vendicari</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/16/Immigrazione-Ancora-sbarchi-Sicilia_9305705.html"><span style="color: #0000ff;">ANSA 16.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/16/news/soccorsi_103_migranti_al_largo_di_lampedusa-66621066/"><span style="color: #0000ff;">Rep 16.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC and GdF rescue 156 Syrians and Egyptians  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/15/immigrazione-156-migranti-Siracusa_9303050.html"><span style="color: #0000ff;">ANSA 15.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): 320 Syrians rescued at night by GC and merchant ship   </span><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/14/Soccorsi-320-migranti-Canale-Sicilia_9297755.html"><span style="color: #0000ff;">ANSA 14.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/ancora-profughi-dalla-siria-soccorsi-320-migranti-a-siracusa/139989/138524?ref=search"><span style="color: #0000ff;">video Rep</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Locri</span> (Calabria): GC and GdF intercept 170 migrants and take them to Roccella Jonica</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/09/13/Barcone-immigrati-largo-Locride-sono-170_9296658.html"><span style="color: #0000ff;">ANSA 13.9.</span></a> / <a href="http://www.repubblica.it/cronaca/2013/09/14/news/immigrati_171_soccorsi_a_largo_della_calabria-66487308/?ref=search"><span style="color: #0000ff;">Rep 14.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC and GdF, aided by FRONTEX, rescue 199 migrants, mostly Syrians; some</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Egyptians arrested for trafficking</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/12/199-migranti-sbarcati-Siracusa_9285949.html"><span style="color: #0000ff;">ANSA 12.9.</span></a> / <a href="http://siracusa.blogsicilia.it/siracusa-sbarcano-199-profughi-siriani-ed-egiziani/208480/"><span style="color: #0000ff;">BS 12.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/12/Sbarco-siracusano-sequestrata-nave_9286628.html"><span style="color: #0000ff;">ANSA 13.9.</span></a> / </span><a href="http://palermo.repubblica.it/cronaca/2013/09/13/news/siracusa_arresati_quattro_scafisti_nuovi_sbarchi_a_lampedusa-66439899/?ref=search"><span style="color: #0000ff; font-size: 8pt;">Rep 14.9.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://siciliamigranti.blogspot.ch/2013/09/immigrati-bloccata-nave-madre-catania.html"><span style="color: #0000ff;">SM 12.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Pozzallo</span> (Sicily): Arrival of 95 sSAfricans rescued by merchant vessel  <span style="color: #0000ff;"><a href="http://palermo.repubblica.it/cronaca/2013/09/10/news/arrivati_altri_187_immigrati_si_mobilitano_le_associazioni-66248133/?ref=search"><span style="color: #0000ff;">Rep 11.9.</span></a></span></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-size: 8pt;">Storm over Southern Italy</span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">119 sSAfricans leaving from Libya</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">rescued by Tunisian Coast Guard off Zarzis       TAP 16.9. </span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Air repatriation of 10 Egyptians who arrived at Catania on 9 September   <a href="http://siciliamigranti.blogspot.ch/2013/09/non-si-fermano-i-rimpatri-verso-legitto.html"><span style="color: #0000ff;">SM 11.9.</span></a> / <a href="http://siciliamigranti.blogspot.ch/2013/10/il-crimine-di-alfano-in-un-mese-89.html"><span style="color: #0000ff;">SM 5.10.</span></a></span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Discussion of integrated border assistance at EUBAM meeting in Tripoli   </span><span style="font-size: 8pt;"><a href="http://www.libyaherald.com/2013/09/11/government-co-chairs-international-meeting-on-border-security/#axzz2eazV7zEj"><span style="color: #0000ff;">LH 11.9.</span></a></span></p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">GC intercepts 91 Eritreans and takes them ashore</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/10/Immigrazione-91-sbarcati-Lampedusa_9274466.html"><span style="color: #0000ff;">ANSA 10.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/10/news/arrivati_altri_187_immigrati_si_mobilitano_le_associazioni-66248133/?ref=search"><span style="color: #0000ff;">Rep 11.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">6 Tunisians rescued at Pantelleria by vacationers; transfer to Trapani CIE</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/09/Migranti-nuoto-soccorsi-diportisti_9268727.html"><span style="font-size: 8pt;"><span style="color: #0000ff;">ANSA 9.9.</span></span></a> / <a href="http://corrieredelmezzogiorno.corriere.it/palermo/notizie/cronaca/2013/9-settembre-2013/sei-migranti-tuinisini-nuoto-dopoavaria-barca-salvati-diportisti--2222984961628.shtml"><span style="color: #0000ff; font-size: 8pt;">CdM 9.9.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">93 sSAfricans rescued by GC  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/08/Immigrazione-2-sbarchi-coste-Sicilia_9266055.html"><span style="color: #0000ff;">ANSA 8.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/08/news/ancora_sbarchi_a_lampedusa_e_mazara_alcuni_migranti_fuggono_dal_centro_di_accoglienza-66126032/?ref=search"><span style="color: #0000ff;">Rep 8.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Reacting to call by Libyan Coast Guard GC and navy rescue </span><span style="font-size: 8pt;">207 </span><span style="font-size: 8pt;">sSAfricans</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  </span><span style="color: #0000ff; font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/07/Immigrazione-continuano-sbarchi-Sicilia_9260804.html"><span style="color: #0000ff;">ANSA 7.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/07/news/nuovo_sbarco_a_lampedusa_soccorsi_207_migranti-66050912/?ref=search"><span style="color: #0000ff;">Rep 7.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="color: #0000ff; font-size: 8pt;"> <a href="http://corrieredelmezzogiorno.corriere.it/palermo/notizie/cronaca/2013/7-settembre-2013/sicilia-arrivano-due-barconi-libia-soccorsi-quattrocento-migranti-2222955703233.shtml"><span style="color: #0000ff;">CdM 7.9.</span></a></span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Mazara del Vallo</span> (Sicily): 39 Tunisians rescued, some try to escape   <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/08/Immigrazione-2-sbarchi-coste-Sicilia_9266055.html"><span style="color: #0000ff;">ANSA 8.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/08/news/ancora_sbarchi_a_lampedusa_e_mazara_alcuni_migranti_fuggono_dal_centro_di_accoglienza-66126032/?ref=search"><span style="color: #0000ff;">Rep 8.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Pozzallo</span> (Sicily): Arrival of 208 Somalis and Eritreans rescued by navy vessel  <a href="http://palermo.repubblica.it/cronaca/2013/09/07/news/nuovo_sbarco_a_lampedusa_soccorsi_207_migranti-66050912/?ref=search"><span style="color: #0000ff;">Rep 8.9.</span></a></span> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/07/Immigrazione-continuano-sbarchi-Sicilia_9260804.html"><span style="color: #0000ff; font-size: 8pt;">ANSA 7.9.</span></a> / <span style="font-size: 8pt;"><a href="http://palermo.repubblica.it/cronaca/2013/09/08/news/pozzallo_sommossa_al_centro_di_accoglienza_un_centinaio_di_migranti_fuggono_per_le_campagne-66141754/?ref=search"><span style="color: #0000ff;">Rep 9.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><span style="text-decoration: underline;">Augusta</span> (Sicily): Arrival of 293 Syrians on two boats</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/07/Immigrazione-continuano-sbarchi-Sicilia_9260804.html"><span style="color: #0000ff;">ANSA 7.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/07/news/nuovo_sbarco_a_lampedusa_soccorsi_207_migranti-66050912/?ref=search"><span style="color: #0000ff;">Rep 7.9.</span></a> / <a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/in-salvo-293-migranti-nel-siracusano/139367/137908?ref=search"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><span style="text-decoration: underline;">Lecce</span> (Puglia): Arrival of 47 migrants in two surprise landings; one vessel escapes, another found on beach near Tricase   </span><a href="http://www.ansa.it/web/notizie/regioni/puglia/2013/09/06/Rintracciati-47-immigrati-leccese_9254371.html"><span style="color: #0000ff; font-size: 8pt;">ANSA 6.9.</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><strong><span style="font-size: 8pt;">Storm and rough sea</span></strong></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">Interior Minister Alfano: 6'920 migrants have so far landed in Sicily (my count is approx. 6'200); if trend continues </span><span style="font-size: 8pt;">'structural' changes in Italian migration policy envisaged</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">   </span><span style="font-size: 8pt;"> <a href="http://palermo.repubblica.it/cronaca/2013/09/06/news/immigrazione_alfano_a_siracusa_vertice_con_prefetti_e_capo_della_polizia-65998484/"><span style="color: #0000ff;">Rep 6.9.</span></a> / <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/06/Immigrazone-Alfano-gestione-strutturale_9256212.html"><span style="color: #0000ff;">ANSA 6.9.</span></a> / <a href="http://palermo.repubblica.it/cronaca/2013/09/07/news/nuovo_sbarco_a_lampedusa_soccorsi_207_migranti-66050912/?ref=search"><span style="color: #0000ff;">Rep 8.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">'CEAS has long way to go' - Report issued by European Council on Refugees and Exiles (ECRE)  <a href="http://www.maltatoday.com.mt/en/newsdetails/news/world/Obstacle-course-in-the-EU-leads-to-unfair-treatment-of-asylum-seekers-20130905"><span style="color: #0000ff;">MT 6.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> FTDES calls for creation of compre-</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">hensive </span><span style="font-size: 8pt;">Mediterranean SAR</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">cooperation system   </span><span style="font-size: 8pt;"><a href="http://www.ftdes.net/en/node/93"><span style="color: #0000ff;">FTDES 5.9.</span></a>   </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
</tr>
<tr>
<td style="border-width: medium 1pt 1pt; border-style: none solid solid; border-color: currentColor windowtext windowtext; padding: 0cm 5.4pt; width: 120.5pt;" valign="top" width="161">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 148.85pt;" valign="top" width="198">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): Boat with 180 Syrians hits sandbank</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/03/Barcone-immigrati-arenato-Siracusano_9240136.html"><span style="color: #0000ff;">ANSA 3.9.</span></a> </span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Monopoli</span> (Puglia): GC in search of 27 Albanian migrants</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/puglia/2013/09/03/Immigrazione-ricerche-barcone-Monopoli_9237495.html"><span style="color: #0000ff;">ANSA 3.9.</span></a> / </span><span style="color: #0000ff;"><a href="http://bari.repubblica.it/cronaca/2013/09/04/news/stop_ricerche-65878928/?ref=search"><span style="color: #0000ff;">Rep 4.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Roccella Jonica</span> (Calabria): GC rescues 32 Pakistanis and Ceylonese at night</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">  <a href="http://www.ansa.it/web/notizie/regioni/calabria/2013/09/03/Soccorso-barcone-32-migranti_9237323.html"><span style="color: #0000ff;">ANSA 3.9.</span></a> / </span><a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/roccella-jonica-soccorsi-32-migranti/138944/137484?ref=search"><span style="color: #0000ff;">video Rep</span></a></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC rescues 93 Syrians and Egyptians in a night operation off Capo Passero</span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/03/Siriani-soccorsi-siracusano-sono-93_9237509.html"><span style="color: #0000ff;">ANSA 3.9.</span></a> / <a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/siracusa-nuovo-sbarco-di-migranti-nella-notte/138942/137482?ref=search"><span style="color: #0000ff;">video Rep</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): GC rescues 100 Syrians and Egypitans; <strong>wife of a Palestinian found dead   </strong></span><span style="font-size: 8pt;"> <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/02/Barcone-migranti-Siracusa-morto_9234060.html"><span style="color: #0000ff;">ANSA 2.9.</span></a> / <a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/02/Migrante-morta-barca-era-famiglia_9235121.html"><span style="color: #0000ff;">ANSA 2.9.</span></a>  <a href="http://video.repubblica.it/dossier/emergenza-lampedusa-2010/siracusa-soccorsi-104-immigrati-vittima-a-bordo/138874/137415?ref=search"><span style="color: #0000ff;">video</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> <span style="font-size: 8pt;"><span style="text-decoration: underline;">Siracusa</span> (Sicily): Night arrival of 180 Syrians towed by GC vessel    </span><span style="font-size: 8pt;"><a href="http://www.ansa.it/web/notizie/regioni/sicilia/2013/09/01/Immigrazione-siriani-giunti-Siracusa_9228336.html"><span style="color: #0000ff;">ANSA 1.9.</span></a></span></p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 134.65pt;" valign="top" width="180">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center">  </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 6cm;" valign="top" width="227">
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;"> </span></p>
</td>
<td style="border-width: medium 1pt 1pt medium; border-style: none solid solid none; border-color: currentColor windowtext windowtext currentColor; padding: 0cm 5.4pt; width: 177.2pt;" valign="top" width="236">
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
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"> </p>
<p style="text-align: center; line-height: normal; margin-bottom: 0pt;" align="center"><span style="font-size: 8pt;">NGO report about Italian aerial push-backs of Egyptians  during month of August    <a href="http://www.terrelibere.org/4677-da-catania-e-lamezia-profughi-egiziani-rispediti-all-inferno"><span style="color: #0000ff;">telib 2.9.</span></a></span></p>
</td>
</tr>
</tbody>
</table>`

const mevent = () => <div dangerouslySetInnerHTML={{ __html: HTML }} />

export default mevent
