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
       /* Creates each SubNav for the Menu
       * @param currentIndex, Nav Item Number
       */
       function createSubNav(currentIndex) {
                var subNav,
                    colIn = currentIndex - 1;//This variable is the current sub-nav with columns
                                  //Ex: colIn 0 will be women subnav, because that's the very first subnav with columns
                //After the 6th listitem a style is applied to each item, to move its subNav, to avoid compression
                    subNav = $('<div class="bt-sub-nav sub-nav-'+colIn+'"></div>').insertAfter($(getAllNavItems[currentIndex]));

        //---After the sub-nav div is created, everything within it is created underneath this comment.--------
                var subNavHeading = $(getHamburgerItems[currentIndex]).find("label:first").text().trim(),//sub-nav Heading
                getWomenList = $(getHamburgerItems[currentIndex]).find("ul:first").children();//Children of Women Listitem 
                $(subNav).append('<h2 class="bt-nav-group-topheading"><a href="'+$(getWomenList[0]).children().attr('href')+'" onclick="'+$(getWomenList[0]).children().attr('onclick')+'">'+subNavHeading+'</a></h2>');

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
                            /*$('<ul class="bt-sub-nav-group-promo">' +
   ' <picture class="gw_card_4up">' +
		'<a href="/sc1/query/gift50rtw/&facet=price_USD%253A%2528%257B*%2b49.99%257D%2b49.99%2529&orderBy=7">' +
			'<img alt="Gifts Under $50" src="/wcsstore/BonTon/images/categories/women/2016/11/gateway/11_13_gw_women_16-09.jpg">' +
		'</a>' +
	'</picture>' +
                              '</ul>').insertAfter('.sub-nav-'+colIn+' .bt-nav-group-topheading');
                            $('.sub-nav-'+colIn+' .bt-sub-nav-group-promo').prepend('<li class="bt-nav-group-heading">'+'<h2>Special Sales</h2>'+'</li>');*/
                            $('.sub-nav-'+colIn+'').append('<ul class="bt-sub-nav-group-promo">' +
   ' <li><picture class="gw_card_4up">' +
		'<a href="/sc1/query/gift50rtw/&facet=price_USD%253A%2528%257B*%2b49.99%257D%2b49.99%2529&orderBy=7">' +
			'<img alt="Gifts Under $50" src="/wcsstore/BonTon/images/categories/women/2016/11/gateway/11_13_gw_women_16-09.jpg">' +
		'</a>' +
	'</picture></li>' +
                              '</ul>');
                            $('.sub-nav-'+colIn+' .bt-sub-nav-group-promo').prepend('<li class="bt-nav-group-heading"><h2>Special Sales</h2></li>');
                        }
                    }
                    
                    //Merger
                    Merger(colIn);
           
                    //check if col has more then two heading classes if so remove every heading class that is after the second.                 
                    //Merger Splitter
                    MergeSplitter(colIn);
           
                    Compressor(colIn);
                    
           if (screen.width < 1367 && screen.width > 436) {
                $('.sub-nav-'+colIn+'').append('<img alt="Close Button" src="/wcsstore/BonTon/images/categories/_shared/2016/10/ic_clear_black_48dp.png" class="bt-close-menu" width="64" height="64">');
                $('.sub-nav-'+colIn+' .bt-close-menu').css({position: 'absolute', right: 0, left: '94%', top: 0});
            }

           }
       /* Splits a Column in two, depending on if there are more then 13 items in a column
       * @param ColIn - Current Column Index
       * @param classString - Current Sub Category Column
       * @param getWomenList - Array of Sub Categories
       * @param x - An integer for retrieving an index from getWomenList
       */
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
      /* Creates a Column and merges each column that has less then 6 items in them
       * @param ColIn - Current Column Index
       */
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
      /* After Merge has happened, if there are more then two headings in a column it will split them in another.
       * @param ColIn - Current Column Index
       */
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
      /* Compresses Sub-Nav Width based on the amount of columns, and containers. It will also resize the unordered lists
       * @param ColIn - Current Column Index
       */
       function Compressor(colIn) {
            if (screen.width < 1067 && screen.width > 436) {
                if ($('.sub-nav-'+colIn+'').children('ul, div').length > 6) {
                    $('.sub-nav-'+colIn+'').css('width', '100%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '23%');
                }
                if ($('.sub-nav-'+colIn+'').children('ul, div').length <= 6) {
                    $('.sub-nav-'+colIn+'').css('width', '100%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
                }
                if ($('.sub-nav-'+colIn+'').children('ul, div').length < 5) {
                    $('.sub-nav-'+colIn+'').css('width', '100%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
                }
                if ($('.sub-nav-'+colIn+'').children('ul, div').length < 3) {
                    $('.sub-nav-'+colIn+'').css('width', '100%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
                }
                return false;
            } else {
                if ($('.sub-nav-'+colIn+'').children('ul, div').length < 7) {
                    $('.sub-nav-'+colIn+'').css('width', '100%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
                }
                if ($('.sub-nav-'+colIn+'').children('ul, div').length < 6) {
                    $('.sub-nav-'+colIn+'').css('width', '85%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '15%');
                }
                if ($('.sub-nav-'+colIn+'').children('ul, div').length < 5) {
                    $('.sub-nav-'+colIn+'').css('width', '75%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
                }
                if ($('.sub-nav-'+colIn+'').children('ul, div').length < 3) {
                    $('.sub-nav-'+colIn+'').css('width', '50%');
                    $('.sub-nav-'+colIn+' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
                }   
            }
       }
      /* Adds Support for Touch Events and click events to simulate touch screens accessability.
       * This allows the dropdown to adept to each enviornment, if stetched to different viewports as well.
       */
       function Adept() {
           getAllNavItems = document.querySelectorAll('.catalog-links > ul > li > a');
           var isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart");
            function applyOverlay() {
                if (!$('#nav-overlay').length) {        
                    $('<div id="nav-overlay"></div>').insertAfter('.catalog-links');
                    $('#nav-overlay').css({
                        position: 'absolute',
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'none',
                        backgroundColor: 'black',
                        opacity: '.5',
                        zIndex: 1
                    }).fadeIn(250);
                }

            }
            $(window).resize(function() {
               if ($('.bt-sub-nav').children('img').length > 1 && screen.width < 1367) {
                   $('.bt-sub-nav').children('img').each(function(index, value) {
                       if (index > 0) {
                           $(value).remove();
                       }
                   });
               } 
              for (var i = 0; i < getAllNavItems.length; i++) {
                   Compressor(i);
                  console.log('working for loop')
                   if (screen.width < 1367 && screen.width > 436) {
                        $('.sub-nav-'+i+'').append('<img alt="Close Button" src="/wcsstore/BonTon/images/categories/_shared/2016/10/ic_clear_black_48dp.png" class="bt-close-menu" width="64" height="64">');
                        $('.sub-nav-'+i+' .bt-close-menu').css({position: 'absolute', right: 0, left: '94%', top: 0});
                    }
                   if ($('.sub-nav-'+i+'').children('img').length > 0 && screen.width > 1367) {
                       $('.sub-nav-'+i+'').children('img').remove();
                   } 
              }
                    var removeAndApply = false,
                        saveHrefAttr = [],
                        tapCounter = 0,
                        currentValue = "empty",
                        previousValue = "empty",
                        tapedTwice = false;
                    if (!isTouch && screen.width < 1367 && screen.width > 436) {
                    $('.bt-sub-nav').css({
                           display: 'block',
                           maxHeight: '350px',
                           overflowY: 'scroll',
                           overflowX: 'hidden' 
                    });
                    if (!removeAndApply) {
                        $('.catalog-links > .bt-sub-nav > a').on('touchstart', function() {
                            location.href = $(this).attr('href');
                        });
                        $('.catalog-links > ul > li > a').each(function(index, value) {
                               saveHrefAttr[index] = $(value).attr('href');
                                $(value).attr('href', "#");
                        });
                       $('.bt-close-menu').on('click', function() {
                           $('.bt-sub-nav').next().removeClass('open');
                           $('.bt-nav-item').removeClass('open');
                           tapCounter = 0;
                       });
                        $('.catalog-links > ul > li > a').each(function(index, value) {
                           $(value).on("click", function(e) {
                               //apply class to object on very first tap
                               //if class is present on second tap tap counter = 1, remove it on tap counter 2
                               currentValue = $(value);
                               if (!$(value).hasClass('tapped') && !$(value).hasClass('open')) {
                                   $(value).addClass('tapped');
                                   
                                   applyOverlay();
                               }
                               if (!$(value).hasClass('tapped') && $(value).hasClass('open')) {
                                   $(value).addClass('tapped');
                                   
                                   applyOverlay();
                               }
                                if (tapCounter === 1 && $(value).hasClass('tapped') && $(value).hasClass('open')) {
                                    if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
                                        $(previousValue).removeClass('tapped');
                                        tapCounter = 2;
                                        $(currentValue).addClass('target');

                                        previousValue = $(value);
                                        return false;
                                    } else {
                                       $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                           $(link).hasClass('open') ? setTimeout(function() {$(link).next().removeClass('open')}, 100) : false;
                                           $(link).hasClass('open') ? setTimeout(function() {$(link).removeClass('open')}, 100) : false;
                                           setTimeout(function() {!$(link).hasClass('open') ? ($(link).removeClass('tapped'), $('#nav-overlay').fadeOut(250)) : false;}, 100);
                                       });

                                    }

                                    
                                }
                               if (tapCounter === 2 && $(value).hasClass('tapped')) {
                                    if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
                                        $(previousValue).removeClass('tapped');
                                        $('#nav-overlay').fadeIn(250);
                                        previousValue = currentValue;
                                        tapCounter = 1;
                                        return false;
                                    } 
                                    if ($(value).hasClass('target')) {
                                        setTimeout(function() {$(value).next().removeClass('open')}, 100);
                                        setTimeout(function() {$(value).removeClass('open')}, 100);
                                        $(value).removeClass('target');
                                    }
                                    $(value).hasClass('open') ? setTimeout(function() {$(value).next().removeClass('open')}, 100) : false;
                                    $(value).hasClass('open') ? setTimeout(function() {$(value).removeClass('open')}, 100) : false;
                                   $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                      $(link).hasClass('tapped') ? $(link).removeClass('tapped') : false;
                                   });
                                   $(value).addClass('tapped');
                                   
                                  if (!$(value).hasClass('open') && !$(value).siblings('div').hasClass('open')) {
                                      $('#nav-overlay').fadeOut(500);
                                  } else {
                                      $('#nav-overlay').fadeIn(250);
                                  }
                                   
                                   tapCounter = 0;
                               }
                               

                                if(!tapedTwice) {
                                    //_togglePanel.call(this, event, target.hasClass(this.settings.openClass));
                                    tapedTwice = true;
                                    tapCounter++;
                                    previousValue = $(value);
                                    setTimeout( function() { tapedTwice = false;  $(value).attr('href', "#");}, 300);
                                    return false;
                                }
                                //action on double tap goes below
                               e.stopPropagation();
                               e.preventDefault();
                               $(value).attr('href', saveHrefAttr[index]);
                                location.href = $(value).attr('href');
                           });
                        });
                        removeAndApply = true;
                        }
                }
                if (isTouch) {
                    if (screen.width < 1367 && screen.width > 436) {
                        if (!removeAndApply) {
                        $('.bt-sub-nav').css({
                               display: 'block',
                               maxHeight: '350px',
                               overflowY: 'scroll',
                               overflowX: 'hidden' 
                        });
                            $('.catalog-links > ul > li > a').each(function(index, value) {
                                   saveHrefAttr[index] = $(value).attr('href');
                                  $(value).attr('href', "#");
                            });
                            $('.catalog-links .bt-sub-nav > ul > li > a').on('touchstart', function() {
                                location.href = $(this).attr('href');
                            });
                            $('.catalog-links .bt-sub-nav > h2 > a').on('touchstart', function() {
                                location.href = $(this).attr('href');
                            });
                            $('.catalog-links .bt-sub-nav > div > ul > li > a').on('touchstart', function() {
                                location.href = $(this).attr('href');
                            });
                            $('.bt-close-menu').each(function(index, value) {
                                $(value).on('touchend', function(e) {
                                   $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                       $(link).hasClass('open') ? $(link).next().removeClass('open') : false;
                                       $(link).hasClass('open') ? $(link).removeClass('open') : false;
                                       !$(link).hasClass('open') ? $(link).removeClass('tapped') : false;
                                   });
                                    tapCounter = 0;
                                })
                            });
                            $('.catalog-links > ul > li > a').each(function(index, value) {
                                $(value).on('touchend', function(e) {
                                
                               if (!$(value).hasClass('tapped') && !$(value).hasClass('open')) {
                                   $(value).addClass('tapped');
                                   currentValue = $(value);
                                   
                                   applyOverlay();
                               }
                               if (!$(value).hasClass('tapped') && $(value).hasClass('open')) {
                                   $(value).addClass('tapped');
                                   currentValue = $(value);
                                   
                                   applyOverlay();
                               }
                                if (tapCounter === 1 && $(value).hasClass('tapped') && $(value).hasClass('open')) {
                                    if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
                                        $(previousValue).removeClass('tapped');
                                        tapCounter = 2;
                                        $(currentValue).addClass('target');
                                        previousValue = $(value);
                                        return false;
                                    } else {
                                       $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                           $(link).hasClass('open') ? $(link).next().removeClass('open') : false;
                                           $(link).hasClass('open') ? $(link).removeClass('open') : false;
                                           !$(link).hasClass('open') ? ($(link).removeClass('tapped'), $('#nav-overlay').fadeOut(250)) : false;
                                       });
                                    }

                                    
                                }
                               if (tapCounter === 2 && $(value).hasClass('tapped')) {
                                    if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
                                        $(previousValue).removeClass('tapped');
                                        $('#nav-overlay').fadeIn(250);
                                        previousValue = currentValue;
                                        tapCounter = 1;
                                        return false;
                                    } 
                                    if ($(value).hasClass('target')) {
                                        
                                        $(value).next().removeClass('open');
                                        $(value).removeClass('open');
                                        
                                        $(value).removeClass('target');
                                    }
                                    
                                   
                                   $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                      $(link).hasClass('tapped') ? $(link).removeClass('tapped') : false;
                                   });
                                   $(value).addClass('tapped');

                                  if (!$(value).hasClass('open') && !$(value).siblings('div').hasClass('open')) {
                                      $('#nav-overlay').fadeOut(500);
                                  } else {
                                      $('#nav-overlay').fadeIn(250);
                                  }
                                   
                                   tapCounter = 0;
                               }
                                    
                                    if(!tapedTwice) {
                                        tapedTwice = true;
                                        tapCounter++;
                                        previousValue = $(value);
                                        setTimeout( function() { tapedTwice = false;  $(value).attr('href', "#");}, 250, true);
                                        return false;
                                    }
                                    //action on double tap goes below
                                       e.stopPropagation();
                                       e.preventDefault();
                                       $(value).attr('href', saveHrefAttr[index]);
                                        location.href = $(value).attr('href');
                                 });
                            });
                            removeAndApply = true;
                            }
                         }
                    }
                    removeAndApply = false;
                if (screen.width > 1367) {
                    $('.catalog-links .bt-sub-nav > ul > li > a').off('touchstart');
                    $('.catalog-links .bt-sub-nav > h2 > a').off('touchstart');
                    $('.catalog-links .bt-sub-nav > div > ul > li > a').off('touchstart');
                    $('.catalog-links > ul > li > a').off('touchend');
                    $('.bt-close-menu').off('click');
                    $('.catalog-links > ul > li > a').off('click');
                    $('.catalog-links > .bt-sub-nav > a').on('touchstart');
                }
           });
           $(window).resize();
       }
       function addOverlayToMouseEvents() {
            $('.bt-nav-item > a').each(function(index, value) {

                      $(value).on('mouseover', function() {
                          setTimeout(function() {
                              if ($(value).siblings('div').hasClass('open') && !$('#nav-overlay').length) {
                                $('body').prepend('<div id="nav-overlay"></div>');
                                $('#nav-overlay').css({
                                    position: 'absolute',
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'none',
                                    backgroundColor: 'black',
                                    opacity: '.5',
                                    zIndex: 2
                                }).fadeIn(500);
                                 $('#nav-overlay').on('mouseenter', function() {
                                      setTimeout(function() {
                                        checkForOverlay(value);
                                      }, 260);
                                   })
                              }
                            if ($('#nav-overlay').length && $(value).siblings('div').hasClass('open')) {
                                $('#nav-overlay').fadeIn(500);
                            }
                          }, 600);

                        });
                      $('.bt-nav-menu').on('mouseleave', function() {
                          setTimeout(function() {
                             checkForOverlay(value);
                          }, 260);
                      });
                       $(value).siblings('div').on('mouseleave', function() {
                          setTimeout(function() {
                              checkForOverlay(value);
                          }, 260);
                      });

                   });
                   function checkForOverlay(listItem) {
                          if (!$(listItem).hasClass('open') && !$(listItem).siblings('div').hasClass('open')) {
                              $('#nav-overlay').fadeOut(500);
                          }
                   }
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
                        case "/clearance": $("<div class='bt-sub-nav sub-nav12'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
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
           addOverlayToMouseEvents();
           Adept();
       }, 200);
   })();
});
/*
<link href="/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/css/main.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/js/jquery-accessibleMegaMenu.js"></script>
<script type="text/javascript" src="/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/js/app.js"></script>
test -------------------
var getHamburgerItems = document.querySelectorAll("ul#hamburgerMenuList > li");
var getWomenList = $(getHamburgerItems[3]).find("ul:first").children();
var getAllNavItems = document.querySelectorAll('.catalog-links > a');
var colIn = 3;
var subNav = $('<div class="bt-sub-nav sub-nav-'+colIn+'"></div>').insertAfter($(getAllNavItems[2]));
$(getWomenList[2]).find('ul:first ul li:first a').attr('href'); gets the anchor of the nested list item under each catagory
*/