var headerh, screenh;

Reveal.initialize({
    hash: true,
    disableLayout: true,
    math: {
        mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
        config: 'TeX-AMS_SVG-full',
        // pass other options into `MathJax.Hub.Config()`
        TeX: { Macros: { RR: "{\\bf R}" } },
        "SVG": { scale: 85 }
    },
    plugins: [ RevealMath ],
});

function handleMathOverflow(){
    var eqs = document.querySelectorAll('.math-overflow');

    if(eqs.length > 0){
        eqs.forEach(function(elem){
            elem.style.width = (window.innerWidth*0.93) + 'px';
        });
    }
}

function handleCode(screen_height, header_height, onInit){
    var maxheight = (screen_height - header_height) - header_height*0.5;

    var codes = document.querySelectorAll('.code');

    if(codes.length > 0){
        codes.forEach(function(elem){
            if(onInit){
                hljs.highlightElement(elem.querySelector('code'));
                hljs.lineNumbersBlock(elem.querySelector('code'));
            }

            elem.style.width = window.innerWidth + 'px';
            elem.style.margin = 0 + ' !important';
            elem.style.padding = 0 + ' !important';

            var code_table = elem.querySelector('code').querySelector('.hljs-ln');

            if(code_table){
                if(code_table.offsetHeight > maxheight*0.95){
                    elem.querySelector('code').style.height = (maxheight*0.95) + 'px';
                }
                else{
                    elem.querySelector('code').style.height = 'auto';
                }
            }
            else{
                elem.querySelector('code').style.height = (maxheight*0.95) + 'px';
            }

            elem.querySelector('code').style.padding = 0;
        });
    }
}

Reveal.on( 'ready', function() {
    screenh = window.innerHeight;
    
    headerh = document.getElementById('header-nav').offsetHeight;

    document.querySelector('.reveal').style.height = (screenh - headerh) + 'px';
    
    update_height(screenh, headerh);

    handleMathOverflow();
    
    handleSvgSize(screenh, headerh);
    
    handleCode(screenh, headerh, true);
} );

window.addEventListener('resize', function(){
    screenh = window.innerHeight;

    headerh = document.getElementById('header-nav').offsetHeight;

    document.querySelector('.reveal').style.height = (screenh - headerh) + 'px';

    update_height(screenh, headerh);

    handleMathOverflow();

    handleSvgSize(screenh, headerh);

    handleCode(screenh, headerh);
});

Reveal.on( 'slidetransitionend', function(event){
    if(event.currentSlide.querySelector('.svg')){
        if(event.currentSlide.querySelector('.svg').querySelector('.mask-anim')){
            SVG(event.currentSlide.querySelector('.svg').querySelector('.mask-anim')).fire('click');
        }
    }
});


//======================================= BUG! =======================================
//====================================================================================
Reveal.on( 'slidechanged', function(event){
    screenh = window.innerHeight;

    headerh = document.getElementById('header-nav').offsetHeight;

    document.querySelector('.reveal').style.height = (screenh - headerh) + 'px';

    update_height(screenh, headerh);

    handleMathOverflow();

    handleSvgSize(screenh, headerh);

    handleCode(screenh, headerh);
} );
//====================================================================================
//======================================= BUG! =======================================