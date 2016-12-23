// JavaScript Artemis Menu
// By Kyle Orlinski
// 12/23/2016
// Version 0.6.0.0
// XML Artemis Menu
$(document).ready(function () {
	"use strict";
	(function () {
		var getAllNavItems = document.querySelectorAll('.catalog-links > a'),
            btSubIndex = 0;

        
        /* InsertXML Creates the drop down menus for the Artemis Menu
		 * @param xmlPath - Gets xml that fits a category format
		 */
		function InsertXML(xmlPath) {
			var subNav,
				colIn;
            
			$.get(xmlPath, null, function (data) {
                //Get All Categories within categories tag and loops through each
				$(data).find('categories').children().each(function (index, value) {
                                console.log('sub-nav');
                    colIn = index;
                    if (index !== 0 && index !== 10 && index !== 12) {
                        var subNavHeading = $(value).find("title:first text").text(); //sub-nav Heading
                            subNav = $('<div class="bt-sub-nav sub-nav-' + index + '"></div>').insertAfter($(getAllNavItems[index]));
                            $(subNav).append('<h2 class="bt-nav-group-topheading"><a href="' + $(value).find('title:first text').text() + '">' + subNavHeading + '</a></h2>');

                            //Go into each subcategory and create each column
                            $(value).children().each(function (currentIndex, subcategory) {
                                if (currentIndex > 0) {

                                    var classString = currentIndex + 'col';
                                    
                                    $(subNav).append('<ul class="bt-sub-nav-group ' + classString + '"></ul>'); //Column Container

                                    //Populate each column with inner xml items, as list items
                                    $(subcategory).children().each(function (count, nodeItem) {
                                        if (count > 0) {
                                            $('.sub-nav-' + colIn + ' .' + classString + '').append('<li class="subcata-item"><a class="subcata-item-link" href="' + $(nodeItem).find('link').text() + '">' + $(nodeItem).find('name').text() + '</a></li>');
                                        }
                                        
                                        if (count + 1 >= $(subcategory).children().length) {
                                            Splitter(colIn, classString, subcategory, count);
                                        }
                                    });
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
                        //Merger
                        Merger(colIn);

                        //check if col has more then two heading classes if so remove every heading class that is after the second.                 
                        //Merger Splitter
                        MergeSplitter(colIn);

                        Compressor(colIn);
                        
                        if (screen.width < 1367 && screen.width > 436) {
                            $('.sub-nav-' + colIn + '').append('<img alt="Close Button" src="/wcsstore/BonTon/images/categories/_shared/2016/10/ic_clear_black_48dp.png" class="bt-close-menu" width="64" height="64">');
                            $('.sub-nav-' + colIn + ' .bt-close-menu').css({
                                position: 'absolute',
                                right: 0,
                                left: '94%',
                                top: 0
                            });
                        }
                    }

				});

			});

		}
        /* insertFeaturedBrands - Loops through all the links in the top most nav and compares their href values
        *  Each case has a get xml function and calls the createFeaturedBrands to create the associated column.
        */
        function insertFeaturedBrands() {
            console.log('hello');
            for (var i = 0; i < getAllNavItems.length; i++) {
                switch($(getAllNavItems[i]).attr('href')) {
                        case "/sc1/women/": $.get('/wcsstore/BonTon/text/categories/women/evergreen/leftnav/featuredbrands/women.xml', null, function (data) { 
                            console.log('Hello I am in women"s case statment');
                            createFeaturedBrands(data);
                        });
                            break;
                        case "/sc1/shoes/": $.get('/wcsstore/BonTon/text/categories/shoes/evergreen/leftnav/featuredbrands/shoes.xml', null, function (data) { 
                            createFeaturedBrands(data);
                        }); 
                            break;
                        case "/sc1/handbags-accessories/": $.get('/wcsstore/BonTon/text/categories/women/evergreen/leftnav/featuredbrands/women.xml', null, function (data) { 
                            createFeaturedBrands(data);
                        });
                            break;
                        case "/sc1/jewelry-watches/": $.get('/wcsstore/BonTon/text/categories/handbagsandaccessories/evergreen/leftnav/featuredbrands/handbagsandaccessories.xml', null, function (data) { 
                            createFeaturedBrands(data);
                        });
                            break;
                        case "/sc1/juniors/": $.get('/wcsstore/BonTon/text/categories/juniors/evergreen/leftnav/featuredbrands/juniors.xml', null, function (data) { 
                            createFeaturedBrands(data);
                        });
                            break;
                        case "/sc1/men/": $.get('/wcsstore/BonTon/text/categories/mens/evergreen/leftnav/featuredbrands/men.xml', null, function (data) { 
                            createFeaturedBrands(data);
                        }); 
                            break;
                        case "/sc1/baby-kids/": $.get('/wcsstore/BonTon/text/categories/kids/evergreen/leftnav/featuredbrands/kids.xml', null, function (data) { 
                            createFeaturedBrands(data);
                        });
                            break;
                        case "/sc1/bed-bath/": $.get('/wcsstore/BonTon/text/categories/bedandbath/evergreen/leftnav/featuredbrands/bedbath.xml', null, function (data) {
                            createFeaturedBrands(data);
                        }); 
                            break;
                        
                        case "/sc1/home/": $.get('/wcsstore/BonTon/text/categories/home/evergreen/leftnav/featuredbrands/home.xml', null, function (data) {
                            btSubIndex = 10;
                            createFeaturedBrands(data);
                        });
                            break;
                        default: break;
                }
            }
        }
        /* createFeaturedBrands - Creates the featured brands column based on the xmlData passed in
        *  @param xmlData - An address of xml data that is used as a string.
        */
        function createFeaturedBrands(xmlData) {
            btSubIndex++;
            console.log('data is: ' + xmlData);
            console.log('Index is: ' + btSubIndex);
            $(xmlData).find('featuredBrands').each(function (index, value) {
                console.log('in featuredBrand of');
               var classString = $('.sub-nav-'+btSubIndex+' > ul').length + $('.sub-nav-'+btSubIndex+' > div').length + 'col'; 
               $('<ul class="bt-sub-nav-group ' + classString + '"></ul>').insertBefore('.sub-nav-'+btSubIndex+' .bt-sub-nav-group-promo');
                $(value).children().each(function(currentIndex, brand) {
                    
                    $('.sub-nav-' + btSubIndex + ' .' + classString + ':not(.merge, .split, .mergesplitter)').append('<li class="subcata-item"><a class="subcata-item-link" href="' + $(brand).find('link').text() + '">' + $(brand).find('name').text() + '</a></li>');
                    
                    if (currentIndex + 1 >= $(value).children().length) {
                        
    					$('.sub-nav-' + btSubIndex + ' .' + classString + ':not(.merge, .split, .mergesplitter)').prepend('<li class="bt-nav-group-heading">' + '<h2>Featured Brands</h2>' + '</li>');
                        Compressor(btSubIndex);
                    }
                });
            });
        }
		/* Splits a Column in two, depending on if there are more then 13 items in a column
		 * @param ColIn - Current Column Index
		 * @param classString - Current Sub Category Column
		 * @param getWomenList - Array of Sub Categories
		 * @param x - An integer for retrieving an index from getList
		 */
		function Splitter(colIn, classString, subcategory, x) {
            var captureLength;
			$('.sub-nav-' + colIn + ' .' + classString + '').each(function (index, subNavCol) {
				if ($(subNavCol).children().length > 13) {
                captureLength = $(subNavCol).children().length / 2;
                    console.log(captureLength);
					var currentCol = index + 1;
					$(subNavCol).wrap('<div class="sub-nav-large-group ' + x + 'group"></div>');
					$('<ul class="bt-sub-nav-group ' + currentCol + 'col split"></ul>').css('padding-left', '8px').insertAfter(subNavCol);
					$(subNavCol).children().each(function (currentInd, child) {
						/*if (currentInd > 13) {
							$(child).clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.split');
							$(child).remove();
						}*/
                        if (currentInd > captureLength) {
                                $(child).clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.split');
                                $(child).remove();
                        }
					});
					$('.sub-nav-' + colIn + ' .' + x + 'group').prepend('<li class="bt-nav-group-heading">' + '<h2>' + $(subcategory).children('title').find('text').text() + '</h2>' + '</li>');
				} else {
					$('.sub-nav-' + colIn + ' .' + classString + '').prepend('<li class="bt-nav-group-heading">' + '<h2>' + $(subcategory).children('title').find('text').text() + '</h2>' + '</li>');
				}
			});
		}
		/* Creates a Column and merges each column that has less then 6 items in them
		 * @param ColIn - Current Column Index
		 */
		function Merger(colIn) {
			var isMerge = false;
			var mergedCol;
			$('.sub-nav-' + colIn + ' ul:not(.merge, .split, .bt-sub-nav-group-promo)').each(function (index, subNavCol) {
				var currentCol = index + 2;

				if ($(subNavCol).children().length < 6) {
					if (!isMerge) {
						$('<ul class="bt-sub-nav-group ' + currentCol + 'col merge"></ul>').insertAfter(subNavCol);
						mergedCol = currentCol;
						isMerge = true;
					}
					$(subNavCol).children().each(function (currentInd, child) {
						$(child).clone().appendTo('.sub-nav-' + colIn + ' .' + mergedCol + 'col.merge');
					});
					$(subNavCol).remove();
				}
				if ($('.sub-nav-' + colIn + ' ul.merge').children < 1) {
					$('.sub-nav-' + colIn + ' ul.merge').remove();
				}
				if ($('.sub-nav-' + colIn + ' ul.split').children < 1) {
					$('.sub-nav-' + colIn + ' ul.split').remove();
				}
			});
		}
		/* After Merge has happened, if there are more then two headings in a column it will split them in another.
		 * @param ColIn - Current Column Index
		 */
		function MergeSplitter(colIn) {
			var mergeSplitter = false;
			$('.sub-nav-' + colIn + ' ul.merge').each(function (index, subNavCol) {
				var currentCol = index + 2;
				var totalHeadings = document.querySelectorAll('.sub-nav-' + colIn + ' ul.merge .bt-nav-group-heading');
				$(totalHeadings).each(function (index, heading) {
					if ($(heading).text() === "") {
						$(heading).remove();
					}
				});

				totalHeadings = document.querySelectorAll('.sub-nav-' + colIn + ' ul.merge .bt-nav-group-heading');
				if (totalHeadings.length > 2) {
					$(totalHeadings).each(function (index, heading) {
						var getNextHeading = index + 1;
						if (index > 1) {
							if (!mergeSplitter) {
								$('<ul class="bt-sub-nav-group ' + currentCol + 'col mergesplitter' + index + '"></ul>').insertAfter(subNavCol);
								mergeSplitter = true;
							}
							$(heading).clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');
							$(heading).nextUntil('.bt-nav-group-heading:eq(' + getNextHeading + ')').clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');
							$(heading).nextUntil('.bt-nav-group-heading:eq(' + getNextHeading + ')').remove();

							if ($(heading).next().hasClass('.bt-nav-group-heading')) {
								$(heading).next().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');

								$('.bt-nav-group-heading:eq(' + getNextHeading + ')').nextUntil('.bt-nav-group-heading').clone().appendTo('.sub-nav-' + colIn + ' .' + currentCol + 'col.mergesplitter' + index + '');
								$(heading).remove();
								$(heading).find('.bt-nav-group-heading:eq(' + getNextHeading + ')').remove();
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
			if (screen.width < 1200 && screen.width > 436) {
				$('.sub-nav-' + colIn + '').children('ul, div').length ? $('.sub-nav-' + colIn + '').css('width', '100%') : false;
				if ($('.sub-nav-' + colIn + '').children('ul, div').length > 6) {
					$('.sub-nav-' + colIn + ' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '15%');
				}
				if ($('.sub-nav-' + colIn + '').children('ul, div').length <= 6) {
					$('.sub-nav-' + colIn + ' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '20%');
				}
				return false;
			} else {
				if ($('.sub-nav-' + colIn + '').children('ul, div').length < 7) {
					$('.sub-nav-' + colIn + '').css('width', '100%');
					$('.sub-nav-' + colIn + ' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '17%');
				}
				if ($('.sub-nav-' + colIn + '').children('ul, div').length < 6) {
					$('.sub-nav-' + colIn + '').css('width', '90%');
					$('.sub-nav-' + colIn + ' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '15%');
				}
				if ($('.sub-nav-' + colIn + '').children('ul, div').length < 5) {
					$('.sub-nav-' + colIn + '').css('width', '82%');
					$('.sub-nav-' + colIn + ' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '20%');
				}
				if ($('.sub-nav-' + colIn + '').children('ul, div').length < 3) {
					$('.sub-nav-' + colIn + '').css('width', '50%');
					$('.sub-nav-' + colIn + ' > ul:not(ul.bt-sub-nav-group-promo)').css('width', '25%');
				}
			}
		}
		/* Adept
         * Adds Support for Touch Events and click events to simulate touch screens accessability.
		 * This allows the dropdown to adept to each enviornment, if stetched to different viewports as well.
		 */
		function Adept() {
			getAllNavItems = document.querySelectorAll('.catalog-links > ul > li > a');
			var isTouch = typeof window.hasOwnProperty === "function" && !!window.hasOwnProperty("ontouchstart"),
				saveHrefAttr = [],
				tapCounter = 0,
				currentValue = "empty",
				previousValue = "empty",
				tapedTwice = false,
				inAreaNonTouch = true,
				inAreaTouch = true;

			function applyOverlay() {
				if (!$('#nav-overlay').length) {
					$('body').prepend('<div id="nav-overlay"></div>');
					$('#nav-overlay').css({
						position: 'absolute',
						left: 0,
						width: '100%',
						height: document.body.offsetHeight + 'px',
						display: 'none',
						backgroundColor: 'black',
						opacity: '.5',
						zIndex: 2,
						transform: 'translate3d(0,0,0)'
					}).fadeIn(300);
					$('#nav-overlay').on('touchstart', function () {
						$(this).fadeOut(300);
						tapCounter = 0;
					});
					$('#nav-overlay').on('touchmove', function () {
						$(this).fadeOut(300);
						tapCounter = 0;
					});
				} else {
					$('#nav-overlay').fadeIn(300);
				}
			}
			$(window).resize(function () {
				if ($('.bt-sub-nav').children('img').length > 1 && screen.width < 1367) {
					$('.bt-sub-nav').children('img').each(function (index, value) {
						if (index > 0) {
							$(value).remove();
						}
					});
				}
				//Move the home sub-nav to the right, for accessability issues on higher viewports
				screen.width > 1367 ? $('.sub-nav-11').css({
					right: '5%',
					left: 'inherit'
				}) : $('.sub-nav-11').css({
					right: '0',
					left: '0'
				});
				for (var i = 0; i < getAllNavItems.length; i++) {
					Compressor(i);
					if (screen.width < 1367 && screen.width > 436) {
						$('.sub-nav-' + i + '').append('<img alt="Close Button" src="/wcsstore/BonTon/images/categories/_shared/2016/10/ic_clear_black_48dp.png" class="bt-close-menu" width="64" height="64">');
						$('.sub-nav-' + i + ' .bt-close-menu').css({
							position: 'absolute',
							right: 0,
							left: '90%',
							top: 0
						});
					}
					if ($('.sub-nav-' + i + '').children('img').length > 0 && screen.width > 1367) {
						$('.sub-nav-' + i + '').children('img').remove();
					}
				}
				$('.bt-close-menu').on('click', function () {
					$('.bt-sub-nav').next().removeClass('open');
					$('.bt-nav-item').removeClass('open');
					$('#nav-overlay').fadeOut(300);
					tapCounter = 0;
				});
				$('.bt-close-menu').each(function (index, value) {
					$(value).on('touchend', function (e) {
						$('.catalog-links > ul > li > a').each(function (currentPos, link) {
							$(link).hasClass('open') ? ($(link).next().removeClass('open'), $(link).removeClass('open')) : false;
							!$(link).hasClass('open') ? $(link).removeClass('tapped') : false;
						});
						$('#nav-overlay').fadeOut(300);
						tapCounter = 0;
					})
				});
				if (!isTouch && screen.width < 1367 && screen.width > 436) {
					if (inAreaNonTouch) {
						$('.catalog-links > ul > li > a').off('click');

						$('.catalog-links > ul > li > a').each(function (index, value) {
							saveHrefAttr[index] = $(value).attr('href');
							$(value).attr('href', "#");
						});

						$('.catalog-links > ul > li > a').each(function (index, value) {
							$(value).on("click", function (e) {
								e.preventDefault();
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
										$('.catalog-links > ul > li > a').each(function (currentPos, link) {
											$(link).hasClass('open') ? setTimeout(function () {
												$(link).next().removeClass('open')
											}, 100) : false;
											$(link).hasClass('open') ? setTimeout(function () {
												$(link).removeClass('open')
											}, 100) : false;
											setTimeout(function () {
												!$(link).hasClass('open') ? ($(link).removeClass('tapped'), $('#nav-overlay').fadeOut(300)) : false;
											}, 100)

										});
									}


								}
								if (tapCounter === 2 && $(value).hasClass('tapped')) {
									if (previousValue !== undefined && $(previousValue).text() !== currentValue.text()) {
										$(previousValue).removeClass('tapped');
										$('#nav-overlay').fadeIn(300);
										previousValue = currentValue;
										tapCounter = 1;
										return false;
									}
									if ($(value).hasClass('target')) {
										setTimeout(function () {
											$(value).next().removeClass('open')
										}, 100);
										setTimeout(function () {
											$(value).removeClass('open')
										}, 100);
										$(value).removeClass('target');
									}
									$(value).hasClass('open') ? setTimeout(function () {
										$(value).next().removeClass('open')
									}, 100) : false;
									$(value).hasClass('open') ? setTimeout(function () {
										$(value).removeClass('open')
									}, 100) : false;
									$('.catalog-links > ul > li > a').each(function (currentPos, link) {
										$(link).hasClass('tapped') ? $(link).removeClass('tapped') : false;
									});
									$(value).addClass('tapped');

									/* if (!$(value).hasClass('open') && !$(value).siblings('div').hasClass('open')) {
									     $('#nav-overlay').fadeOut(500);
									     alert('2 if');
									 } else {

									     alert('2 else');
									 }*/
									$('#nav-overlay').fadeIn(300);
									tapCounter = 0;
								}

								if (!tapedTwice) {
									//_togglePanel.call(this, event, target.hasClass(this.settings.openClass));
									tapedTwice = true;
									tapCounter++;
									previousValue = $(value);
									setTimeout(function () {
										tapedTwice = false;
										$(value).attr('href', "#");
									}, 350);
									return false;
								}
								//action on double tap goes below
								e.stopPropagation();
								e.preventDefault();
								$(value).attr('href', saveHrefAttr[index]);
								tapCounter = 0;
								$('#nav-overlay').fadeOut(0);
								location.href = $(value).attr('href');
							});
						});
						inAreaNonTouch = false;
					}
				}
				//Toggles between viewports for nontouch objects
				screen.width > 1367 ? inAreaNonTouch = true : false;
				if (isTouch && screen.width < 1367 && screen.width > 436) {
					if (inAreaTouch) {

						$('.catalog-links > ul > li > a').each(function (index, value) {
							saveHrefAttr[index] = $(value).attr('href');
							$(value).attr('href', "#");
						});
						$('.catalog-links .bt-sub-nav > ul > li > a').on('touchstart', function () {
							location.href = $(this).attr('href');
						});
						$('.catalog-links .bt-sub-nav > h2 > a').on('touchstart', function () {
							location.href = $(this).attr('href');
						});
						$('.catalog-links .bt-sub-nav > div > ul > li > a').on('touchstart', function () {
							location.href = $(this).attr('href');
						});
						$('.catalog-links > ul > li > a').each(function (index, value) {
							$(value).on('touchend', function (e) {
								e.preventDefault();
								//alert('touch');
								currentValue = $(value);
								setTimeout(function () {
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
										previousValue = $(value);
										//alert('tap 1 undefined');
										return false;
									} else {
										$('.catalog-links > ul > li > a').each(function (currentPos, link) {
											$(link).hasClass('open') ? $(link).next().removeClass('open') : false;
											$(link).hasClass('open') ? $(link).removeClass('open') : false;
											!$(link).hasClass('open') ? ($(link).removeClass('tapped'), $('#nav-overlay').fadeOut(300)) : false;
										});
										// alert('tap 1 else');
									}


								}
								if (tapCounter === 2 && $(value).hasClass('tapped')) {
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
										tapCounter = 0;
										//alert('tap 2 target');
										return false;
									}


									$('.catalog-links > ul > li > a').each(function (currentPos, link) {
										$(link).hasClass('tapped') ? $(link).removeClass('tapped') : false;
									});
									/* if (!$(value).hasClass('open') && !$(value).siblings('div').hasClass('open')) {
									     $('#nav-overlay').fadeOut(500);
									     alert('2 if');
									 } else {
									    
									     alert('2 else');
									 }*/
									$('#nav-overlay').fadeIn(300);
									$(value).addClass('tapped');
									//alert('tap 2 end');

									tapCounter = 0;
								}

								if (!tapedTwice) {
									tapedTwice = true;
									tapCounter++;
									previousValue = $(value);
									setTimeout(function () {
										tapedTwice = false;
										$(value).attr('href', "#");
									}, 350, true);
									return false;
								}
								//action on double tap goes below
								e.preventDefault();
								e.stopPropagation();
								$(value).attr('href', saveHrefAttr[index]);
								tapCounter = 0;
								$('#nav-overlay').fadeOut(0);
								location.href = $(value).attr('href');
							});
						});
						inAreaTouch = false;
					}
				}
			});
			$(window).resize();
		}

		function addOverlayToMouseEvents() {
			$('.bt-nav-item > a').each(function (index, value) {

				$(value).on('mouseover', function () {
					setTimeout(function () {
						if ($(value).siblings('div').hasClass('open') && !$('#nav-overlay').length) {
							$('body').prepend('<div id="nav-overlay"></div>');
							$('#nav-overlay').css({
								position: 'absolute',
								left: 0,
								width: '100%',
								height: document.body.offsetHeight + 'px',
								display: 'none',
								backgroundColor: 'black',
								opacity: '.5',
								zIndex: 2,
								transform: 'translate3d(0,0,0)'
							}).fadeIn(300);
							$('#nav-overlay').on('mouseenter', function () {
								setTimeout(function () {
									checkForOverlay(value);
								}, 260);
							});
						}
						if ($('#nav-overlay').length && $(value).siblings('div').hasClass('open')) {
							$('#nav-overlay').fadeIn(300);
						}
					}, 600);

				});
				$('.bt-nav-menu').on('mouseleave', function () {
					if ($(value).hasClass('open')) {
						setTimeout(function () {
							checkForOverlay(value);
						}, 310);
					}
				});
				$(value).siblings('div').on('mouseleave', function () {
					if (!$(value).hasClass('open')) {
						setTimeout(function () {
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
				for (var i = 0; i < getAllNavItems.length; i++) {
					switch ($(getAllNavItems[i]).attr('href')) {
						case "/sc1/brands/":
							$("<div class='bt-sub-nav sub-nav-0'></div>").insertAfter($(getAllNavItems[i])).css("display", "none");
							break;
						case "/sc1/home/furniture-24382/":
							$("<div class='bt-sub-nav sub-nav-10'></div>").insertAfter($(getAllNavItems[i])).css("display", "none");
							break;
						case "/clearance":
							$("<div class='bt-sub-nav sub-nav-12'></div>").insertAfter($(getAllNavItems[i])).css("display", "none");
                            InsertXML('/wcsstore/BonTon/text/categories/_shared/2016/11/xmlmega/menuxmlv2.xml');
                            setTimeout(function() {insertFeaturedBrands(); }, 150);
                            
							break;
						default:
							break;
					}
				}
            setTimeout(function () {
				//Wraps every pair of elements within the first ul of catalog-links in a li
				var $set = $('.catalog-links > ul').children();
				for (var z = 0, len = $set.length; z < len; z += 2) {
					$set.slice(z, z + 2).wrapAll('<li class="bt-nav-item"></li>');
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
			}, 300);
		}
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