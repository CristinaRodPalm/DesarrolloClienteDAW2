$(document).ready(function(){
    // exercici 1
    $('#setBlueColor').click(setBlueColor);
    $('#setRedColor').click(setRedColor);
      
    // exercici 2
    $('#setInvisible').click(setInvisible);
    $('#setVisible').click(setVisible);
    $('#toggleVisible').click(toggleVisible);
      
    // exercici 3
    $('#incSize').click(incSize);
    $('#decSize').click(decSize);
    $('#incRight').click(incRight);
    $('#decRight').click(decRight);
    $('#movimentContinu').click(movimentContinu);
    $('#toggleVisibleMov').click(toggleVisibleMov);
});

function setBlueColor(){
    $('#header').css('background-color', 'blue');
}
function setRedColor(){
    $('#header').css('background-color', 'red');
}

function setInvisible(){
    $('#header').fadeOut();
}
function setVisible(){
    $('#header').fadeIn();
}
function toggleVisible(){
    $('#header').fadeToggle();
}

function incSize(){
    $('#movContinu').animate({
        height: "+=50px"
    }, 1500);
}

function decSize(){
    $('#movContinu').animate({
        height: "-=50px"
    }, 2000);
}

function incRight(){
    $('#movContinu').animate(
        {
            right: "+=50px"
        }, 
        { duration: 1500,
            step: function(now, fx){
                $('#movContinu').html(now);
    }});
}
function decRight(){
    $('#movContinu').animate(
        {
            right: "-=50px"
        }, 
        { duration: 1500,
            step: function(now, fx){
                $('#movContinu').html(now);
    }});
}
 
var primera = true;
function movimentContinu(){
    
    if(primera){
        primera = false;
        $('#movContinu').css('background-color', 'orange');
        dreta();
        
    }else{
        $('#movContinu').css('background-color', 'green');
        $('#movContinu').stop();
        primera = true;
    }
}

function dreta(){
    $('#movContinu').animate(
        {   right: "-=1500px"   },
        { duration: 2000,
        complete: function(){
            esquerra();
        }});
}
function esquerra(){
    $('#movContinu').animate(
        {   right: "+=1500px"   },
        { duration: 2000,
        complete: function(){
            dreta();
        }});
}

function toggleVisibleMov(){
    $('#movContinu').fadeToggle();
}