var w = 40;
var h = 40;
var span = 7;
var coord_p0 = [0, 30];
var coord_p1 = [10, 30];
var coord_p2 = [20, 10];
var coord_p3 = [30, 20];
var coord_p4 = [40, 20];
var coord_z1 = [12.5, 25.703125]

var p0 = [coord_p0[0] + span, h-coord_p0[1]];
var p1 = [coord_p1[0] + span, h-coord_p1[1]];
var p2 = [coord_p2[0] + span, h-coord_p2[1]];
var p3 = [coord_p3[0] + span, h-coord_p3[1]];
var z1 = [coord_z1[0] + span, h-coord_z1[1]];

var spline1=[[17.0, 10.0], [17.526315789473685, 10.61962385187345], [18.05263157894737, 11.411284443796472], [18.57894736842105, 12.353112698644118], [19.105263157894736, 13.42323953929144], [19.63157894736842, 14.5997958886135], [20.157894736842106, 15.860912669485348], [20.684210526315788, 17.18472080478204], [21.210526315789473, 18.549351217378625], [21.736842105263158, 19.932934830150167], [22.263157894736842, 21.313602565971713], [22.789473684210527, 22.669485347718325], [23.315789473684212, 23.97871409826505], [23.842105263157894, 25.21941974048695], [24.36842105263158, 26.369733197259073], [24.894736842105264, 27.407785391456486], [25.421052631578945, 28.31170724595422], [25.94736842105263, 29.05962968362735], [26.473684210526315, 29.629683627350925], [27.0, 30.0]];
var spline2=[[27.526315789473685, 30.16912086309958], [28.052631578947366, 30.161831170724597], [28.578947368421055, 29.995626184575013], [29.105263157894736, 29.68800116635078], [29.63157894736842, 29.25645137775186], [30.157894736842106, 28.718472080478204], [30.684210526315788, 28.091558536229773], [31.210526315789473, 27.393206006706517], [31.736842105263158, 26.640909753608398], [32.26315789473684, 25.85216503863537], [32.78947368421053, 25.04446712348739], [33.315789473684205, 24.235311269864415], [33.84210526315789, 23.442192739466392], [34.368421052631575, 22.682606793993294], [34.89473684210526, 21.974048695145065], [35.421052631578945, 21.334013704621665], [35.94736842105263, 20.77999708412305], [36.473684210526315, 20.329494095349176], [37.0, 20.0]];

function draw_lines(canvas){
    var count = 10;
    var count_x = 0;

    for(var i=span; i < w+span; i+=10){
        canvas.line(i,0,i,h+span-span).attr({'stroke':'#000','stroke-opacity':0.4,'stroke-width':0.4});
        canvas.line(span,count,w+span,count).attr({'stroke':'#000','stroke-opacity':0.4,'stroke-width':0.4});
        
        canvas.text(count_x + '').attr({'fill':'#000','font-family':'arial','font-size':4}).center(i, h+span/2);
        if(count_x<3) canvas.text((3-count_x) + '').attr({'fill':'#000','font-family':'arial','font-size':4}).center(span/2, count);
        
        count += 10;
        count_x++;
    }
}

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    var p1 = [coord_p1[0] + span, h-coord_p1[1]];
    var p2 = [coord_p2[0] + span, h-coord_p2[1]];
    var p3 = [coord_p3[0] + span, h-coord_p3[1]];

    draw_lines(canvas);

    canvas.circle(2).attr({'fill':'green','stroke':'#000','stroke-width':.25}).center(p1[0],p1[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(p2[0],p2[1]);
    canvas.circle(2).attr({'fill':'blue','stroke':'#000','stroke-width':.25}).center(p3[0],p3[1]);

    canvas.addTo('#s4 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});

    canvas.addTo('#s5 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#e20031','stroke-width':0.7,'stroke-linecap':'round'});

    canvas.text('p1').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p1[0]-2,p1[1]-2);
    canvas.text('p2').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p2[0],p2[1]+3);
    canvas.text('p3').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p3[0]+3,p3[1]-3);

    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p1[0],p1[1]);
    canvas.circle(1.5).attr({'fill':'#b200e9'}).center(p2[0],p2[1]);
    canvas.circle(1.5).attr({'fill':'#e20031'}).center(p3[0],p3[1]);

    canvas.addTo('#s7 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#e20031','stroke-width':0.7,'stroke-linecap':'round','stroke-opacity':0.3});

    canvas.text('p1').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p1[0]-2,p1[1]-2);
    canvas.text('p2').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p2[0],p2[1]+3);
    canvas.text('p3').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold','fill-opacity':0.3}).center(p3[0]+3,p3[1]-3);

    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p1[0],p1[1]);
    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p2[0],p2[1]);
    canvas.circle(1.5).attr({'fill':'#e20031','fill-opacity':0.3}).center(p3[0],p3[1]);

    canvas.addTo('#s15 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#e20031','stroke-width':0.7,'stroke-linecap':'round','stroke-opacity':0.3});

    canvas.text('p1').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p1[0]-2,p1[1]-2);
    canvas.text('p2').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p2[0],p2[1]+3);
    canvas.text('p3').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold','fill-opacity':0.3}).center(p3[0]+3,p3[1]-3);

    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p1[0],p1[1]);
    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p2[0],p2[1]);
    canvas.circle(1.5).attr({'fill':'#e20031','fill-opacity':0.3}).center(p3[0],p3[1]);

    canvas.line(span+5, 5, span+15, 15).attr({'stroke':'#004fe2','stroke-width':0.5,'stroke-opacity':0.7});
    canvas.line(span+15, 27.5, span+25, 32.5).attr({'stroke':'#004fe2','stroke-width':0.5,'stroke-opacity':0.7});

    canvas.addTo('#s18 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    var count = 10;
    var count_x = 0;

    for(var i=span; i < w+span; i+=10){
        canvas.line(i,0,i,h+span-span).attr({'stroke':'#000','stroke-opacity':0.4,'stroke-width':0.4});
        canvas.line(span,count,w+span,count).attr({'stroke':'#000','stroke-opacity':0.4,'stroke-width':0.4});
        
        canvas.text(count_x + '').attr({'fill':'#000','font-family':'arial','font-size':4}).center(i, h+span/2);
        if(count_x<3 && count_x!=0) canvas.text((3-count_x) + '').attr({'fill':'#000','font-family':'arial','font-size':4}).center(span/2, count);
        
        count += 10;
        count_x++;
    }

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#e20031','stroke-width':0.7,'stroke-linecap':'round','stroke-opacity':0.3});

    canvas.text('p0').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p0[0]-2.5,p0[1]-2);
    canvas.text('p1').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p1[0]-2,p1[1]-2);
    canvas.text('p2').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p2[0],p2[1]+3);
    canvas.text('p3').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold','fill-opacity':0.3}).center(p3[0]+3,p3[1]-3);

    canvas.circle(2).attr({'fill':'#000','fill-opacity':0.6}).center(p0[0],p0[1]);
    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p1[0],p1[1]);
    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p2[0],p2[1]);
    canvas.circle(1.5).attr({'fill':'#e20031','fill-opacity':0.3}).center(p3[0],p3[1]);

    canvas.addTo('#s22 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round'});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#e20031','stroke-width':0.7,'stroke-linecap':'round','stroke-opacity':0.3});

    canvas.text('p1').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p1[0]-2,p1[1]-2);
    canvas.text('p2').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p2[0],p2[1]+3);
    canvas.text('p3').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold','fill-opacity':0.3}).center(p3[0]+3,p3[1]-3);
    canvas.text('z').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(z1[0]+2.5,z1[1]-2);

    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p1[0],p1[1]);
    canvas.circle(1.5).attr({'fill':'#004fe2'}).center(p2[0],p2[1]);
    canvas.circle(1.5).attr({'fill':'#e20031','fill-opacity':0.3}).center(p3[0],p3[1]);

    canvas.circle(1.7).attr({'fill':'#00ff55','stroke':'#000','stroke-width':0.25}).center(z1[0],z1[1]);

    canvas.addTo('#s28 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span+2,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.polyline(spline1).attr({'fill':'none','stroke':'#004fe2','stroke-width':0.7,'stroke-linecap':'round','stroke-opacity':0.3});
    canvas.polyline(spline2).attr({'fill':'none','stroke':'#e20031','stroke-width':0.7,'stroke-linecap':'round'});

    canvas.text('p1').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold','fill-opacity':0.3}).center(p1[0]-2,p1[1]-2);
    canvas.text('p2').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p2[0],p2[1]+3);
    canvas.text('p3').attr({'fill':'#000','font-family':'arial','font-size':3,'font-weight':'bold'}).center(p3[0]+3,p3[1]-3);

    canvas.circle(1.5).attr({'fill':'#004fe2','fill-opacity':0.3}).center(p1[0],p1[1]);
    canvas.circle(1.5).attr({'fill':'#e20031'}).center(p2[0],p2[1]);
    canvas.circle(1.5).attr({'fill':'#e20031'}).center(p3[0],p3[1]);

    canvas.addTo('#s31 .svg');
})();