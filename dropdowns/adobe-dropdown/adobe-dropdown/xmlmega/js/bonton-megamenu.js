

// JavaScript MegaMenu
// By Kyle Orlinski
// 1/20/2017
// Version 0.8.4.0
// XML Mega Menu

/*
  Shortened detectIE function even shorter
  Removed NonTouch function under Adept function
  Adding more cache selectors and rewrote the for loop that wraps the link and subnav together

  To-Do:

  Get Featuredbrands for BeautyandFragrance
*/
$(document).ready(function() {
    "use strict";
    function detectIE() {
      var browserVersion = navigator.userAgent,
      //sole purpose is to detect a version of IE, no DOM manipulation is based off a version.
          msie = browserVersion.indexOf('MSIE '),
          trident = browserVersion.indexOf('Trident/'),
          edge = browserVersion.indexOf('Edge/');

      if (msie > 0 || trident > 0 || edge > 0) return true;

      // other browser
      return false;
    }

    (function() {
        var getAllNavItems = document.querySelectorAll('.catalog-links > a'),
            btSubIndex = 0, // Index to keep track of Sub Nav, for Inserted featuredbrands
                            // Starts at 0 because it gets incremented in Featurebrands Function.
            allXMLData;
        /* InsertXML Creates the drop down menus for the Artemis Menu
         * @param xmlPath - Gets xml that fits a category format
         */
        function InsertXML(xmlPath) {
            var subNav,
                colIn;

            function createTopHeadingSubNav(value, getAllNavItems, index) {

                var getSubCategory = $(value),
                    subNavHeading = getSubCategory.find("title:first text").text(),
                    shopAllHeading = getSubCategory.find('shopall:first text').text(); //sub-nav Heading

                subNav = $('<div class="bt-sub-nav sub-nav-' + index + '"></div>').insertAfter($(getAllNavItems[index]));

                $(subNav).append('<h2 class="bt-nav-group-topheading"><span class="bt-topheading">' +
                    subNavHeading + '</span>' + '<a class="bt-shopallheading" href="' + getSubCategory.find('shopall:first link').text() + '">' + shopAllHeading + '</a></h2>');

                var currentTopHeading = $('.sub-nav-' + colIn + ' .bt-nav-group-topheading'),
                    redLinkArr = [];
                $(value).find('redlinks').children().each(function(index, item) {
                  redLinkArr.push('<a class="bt-redlink" href="' + $(item).find('link').text() + '"><span>' + $(item).find('text').text() + '</span></a>');
                });
                  currentTopHeading.append(redLinkArr.join(''));
            }

            function createColumn(value) {
              var column = $(value);

                function InsertListItems(classString, subcat) {
                    var subCategory = $(subcat),
                        topHeadingHref = $('.sub-nav-' + colIn).find('.bt-nav-group-topheading a').attr('href'),
                        currentCol = document.querySelector('.sub-nav-' + colIn + ' .' + classString + ''),
                        itemArr = [];

                     subCategory.children().each(function(count, nodeItem) {
                        var listItem = $(nodeItem);

                        if (count > 0 && count < 20 || topHeadingHref === "/sc1/brands/") {
                            itemArr.push('<li class="subcata-item"><a class="subcata-item-link" href="' +
                            listItem.find('link').text() + '">' + listItem.find('name').text() + '</a></li>');
                        }

                        if (count + 1 >= subCategory.children().length) {
                            currentCol.innerHTML = itemArr.join('');
                            console.log(itemArr.join(''));
                            var unAlteredCol = $('.sub-nav-' + colIn + ' .' + classString + ''),
                                titleItem = $(subcat).children('title').find('text').text();
                                console.log(titleItem);
                                if (titleItem !== '') {
                                  unAlteredCol.prepend('<li class="bt-nav-group-heading">' + '<h2>' + titleItem + '</h2>' + '</li>');
                                }

                        }
                    });
                }

                column.children().each(function(currentIndex, subcategory) {

                    var subNavSelector = $(subNav);

                    if (currentIndex > 2) {

                        var classString = 'col'+ currentIndex;

                        subNavSelector.append('<ul class="bt-sub-nav-group ' + classString + '"></ul>'); //Column Container

                        //Populate each column with inner xml items, as list items
                        InsertListItems(classString, subcategory);

                        if (currentIndex + 1 >= $(value).children().length) {
                                $('.sub-nav-' + colIn + '').append('<ul class="bt-sub-nav-group-promo">' +
                                    ' <li><picture class="gw_card_4up">' +
                                    '<a href="/sc1/query/gift50rtw/&facet=price_USD%253A%2528%257B*%2b49.99%257D%2b49.99%2529&orderBy=7">' +
                                    '<img alt="Gifts Under $50" src="/wcsstore/BonTon/images/categories/women/2016/11/gateway/11_13_gw_women_16-09.jpg">' +
                                    '</a>' +
                                    '</picture></li>' +
                                    '</ul>');

                                $('.sub-nav-' + colIn + ' .bt-sub-nav-group-promo').prepend('<li class="bt-nav-group-heading"><h2>Special Sales</h2></li>');
                        }
                    }
                });
            }
            $.get(xmlPath, null, function(data) {
              allXMLData = data;
                //Get All Categories within categories tag and loops through each
                var subNavData = $(data);
                subNavData.find('categories').children().each(function(index, value) {
                    colIn = index;


                    createTopHeadingSubNav(value, getAllNavItems, index);

                    createColumn(value);

                    //Formats Each Column based on the current index
                    Merger(colIn);
                    MergeSplitter(colIn);
                    Compressor(colIn);
                    $('.sub-nav-' + colIn + '').append('<img alt="Close Button" src="/wcsstore/BonTon/images/utility/jumbo_x_black.png" class="bt-close-menu" width="64" height="64">');
                    $('.sub-nav-' + colIn + ' .bt-close-menu').css({
                        position: 'absolute',
                        right: 0,
                        left: '94%',
                        top: 0
                    });

                });
            });
        }
        /* insertFeaturedBrands - Loops through all the links in the top most nav and compares their href values
         *  Each case has a get xml function and calls the createFeaturedBrands to create the associated column.
         */
        function insertFeaturedBrands(featuredBrandsURL) {
          //Skip furniture and BeautyandFragrance because it doesn't have a featured brand
          $.get(featuredBrandsURL, null, function(data) {
            if (btSubIndex === 9) btSubIndex = 10;
            if (btSubIndex === 4) btSubIndex = 5;
              createFeaturedBrands(data);
          });
        }
        /* createFeaturedBrands - Creates the featured brands column based on the xmlData passed in
         *  @param xmlData - An address of xml data that is used as a string.
         */
        function createFeaturedBrands(xmlData) {

            btSubIndex++;
            var parsedXML = $(xmlData);
            parsedXML.find('featuredBrands').each(function(index, value) {
                var classString = 'bt-featuredbrands',
                    insertCol = $('<ul class="bt-sub-nav-group ' + classString + '"></ul>'),
                    brand = $(value),
                    featuredArr = [];
                    console.log(brand);
                insertCol.insertBefore('.sub-nav-' + btSubIndex + ' .bt-sub-nav-group-promo');

                brand.children().each(function(currentIndex, item) {
                    var brandItem = $(item),
                        createdCol = document.querySelector('.sub-nav-' + btSubIndex + ' .' + classString + ':not(.merge):not(.mergesplitter)');


                        featuredArr.push('<li class="subcata-item"><a class="subcata-item-link" href="' + brandItem.find('link').text() + '">' + brandItem.find('name').text() + '</a></li>');

                    if (currentIndex + 1 >= $(value).children().length) {
                        featuredArr.unshift('<li class="bt-nav-group-heading">' + '<h2>Featured Brands</h2>' + '</li>');

                        createdCol.innerHTML = featuredArr.join('');
                        Compressor(btSubIndex);
                    }
                });
            });
        }
        /* Creates a Column and merges each column that has less then 6 items in them
         * @param ColIn - Current Column Index
         */
        function Merger(colIn) {
            var isMerge = false,
                mergedCol,
                unAlteredCol = $('.sub-nav-' + colIn + ' ul:not(.merge, .bt-sub-nav-group-promo)'),
                colMerge = $('.sub-nav-' + colIn + ' ul.merge');

            unAlteredCol.each(function(index, elem) {
                var currentCol = index + 2;
                var subNavCol = $(elem);

                if (subNavCol.children().length < 6) {
                    if (!isMerge) {
                        $('<ul class="bt-sub-nav-group ' + currentCol + 'col merge"></ul>').insertAfter(subNavCol);
                        mergedCol = currentCol;
                        isMerge = true;
                    }
                    subNavCol.children().each(function(currentInd, value) {
                        var child = $(value);
                        child.clone().appendTo('.sub-nav-' + colIn + ' .' + mergedCol + 'col.merge');
                    });
                    subNavCol.remove();
                }
                if (colMerge.children < 1) {
                    colMerge.remove();
                }
            });
        }
        /* After Merge has happened, if there are more then two headings in a column it will split them in another.
         * @param ColIn - Current Column Index
         */
        function MergeSplitter(colIn) {
            var mergeSplitter = false,
                mergedCol = $('.sub-nav-' + colIn + ' ul.merge');

            mergedCol.each(function(index, subNavCol) {
                var currentCol = index + 2,
                    totalHeadings = document.querySelectorAll('.sub-nav-' + colIn + ' ul.merge .bt-nav-group-heading');

                $(totalHeadings).each(function(index, heading) {
                  var headingSelector = $(heading);
                    if (headingSelector.text() === "") {
                        headingSelector.remove();
                    }
                });

                totalHeadings = document.querySelectorAll('.sub-nav-' + colIn + ' ul.merge .bt-nav-group-heading');
                if (totalHeadings.length > 2) {
                  var totalSelector = $(totalHeadings);

                    totalSelector.each(function(index, heading) {
                      var headingSelector = $(heading),
                          getNextHeading = index + 1;

                        if (index > 1) {
                            if (!mergeSplitter) {
                                $('<ul class="bt-sub-nav-group ' + currentCol + 'col mergesplitter' + index + '"></ul>').insertAfter(subNavCol);
                                mergeSplitter = true;
                            }
                            headingSelector.clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');
                            headingSelector.nextUntil('.bt-nav-group-heading:eq(' + getNextHeading + ')').clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');
                            headingSelector.nextUntil('.bt-nav-group-heading:eq(' + getNextHeading + ')').remove();

                            if (headingSelector.next().hasClass('.bt-nav-group-heading')) {
                                headingSelector.next().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');

                                $('.bt-nav-group-heading:eq(' + getNextHeading + ')').nextUntil('.bt-nav-group-heading').clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');
                                headingSelector.remove();
                                headingSelector.find('.bt-nav-group-heading:eq(' + getNextHeading + ')').remove();
                            } else {
                                headingSelector.remove();
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
          var currentSubNav = $('.sub-nav-' + colIn + '');
              currentSubNav.children('ul, div').length ? $('.sub-nav-' + colIn + '').css('width', '100%') : false;
        }
        /* Adept
         * Adds Support for Touch Events and click events to simulate touch screens accessability.
         * This allows the dropdown to adept to each enviornment, if stetched to different viewports as well.
         */
        function Adept() {
            var isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart"),
                getAllNavItems = document.querySelectorAll('.catalog-links > ul > li > a'),
                saveHrefAttr = [],
                tapCounter = 0,
                currentValue = "empty",
                previousValue = "empty",
                tapedTwice = false,
                inAreaTouch = true;

            function applyOverlay() {

                if (!$('#nav-overlay').length) {
                    $('<div id="nav-overlay"></div>').insertAfter('.header-row.mobileAppSuppress');
                    $('#nav-overlay').css({
                        height: document.body.offsetHeight + 'px',
                    }).fadeIn(300);
                    $('#nav-overlay').on('touchstart', function() {
                        $(this).fadeOut(300);
                        tapCounter = 0;
                    });
                    $('#nav-overlay').on('touchmove', function() {
                        $(this).fadeOut(300);
                        tapCounter = 0;
                    });
                } else {
                    $('#nav-overlay').fadeIn(300);
                }
            }
            function smallViewportTouch() {
                if (isTouch && screen.width < 1367 && screen.width > 436) {
                    if (inAreaTouch) {

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
                        $('.catalog-links > ul > li > a').each(function(index, value) {
                            $(value).on('touchend', function(e) {
                                e.preventDefault();
                                //alert('touch');
                                $(value).attr('href', '#');
                                currentValue = $(value);
                                setTimeout(function() {
                                    if ($('#nav-overlay').length && $(value).siblings('div').hasClass('open')) {
                                        $(value).addClass('tapped');
                                        //alert('touch 1 overlay');
                                        applyOverlay();
                                    }
                                }, 500, true);
                                if (!$(value).hasClass('tapped') && !$(value).hasClass('open')) {
                                    $(value).addClass('tapped');
                                    //alert('touch 2 overlay');
                                    applyOverlay();
                                }
                                if (!$(value).hasClass('tapped') && $(value).hasClass('open')) {
                                    $(value).addClass('tapped');
                                    //alert('touch 3 overlay');
                                    applyOverlay();
                                }
                                if (tapCounter === 1 && $(value).hasClass('tapped') && $(value).hasClass('open')) {
                                    if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
                                        $(previousValue).removeClass('tapped');
                                        tapCounter = 2;
                                        $(currentValue).addClass('target');
                                        previousValue = currentValue;
                                        //alert('tap 1 undefined');
                                        return false;
                                    } else {
                                        $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                            $(link).hasClass('open') ? $(link).next().removeClass('open') : false;
                                            $(link).hasClass('open') ? $(link).removeClass('open') : false;
                                            !$(link).hasClass('open') ? ($(link).removeClass('tapped'), $('#nav-overlay').fadeOut(300)) : false;
                                        });
                                         //alert('tap 1 else');
                                    }


                                }
                                if (tapCounter === 2 && $(value).hasClass('tapped')) {
                                  $('.catalog-links > ul > li > a').each(function(currentPos, link) {
                                      $(link).hasClass('tapped') ? $(link).removeClass('tapped') : false;
                                  });
                                  $('#nav-overlay').fadeIn(300);
                                  $(value).addClass('tapped');
                                  //alert('tap 2 end');

                                  tapCounter = 0;
                                    if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
                                        $(previousValue).removeClass('tapped');
                                        $('#nav-overlay').fadeIn(300);
                                        previousValue = currentValue;
                                        tapCounter = 1;
                                        //alert('tap 2 undefined');
                                        return false;
                                    }
                                    if ($(value).hasClass('target')) {

                                        $(value).next().removeClass('open');
                                        $(value).removeClass('open');
                                        $(value).removeClass('target');
                                        $('#nav-overlay').fadeOut(300);
                                    }
                                }
                                if ($(previousValue).text().trim() !== $(currentValue).text().trim()) {
                                  tapedTwice = false;
                                  //alert('insider Checker');
                                }
                                if (!tapedTwice) {
                                    tapedTwice = true;
                                    tapCounter++;
                                    previousValue = $(value);

                                    return false;
                                }

                                //action on double tap goes below
                                e.preventDefault();
                                e.stopPropagation();
                                $(value).attr('href', saveHrefAttr[index]);
                                //alert($(value).attr('href'));
                                $('#nav-overlay').fadeOut(0);
                                location.href = $(value).attr('href');
                                previousValue = 'empty';
                                return;
                            });
                        });
                        inAreaTouch = false;
                    }
                }
            }

            function removeCloseMenu() {
              var closeMenu = $('.bt-sub-nav').children('img');
                if (closeMenu.length > 1 && screen.width < 1367) {
                    closeMenu.each(function(index, value) {
                        if (index > 0) {
                            $(value).remove();
                        }
                    });
                }
            }

            function appendCloseMenu() {
                for (var i = 0; i < getAllNavItems.length; i++) {
                  var currentSubNav = $('.sub-nav-' + i + '')
                  if (screen.width < 1367 && screen.width > 436) {
                      console.log(currentSubNav);
                      console.log(getAllNavItems.length);
                      currentSubNav.append('<img alt="Close Button" src="/wcsstore/BonTon/images/utility/jumbo_x_black.png" class="bt-close-menu" width="64" height="64">');
                      $('.sub-nav-' + i + ' .bt-close-menu').css({
                          position: 'absolute',
                          right: 0,
                          left: '90%',
                          top: 0
                      });
                  }
                }
            }
            function resetTap() {
              tapCounter = 0;
              tapedTwice = false;
            }
            function addEventsToCloseMenu() {
                $('.bt-close-menu').on('click', function() {
                    $('.bt-sub-nav').removeClass('open');
                    $('.bt-nav-item').removeClass('open');
                    $('#nav-overlay').fadeOut(300);
                });
                $('.bt-close-menu').each(function(index, value) {
                    $(value).on('touchend', function(e) {
                      var catelogLink = $('.catalog-links > ul > li > a');
                        catelogLink.each(function(currentPos, link) {
                            $(link).hasClass('open') ? ($(link).next().removeClass('open'), $(link).removeClass('open')) : false;
                            !$(link).hasClass('open') ? $(link).removeClass('tapped') : false;
                        });
                        $('#nav-overlay').fadeOut(300);
                        resetTap();
                    });
                });
            }
            function scaleColumns() {
              if (screen.width <= 1024) {
                $('.bt-column-container').css('width', '170px');
              }
              if (screen.width > 1024) {
                $('.bt-column-container').css('width', '200px');
                $('.brandscontainer').css('width', '45%');
                $('.bt-brands').css('width', '45%');
              }
              function hidePromotionalColumn() {
                  for (var i = 1, len = getAllNavItems.length; i < len; i++) {
                    var columnContainers = document.querySelectorAll('.sub-nav-'+ i +' > .bt-column-container');
                    if (screen.width < 1023 && columnContainers.length === 5) {
                      $('.sub-nav-'+ i +' .bt-column-container:last').fadeOut();
                    }
                    if (screen.width - 170 < 1023 && columnContainers.length < 4) {
                      $('.sub-nav-'+ i +' .bt-column-container:last').fadeOut();
                    }
                    if (screen.width > 1023 && columnContainers.length === 5) {
                      $('.sub-nav-'+ i +' .bt-column-container:last').fadeIn();
                    }
                    if (screen.width - 170 > 1023 && columnContainers.length < 4) {
                      $('.sub-nav-'+ i +' .bt-column-container:last').fadeIn();
                    }
                  }
              }
              hidePromotionalColumn();
            }
            function scaleCreative() {
              for (var i = 1, len = getAllNavItems.length; i < len; i++) {
                var columnContainers = document.querySelectorAll('.sub-nav-'+ i +' > .bt-column-container'),
                    columnAmount = columnContainers.length,
                    creativeWidth =  (screen.width / columnAmount) / screen.width * 100;

                    $(columnContainers[columnContainers.length - 1]).css('width', creativeWidth+'%');
              }
            }
            $(window).resize(function() {
                removeCloseMenu();
                appendCloseMenu();
                addEventsToCloseMenu();
                //Toggles between viewports for nontouch objects
                smallViewportTouch();
                scaleColumns();
                scaleCreative();
            });
            $(window).resize();
        }

        function addOverlayToMouseEvents() {
            $('.bt-nav-item > a').each(function(index, value) {

                $(value).on('mouseover', function() {
                    setTimeout(function() {
                        if ($(value).siblings('div').hasClass('open') && !$('#nav-overlay').length) {
                          $('<div id="nav-overlay"></div>').insertAfter('.header-row.mobileAppSuppress');
                          $('#nav-overlay').css({
                              height: document.body.offsetHeight + 'px',
                          }).fadeIn(300);
                            $('#nav-overlay').on('mouseenter', function() {
                                setTimeout(function() {
                                    checkForOverlay(value);
                                }, 260);
                            });
                        }
                        if ($('#nav-overlay').length && $(value).siblings('div').hasClass('open')) {
                            $('#nav-overlay').fadeIn(300);
                        }
                    }, 600);

                });
                $('.bt-nav-menu').on('mouseleave', function() {
                    if ($(value).hasClass('open')) {
                        setTimeout(function() {
                            checkForOverlay(value);
                        }, 310);
                    }
                });
                $(value).siblings('div').on('mouseleave', function() {
                    if (!$(value).hasClass('open')) {
                        setTimeout(function() {
                            checkForOverlay(value);
                        }, 310);
                    }
                });

            });

            function checkForOverlay(listItem) {
                if (!$(listItem).hasClass('open') && !$(listItem).siblings('div').hasClass('open')) {
                    $('#nav-overlay').fadeOut(300);
                }
            }
        }
        function spotlightCreative() {
          var columnContainers = $('.bt-column-container');
          function appendPromotional(container, both, seasonal, brandspotlight) {
            if (both === 'both') {
              $(container).append('<div class="bt-brandspotlight-container"><img alt="Brand Spotlight" src="">' +
              '</div><div class="bt-seasonal-container"><img alt="Shop Seasonal" src="">' +
              '</div>');
            }
            if (seasonal === 'seasonal') {
              $(container).append('<div class="bt-seasonal-container"><img alt="Shop Seasonal" src="">' +
              '</div>');
            }
            if (brandspotlight === 'brand') {
              $(container).append('<div class="bt-brandspotlight-container"><img alt="Brand Spotlight" src="">' +
              '</div>');
            }
          }
          columnContainers.each(function(index, container) {
            if ($(container).find('.bt-nav-group-heading:first h2').text() === 'Spotlight On...') {
              switch ($(container).siblings('.bt-nav-group-topheading').find('.bt-topheading').text()) {
                case 'Women':
                  appendPromotional(container, null, null, 'brand');
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                break;
                case 'Shoes':
                  appendPromotional(container, 'both', null, null);
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Handbags & Accessories':
                  appendPromotional(container, null, 'seasonal', null);
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Jewelry & Watches':
                  appendPromotional(container, null, 'seasonal', null);
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Beauty & Fragrance':
                  appendPromotional(container, null, null, 'brand');
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                break;
                case 'Juniors':
                  appendPromotional(container, 'both', null, null);
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Men':
                  appendPromotional(container, null, null, 'brand');
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Baby & Kids':
                  appendPromotional(container, null, 'seasonal', null);
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Bed & Bath':
                  appendPromotional(container, 'both', null, null);
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                case 'Home':
                  appendPromotional(container, 'both', null, null);
                  $(container).find('.bt-brandspotlight-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoe1.jpg');
                  $(container).find('.bt-seasonal-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_2.jpg');
                break;
                default:

              }
              if ($(container).siblings('.bt-nav-group-topheading').find('.bt-topheading').text() === 'Shoes') {

              }
            }
          });
        }
        function promotionalCreative(subNavIndex) {
          var columnContainers = document.querySelectorAll('.sub-nav-'+ subNavIndex +' > .bt-column-container');
          $(columnContainers[columnContainers.length - 1]).html('').append('<div class="bt-promotional-container"><img alt="Promotional Spotlight" src="">' +
          '</div>');
          if (columnContainers.length > 3) {

            if ($(columnContainers).siblings('.bt-nav-group-topheading').find('.bt-topheading').text() === 'Shoes') {
              $(columnContainers).find('.bt-promotional-container img').attr('src', '/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/image_creative/shoes_3.jpg');
            }
            $(columnContainers[columnContainers.length - 1]).addClass('bt-promotional-slide');
          }
        }
        function bannerCreativeContainer(subNavIndex) {
          var columnContainers = document.querySelectorAll('.sub-nav-'+ subNavIndex +' > .bt-column-container');
          if (columnContainers.length < 3) {
            $(columnContainers[columnContainers.length - 1]).find('.bt-promotional-container').html('').append('<div class="bt-brandspotlight-large-container"><img alt="Brand Spotlight" src="">' +
            '</div><div class="bt-seasonal-large-container"><img alt="Shop Seasonal" src="">' +
            '</div>');
            $(columnContainers[columnContainers.length - 1]).addClass('bt-promotional-banner');
          }
        }
        function findLargestContainer(subNavIndex) {
          var columnContainers = document.querySelectorAll('.sub-nav-'+ subNavIndex +' > .bt-column-container'),
              previousContainer = $(columnContainers[0]).find('ul').children().length,
              currentContainer,
              containerIndex;

          for (var i = 0, len = columnContainers.length; i < len; i++) {

            if ($(columnContainers[i]).find('ul:last li h2').text() !== 'Featured Brands') {
              currentContainer = $(columnContainers[i]).find('ul').children().length;

              if (currentContainer > previousContainer) {
                previousContainer = currentContainer;
                containerIndex = i;
              }
            }

          }
          function containerSwap() {
            //whichever container is in index 1 swap with largestContainer index
            if (containerIndex !== undefined) {
              var secondContainerClone = $(columnContainers[1]).find('ul').clone();
              var largestContainerClone = $(columnContainers[containerIndex]).find('ul').clone();
              $(columnContainers[1]).html(largestContainerClone);
              $(columnContainers[containerIndex]).html(secondContainerClone);
            }
          }
          containerSwap();
          function findMediumSizedContainers(doubleHeading, startInd, stopInd) {
            if (columnContainers.length > 4) {
              var firstMediumClone,
                  secondMediumClone,
                  foundFirst,
                  foundSecond,
                  headings;
              //skip spotlightOn, the largestContainer, and stops before checking featuredbrands/promoContainer
              for (var i = startInd, len = stopInd; i < len; i++) {

                headings= $(columnContainers[i]).find('ul:first').children('.bt-nav-group-heading').length;

                if (foundFirst === undefined && headings === 1) {

                  firstMediumClone = $(columnContainers[i]).find('ul').css('display', 'block').clone();
                  foundFirst = i;
                  continue;
                }
                if (foundSecond === undefined && headings === 1 && !doubleHeading) {

                  secondMediumClone = $(columnContainers[i]).find('ul').css('display', 'block').clone();
                  foundSecond = i;
                }

                if (foundSecond === undefined && headings === 2 && doubleHeading) {

                  secondMediumClone = $(columnContainers[i]).find('ul').css('display', 'block').clone();
                  foundSecond = i;
                }
              }
              var combineClones = function() {
                if (foundFirst !== undefined && foundSecond !== undefined) {
                  $(columnContainers[2]).html('').append($(firstMediumClone)).append($(secondMediumClone));
                  if (foundFirst === 2 && foundSecond !== 2) $(columnContainers[foundSecond]).remove();
                  if (foundFirst !== 2 && foundSecond !== 2) {
                    $(columnContainers[foundFirst]).remove();
                    $(columnContainers[foundSecond]).remove();
                  }
                  if (doubleHeading) $(columnContainers[1]).remove();
                }
              };
              combineClones();
            }
          }
          findMediumSizedContainers(false, 2, columnContainers.length - 2);
          function featuredbrandsWithSmallest() {
            var onlyTwoHeadings,
                previousColumn = $(columnContainers[3]).find('ul').children().length,
                previousColumnHeadings = $(columnContainers[3]).find('ul').children('.bt-nav-group-heading').length,
                currentColumn,
                currentColumnHeadings,
                smallestColumn;
            //Skips the 3rd column because it doesn't need to be check and doesn't check the last column
            for (var i = 3, len = columnContainers.length - 1; i < len; i++) {
              currentColumnHeadings = $(columnContainers[i]).find('ul').children('.bt-nav-group-heading').length;
              currentColumn = $(columnContainers[i]).find('ul').children().length;

              if (currentColumn < previousColumn && previousColumnHeadings === 2 && currentColumnHeadings === 2) {
                previousColumn = currentColumn;
                smallestColumn = $(columnContainers[i]).find('ul').css('display', 'block').clone();
                console.log(smallestColumn);
                currentColumn = i;
              }
              if (previousColumnHeadings === 2 || currentColumnHeadings === 2) {
                smallestColumn = $(columnContainers[3]).find('ul').css('display', 'block').clone();
                currentColumn = i;
                break;
              }
            }
            function featuredContainer() {
              //append to featuredbrands column
              $(columnContainers[columnContainers.length - 2]).prepend(smallestColumn);
              $(columnContainers[currentColumn]).remove();
            }
            featuredContainer();
          }
          featuredbrandsWithSmallest();
          columnContainers = document.querySelectorAll('.sub-nav-'+ subNavIndex +' > .bt-column-container');
          findMediumSizedContainers(true, 1, columnContainers.length - 2);
        }
        function formatBrands() {
          var columnContainers = document.querySelectorAll('.sub-nav-0 > .bt-column-container');
              //Remove Promotional Container
              $(columnContainers[columnContainers.length - 1]).remove();
              //Remove Heading
              var featuredBrands = $('.sub-nav-0 .bt-column-container:last > ul');
              $(featuredBrands).find('li:first').remove();
              $(featuredBrands).parent().addClass('bt-brands');
          function splitFeaturedColumn() {
                var captureLength,
                    colSelector = featuredBrands;

                colSelector.each(function(index, subNavCol) {
                    var column = $(subNavCol);

                    if (column.children().length >= 13) {
                        captureLength = column.children().length / 2;

                        var insertSplitCol = $('<ul class="bt-sub-nav-group bt-brandssplit"></ul>');

                            insertSplitCol.insertAfter(featuredBrands);

                        column.children().each(function(currentInd, child) {

                          var listItem = $(child);

                            if (currentInd > captureLength) {
                                listItem.clone().appendTo('.sub-nav-0 .bt-brandssplit');
                                listItem.remove();
                            }
                        });
                    }
                });
                $(featuredBrands).prepend('<h2 class="bt-nav-group-heading">Featured Brands</h2>');
            }
            splitFeaturedColumn();
            function splitBrandColumn() {
                  var captureLength,
                      splitColumn = 0;
                  function splitAmount(colSelector, splitAt) {
                    colSelector.each(function(index, subNavCol) {
                        var column = $(subNavCol);
                        if (column.children().length >= 9) {
                            captureLength = splitAt;

                            var insertSplitCol = $('<ul class="bt-sub-nav-group colsplit'+ splitColumn +'"></ul>');

                                insertSplitCol.insertAfter(colSelector);

                            column.children().each(function(currentInd, child) {

                              var listItem = $(child);

                                if (currentInd > captureLength) {
                                    listItem.clone().appendTo('.sub-nav-0 .colsplit'+ splitColumn +'');
                                    listItem.remove();
                                }
                            });
                            splitColumn++;
                        }
                    });

                  }
                  $('.sub-nav-0 .col3').parent().addClass('brandscontainer').prepend('<h2 class="bt-nav-group-heading">Brands A-Z</h2>');
                  $('.brandscontainer').append('<h2 class="viewallbrands"><a href="/sc1/brands/">View All Brands</a></h2>');
                  splitAmount($('.sub-nav-0 .col3'), 9);
                  splitAmount($('.sub-nav-0 .colsplit0'), 8);
                  $('.sub-nav-0 .col3').find('li:first').remove();
                  $('.sub-nav-0 .col3').find('li:first').remove();
              }
              splitBrandColumn();
        }
        //Create fourth col, must have featuredbrands, with the smallest column that isn't spotlightOn
        if (!$('.bt-nav-menu').length) {
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
            //settimeout is added because featured brands loads after the DOM
            InsertXML('/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/menuxmlv3.min.xml');
            var checkForIE = detectIE(),
                Menudelay = 350,
                brandsDelay = 1000,
                formattingDelay = 300;

            if (checkForIE !== false) {
                Menudelay = 5000;
                brandsDelay = 6500;
                formattingDelay = 1000;
            }
            setTimeout(function() {
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/women/evergreen/leftnav/featuredbrands/women.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/shoes/evergreen/leftnav/featuredbrands/shoes.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/handbagsandaccessories/evergreen/leftnav/featuredbrands/handbagsandaccessories.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/jewelry/evergreen/leftnav/featuredbrands/jewelry.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/juniors/evergreen/leftnav/featuredbrands/juniors.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/mens/evergreen/leftnav/featuredbrands/men.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/kids/evergreen/leftnav/featuredbrands/kids.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/bedandbath/evergreen/leftnav/featuredbrands/bedbath.xml');
              insertFeaturedBrands('/wcsstore/BonTon/text/categories/home/evergreen/leftnav/featuredbrands/home.xml');
              //Wraps each column inside a div container
              setTimeout(function() {
                $('.bt-sub-nav > ul').wrap('<div class="bt-column-container"></div>');
                spotlightCreative();
                for (var i = 1, len = getAllNavItems.length; i < len; i++) {
                  findLargestContainer(i);
                  promotionalCreative(i);
                  bannerCreativeContainer(i);
                }
                formatBrands();
                Adept();
              }, formattingDelay);
            }, brandsDelay);
            setTimeout(function() {
                //Wraps every pair of elements within the first ul of catalog-links in a li
                var catalogTopChildren = $('.catalog-links > ul').children();
                for (var i = 0, len = catalogTopChildren.length; i < len; i += 2) {
                    catalogTopChildren.slice(i, i + 2).wrapAll('<li class="bt-nav-item"></li>');
                }
                //NavItems are edited, so getAllNavItems is updated with the new format
                getAllNavItems = document.querySelectorAll('.catalog-links > ul > li > a');
                //initialize MegaMenu
                var attachMega = $("#catalog-links-");
                attachMega.accessibleMegaMenu({
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
            }, Menudelay);
        }
    })();
});
