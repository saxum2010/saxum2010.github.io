var more=1;
var catalog = [
  {key:"1", title:'citrus.ua', desc:'Citrus', img:'citrus.jpg', link:'https://www.citrus.ua', tags:'Bitrix, PHP, CentOs(administarator)', full_title:'citrus.ua', full_desc:'Citrus​ - the first Ukrainian company specialized corporate chains on gadgets and accessories, established in 2005.'},
  {key:"2", title:'www.fintotalizator.com', desc:'Financial tote', link:'http://www.fintotalizator.com', img:'fintotalzator.jpg', tags:'PHP, HTML', full_title:'www.fintotalizator.com', full_desc:'Web site for financial tote.'},
  {key:"3", title:'www.usdtoto.com', desc:'USDtoto', link:'http://www.usdtoto.com', img:'usdtoto.jpg', tags:'PHP, HTML', full_title:'www.usdtoto.com', full_desc:'Affiliate web site financial betting.'},
  {key:"4", title:'fedorchuk.com.ua', desc:'Lawyer Fedorchuk', link:'http://www.fedorchuk.com.ua', img:'fedorchuk.jpg', tags:'Drupal, PHP, HTML', full_title:'www.usdtoto.com', full_desc:'Web - site lawyer'},
  {key:"5", title:'cigol.com.ua', desc:'Sigal construction company', link:'http://www.cigol.com.ua', img:'sigol.jpg', tags:'Drupal, PHP, HTML', full_title:'www.cigol.com.ua', full_desc:'Web site construction company.'},
  {key:"6", title:'www.forum.kiberzona.com.ua', desc:'Forum Cyberzone', link:'http://www.forum.kiberzona.com.ua', img:'kiberzona.jpg', tags:'PHP, HTML', full_title:'www.forum.kiberzona.com.ua', full_desc:'Forum for online store kiberzona.com.ua. Simple Machines Forum'},
  {key:"7", title:'charmed.narod.ru', desc:'Charmed', link:'http://charmed.narod.ru', img:'charmed.jpg', tags:'Drupal, PHP, HTML, Website design, logo', full_title:'charmed.narod.ru', full_desc:'Website design, logo'},
  {key:"8", title:'www.olimpiec.od.ua', desc:'Olimpiec', link:'http://www.olimpiec.od.ua', img:'olimpiec.jpg', tags:'Drupal, PHP, HTML, Website design, logo', full_title:'www.olimpiec.od.ua', full_desc:'Web - portal about shvsm OLYMPIAN. Sports and achievements'},
  {key:"9", title:'www.elit-print.od.ua', desc:'Xerox', link:'http://www.elit-print.od.ua', img:'xerox.jpg', tags:'PHP, HTML, Website design, logo', full_title:'www.elit-print.od.ua', full_desc:'The Web site of the official dealer of the copier. Sale of copiers and consumables.'},
  {key:"10", title:'www.elit-print.od.ua', desc:'HollyWood Literary contest', link:'http://hollywood.elvos-test.com', img:'holiwood.jpg', tags:'Joomla, PHP, HTML, Website design, logo', full_title:'hollywood.elvos-test.com', full_desc:'Multilingual Web site for a Hollywood literary contest.'},
  {key:"11", title:'resto.od.ua', desc:'ResTo - lunch in the office', link:'http://resto.od.ua', img:'resto.jpg', tags:'Drupal, PHP, HTML, Website design, logo', full_title:'resto.od.ua', full_desc:'Web - site lunch order in the office. Provides the ability to pre-order both online and for the whole week'},
  {key:"12", title:'www.airticketmarket.com', desc:'Air Ticket Market (ATM)', link:'http://www.airticketmarket.com', img:'airticketmarket.jpg', tags:'Drupal, PHP, HTML, Website design, logo', full_title:'www.airticketmarket.com', full_desc:'The Web site of a travel Agency in Canada. Provides the ability to order plane tickets, booking hotel and car'},
  {key:"13", title:'www.elvos.com.ua', desc:'elvos web-studio', link:'http://www.elvos.com.ua', img:'elvos.jpg', tags:'Drupal, PHP, HTML, website Design, logo', full_title:'www.elvos.com.ua', full_desc:'New website design Web Studio Elvos'},
  {key:"14", title:'www.luxmenu.com.ua', desc:'Suite cafe Menu', link:'http://www.luxmenu.com.ua', img:'luxmenu.jpg', tags:'Drupal, PHP, HTML, Website design, logo', full_title:'www.luxmenu.com.ua', full_desc:'Suite café is a café that offers food delivery to the offices of the city of Odessa'},
  {key:"15", title:'baluk.com.ua', desc:'LDS Baluk V. A.', link:'http://baluk.com.ua', img:'baluk.jpg', tags:'Drupal, PHP, HTML, Website design, logo, flash movie', full_title:'baluk.com.ua', full_desc:'Online business card workshop SPD Baluk V. A.'},
  {key:"16", title:'netbuy.com.ua', desc:'Shop NetBuy.com.ua', link:'http://www.netbuy.com.ua', img:'netbuy.jpg', tags:'Drupal, PHP, HTML, Website design, logo', full_title:'www.netbuy.com.ua', full_desc:'NetBuy Internet shop of household appliances.'},
  {key:"17", title:'segolo.com', desc:'Sergey Golovan', link:'http://segolo.com', img:'segolo.jpg', tags:'Wordpress, PHP, HTML, Website design, logo', full_title:'segolo.com', full_desc:'Personal blog wedding videographer Sergei Golovan'},
  {key:"18", title:'tu.odessa.ua', desc:'The online store of the company TehnoYuG', link:'http://tu.odessa.ua', img:'tuodessa.jpg', tags:'PHP, HTML, Website design, logo, Administration', full_title:'tu.odessa.ua', full_desc:'The company "TehnoYuG" has 25 years of experience in the stationery market of Ukraine. Main areas: wholesale trade, complex maintenance of offices, supply of office supplies for the South region of Ukraine.'},
  {key:"19", title:'opt.tu.odessa.ua', desc:'System maintenance regular customers TehnoYuG', link:'http://opt.tu.odessa.ua', img:'opt.jpg', tags:'Opencart, PHP, HTML, Website design, logo, Administration', full_title:'opt.tu.odessa.ua', full_desc:'The company "TehnoYuG" has 25 years of experience in the stationery market of Ukraine. Main areas: wholesale trade, complex maintenance of offices, supply of office supplies for the South region of Ukraine.'},
  {key:"20", title:'fashion-butik.com.ua', desc:'Fashion boutique - women`s clothing wholesale from the manufacturer', link:'http://fashion-butik.com.ua', img:'fashion.jpg', tags:'Opencart, PHP, HTML, Website design', full_title:'fashion-butik.com.ua', full_desc:'Fashion boutique - women`s clothing wholesale from the manufacturer'},
  {key:"21", title:'moda-italia.com.ua', desc:'MODA ITALIA textiles - exclusive fabric wholesale', link:'http://moda-italia.com.ua', img:'moda.jpg', tags:'Opencart, PHP, HTML, Website design', full_title:'moda-italia.com.ua', full_desc:'MODA ITALIA textiles - exclusive fabric wholesale'},
  {key:"22", title:'www.tigraiko.com.ua', desc:'Internet shop of children`s toys', link:'http://www.tigraiko.com.ua', img:'tigraiko.jpg', tags:'PHP, HTML, Website design', full_title:'www.tigraiko.com.ua', full_desc:'Internet shop of children`s toys and children`s clothing. Tiger and Co. Kiev'},
  {key:"23", title:'gemforest.com.ua', desc:'Shop GEMFOREST', link:'http://gemforest.com.ua', img:'gemforest.jpg', tags:'Opencart, PHP, HTML, Website design', full_title:'gemforest.com.ua', full_desc:'Shop precious and semi-precious stones GEMFOREST'},
  {key:"24", title:'barbacoa.com.ua', desc:'The website of the restaurant Barbacoa', link:'http://barbacoa.com.ua', img:'barbacoa.jpg', tags:'Drupal, PHP, HTML, Website design', full_title:'barbacoa.com.ua', full_desc:'The website of the restaurant Barbacoa'},
  {key:"24", title:'sunny-kids.com.ua', desc:'Sunny kids shop children`s clothes', link:'http://sunny-kids.com.ua', img:'kids.jpg', tags:'Opencart, PHP, HTML, Website design', full_title:'sunny-kids.com.ua', full_desc:'Sunny kids shop children`s clothes'},
  {key:"25", title:'akumservice.od.ua', desc:'Shop batteries', link:'http://akumservice.od.ua', img:'akumservice.jpg', tags:'Opencart, PHP, HTML, Website design', full_title:'akumservice.od.ua', full_desc:'Shop batteries'},
  {key:"26", title:'club.citrus.ua', desc:'Loyalty program customers Citrus', link:'http://club.citrus.ua', img:'club.jpg', tags:'Bitrix, PHP, HTML, Website design', full_title:'club.citrus.ua', full_desc:'Loyalty program customers Citrus'},
  {key:"27", title:'m.citrus.ua', desc:'Mobile version of the website Citrus', link:'http://m.citrus.ua', img:'m.jpg', tags:'Bitrix, PHP, HTML', full_title:'m.citrus.ua', full_desc:'Mobile version of the website Citrus and applications for android/apple application development ua.citrus.app.shop / citrus.app.shop (phoneGap)'},
  {key:"29", title:'www.planetaigr.com', desc:'Internet-shop of Board games', link:'http://www.planetaigr.com', img:'planeta.jpg', tags:'Drupal, PHP, HTML', full_title:'www.planetaigr.com', full_desc:'Internet-shop of Board games'},
  {key:"30", title:'supermaika.ua', desc:'Online shop cool t-shirts', link:'http://supermaika.ua', img:'supermaika.jpg', tags:'PHP, HTML, Smarty', full_title:'supermaika.ua', full_desc:'Online shop cool t-shirts'},
  {key:"31", title:'lifon.com.ua', desc:'Online lingerie store', link:'http://lifon.com.ua', img:'lifon.jpg', tags:'PHP, HTML, Smarty', full_title:'lifon.com.ua', full_desc:'Online lingerie store'},
  {key:"32", title:'metroshop.com.ua', desc:'Online store "MetroShop"', link:'http://metroshop.com.ua', img:'metroshop.jpg', tags:'PHP, HTML, Smarty', full_title:'metroshop.com.ua', full_desc:'Online store "MetroShop"'},
  {key:"33", title:'www.behappy.kh.ua', desc:'Be Happy - online store cool original gifts', link:'http://www.behappy.kh.ua', img:'behappy.jpg', tags:'PHP, HTML', full_title:'www.behappy.kh.ua', full_desc:'Be Happy - online store cool original gifts'},
  {key:"34", title:'creativemama.com.ua', desc:'Online shop for pregnant and lactating mothers CreativeMama', link:'http://creativemama.com.ua', img:'creativemama.jpg', tags:'Wordpress, PHP, HTML', full_title:'creativemama.com.ua', full_desc:'Online shop for pregnant and lactating mothers CreativeMama'},
  {key:"35", title:'cabinet.ua', desc:'Online store business gifts and accessories', link:'http://cabinet.ua', img:'cabinet.jpg', tags:'PHP, HTML, Smarty', full_title:'cabinet.ua', full_desc:'Online store business gifts and accessories'},
  {key:"36", title:'oddi.com.ua', desc:'ODDI Official online store of manufacturer of women`s clothing', link:'http://oddi.com.ua', img:'oddi.jpg', tags:'Opencart, PHP, HTML', full_title:'oddi.com.ua', full_desc:'ODDI the Official online store of manufacturer of women`s clothing'},
  {key:"37", title:'komodnik.com', desc:'Online fashion jewelry store', link:'http://komodnik.com', img:'komodnik.jpg', tags:'Opencart, PHP, HTML', full_title:'komodnik.com', full_desc:'Online fashion jewelry store'},
  {key:"38", title:'v7dostupno.com', desc:'Shop dresses and costumes', link:'http://v7dostupno.com', img:'v7dostupno.jpg', tags:'Wordpress, PHP, HTML', full_title:'v7dostupno.com', full_desc:'Shop dresses and costumes'},
  {key:"39", title:'m-lider.net.ua', desc:'Online shop mattresses and accessories for sleeping', link:'http://m-lider.net.ua/', img:'mlider.jpg', tags:'Joomla, PHP, HTML', full_title:'m-lider.net.ua', full_desc:'Online shop mattresses and accessories for sleeping'},
  {key:"40", title:'pracht-ensemble.com', desc:'The website pracht ensemble-ensemble', link:'http://pracht-ensemble.com', img:'pracht.jpg', tags:'Wordpress, PHP, HTML', full_title:'pracht-ensemble.com', full_desc:'The website pracht ensemble-ensemble'},
  {key:"41", title:'megatron.in.ua', desc:'Online electronics store', link:'http://megatron.in.ua', img:'megatron.jpg', tags:'Magento, PHP, HTML', full_title:'megatron.in.ua', full_desc:'Online electronics store'},
  {key:"42", title:'www.inguzoil.com.ua', desc:'The website of the company PE Ingus oil', link:'http://www.inguzoil.com.ua', img:'inguzoil.jpg', tags:'Drupal, PHP, HTML', full_title:'www.inguzoil.com.ua', full_desc:'The website of the company PE Ingus oil'},
  {key:"43", title:'www.powerquote.se', desc:'Powerquote this is great application for quotes & agreements.', link:'https://www.powerquote.se/', img:'powerquote.jpg', tags:'WA-framework, PHP, HTML', full_title:'www.powerquote.se', full_desc:'Powerquote this is great application for quotes & agreements. Save time and money, improve your quotes & agreements, template-based cloud service, digital sign-up and real-time tracking'},
  {key:"44", title:'caretia.se', desc:'Site for Sweden cleaning company', link:'https://caretia.se/', img:'caretia.jpg', tags:'WA-framework, PHP, HTML', full_title:'caretia', full_desc:'Site for Sweden cleaning company'},
  {key:"45", title:'Ggarbetsmiljo', desc:'Site for Sweden company', link:'https://system.ggarbetsmiljo.se', img:'grogrund.jpg', tags:'WA-framework, PHP, HTML', full_title:'grogrund', full_desc:'Site for Sweden company'},
  {key:"46", title:'Hela', desc:'Site for Sweden company', link:'https://system.hela.se/', img:'helaform.jpg', tags:'WA-framework, PHP, HTML', full_title:'hela', full_desc:'Site for Sweden company'},
  {key:"47", title:'ramenvalves.com', desc:'Site for Sweden valve repair services offered', link:'http://ramenvalves.com/', img:'ramen.jpg', tags:'Wordpress, PHP, HTML', full_title:'ramen', full_desc:'Site for Sweden valve repair services offered'},
  {key:"48", title:'ZmartBag', desc:'Shopping just got smarter. Save products from your favorite online shops.', link:'https://zmartbag.com', img:'zmartbag.png', tags:'WA-framework, PHP, HTML', full_title:'ZmartBag', full_desc:'Shopping just got smarter. Save products from your favorite online shops.'},
  {key:"49", title:'lattviktsmotor', desc:'Lättviktsmotor | Fritid, skog och trädgård, online och i butik', link:'https://www.lattviktsmotor.se/', img:'lattviktsmotor.png', tags:'WA-framework, PHP, HTML', full_title:'ZmartBag', full_desc:'Lättviktsmotor | Fritid, skog och trädgård, online och i butik'},
  {key:"50", title:'Enklare', desc:'Låna pengar online med Enklare', link:'https://enklare.se', img:'enklare.png', tags:'Laravel, Vuejs', full_title:'Enklare', full_desc:'Låna pengar online med Enklare'},
  {key:"51", title:'Sleepeasy', desc:'Sleepeasy Home Healthcare Online Shop', link:'https://www.shop.sleepeasy.philips.com.au', img:'sleepeasy.png', tags:'Magento', full_title:'Sleepeasy', full_desc:'Sleepeasy Home Healthcare Online Shop'},
  {key:"52", title:'Oral-B Professional', desc:'Oral-B Professional | Show', link:'https://survey.oralbpro.eu/', img:'oralbpro.png', tags:'WA-framework, PHP, Vuejs', full_title:'Oral-B Professional', full_desc:'Oral-B Professional | Show'},
  {key:"53", title:'knacka.liberalerna.se', desc:'Map prototype for liberalerna', link:'https://knacka.liberalerna.se/', img:'knacka.png', tags:'WA-framework, PHP, HTML', full_title:'Map prototype for liberalerna', full_desc:'Map prototype for liberalerna'},
  {key:"54", title:'Eckerö Linjen', desc:'Eckerö Linjen tickets', link:'https://www.eckerolinjen.se', img:'eckero.png', tags:'Wordpress, PHP, HTML', full_title:'Eckerö Linjen tickets', full_desc:'Eckerö Linjen tickets'},
  {key:"55", title:'foretagsgalan', desc:'Företagsgalan - Roslagens företagsgala', link:'https://www.foretagsgalan.se', img:'foretagsgalan.png', tags:'Wordpress, PHP, HTML', full_title:'Företagsgalan - Roslagens företagsgala', full_desc:'Företagsgalan - Roslagens företagsgala'},
  {key:"56", title:'L.A.P.T.I', desc:'L.A.P.T.I - fashionable and comfortable shoes for women, men, children shoes and accessories', link:'https://lapti.ua/', img:'lapti.png', tags:'Bitrix, PHP, HTML', full_title:'L.A.P.T.I', full_desc:'L.A.P.T.I - fashionable and comfortable shoes for women, men, children shoes and accessories'},
  {key:"57", title:'VRC Car rental', desc:'VRC Car hire | rental and car hire in Odessa', link:'https://vrc.com.ua/', img:'vrc.png', tags:'WP, HTML', full_title:'VRC Car rental', full_desc:'VRC Car hire | rental and car hire in Odessa'},
  {key:"58", title:'CreativeMama', desc:'Online shop for pregnant and lactating mothers CreativeMama in Ukraine', link:'https://creativemama.com.ua/', img:'creativemama.png', tags:'WP, HTML', full_title:'CreativeMama', full_desc:'Online shop for pregnant and lactating mothers CreativeMama in Ukraine'},
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function drawItems(catalog){
  var cat_items = modal_item = '';
  for(i in catalog){
      cat_items +='<div class="columns portfolio-item"><div class="item-wrap"><a href="#modal-'+catalog[i]['key']+'" title=""><img alt="" src="images/portfolio/'+catalog[i]['img']+'"><div class="overlay"><div class="portfolio-item-meta"><h5>'+catalog[i]['title']+'</h5><p>'+catalog[i]['tags']+'</p><p>'+catalog[i]['desc']+'</p></div></div><div class="link-icon"><i class="icon-plus"></i></div></a></div></div>';
      modal_item +='<div id="modal-'+catalog[i]['key']+'" class="popup-modal mfp-hide"> <img class="scale-with-grid" src="images/portfolio/modals/'+catalog[i]['img']+'" alt="" /><div class="description-box"> <h4>'+catalog[i]['full_title']+'</h4> <p>'+catalog[i]['full_desc']+'</p> <span class="categories"><i class="fa fa-tag"></i>'+catalog[i]['tags']+'</span></div><div class="link-box"><a target="_blank" href="'+catalog[i]['link']+'">Live</a><a class="popup-modal-dismiss">Close</a></div></div>';
  }

  $('#portfolio-wrapper').append(cat_items);
  $('#ModalPopup').append(modal_item);
}

catalog = shuffleArray(catalog);

var i,j,jj=0,new_array=[],temparray,chunk = 8;
for (i=0,j=catalog.length; i<j; i+=chunk) {
    temparray = catalog.slice(i,i+chunk);
    new_array[jj] = temparray;
    jj++;
}

drawItems(new_array[0]);

$('body').on('click', '.load_more', function(e) {
  e.preventDefault();
  drawItems(new_array[more++]);
  if(more==new_array.length){
    $('.load_more').hide();
  }
});