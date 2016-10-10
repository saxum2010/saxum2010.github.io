var more=1;
var catalog = [
  {key:"1", title:'citrus.ua', desc:'Цитрус', img:'citrus.jpg', link:'http://www.citrus.ua', tags:'PHP, Adiministrate',  full_title:'citrus.ua', full_desc:'"Citrus"​ - the first Ukrainian company specialized corporate chains on gadgets and accessories, established in 2005.'},
  {key:"2", title:'www.fintotalizator.com', desc:'Финансовый тотализатор', link:'http://www.fintotalizator.com', img:'fintotalzator.jpg', tags:'PHP, HTML', full_title:'www.fintotalizator.com', full_desc:'Web - сайт финансового тотализатора.'},
  {key:"3", title:'www.usdtoto.com', desc:'USDtoto', link:'http://www.usdtoto.com', img:'usdtoto.jpg', tags:'PHP, HTML', full_title:'www.usdtoto.com', full_desc:'Партнерский web - сайт сайт финансового тотализатора.'},
  {key:"4", title:'fedorchuk.com.ua', desc:'Юрист Федорчук', link:'http://www.fedorchuk.com.ua', img:'fedorchuk.jpg', tags:'PHP, Drupal, HTML', full_title:'www.usdtoto.com', full_desc:'Web - сайт юриста'},
  {key:"5", title:'cigol.com.ua', desc:'Сигол строительная компания', link:'http://www.cigol.com.ua', img:'sigol.jpg', tags:'PHP, Drupal, HTML', full_title:'www.cigol.com.ua', full_desc:'Web - сайт строительной компании.'},
  {key:"6", title:'www.forum.kiberzona.com.ua', desc:'Форум Киберзоны', link:'http://www.forum.kiberzona.com.ua', img:'kiberzona.jpg', tags:'PHP, HTML', full_title:'www.forum.kiberzona.com.ua', full_desc:'Форум для интернет магазина kiberzona.com.ua. Simple Machines Forum'},
  {key:"7", title:'charmed.narod.ru', desc:'Charmed', link:'http://charmed.narod.ru', img:'charmed.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'charmed.narod.ru', full_desc:'Дизайн сайта, логотип'},
  {key:"8", title:'www.olimpiec.od.ua', desc:'Olimpiec', link:'http://www.olimpiec.od.ua', img:'olimpiec.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'www.olimpiec.od.ua', full_desc:'Web - портал о ШВСМ ОЛИМПИЕЦ. Спорт и достижения'},
  {key:"9", title:'www.elit-print.od.ua', desc:'Xerox', link:'http://www.elit-print.od.ua', img:'xerox.jpg', tags:'PHP, HTML, Дизайн сайта, логотип', full_title:'www.elit-print.od.ua', full_desc:'Web - сайт официального дилера фирмы ксерокс. Продажа ксероксов и расходных материалов.'},
  {key:"10", title:'www.elit-print.od.ua', desc:'HollyWood Литературный конкурс', link:'http://hollywood.elvos-test.com', img:'holiwood.jpg', tags:'PHP, HTML, Joomla, Дизайн сайта, логотип', full_title:'hollywood.elvos-test.com', full_desc:'Мультиязычный Web - сайт для Голливудского литературного конкурса.'},
  {key:"11", title:'resto.od.ua', desc:'ResTo - обеды в офис', link:'http://resto.od.ua', img:'resto.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'resto.od.ua', full_desc:'Web - сайт заказов обедов в офис. Предоставляет возможность заказа обеда как онлайн, так и на всю неделю'},
  {key:"12", title:'www.airticketmarket.com', desc:'Air Ticket Market (ATM)', link:'http://www.airticketmarket.com', img:'airticketmarket.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'www.airticketmarket.com', full_desc:'Web - сайт турагенства в Канаде. Предоставляет возможность заказа билетов на самолеты, заказа отелей и автомобилей'},
  {key:"13", title:'www.elvos.com.ua', desc:'elvos web-studio', link:'http://www.elvos.com.ua', img:'elvos.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'www.elvos.com.ua', full_desc:'Новый дизайн сайта Веб-студии Elvos'},
  {key:"14", title:'www.luxmenu.com.ua', desc:'Люкс Mеню кафе', link:'http://www.luxmenu.com.ua', img:'luxmenu.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'www.luxmenu.com.ua', full_desc:'Люкс Mеню кафе это кафе, которое предлагает услуги доставки еды в офисы города Одессы'},
  {key:"15", title:'baluk.com.ua', desc:'СПД Балюк В.А.', link:'http://baluk.com.ua', img:'baluk.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип, flash ролик', full_title:'baluk.com.ua', full_desc:'Сайт-визитка ремонтных мастерских СПД Балюк В.А.'},
  {key:"16", title:'netbuy.com.ua', desc:'Интернет магазин NetBuy.com.ua', link:'http://www.netbuy.com.ua', img:'netbuy.jpg', tags:'PHP, HTML, Drupal, Дизайн сайта, логотип', full_title:'www.netbuy.com.ua', full_desc:'NetBuy это интернет магазин компьютерной и бытовой техники.'},
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