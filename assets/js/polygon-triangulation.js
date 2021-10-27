function draw_lines(canvas, scale){
    scale = scale ? scale : 1;

    for(var i=0; i < 10; i++){
        canvas.line(i*scale,0,i*scale,10*scale).attr({
            'stroke': '#000',
            'stroke-width': 0.1*scale,
            'stroke-opacity': 0.2
        });

        canvas.line(0,i*scale,10*scale,i*scale).attr({
            'stroke': '#000',
            'stroke-width': 0.1*scale,
            'stroke-opacity': 0.2
        });
    }
}

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];

    canvas.polygon([a,b,c,d,e]).attr({
        'fill': '#ee6e6e',
        'stroke': 'none'
    });

    draw_lines(canvas, 10);

    canvas.text('BIG').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': '10',
        'font-weight': 'bold'
    }).center(36,50);

    canvas.addTo('#s3 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];

    canvas.polygon([a,b,c]).attr({'fill': '#c56eee','stroke': 'none'});
    canvas.polygon([c,d,e]).attr({'fill': '#ee6e6e','stroke': 'none'});
    canvas.polygon([e,a,c]).attr({'fill': '#b2ee6e','stroke': 'none'});

    draw_lines(canvas, 10);

    canvas.text('mini').attr({'fill': '#000','font-family': 'arial','font-size': '7'}).center(30,50);
    canvas.text('mini').attr({'fill': '#000','font-family': 'arial','font-size': '7'}).center(50,30);
    canvas.text('mini').attr({'fill': '#000','font-family': 'arial','font-size': '7'}).center(50,70);

    canvas.addTo('#s5 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];

    canvas.polygon([a,b,c,d,e]).attr({
        'fill': '#ee6e6e',
        'stroke': 'none'
    });

    draw_lines(canvas, 10);
    
    canvas.text('a').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(a[0]-5,a[1]-5);
    canvas.text('b').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(b[0]+5,b[1]-5);
    canvas.text('c').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(c[0]+7,c[1]);
    canvas.text('d').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(d[0]+5,d[1]+5);
    canvas.text('e').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(e[0]-5,e[1]+5);

    canvas.addTo('#s8 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];

    canvas.polygon([a,b,c,d,e]).attr({
        'fill': '#ee6e6e',
        'stroke': 'none'
    });

    draw_lines(canvas, 10);
    
    canvas.text('a').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(a[0]-5,a[1]-5);
    canvas.text('b').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(b[0]+5,b[1]-5);
    canvas.text('c').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(c[0]+7,c[1]);
    canvas.text('d').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(d[0]+5,d[1]+5);
    canvas.text('e').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(e[0]-5,e[1]+5);

    var CW = canvas.path('m 64.40422,138.24999 v 9.54889 h 4.77469 c 17.719937,0 33.66406,10.65308 40.44518,27.02418 6.78114,16.37108 3.04073,35.17752 -9.48917,47.70742 -12.52986,12.52988 -31.336799,16.2708 -47.707889,9.48967 -16.37109,-6.78113 -27.024176,-22.72528 -27.024176,-40.44522 v -3.22375 H 37.815769 L 20.627675,167.889 3.4395847,188.35118 H 15.853975 v 3.22375 c 0,21.55471 13.003566,41.01811 32.917526,49.26675 19.913963,8.24863 42.873433,3.68176 58.114889,-11.55972 15.24149,-15.2415 19.80788,-38.20047 11.55924,-58.11444 -8.24862,-19.91394 -27.712007,-32.91753 -49.26672,-32.91753 z');

    var w = CW.width();
    var h = CW.height();

    CW.width(20);
    CW.height(h * (20 / w));
    CW.center(35,50);

    canvas.text('Clockwise').attr({'fill':'#000','font-family':'arial','font-size':8,'font-weight':'bold'}).center(50,93);

    canvas.addTo('#s10 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];
    
    draw_lines(canvas, 10);
    
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(a[0],a[1]).clipWith(canvas.polygon([e,a,b]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(b[0],b[1]).clipWith(canvas.polygon([a,b,c]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(c[0],c[1]).clipWith(canvas.polygon([b,c,d]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(d[0],d[1]).clipWith(canvas.polygon([c,d,e]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(e[0],e[1]).clipWith(canvas.polygon([d,e,a]));
    
    canvas.polygon([a,b,c,d,e]).attr({
        'fill': 'none',
        'stroke': '#000',
        'stroke-width': 1
    });

    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(a[0]-5,a[1]-5);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(b[0]+5,b[1]-5);
    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(c[0]+19,c[1]);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(d[0]+5,d[1]+5);
    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(e[0]-5,e[1]+5);

    canvas.addTo('#s12 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];
    
    draw_lines(canvas, 10);
    
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(a[0],a[1]).clipWith(canvas.polygon([e,a,b]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(b[0],b[1]).clipWith(canvas.polygon([a,b,c]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(c[0],c[1]).clipWith(canvas.polygon([a,b,c,d,e]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(d[0],d[1]).clipWith(canvas.polygon([c,d,e]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(e[0],e[1]).clipWith(canvas.polygon([d,e,a]));
    
    canvas.polygon([a,b,c,d,e]).attr({
        'fill': 'none',
        'stroke': '#000',
        'stroke-width': 1
    });

    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(a[0]-5,a[1]-5);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(b[0]+5,b[1]-5);
    canvas.text('270°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(c[0]+15,c[1]);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(d[0]+5,d[1]+5);
    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(e[0]-5,e[1]+5);

    canvas.addTo('#s18 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];
    
    draw_lines(canvas, 10);
    
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(a[0],a[1]).clipWith(canvas.polygon([e,a,d]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(c[0],c[1]).clipWith(canvas.polygon([e,a,d]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(d[0],d[1]).clipWith(canvas.polygon([c,d,e]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(e[0],e[1]).clipWith(canvas.polygon([d,e,a]));
    
    canvas.polygon([a,d,e]).attr({
        'fill': 'none',
        'stroke': '#000',
        'stroke-width': 1
    });

    canvas.polygon([a,b,c]).attr({'fill': '#ee6e6e','fill-opacity': 0.6,'stroke': 'none'});

    canvas.text('stored').attr({'fill':'#000','fill-opacity':0.6,'font-family':'arial','font-size':7}).center(50,30);

    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(a[0]-5,a[1]-5);
    canvas.text('180°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(c[0]+15,c[1]);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(d[0]+5,d[1]+5);
    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(e[0]-5,e[1]+5);

    canvas.addTo('#s20 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];
    
    draw_lines(canvas, 10);
    
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(c[0],c[1]).clipWith(canvas.polygon([e,c,d]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(d[0],d[1]).clipWith(canvas.polygon([c,d,e]));
    canvas.circle(20).attr({'fill':'#0099ff','stroke':'#000','stroke-width':1}).center(e[0],e[1]).clipWith(canvas.polygon([c,e,d]));
    
    canvas.polygon([c,d,e]).attr({
        'fill': 'none',
        'stroke': '#000',
        'stroke-width': 1
    });

    canvas.polygon([a,c,e]).attr({'fill': '#ee6e6e','fill-opacity': 0.6,'stroke': 'none'});

    canvas.text('stored').attr({'fill':'#000','fill-opacity':0.6,'font-family':'arial','font-size':7}).center(33,50);

    canvas.text('90°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(c[0]+15,c[1]);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(d[0]+5,d[1]+5);
    canvas.text('45°').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 8
    }).center(e[0]-5,e[1]+5);

    canvas.addTo('#s21 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var a = [20,20], b = [80,20], c = [50,50], d = [80,80], e = [20,80];
    
    draw_lines(canvas, 10);
    
    canvas.polygon([c,d,e]).attr({
        'fill': '#ee6e6e',
        'fill-opacity': 0.6,
        'stroke': 'none'
    });

    canvas.text('stored').attr({'fill':'#000','fill-opacity':0.6,'font-family':'arial','font-size':7}).center(50,70);

    canvas.addTo('#s22 .svg');
})();