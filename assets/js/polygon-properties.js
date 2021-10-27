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

    canvas.viewbox(0,0,10,10);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.text('10 x 10').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 1.5
    }).center(5,5);

    canvas.addTo('#s4 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,10,10);

    canvas.css('background', 'rgb(200,200,200)');

    var v1 = [0,10], v2 = [5,5], v3 = [10,10];

    canvas.polygon([v1,v2,v3]).attr({
        'fill': '#ee6e6e',
        'stroke': 'none'
    });

    draw_lines(canvas);

    canvas.addTo('#s6 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,10,10);

    canvas.css('background', 'rgb(200,200,200)');

    var v1 = [0,10], v2 = [5,5], v3 = [10,10];

    canvas.polygon([v1,v2,v3]).attr({
        'fill': '#ee6e6e',
        'stroke': 'none'
    });

    var v1 = [5,5], v2 = [10,10], v3 = [10,0];

    canvas.polygon([v1,v2,v3]).attr({
        'fill': '#6e96ee',
        'stroke': 'none'
    });

    var v1 = [0,0], v2 = [10,0], v3 = [5,5];

    canvas.polygon([v1,v2,v3]).attr({
        'fill': '#ffcc5e',
        'stroke': 'none'
    });

    var v1 = [0,0], v2 = [5,5], v3 = [0,10];

    canvas.polygon([v1,v2,v3]).attr({
        'fill': '#79ff5e',
        'stroke': 'none'
    });

    draw_lines(canvas);

    canvas.addTo('#s13 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,100,100);

    canvas.css('background', 'rgb(200,200,200)');

    var v0 = [10,10], v1 = [90,10], v2 = [90,40]; v3 = [10,40];

    canvas.polygon([v0,v1,v2,v3]).attr({
        'fill': 'none',
        'stroke': '#000',
        'stroke-width': 2
    });

    canvas.rect(10,10).fill('#000').move(10,10);
    canvas.rect(10,10).fill('#000').move(80,10);
    canvas.rect(10,10).fill('#000').move(80,30);
    canvas.rect(10,10).fill('#000').move(10,30);

    canvas.text('0').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(15,15);

    canvas.text('1').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(85,15);

    canvas.text('2').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(85,35);

    canvas.text('3').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(15,35);

    var CW = canvas.path('m 64.40422,138.24999 v 9.54889 h 4.77469 c 17.719937,0 33.66406,10.65308 40.44518,27.02418 6.78114,16.37108 3.04073,35.17752 -9.48917,47.70742 -12.52986,12.52988 -31.336799,16.2708 -47.707889,9.48967 -16.37109,-6.78113 -27.024176,-22.72528 -27.024176,-40.44522 v -3.22375 H 37.815769 L 20.627675,167.889 3.4395847,188.35118 H 15.853975 v 3.22375 c 0,21.55471 13.003566,41.01811 32.917526,49.26675 19.913963,8.24863 42.873433,3.68176 58.114889,-11.55972 15.24149,-15.2415 19.80788,-38.20047 11.55924,-58.11444 -8.24862,-19.91394 -27.712007,-32.91753 -49.26672,-32.91753 z');

    var w = CW.width();
    var h = CW.height();

    CW.width(20);
    CW.height(h * (20 / w));

    CW.center(50,25);
    //==================================================================================

    var v0 = [10,60], v1 = [10,90], v2 = [90,90]; v3 = [90,60];

    canvas.polygon([v0,v1,v2,v3]).attr({
        'fill': 'none',
        'stroke': '#000',
        'stroke-width': 2
    });

    canvas.rect(10,10).fill('#000').move(10,60);
    canvas.rect(10,10).fill('#000').move(80,60);
    canvas.rect(10,10).fill('#000').move(80,80);
    canvas.rect(10,10).fill('#000').move(10,80);

    canvas.text('0').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(15,65);

    canvas.text('1').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(15,85);
    
    canvas.text('2').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(85,85);
    
    canvas.text('3').attr({
        'fill': '#fff',
        'font-family': 'arial',
        'font-size': 7.5
    }).center(85,65);

    var CCW = canvas.path('m 61.537416,138.24999 v 9.54889 h -4.77469 c -17.719937,0 -33.66406,10.65308 -40.44518,27.02418 -6.7811404,16.37108 -3.04073,35.17752 9.48917,47.70742 12.52986,12.52988 31.336799,16.2708 47.707889,9.48967 16.37109,-6.78113 27.024175,-22.72528 27.024175,-40.44522 v -3.22375 H 88.125867 l 17.188093,-20.46218 17.18809,20.46218 h -12.41439 v 3.22375 c 0,21.55471 -13.003565,41.01811 -32.917525,49.26675 -19.913963,8.24863 -42.873433,3.68176 -58.114889,-11.55972 C 3.8137556,214.04046 -0.75263437,191.08149 7.4960056,171.16752 15.744626,151.25358 35.208013,138.24999 56.762726,138.24999 Z');

    var w = CCW.width();
    var h = CCW.height();

    CCW.width(20);
    CCW.height(h * (20 / w));

    CCW.center(50,75);

    draw_lines(canvas, 10);

    canvas.addTo('#s16 .svg');
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

    draw_lines(canvas, 10);

    canvas.addTo('#s20 .svg');
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

    canvas.line([a,b]).attr({stroke: '#000', 'stroke-width': 1.5, 'stroke-linecap': 'round'});
    canvas.line([b,c]).attr({stroke: '#000', 'stroke-width': 1.5, 'stroke-linecap': 'round'});
    canvas.line([c,d]).attr({stroke: '#000', 'stroke-width': 1.5, 'stroke-linecap': 'round'});
    canvas.line([d,e]).attr({stroke: '#000', 'stroke-width': 1.5, 'stroke-linecap': 'round'});
    canvas.line([e,a]).attr({stroke: '#000', 'stroke-width': 1.5, 'stroke-linecap': 'round'});

    canvas.text('6').attr({'fill': '#000','font-family': 'arial','font-size': 7, 'font-weight': 'bold'}).center(47,25);
    canvas.text('4.25').attr({'fill': '#000','font-family': 'arial','font-size': 7, 'font-weight': 'bold'}).center(60,33).rotate(-45);
    canvas.text('4.25').attr({'fill': '#000','font-family': 'arial','font-size': 7, 'font-weight': 'bold'}).center(60,67).rotate(45);
    canvas.text('6').attr({'fill': '#000','font-family': 'arial','font-size': 7, 'font-weight': 'bold'}).center(47,75);
    canvas.text('6').attr({'fill': '#000','font-family': 'arial','font-size': 7, 'font-weight': 'bold'}).center(25,50);

    canvas.text('6+4.25+4.25+6+6 = 26.5').attr({'fill': '#000','font-family': 'arial','font-size': 7, 'font-weight': 'bold'}).center(50,90);

    draw_lines(canvas, 10);

    canvas.addTo('#s28 .svg');
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
    
    canvas.circle(5).attr({
        'fill': '#d60000',
        'stroke': '#000',
        'stroke-width': 1
    }).center(43.333333,50);

    canvas.text('x = 4.33..., y = 5').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 9,
        'font-weight': 'bold'
    }).center(50,90)

    canvas.addTo('#s31 .svg');
})();