function loopThis(count, length) { 
    setTimeout(function() {
        $(".fade-in-out").eq(count).fadeIn(500).delay(3000).fadeOut(500);
        count++;

        if(count < length)
            loopThis(count, length);
        else
            $(".fade-in").delay(5000).fadeIn(500); 
    }, 5000);          
}

$(document).ready(function() {
    var count = 0;
    var length = $(".fade-in-out").length;

    console.log(length);
    $(".fade-in-out").eq(count).fadeIn(500).delay(3000).fadeOut(500);
    count++;
    
    if(count == length)
        $(".fade-in").delay(5000).fadeIn(500);
    else
        loopThis(count, length);
          
});