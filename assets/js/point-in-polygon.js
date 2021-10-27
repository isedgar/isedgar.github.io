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

    canvas.addTo('#s2 .svg');
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

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);

    canvas.addTo('#s4 .svg');
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

    canvas.line(55,35,100,35).attr({'stroke': '#0044c2', 'stroke-width': 1});

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);

    canvas.addTo('#s7 .svg');
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
        'font-weight': 'bold',
        'fill-opacity': 0.4
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
        'font-weight': 'bold',
        'fill-opacity': 0.4
    }).center(d[0]+5,d[1]+5);
    canvas.text('e').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold',
        'fill-opacity': 0.4
    }).center(e[0]-5,e[1]+5);

    canvas.line([b,c]).attr({'stroke': '#000', 'stroke-width': 1.5});

    canvas.line(55,35,100,35).attr({'stroke': '#0044c2', 'stroke-width': 1});

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);

    canvas.addTo('#s10 .svg');
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

    canvas.line([b,c]).attr({'stroke': '#000', 'stroke-width': 1.5});

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);

    canvas.line(0, b[1], 100, b[1]).attr({'stroke': '#0049e6', 'stroke-width': 1.5, 'stroke-dasharray': 5});
    canvas.line(0, c[1], 100, c[1]).attr({'stroke': '#0049e6', 'stroke-width': 1.5, 'stroke-dasharray': 5});

    canvas.rect(60,10).attr({'fill':'#000','stroke':'none'}).move(20,90);
    canvas.text('Condition met \u2713').attr({
        'fill': '#55ff46',
        'font-family': 'arial',
        'font-size': 7,
        'font-weight': 'bold'
    }).center(50,95);

    canvas.addTo('#s13 .svg');
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

    canvas.line(0,100,100,0).attr({'stroke': '#0049e6', 'stroke-width': 1.2});
    canvas.line(0, 35, 100, 35).attr({'stroke': '#0049e6', 'stroke-width': 1.2});

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);
    canvas.circle(4).attr({'fill':'red','stroke':'#000','stroke-width':0.5}).center(65,35);

    canvas.rect(60,10).attr({'fill':'#000','stroke':'none'}).move(20,90);
    canvas.text('Condition met \u2713').attr({
        'fill': '#55ff46',
        'font-family': 'arial',
        'font-size': 7,
        'font-weight': 'bold'
    }).center(50,95);

    canvas.addTo('#s15 .svg');
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
        'font-weight': 'bold',
        'fill-opacity': 0.4
    }).center(b[0]+5,b[1]-5);
    canvas.text('c').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold',
        'fill-opacity': 0.4
    }).center(c[0]+7,c[1]);
    canvas.text('d').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold',
        'fill-opacity': 0.4
    }).center(d[0]+5,d[1]+5);
    canvas.text('e').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold',
    }).center(e[0]-5,e[1]+5);

    canvas.line([e,a]).attr({'stroke': '#000', 'stroke-width': 1.5});

    canvas.line(55,35,100,35).attr({'stroke': '#0044c2', 'stroke-width': 1});

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);

    canvas.line(0, e[1], 100, e[1]).attr({'stroke': '#0049e6', 'stroke-width': 1.5, 'stroke-dasharray': 5});
    canvas.line(0, a[1], 100, a[1]).attr({'stroke': '#0049e6', 'stroke-width': 1.5, 'stroke-dasharray': 5});

    canvas.rect(60,10).attr({'fill':'#000','stroke':'none'}).move(20,90);
    canvas.text('Condition met \u2713').attr({
        'fill': '#55ff46',
        'font-family': 'arial',
        'font-size': 7,
        'font-weight': 'bold'
    }).center(50,95);

    canvas.addTo('#s19 .svg');
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
    canvas.text('e').attr({
        'fill': '#000',
        'font-family': 'arial',
        'font-size': 10,
        'font-weight': 'bold'
    }).center(e[0]-5,e[1]+5);

    canvas.line(20,0,20,100).attr({'stroke': '#0049e6', 'stroke-width': 1.2});
    canvas.line(0, 35, 100, 35).attr({'stroke': '#0049e6', 'stroke-width': 1.2});

    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(55,35);
    canvas.circle(4).attr({'fill':'red','stroke':'#000','stroke-width':0.5}).center(20,35);

    canvas.rect(70,10).attr({'fill':'#000','stroke':'none'}).move(15,90);
    canvas.text('Condition not met \u2715').attr({
        'fill': '#ff3939',
        'font-family': 'arial',
        'font-size': 7,
        'font-weight': 'bold'
    }).center(50,95);

    canvas.addTo('#s21 .svg');
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

    canvas.line(65,50,100,50).attr({'stroke': '#0044c2', 'stroke-width': 1});
    canvas.circle(4).attr({'fill': '#00e713','stroke':'#000','stroke-width':0.5}).center(65,50);

    canvas.addTo('#s23 .svg');
})();