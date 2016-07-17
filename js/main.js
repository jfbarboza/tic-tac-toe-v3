/* Script by jfbarboza*/

'use strict'

var TicTacToe = (function(){
	
	$(document).ready(function(){
		var body = $('body');
		body.empty();
		body.html('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button" id="start-button">Start game</a></header></div>');
		
		$('body').on('click','#start-button', function(){
			body.empty();
			body.html('<div class="board" id="board"><header><h1>Tic Tac Toe</h1><ul><li class="players active" id="player1"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li><li class="players" id="player2"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li></ul></header><ul class="boxes"><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li><li class="box"></li></ul></div>');
		});
		
		
		document.TURN = "O";
		document.TURN_COUNT = 0;
		
	});
	
	$('body').on('mouseenter', '.box', function(){
		if($(this).html()== ''){
			if(document.TURN == "O"){
				$(this).addClass('box-filled-1');	
			}
			else{
				$(this).addClass('box-filled-2');
			}	
		}
	});
	
	$('body').on('mouseleave', '.box', function(){
		$(this).removeClass('box-filled-1');
		$(this).removeClass('box-filled-2');
	});
	
	
	$('body').on('click', '.box', function(){
		document.TURN_COUNT = document.TURN_COUNT + 1;
		if($(this).html() == ""){
			$(this).append('<img src="img/' + document.TURN + '.svg" width="100%" data-turn ="' + document.TURN +'"/>');
			if(checkWin()){
				var body = $('body');
				body.empty();
				if(document.TURN == 'O'){
					body.html('<div class="screen screen-win screen-win-one" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">WINNER</p><a href="#" class="button" id="start-button">New game</a></header></div>');
					document.TURN_COUNT = 0;
				}
				else{
					body.html('<div class="screen screen-win screen-win-two" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">WINNER</p><a href="#" class="button" id="start-button">New game</a></header></div>');
					document.TURN_COUNT = 0;
				}
				
			}
			else{
				if(document.TURN_COUNT < 9){
					toggleTurn();
					toggleActivePlayer();				
				}
				else{
					var body = $('body');
					body.html('<div class="screen screen-win screen-win-tie" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">TIE</p><a href="#" class="button" id="start-button">New game</a></header></div>');
					document.TURN_COUNT = 0;
				}
		
			}
			
		}
	});
	
	function checkWin(){
		var box = document.getElementsByClassName('box');
		if( ($('.box:nth-child(1) img').data("turn") == document.TURN && $('.box:nth-child(2) img').data("turn") == document.TURN && $('.box:nth-child(3) img').data("turn") == document.TURN) || ($('.box:nth-child(4) img').data("turn") == document.TURN && $('.box:nth-child(5) img').data("turn") == document.TURN && $('.box:nth-child(6) img').data("turn") == document.TURN) ||  ($('.box:nth-child(7) img').data("turn") == document.TURN && $('.box:nth-child(8) img').data("turn") == document.TURN && $('.box:nth-child(9) img').data("turn") == document.TURN) || ($('.box:nth-child(1) img').data("turn") == document.TURN && $('.box:nth-child(4) img').data("turn") == document.TURN && $('.box:nth-child(7) img').data("turn") == document.TURN) || ($('.box:nth-child(2) img').data("turn") == document.TURN && $('.box:nth-child(5) img').data("turn") == document.TURN && $('.box:nth-child(8) img').data("turn") == document.TURN) || ($('.box:nth-child(3) img').data("turn") == document.TURN && $('.box:nth-child(6) img').data("turn") == document.TURN && $('.box:nth-child(9) img').data("turn") == document.TURN) || ($('.box:nth-child(3) img').data("turn") == document.TURN && $('.box:nth-child(5) img').data("turn") == document.TURN && $('.box:nth-child(7) img').data("turn") == document.TURN) || ($('.box:nth-child(1) img').data("turn") == document.TURN && $('.box:nth-child(5) img').data("turn") == document.TURN && $('.box:nth-child(9) img').data("turn") == document.TURN)){
			return document.TURN;
		}
		return false;
	}
	
	function toggleActivePlayer(){
		$('#player1, #player2').toggleClass('active');
	}
	
	function toggleTurn(){
		if(document.TURN == 'O'){
			document.TURN = 'X';
		}
		else{
			document.TURN = 'O';
		}
	}

}());
