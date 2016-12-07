$(document).ready(function() {
    "use strict";
   (function() {
       var getAllNavItems = document.querySelectorAll('.catalog-links > a'),
           getHamburgerItems = document.querySelectorAll("ul#hamburgerMenuList > li");

        $("#catalog-links-").wrapInner("<ul class=bt-nav-menu></ul>");              
        $("#catalog-links- ul").css({
            display: "flex",
            listStyleType: "inherit",
            marginBefore: "inherit",
            marginAfter: "inheirt",
            marginStart: "inherit",
            marginEnd: "inherit",
            paddingStart: "inherit",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            marginLeft: "0",
            marginRight: "0"
        });
       function createSubNav(currentIndex) {
                var subNav,
                    colIn = currentIndex - 1;//This variable is the current sub-nav with columns
                                  //Ex: colIn 0 will be women subnav, because that's the very first subnav with columns
                //After the 6th listitem a style is applied to each item, to move its subNav, to avoid compression
                if (currentIndex >= 4) {
                    var createSpace = 20;

                    for (var q = currentIndex; q > 7; q--) {
                        createSpace -= 4;
                    }
                    subNav = $('<div class="bt-sub-nav sub-nav-'+colIn+'"></div>').insertAfter($(getAllNavItems[currentIndex])).css('right', createSpace+'%');
                } else {
                    subNav = $('<div class="bt-sub-nav sub-nav-'+colIn+'"></div>').insertAfter($(getAllNavItems[currentIndex]));
                }

        //---After the sub-nav div is created, everything within it is created underneath this comment.--------
                var subNavHeading = $(getHamburgerItems[currentIndex]).find("label:first").text().trim(),//sub-nav Heading
                getWomenList = $(getHamburgerItems[currentIndex]).find("ul:first").children();//Children of Women Listitem 
                $(subNav).append('<h2 class="bt-nav-group-topheading">'+subNavHeading +'</h2>');

                    for (var x = 2; x < getWomenList.length; x++) {
                        //creates the first column with a title

                        var classString = x + 'col';
                        $(subNav).append('<ul class="bt-sub-nav-group '+classString+'"></ul>'); //Column Container
                        $(getWomenList[x]).find('ul:first').children().each(function(index, value) { //All top level items for each sub category
                               if ($(this).children('ul').length) { //checks if a top level item has another list, if it does
                                                                    //it will get the first listitem anchor of that second list
                                 $('.sub-nav-'+colIn+' .'+classString+'').append('<li class="subcata-item"><a class="subcata-item-link" href="'+$(value).children('ul:first').find('li:first a').attr('href')+'" onclick="'+$(value).children('ul:first').find('li:first a').attr('onclick')+'">'+ $(value).find('label:first').text().trim() +'</a></li>');
                               } 

                               if ($(this).children('a').length) {//checks if a top level item doesn't have a inner list
                                 $('.sub-nav-'+colIn+' .'+classString+'').append('<li class="subcata-item"><a class="subcata-item-link" href="'+$(value).children('a').attr('href')+'" onclick="'+$(value).children('a').attr('onclick')+'">'+$(value).children('a').text().trim()+'</a></li>');
                               }
                        });
                        
                        //Splitter
                        //Adds the title of the category that was newly created
                        //Adds a promo container to the end of column list
                        Splitter(colIn, classString, getWomenList, x);
                        if (x + 1 >= getWomenList.length) {
                            $('<ul class="bt-sub-nav-group-promo">' +
   ' <picture class="gw_card_4up">' +
		'<a href="/sc1/query/gift50rtw/&facet=price_USD%253A%2528%257B*%2b49.99%257D%2b49.99%2529&orderBy=7">' +
			'<img alt="Gifts Under $50" src="/wcsstore/BonTon/images/categories/women/2016/11/gateway/11_13_gw_women_16-09.jpg">' +
		'</a>' +
	'</picture>' +
                              '</ul>').insertAfter('.sub-nav-'+colIn+' .bt-nav-group-topheading');
                            $('.sub-nav-'+colIn+' .bt-sub-nav-group-promo').prepend('<li class="bt-nav-group-heading">'+'<h2>Special Sales</h2>'+'</li>');
                        }
                    }
                    
                    //Merger
                    Merger(colIn);
                    MergeSplitter(colIn);
                    //check if col has more then two heading classes if so remove every heading class that is after the second.                 
                    //Merger Splitter

           }
       function Splitter(colIn, classString, getWomenList, x) {
            $('.sub-nav-'+colIn+' .'+classString+'').each(function(index, subNavCol) {
                if ($(subNavCol).children().length > 13) {
                    var currentCol = index + 2;
                    $(subNavCol).wrap('<div class="sub-nav-large-group '+x+'group"></div>');
                    $('<ul class="bt-sub-nav-group '+currentCol+'col split"></ul>').insertAfter(subNavCol);
                    $(subNavCol).children().each(function(currentInd, child) {
                        if (currentInd > 13) {
                            $(child).clone().appendTo('.sub-nav-'+colIn+' .'+currentCol+'col.split');
                            $(child).remove();
                        }
                    });
                    $('.sub-nav-'+colIn+' .'+x+'group').prepend('<li class="bt-nav-group-heading">'+'<h2>'+$(getWomenList[x]).find("label:first").text().trim()+'</h2>'+'</li>');
                } else {
                    $('.sub-nav-'+colIn+' .'+classString+'').prepend('<li class="bt-nav-group-heading">'+'<h2>'+$(getWomenList[x]).find("label:first").text().trim()+'</h2>'+'</li>');
                }
            });
       }
       function Merger(colIn) {
                    var isMerge = false;
                    var mergedCol;
                    $('.sub-nav-'+colIn+' ul:not(.merge, .split, .bt-sub-nav-group-promo)').each(function(index, subNavCol) {
                       var currentCol = index + 2;

                       if ($(subNavCol).children().length < 6) {
                           if (!isMerge) {
                                $('<ul class="bt-sub-nav-group '+currentCol+'col merge"></ul>').insertAfter(subNavCol);
                               mergedCol = currentCol;
                               isMerge = true;
                           }
                           $(subNavCol).children().each(function(currentInd, child) {
                                $(child).clone().appendTo('.sub-nav-'+colIn+' .'+mergedCol+'col.merge');
                           });
                           $(subNavCol).remove();
                       }
                        if ($('.sub-nav-'+colIn+' ul.merge').children < 1) {
                            $('.sub-nav-'+colIn+' ul.merge').remove();
                        }
                        if ($('.sub-nav-'+colIn+' ul.split').children < 1) {
                            $('.sub-nav-'+colIn+' ul.split').remove();
                        }
                    });
       }
       function MergeSplitter(colIn) {
                    var mergeSplitter = false;
                    $('.sub-nav-'+colIn+' ul.merge').each(function(index, subNavCol) {
                      var currentCol = index + 2;
                      var totalHeadings = document.querySelectorAll('.sub-nav-'+colIn+' ul.merge .bt-nav-group-heading');
                       $(totalHeadings).each(function(index, heading) {
                           if ($(heading).text() === "") {
                               $(heading).remove();
                           } 
                        });
                        
                       totalHeadings = document.querySelectorAll('.sub-nav-'+colIn+' ul.merge .bt-nav-group-heading');
                       if (totalHeadings.length > 2) {
                           $(totalHeadings).each(function(index, heading) {
                               var getNextHeading = index + 1;
                               if (index > 1) {
                                   if (!mergeSplitter) {
                                       $('<ul class="bt-sub-nav-group '+currentCol+'col mergesplitter'+index+'"></ul>').insertAfter(subNavCol);
                                       mergeSplitter = true;
                                   }
                                   $(heading).clone().appendTo('.sub-nav-'+colIn+' .'+currentCol+'col.mergesplitter'+index+'');
                                   $(heading).nextUntil('.bt-nav-group-heading:eq('+getNextHeading+')').clone().appendTo('.sub-nav-'+colIn+' .'+currentCol+'col.mergesplitter'+index+'');
                                   $(heading).nextUntil('.bt-nav-group-heading:eq('+getNextHeading+')').remove();
                                   
                                   if ($(heading).next().hasClass('.bt-nav-group-heading')) {
                                       console.log('inside has class block');
                                       $(heading).next().appendTo('.sub-nav-'+colIn+' .'+currentCol+'col.mergesplitter'+index+'');
                                       
                                       $('.bt-nav-group-heading:eq('+getNextHeading+')').nextUntil('.bt-nav-group-heading').clone().appendTo('.sub-nav-'+colIn+' .'+currentCol+'col.mergesplitter'+index+'');
                                       $(heading).remove();
                                       $(heading).find('.bt-nav-group-heading:eq('+getNextHeading+')').remove();
                                   } else {
                                      $(heading).remove();
                                   }
                                   
                               }
                               index > 2 ? mergeSplitter = false : false;
                           });
                       }
                    });
       }
       //settimeout is added because featured brands loads after the DOM
       setTimeout(function() {
            for (var i = 0; i < getAllNavItems.length; i++) {
                switch($(getAllNavItems[i]).attr('href')) {
                        case "/sc1/brands/": $("<div class='bt-sub-nav sub-nav0'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                        case "/sc1/women/": createSubNav(i); break;
                        case "/sc1/shoes/": createSubNav(i); break;
                        case "/sc1/handbags-accessories/": createSubNav(i); break;
                        case "/sc1/jewelry-watches/": createSubNav(i); break;
                        case "/sc1/beauty-fragrance/": createSubNav(i); break;
                        case "/sc1/juniors/": createSubNav(i); break;
                        case "/sc1/men/": createSubNav(i); break;
                        case "/sc1/baby-kids/": createSubNav(i); break;
                        case "/sc1/bed-bath/": createSubNav(i); break;
                        case "/sc1/home/furniture-24382/": $("<div class='bt-sub-nav sub-nav10'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                        case "/sc1/home/": createSubNav(i); break;
                        case "/sc1/clearance/": $("<div class='bt-sub-nav sub-nav12'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                        default: break;
                }
            }
           
           //Wraps every pair of elements within the first ul of catalog-links in a li
           var $set = $('.catalog-links > ul').children();    
              for(var z = 0, len = $set.length; z < len; z +=2){
                  $set.slice(z, z+2).wrapAll('<li class="bt-nav-item"></li>');
              }
          //initialize MegaMenu
           $("#catalog-links-").accessibleMegaMenu({
                /* prefix for generated unique id attributes, which are required 
                   to indicate aria-owns, aria-controls and aria-labelledby */
                uuidPrefix: "accessible-megamenu",

                /* css class used to define the megamenu styling */
                menuClass: "bt-nav-menu", 

                /* css class for a top-level navigation item in the megamenu */
                topNavItemClass: "bt-nav-item",

                /* css class for a megamenu panel */
                panelClass: "bt-sub-nav",

                /* css class for a group of items within a megamenu panel */
                panelGroupClass: "bt-sub-nav-group",

                /* css class for the hover state */
                hoverClass: "hover",

                /* css class for the focus state */
                focusClass: "focus",

                /* css class for the open state */
                openClass: "open"
            });
       }, 200);
   })();
});
/*
<link href="/wcsstore/BonTon/text/categories/_shared/2016/11/css/main.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="/wcsstore/BonTon/text/categories/_shared/2016/11/js/jquery-accessibleMegeMenu.min.js"></script>
<script type="text/javascript" src="/wcsstore/BonTon/text/categories/_shared/2016/11/js/app.js"></script>
test -------------------
var getHamburgerItems = document.querySelectorAll("ul#hamburgerMenuList > li");
var getWomenList = $(getHamburgerItems[3]).find("ul:first").children();
var getAllNavItems = document.querySelectorAll('.catalog-links > a');
var colIn = 3;
var subNav = $('<div class="bt-sub-nav sub-nav-'+colIn+'"></div>').insertAfter($(getAllNavItems[2]));
$(getWomenList[2]).find('ul:first ul li:first a').attr('href'); gets the anchor of the nested list item under each catagory
*/