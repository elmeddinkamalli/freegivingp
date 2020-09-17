/* Main js document */

/**************************

Introduction

1.Vars and Inits
2.Init charitables slider
3.Init grid

*************************/

$(document).ready(function()
{

	"use strict";

	/*

	1. Vars and Inits
	2. Small screen menu init
	3. Header background init
	4. Charitables slider
	5. Init grid

	*/

	showMenu();
	changeBackground();
	initCharitablesSlider();
	initGrid();


	/*

	2. Small screen menu init

	*/

	function showMenu(){
		$('.fa-bars').on('click', ()=>{
			if(!$('.hidden-menu').hasClass('active')){
				$('.hidden-menu').addClass('active');
				$('.hidden-menu').slideDown();
				if($(window).scrollTop() < 200){
					$('#header').css('background', 'rgba(78, 180, 251)');
				}
			} else {
				$('.hidden-menu').removeClass('active');
				$('.hidden-menu').slideUp();
				if($(window).scrollTop() < 200){
					$('#header').css('background', 'rgba(78, 180, 251, 15%)');
				}
			}
		})
	}


	/*

	3. Change header background

	*/

	function changeBackground(){
		$(window).on('scroll', ()=>{
			if($(window).scrollTop() > 200){
				$('#header').css('background', 'rgba(78, 180, 251)');
			}else{
				if(!$('.hidden-menu').hasClass('active')){
					$('#header').css('background', 'rgba(78, 180, 251, 15%)');
				}
			}
		})
	}

	/*

	4. Charitables slider

	*/

	function initCharitablesSlider()
	{
		if($('.charitables-slider-container').length)
		{
			var charitablesSlider = $('.owl-carousel');

			charitablesSlider.owlCarousel(
			{
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dots:false,
				nav:false,
				margin:40,
				responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        800:{
			            items:3
			        }
			    }
			});

			if($('.prev-button').length)
			{
				$('.prev-button').on('click', function(){
					charitablesSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.next-button').length)
			{
				$('.next-button').on('click', function(){
					charitablesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/*

	5.Init grid

	*/

	function initGrid()
	{
		var item1 = document.getElementById('item-1');  //select 6 items
		var item2 = document.getElementById('item-2');	//in the index page
		var item3 = document.getElementById('item-3');
		var item4 = document.getElementById('item-4');
		var item5 = document.getElementById('item-5');
		var item6 = document.getElementById('item-6');

		var gridContainer = $('.grid').width(); //get the width of the grid container

		function getWidth(item_1, item_2){

			var x = Math.floor(Math.random()*(500-300)+300)-10; //generate 2 random number which their
			var y = Math.floor(Math.random()*(700-500)+500)-10;	//sum equals to their container's width. Last number is margin 

			if($('.grid').width() <= 1140 && $('.grid').width() > 960) //according to bootstrap, we applying different script for the container
			{
				while (x+y!=$('.grid').width()-20) { //while the sum is not equals to container width
					x = Math.floor(Math.random()*(500-300)+300)-10; //we generate 2 random numbers again
					y = Math.floor(Math.random()*(700-500)+500)-10;
				};

				$(item_1).css('width', x); //when number are ready, we applying them to each
				$(item_2).css('width', y); //elements which comes from arguments above

			} else if($('.grid').width() <= 960 && $('.grid').width() > 720){
				
				while (x+y!=$('.grid').width()-20) {
					x = Math.floor(Math.random()*(480-300)+300)-10;
					y = Math.floor(Math.random()*(660-480)+480)-10;
				};

				$(item_1).css('width', x);
				$(item_2).css('width', y);

			}else if($('.grid').width() <= 720 && $('.grid').width() > 540){
				
				while (x+y!=$('.grid').width()-20) {
					x = Math.floor(Math.random()*(360-200)+200)-10;
					y = Math.floor(Math.random()*(520-360)+360)-10;
				};

				$(item_1).css('width', x);
				$(item_2).css('width', y);

			}else{
				var differ = 540-$('.grid').width();

				while (x+y!=$('.grid').width()-20) {
					x = Math.floor(Math.random()*(270-170)+170)-10-differ/2;
					y = Math.floor(Math.random()*(370-270)+270)-10-differ/2;
				};

				$(item_1).css('width', x);
				$(item_2).css('width', y);
				}
			}

		getWidth(item1, item2); //we calling the function for each 6 elements
		getWidth(item4, item3); //applying them as an argument
		getWidth(item5, item6);

		$(window).on('resize', function() //when window resizing
		{
			if($('.grid').width() != gridContainer) //we checking whether the container width changed or not
			{
				gridContainer = $('.grid').width(); //if changed, we applying to variable, it's new amount

				getWidth(item1, item2); //and calling function again
				getWidth(item4, item3);
				getWidth(item5, item6);
			}
		})
	}

})