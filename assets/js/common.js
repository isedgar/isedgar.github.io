function update_height(screen_height, header_height){
    document.querySelectorAll('.div-outer').forEach(function(element){
        element.style.width = window.innerWidth + 'px';

        element.style.height = ((screen_height - header_height) - header_height*0.5) + 'px';
    });

    document.querySelectorAll('.div-middle').forEach(function(element){
        element.style.width = window.innerWidth + 'px';

        element.style.height = ((screen_height - header_height) - header_height*0.5) + 'px';
    });

    document.querySelectorAll('.div-inner').forEach(function(element){    
        element.style.width = window.innerWidth + 'px';

        if(element.scrollHeight >= (screen_height - header_height)){
            element.style.height = ((screen_height - header_height) - header_height*0.5) + 'px';
            element.classList.add('handle-overflow');
        }
        else{
            element.style.height = 'auto';
            element.classList.remove('handle-overflow');
        }
    });
}

function handleSvgSize(screen_height, header_height){
    var maxheight = (screen_height - header_height) - header_height*0.5,
        minsize = maxheight <= window.innerWidth ? maxheight : window.innerWidth;

    var draws = document.querySelectorAll('.svg');

    if(draws.length > 0){
        draws.forEach(function(elem){
            elem.style.maxWidth = (minsize*0.95) + 'px';
        });
    }
}