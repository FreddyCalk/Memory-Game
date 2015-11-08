var moves=0;
var wins = 0;
var cards = [
    "<img src='img/default/monsters-1.png'>",
    "<img src='img/default/monsters-2.png'>", 
    "<img src='img/default/monsters-3.png'>",
    "<img src='img/default/monsters-4.png'>", 
    "<img src='img/default/monsters-5.png'>",
    "<img src='img/default/monsters-6.png'>", 
    "<img src='img/default/monsters-7.png'>",
    "<img src='img/default/monsters-8.png'>", 
    "<img src='img/default/monsters-9.png'>",
    "<img src='img/default/monsters-10.png'>",
    "<img src='img/default/monsters-11.png'>",
    "<img src='img/default/monsters-12.png'>", 
    "<img src='img/default/monsters-13.png'>",
    "<img src='img/default/monsters-14.png'>" 
];
var gridSize;
var gameTiles;
var gridArray;
var rowSize;

$(document).ready(function(){

    $('input').click(function(){
        $('#button-bucket').hide();
        $('.counter').show();
        var dif = $(this).attr('difficulty');
        if(dif === 'easy'){
            rowSize = 4;
            gridSize = rowSize*2;
        }else if(dif === 'medium'){
            rowSize = 5;
            gridSize = rowSize*4;
        }else if(dif === 'hard'){
            rowSize = 7;
            gridSize = rowSize*4;
        }

        gameTiles = cards.slice(0,(gridSize/2));
        gridArray = $.merge(gameTiles,gameTiles);

        var visTile = $('.mg_tile-inside:visible')
        $('#mg_contents').empty();
    // for loop to shuffle the playing cards in the gridArray. 
        for(i=1;i<gridSize*5;i++){
            var rand = Math.floor(Math.random()*gridSize);
            var rand2 = Math.floor(Math.random()*gridSize);
            var temp = gridArray[rand];
            gridArray[rand] = gridArray[rand2];
            gridArray[rand2] = temp;
        }

        for(i=0;i<gridArray.length;i++){
            var html = "<div class='mg_tile'><div class='mg_tile-inner unmatched'>"
                html += "<div class='mg_tile-outside'></div><div class='mg_tile-inside'>"+gridArray[i]+"</div></div></div>"
            $("#mg_contents").append(html);
        }
        $('.mg_tile').css('height',((1/rowSize)*100)+'%');
        $('.mg_tile').css('width',((1/rowSize)*100)+'%');

        $('.mg_tile').click(function(){

            $(this).find('.mg_tile-inner').addClass('flipped');

            //Check again
            if($('.mg_tile-inner.flipped.unmatched').length == 2){
                var card = [];
                var visibleCards = $('.mg_tile-inner.flipped.unmatched .mg_tile-inside').each(function(i){
                    card.push($(this).find('img').attr('src'));
                });
                if(card[0] == card[1]){
                    // alert('match!');
                    moves++;
                    $('.mg_tile-inner.flipped.unmatched').removeClass('unmatched').addClass('matched');
                    if($('.mg_tile-inner.matched').length == gridSize){
                        youWin();
                    }
                }else{
                    setTimeout(function(){
                        $('.mg_tile-inner.unmatched').removeClass('flipped');
                        moves++;
                    },1000);
                }   
            }
        $('#move-counter').html(moves);
        });
    });
});
function youWin(){
    alert('You won in '+moves+' moves!');
    $('.mg_tile-match').addClass('mg_tile-inside');
    $('.mg_tile-inside').removeClass('mg_tile-match');
    $('.mg_tile-inside').hide();
    wins++;
    $('#win-counter').html(wins);
    moves = 0;
    $('#button-bucket').show();
    // $('#mg_contents').;

}





