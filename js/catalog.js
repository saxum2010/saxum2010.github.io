var more=1;
var catalog = [
  {key:"1", title:'citrus.ua', desc:'Цитрус', img:'citrus.jpg', link:'http://www.citrus.ua', tags:'Bitrix, PHP, CentOs(administarator)', full_title:'citrus.ua', full_desc:'"Citrus"​ - the first Ukrainian company specialized corporate chains on gadgets and accessories, established in 2005.'},
  {key:"2", title:'www.fintotalizator.com', desc:'Финансовый тотализатор', link:'http://www.fintotalizator.com', img:'fintotalzator.jpg', tags:'PHP, HTML', full_title:'www.fintotalizator.com', full_desc:'Web - сайт финансового тотализатора.'},
  {key:"3", title:'www.usdtoto.com', desc:'USDtoto', link:'http://www.usdtoto.com', img:'usdtoto.jpg', tags:'PHP, HTML', full_title:'www.usdtoto.com', full_desc:'Партнерский web - сайт сайт финансового тотализатора.'},
  {key:"4", title:'fedorchuk.com.ua', desc:'Юрист Федорчук', link:'http://www.fedorchuk.com.ua', img:'fedorchuk.jpg', tags:'Drupal, PHP, HTML', full_title:'www.usdtoto.com', full_desc:'Web - сайт юриста'},
  {key:"5", title:'cigol.com.ua', desc:'Сигол строительная компания', link:'http://www.cigol.com.ua', img:'sigol.jpg', tags:'Drupal, PHP, HTML', full_title:'www.cigol.com.ua', full_desc:'Web - сайт строительной компании.'},
  {key:"6", title:'www.forum.kiberzona.com.ua', desc:'Форум Киберзоны', link:'http://www.forum.kiberzona.com.ua', img:'kiberzona.jpg', tags:'PHP, HTML', full_title:'www.forum.kiberzona.com.ua', full_desc:'Форум для интернет магазина kiberzona.com.ua. Simple Machines Forum'},
  {key:"7", title:'charmed.narod.ru', desc:'Charmed', link:'http://charmed.narod.ru', img:'charmed.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'charmed.narod.ru', full_desc:'Дизайн сайта, логотип'},
  {key:"8", title:'www.olimpiec.od.ua', desc:'Olimpiec', link:'http://www.olimpiec.od.ua', img:'olimpiec.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'www.olimpiec.od.ua', full_desc:'Web - портал о ШВСМ ОЛИМПИЕЦ. Спорт и достижения'},
  {key:"9", title:'www.elit-print.od.ua', desc:'Xerox', link:'http://www.elit-print.od.ua', img:'xerox.jpg', tags:'PHP, HTML, Дизайн сайта, логотип', full_title:'www.elit-print.od.ua', full_desc:'Web - сайт официального дилера фирмы ксерокс. Продажа ксероксов и расходных материалов.'},
  {key:"10", title:'www.elit-print.od.ua', desc:'HollyWood Литературный конкурс', link:'http://hollywood.elvos-test.com', img:'holiwood.jpg', tags:'Joomla, PHP, HTML, Дизайн сайта, логотип', full_title:'hollywood.elvos-test.com', full_desc:'Мультиязычный Web - сайт для Голливудского литературного конкурса.'},
  {key:"11", title:'resto.od.ua', desc:'ResTo - обеды в офис', link:'http://resto.od.ua', img:'resto.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'resto.od.ua', full_desc:'Web - сайт заказов обедов в офис. Предоставляет возможность заказа обеда как онлайн, так и на всю неделю'},
  {key:"12", title:'www.airticketmarket.com', desc:'Air Ticket Market (ATM)', link:'http://www.airticketmarket.com', img:'airticketmarket.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'www.airticketmarket.com', full_desc:'Web - сайт турагенства в Канаде. Предоставляет возможность заказа билетов на самолеты, заказа отелей и автомобилей'},
  {key:"13", title:'www.elvos.com.ua', desc:'elvos web-studio', link:'http://www.elvos.com.ua', img:'elvos.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'www.elvos.com.ua', full_desc:'Новый дизайн сайта Веб-студии Elvos'},
  {key:"14", title:'www.luxmenu.com.ua', desc:'Люкс Mеню кафе', link:'http://www.luxmenu.com.ua', img:'luxmenu.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'www.luxmenu.com.ua', full_desc:'Люкс Mеню кафе это кафе, которое предлагает услуги доставки еды в офисы города Одессы'},
  {key:"15", title:'baluk.com.ua', desc:'СПД Балюк В.А.', link:'http://baluk.com.ua', img:'baluk.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип, flash ролик', full_title:'baluk.com.ua', full_desc:'Сайт-визитка ремонтных мастерских СПД Балюк В.А.'},
  {key:"16", title:'netbuy.com.ua', desc:'Интернет магазин NetBuy.com.ua', link:'http://www.netbuy.com.ua', img:'netbuy.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта, логотип', full_title:'www.netbuy.com.ua', full_desc:'NetBuy это интернет магазин компьютерной и бытовой техники.'},
  {key:"17", title:'segolo.com', desc:'Сайт Cергея Головань', link:'http://segolo.com', img:'segolo.jpg', tags:'Wordpress, PHP, HTML, Дизайн сайта, логотип', full_title:'segolo.com', full_desc:'Персональный блог свадебного видеооператора Cергея Головань'},
  {key:"18", title:'tu.odessa.ua', desc:'Интернет-магазин компании ТехноЮг', link:'http://tu.odessa.ua', img:'tuodessa.jpg', tags:'PHP, HTML, Дизайн сайта, логотип, Администрирование', full_title:'tu.odessa.ua', full_desc:'Компания «ТЕХНОЮГ» имеет 25-летний опыт работы на канцелярском рынке Украины. Основные направления: оптовая торговля, комплексное обслуживание офисов, поставка канцелярских товаров по Южному региону Украины.'},
  {key:"19", title:'opt.tu.odessa.ua', desc:'Система обслуживания постоянных клиентов компании ТехноЮг', link:'http://opt.tu.odessa.ua', img:'opt.jpg', tags:'Opencart, PHP, HTML, Дизайн сайта, логотип, Администрирование', full_title:'opt.tu.odessa.ua', full_desc:'Компания «ТЕХНОЮГ» имеет 25-летний опыт работы на канцелярском рынке Украины. Основные направления: оптовая торговля, комплексное обслуживание офисов, поставка канцелярских товаров по Южному региону Украины.'},
  {key:"20", title:'fashion-butik.com.ua', desc:'Фешн бутик - женская одежда оптом от производителя', link:'http://fashion-butik.com.ua', img:'fashion.jpg', tags:'Opencart, PHP, HTML, Дизайн сайта', full_title:'fashion-butik.com.ua', full_desc:'Фешн бутик - женская одежда оптом от производителя'},
  {key:"21", title:'moda-italia.com.ua', desc:'MODA ITALIA textiles- эксклюзивная ткань оптом', link:'http://moda-italia.com.ua', img:'moda.jpg', tags:'Opencart, PHP, HTML, Дизайн сайта', full_title:'moda-italia.com.ua', full_desc:'MODA ITALIA textiles- эксклюзивная ткань оптом'},
  {key:"22", title:'www.tigraiko.com.ua', desc:'Интернет магазин детских игрушек', link:'http://www.tigraiko.com.ua', img:'tigraiko.jpg', tags:'PHP, HTML, Дизайн сайта', full_title:'www.tigraiko.com.ua', full_desc:'Интернет магазин детских игрушек и детской одежды. Тигра и Ко  Киев'},
  {key:"23", title:'gemforest.com.ua', desc:'Интернет магазин GEMFOREST', link:'http://gemforest.com.ua', img:'gemforest.jpg', tags:'Opencart, PHP, HTML, Дизайн сайта', full_title:'gemforest.com.ua', full_desc:'Интернет магазин драгоценных и полудрагоценных камней GEMFOREST'},
  {key:"24", title:'barbacoa.com.ua', desc:'Сайт ресторана Barbacoa', link:'http://barbacoa.com.ua', img:'barbacoa.jpg', tags:'Drupal, PHP, HTML, Дизайн сайта', full_title:'barbacoa.com.ua', full_desc:'Сайт ресторана Barbacoa'},
  {key:"24", title:'sunny-kids.com.ua', desc:'Солнечные детки   Интернет   магазин детских вещей', link:'http://sunny-kids.com.ua', img:'kids.jpg', tags:'Opencart, PHP, HTML, Дизайн сайта', full_title:'sunny-kids.com.ua', full_desc:'Солнечные детки   Интернет   магазин детских вещей'},
  {key:"25", title:'akumservice.od.ua', desc:'Интернет  магазин аккумуляторов', link:'http://akumservice.od.ua', img:'akumservice.jpg', tags:'Opencart, PHP, HTML, Дизайн сайта', full_title:'akumservice.od.ua', full_desc:'Интернет  магазин аккумуляторов'},
  {key:"26", title:'club.citrus.ua', desc:'Программа лояльности клиетов Цитрус', link:'http://club.citrus.ua', img:'club.jpg', tags:'Bitrix, PHP, HTML, Дизайн сайта', full_title:'club.citrus.ua', full_desc:'Программа лояльности клиетов Цитрус'},
  {key:"27", title:'m.citrus.ua', desc:'Мобильная версия сайта Цитрус', link:'http://m.citrus.ua', img:'m.jpg', tags:'Bitrix, PHP, HTML', full_title:'m.citrus.ua', full_desc:'Мобильная версия сайта Цитрус и приложения для android/apple разработка приложения ua.citrus.app.shop / citrus.app.shop (phoneGap)'},
  {key:"29", title:'www.planetaigr.com', desc:'Интернет-магазин настольных игр', link:'http://www.planetaigr.com', img:'planeta.jpg', tags:'Drupal, PHP, HTML', full_title:'www.planetaigr.com', full_desc:'Интернет-магазин настольных игр'},
  {key:"30", title:'supermaika.ua', desc:'Интернет-магазин прикольных футболок', link:'http://supermaika.ua', img:'supermaika.jpg', tags:'PHP, HTML, Smarty', full_title:'supermaika.ua', full_desc:'Интернет-магазин прикольных футболок'},
  {key:"31", title:'lifon.com.ua', desc:'Интернет-магазин нижнего белья', link:'http://lifon.com.ua', img:'lifon.jpg', tags:'PHP, HTML, Smarty', full_title:'lifon.com.ua', full_desc:'Интернет-магазин нижнего белья'},
  {key:"32", title:'metroshop.com.ua', desc:'Интернет-магазин "MetroShop"', link:'http://metroshop.com.ua', img:'metroshop.jpg', tags:'PHP, HTML, Smarty', full_title:'metroshop.com.ua', full_desc:'Интернет-магазин "MetroShop"'},
  {key:"33", title:'www.behappy.kh.ua', desc:'Be Happy - интернет магазин прикольных оригинальных подарков', link:'http://www.behappy.kh.ua', img:'behappy.jpg', tags:'PHP, HTML', full_title:'www.behappy.kh.ua', full_desc:'Be Happy - интернет магазин прикольных оригинальных подарков'},
  {key:"34", title:'creativemama.com.ua', desc:'Интернет магазин для беременных и кормящих мам CreativeMama', link:'http://creativemama.com.ua', img:'creativemama.jpg', tags:'Wordpress, PHP, HTML', full_title:'creativemama.com.ua', full_desc:'Интернет магазин для беременных и кормящих мам CreativeMama'},
  {key:"35", title:'cabinet.ua', desc:'Интернет магазин деловых подарков и аксессуаров', link:'http://cabinet.ua', img:'cabinet.jpg', tags:'PHP, HTML, Smarty', full_title:'cabinet.ua', full_desc:'Интернет магазин деловых подарков и аксессуаров'},
  {key:"36", title:'oddi.com.ua', desc:'ODDI Официальный интернет магазин производителя женской одежды', link:'http://oddi.com.ua', img:'oddi.jpg', tags:'Opencart, PHP, HTML', full_title:'oddi.com.ua', full_desc:'ODDI Официальный интернет магазин производителя женской одежды'},
  {key:"37", title:'komodnik.com', desc:'Интернет магазин бижутерии', link:'http://komodnik.com', img:'komodnik.jpg', tags:'Opencart, PHP, HTML', full_title:'komodnik.com', full_desc:'Интернет магазин бижутерии'},
  {key:"38", title:'v7dostupno.com', desc:'Интернет магазин платьев и костюмов', link:'http://v7dostupno.com', img:'v7dostupno.jpg', tags:'Wordpress, PHP, HTML', full_title:'v7dostupno.com', full_desc:'Интернет магазин платьев и костюмов'},
  {key:"39", title:'m-lider.net.ua', desc:'Интернет магазин матрасов и аксессуаров для сна', link:'http://m-lider.net.ua/', img:'mlider.jpg', tags:'Joomla, PHP, HTML', full_title:'m-lider.net.ua', full_desc:'Интернет магазин матрасов и аксессуаров для сна'},
  {key:"40", title:'pracht-ensemble.com', desc:'Сайт ансамбля pracht-ensemble', link:'http://pracht-ensemble.com', img:'pracht.jpg', tags:'Wordpress, PHP, HTML', full_title:'pracht-ensemble.com', full_desc:'Сайт ансамбля pracht-ensemble'},
  {key:"41", title:'megatron.in.ua', desc:'Интернет магазин электроники', link:'http://megatron.in.ua', img:'megatron.jpg', tags:'Magento, PHP, HTML', full_title:'megatron.in.ua', full_desc:'Интернет магазин электроники'},
  {key:"42", title:'www.inguzoil.com.ua', desc:'Сайт компании ЧП "Ингус Ойл"', link:'http://www.inguzoil.com.ua', img:'inguzoil.jpg', tags:'Drupal, PHP, HTML', full_title:'www.inguzoil.com.ua', full_desc:'Сайт компании ЧП "Ингус Ойл"'},
  {key:"43", title:'www.powerquote.se', desc:'Powerquote this is great application for quotes & agreements.', link:'https://www.powerquote.se/', img:'powerquote.jpg', tags:'WA-framework, PHP, HTML', full_title:'www.powerquote.se', full_desc:'Powerquote this is great application for quotes & agreements. Save time and money, improve your quotes & agreements, template-based cloud service, digital sign-up and real-time tracking'},
  {key:"44", title:'caretia.se', desc:'Site for Sweden cleaning company', link:'https://caretia.se/', img:'caretia.jpg', tags:'WA-framework, PHP, HTML', full_title:'caretia', full_desc:'Site for Sweden cleaning company'},
  {key:"45", title:'grogrund.westart.se', desc:'Site for Sweden company', link:'https://grogrund.westart.se', img:'grogrund.jpg', tags:'WA-framework, PHP, HTML', full_title:'grogrund', full_desc:'Site for Sweden company'},
  {key:"46", title:'helaform.westart.se', desc:'Site for Sweden company', link:'https://helaform.westart.se/', img:'helaform.jpg', tags:'WA-framework, PHP, HTML', full_title:'helaform', full_desc:'Site for Sweden company'},
  {key:"47", title:'ramenvalves.com', desc:'Site for Sweden valve repair services offered', link:'http://ramenvalves.com/', img:'ramen.jpg', tags:'Wordpress, PHP, HTML', full_title:'ramen', full_desc:'Site for Sweden valve repair services offered'},
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
      cat_items +='<div class="columns portfolio-item"><div class="item-wrap"><a href="#modal-'+catalog[i]['key']+'" title=""><img alt="" src="images/portfolio/'+catalog[i]['img']+'"><div class="overlay"><div class="portfolio-item-meta"><h5>'+catalog[i]['title']+'</h5><p>'+catalog[i]['desc']+'</p></div></div><div class="link-icon"><i class="icon-plus"></i></div></a></div></div>';
      modal_item +='<div id="modal-'+catalog[i]['key']+'" class="popup-modal mfp-hide"> <img class="scale-with-grid" src="images/portfolio/modals/'+catalog[i]['img']+'" alt="" /><div class="description-box"> <h4>'+catalog[i]['full_title']+'</h4> <p>'+catalog[i]['full_desc']+'</p> <span class="categories"><i class="fa fa-tag"></i>'+catalog[i]['tags']+'</span></div><div class="link-box"><a href="'+catalog[i]['link']+'">Details</a><a class="popup-modal-dismiss">Close</a></div></div>';
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
    // do whatever
}

drawItems(new_array[0]);

$('body').on('click', '.load_more', function(e) {
  e.preventDefault();
  drawItems(new_array[more]);
  more++;
  if(more==new_array.length){
    $('.load_more').hide();
  }
});