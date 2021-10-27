var w = 40;
var h = 40;
var span = 7;
var coord_p = [0, 30];
var coord_q = [30, 10];

function draw_lines(canvas){
    var count = 10;
    var count_x = 0;

    for(var i=span; i < w+span; i+=10){
        canvas.line(i,0,i,h+span-span).attr({'stroke':'#000','stroke-opacity':0.5,'stroke-width':0.5});
        canvas.line(span,count,w+span,count).attr({'stroke':'#000','stroke-opacity':0.5,'stroke-width':0.5});
        
        canvas.text(count_x + '').attr({'fill':'#000','font-family':'arial','font-size':4}).center(i, h+span/2);
        if(count_x<3) canvas.text((3-count_x) + '').attr({'fill':'#000','font-family':'arial','font-size':4}).center(span/2, count);
        
        count += 10;
        count_x++;
    }
}

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    var p = [coord_p[0] + span, h - coord_p[1]]; var q = [coord_q[0] + span, h-coord_q[1]];

    draw_lines(canvas);

    canvas.circle(3).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(p[0],p[1]);
    canvas.circle(3).attr({'fill':'blue','stroke':'#000','stroke-width':.25}).center(q[0],q[1]);

    canvas.addTo('#s2 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    var p = [coord_p[0] + span, h - coord_p[1]]; var q = [coord_q[0] + span, h-coord_q[1]];

    draw_lines(canvas);

    canvas.line(p[0],p[1], q[0],q[1]).attr({'stroke':'#b300c4','stroke-width':.75});

    canvas.circle(3).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(p[0],p[1]);
    canvas.circle(3).attr({'fill':'blue','stroke':'#000','stroke-width':.25}).center(q[0],q[1]);

    canvas.addTo('#s4 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    var p = [coord_p[0] + span, h - coord_p[1]]; var q = [coord_q[0] + span, h-coord_q[1]];

    draw_lines(canvas);

    canvas.line(p[0],p[1], q[0],q[1]).attr({'stroke':'#b300c4','stroke-opacity':0.5,'stroke-width':.75});
    canvas.line(span+15,0, span+15,h).attr({'stroke':'#000','stroke-width':.3,'stroke-dasharray':1.5});

    canvas.circle(3).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(p[0],p[1]);
    canvas.circle(3).attr({'fill':'blue','stroke':'#000','stroke-width':.25}).center(q[0],q[1]);

    canvas.addTo('#s9 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    var p = [coord_p[0] + span, h - coord_p[1]]; var q = [coord_q[0] + span, h-coord_q[1]];

    draw_lines(canvas);

    canvas.line(p[0],p[1], q[0],q[1]).attr({'stroke':'#b300c4','stroke-opacity':0.5,'stroke-width':.75});
    canvas.line(span+15,0, span+15,h).attr({'stroke':'#000','stroke-width':.3,'stroke-dasharray':1.5});

    canvas.circle(3).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(p[0],p[1]);
    canvas.circle(3).attr({'fill':'blue','stroke':'#000','stroke-width':.25}).center(q[0],q[1]);
    canvas.circle(3).attr({'fill':'#b300c4','stroke':'#000','stroke-width':.25}).center(span+15,20);

    canvas.addTo('#s13 .svg');
})();