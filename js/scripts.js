var moves=0;
var wins = 0;
var cards = [
    '<img src="img/default/monsters-01.png">', '<img src="img/default/monsters-02.png">', 
    '<img src="img/default/monsters-03.png">', '<img src="img/default/monsters-04.png">', 
    '<img src="img/default/monsters-05.png">', '<img src="img/default/monsters-06.png">', 
    '<img src="img/default/monsters-07.png">', '<img src="img/default/monsters-08.png">', 
    '<img src="img/default/monsters-09.png">', '<img src="img/default/monsters-11.png">',
    '<img src="img/default/monsters-13.png">', '<img src="img/default/monsters-14.png">', 
    '<img src="img/default/monsters-15.png">', '<img src="img/default/monsters-16.png">' 
];
var gridSize = 8;
var gameTiles = cards.slice(0,(gridSize/2));
var gridArray = $.merge(gameTiles,gameTiles);



$(document).ready(function(){
// Use .append() to generate the required divs for the board... remember to addClass
// when necessary so that the formatting stays consistent.
// pseudo code outline
// 
// set up a for loop that will run through the length of the gridArray...
// on each iteration must add a div, with two divs inside of it, each one of these
// divs have specific classes that should be assigned to them that will format them.
// 
// populating the webpage with the required divs 
    for(i=0;i<gridArray.length;i++){
        $("#mg_contents").append("<div class='mg_tile'><div class='mg_tile-inner'></div></div>");
    }
        $('.mg_tile-inner').append('<div class="mg_tile-outside"></div><div class="mg_tile-inside"></div');
    // Need to figure out how to add one image to each of the inside divs
    // that I have generated... but looking good so far.
    // var cardArray = $('.mg_tile-inside');
    // for(i=0;i<cardArray.length;i++){

    // }

    var visTile = $('.mg_tile-inside:visible')
// for loop to shuffle the playing cards in the gridArray. 
    for(i=1;i<gridSize*5;i++){
        var rand = Math.floor(Math.random()*gridSize);
        var rand2 = Math.floor(Math.random()*gridSize);
        var temp = gridArray[rand];
        gridArray[rand] = gridArray[rand2];
        gridArray[rand2] = temp;
    }

});

    $('.mg_tile').click(function(){
        

        if($('.mg_tile-inside:visible').length == 2){
            $('.mg_tile-inside').hide();
            moves++;

        }

        $(this).find('.mg_tile-inside').show();

        //Check again
        if($('.mg_tile-inside:visible').length == 2){
            var card = [];
            var visibleCards = $('.mg_tile-inside:visible').each(function(i){
                card.push($(this).attr('card'));
            });
            if(card[0] == card[1]){
                alert('match!');
                moves++;
                $('.mg_tile-inside:visible').removeClass('mg_tile-inside').addClass('mg_tile-match');
                if($('.mg_tile-inside').length == 0){
                    youWin();
                }
            }   
        }

    });

function youWin(){
    alert('You won in '+moves+' moves!');
    $('.mg_tile-match').addClass('mg_tile-inside');
    $('.mg_tile-inside').removeClass('mg_tile-match');
    $('.mg_tile-inside').hide();
    wins++;
    moves = 0;

}





