var moves=0;
var wins = 0;
var cards = [
    '<img src="img/default/mosters-01.png">', '<img src="img/default/mosters-02.png">', 
    '<img src="img/default/mosters-03.png">', '<img src="img/default/mosters-04.png">', 
    '<img src="img/default/mosters-05.png">', '<img src="img/default/mosters-06.png">', 
    '<img src="img/default/mosters-07.png">', '<img src="img/default/mosters-08.png">', 
    '<img src="img/default/mosters-09.png">', '<img src="img/default/mosters-10.png">', 
    '<img src="img/default/mosters-11.png">', '<img src="img/default/mosters-12.png">', 
    '<img src="img/default/mosters-13.png">', '<img src="img/default/mosters-14.png">', 
    '<img src="img/default/mosters-15.png">', '<img src="img/default/mosters-16.png">' 
];
var gridSize = 16;
var gameTiles = cards.slice(0,(gridSize/2));
var gridArray = $.merge(gameTiles,gameTiles);


$(document).ready(function(){
    var visTile = $('.mg_tile-inside:visible')
// for loop to shuffle the playing cards in the gridArray. 
    for(i=1;i<100;i++){
        var rand = Math.floor(Math.random()*16);
        var rand2 = Math.floor(Math.random()*16);
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





