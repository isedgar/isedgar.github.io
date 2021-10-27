var a = [20, 60],
    b = [80, 60],
    c = [70, 20];

var green = '#00ff9d',
    red = '#ff3751';

function inner_angle(a,b,c){ // inner angle at point b in degrees
    var v1=[a[0] - b[0], a[1] - b[1]],
        v2=[c[0] - b[0], c[1] - b[1]];
        
    return Math.acos(math.inner(v1, v2) / (math.norm(v1) * math.norm(v2))) * 180 / Math.PI;
}

var math={
    norm: function(v){
        var s=0, n=v.length;

        for(var i=0; i < n; ++i){
            s += Math.pow(v[i], 2);
        }

        return Math.sqrt(s);
    },
    inner: function(a,b){
        var s=0;

        for(var i=0; i < a.length; ++i){
            s += (a[i]*b[i]);
        }

        return s;
    }
}

function drawLines(canvas){
    canvas.line(1, 1, 1, 99).attr({
        'stroke': '#fff',
        'stroke-width': 1,
        'stroke-opacity': 0.7,
        'stroke-linecap': 'round'
    });
    
    canvas.line(1, 99, 99, 99).attr({
        'stroke': '#fff',
        'stroke-width': 1,
        'stroke-opacity': 0.7,
        'stroke-linecap': 'round'
    });
    
    for(var i=10; i < 100; i += 10){
        canvas.line(i, 1, i, 99).attr({
            'stroke': '#fff',
            'stroke-width': 0.5,
            'stroke-opacity': 0.5
        });
    }
    
    for(var i=10; i < 100; i += 10){
        canvas.line(1, i, 99, i).attr({
            'stroke': '#fff',
            'stroke-width': 0.5,
            'stroke-opacity': 0.5
        });
    }
}

function drawPoints(canvas){
    canvas.circle(5).center(a[0], a[1]).attr({
        'fill': green,
        'stroke': 'none'
    });
    
    canvas.circle(5).center(b[0], b[1]).attr({
        'fill': green,
        'stroke': 'none'
    });
    
    canvas.circle(5).center(c[0], c[1]).attr({
        'fill': green,
        'stroke': 'none'
    });
}

function drawSegments(canvas){
    return {
        ab: canvas.polyline([[a[0], a[1]], [b[0], b[1]]]).attr({
            'fill': 'none',
            'stroke': green,
            'stroke-width': 1,
            'stroke-linecap': 'round'
        }),
        ac: canvas.polyline([[a[0], a[1]], [c[0], c[1]]]).attr({
            'fill': 'none',
            'stroke': green,
            'stroke-width': 1,
            'stroke-linecap': 'round'
        })
    }

}
//====================================================================



var canvas1 = SVG();

canvas1.viewbox(0,0,100,100);

drawLines(canvas1);
drawPoints(canvas1);

canvas1.text('A').attr({
    'fill': '#fff',
    'font-weight': 'bold',
    'font-family': 'arial',
    'font-size': 10
}).center(a[0], a[1] - 10);

canvas1.text('B').attr({
    'fill': '#fff',
    'font-weight': 'bold',
    'font-family': 'arial',
    'font-size': 10
}).center(b[0], b[1] - 10);

canvas1.text('C').attr({
    'fill': '#fff',
    'font-weight': 'bold',
    'font-family': 'arial',
    'font-size': 10
}).center(c[0], c[1] - 10);

canvas1.addTo('#s2 .svg');
//===============================================================================

var canvas2 = SVG();

canvas2.viewbox(0,0,100,100);

drawLines(canvas2);

var marker = canvas2.marker(5, 5, function(add) {
    add.circle(5).attr({
        'fill': green,
        'stroke': 'none'
    })
});

var segments = drawSegments(canvas2);

var ab = segments.ab;

ab.marker('start', marker); ab.marker('end', marker);

var ac = segments.ac;

ac.marker('end', marker);

angle = inner_angle(c,a,b);

var mask = canvas2.group();
mask.addClass('mask-anim');

ac.animate(2000).ease('>').rotate(angle, a[0], a[1]).after(function(){
    mask.opacity(1);
    ac.timeline().stop();
});
ac.timeline().stop();


mask.rect(100,100).move(0,0).attr({
    'fill': '#000',
    'fill-opacity': 0.65,
    'stroke': 'none'
});

mask.text('Tap to animate').attr({
    'fill': '#fff',
    'font-family': 'arial',
    'font-size': 8
}).css('user-select', 'none').center(50,50);


mask.click(function(){
    mask.opacity(0);
    ac.timeline().play();
});

canvas2.addTo('#s4 .svg');
//===============================================================================

(function(){
var canvas3 = SVG();

canvas3.viewbox(0,0,100,100);

drawLines(canvas3);

var segments = drawSegments(canvas3);

var ab = segments.ab;

var ac = segments.ac;

var ac_copy = ac.clone();

ac_copy.opacity(0.5);

canvas3.add(ac_copy);

canvas3.circle(5).center(a[0], a[1]).attr({
    'fill': red,
    'stroke': 'none'
});

canvas3.circle(50).attr({
    'fill': 'none',
    'stroke': red,
    'stroke-width': 1
}).center(a[0],a[1]).clipWith(canvas3.polygon([a,b,c]));

canvas3.rect(50,20).move(50,80).attr({
    'fill': '#000',
    'stroke': 'none'
});

var legend_point = canvas3.circle(5).move(53,83).attr({
    'fill': red,
    'stroke': 'none'
});

canvas3.text('Rotation point').attr({
    'fill': '#fff',
    'font-family': 'arial',
    'font-size': 5
}).x(62).cy(legend_point.cy());

canvas3.line(53, 94, 58, 94).attr({
    'stroke': red,
    'stroke-width': 1
});

canvas3.text('Angle of rotation').attr({
    'fill': '#fff',
    'font-family': 'arial',
    'font-size': 5
}).x(62).cy(94);







var mask = canvas3.group();
mask.addClass('mask-anim');

ac_copy.animate(5000).ease('-').rotate(360, a[0], a[1]).after(function(){
    mask.opacity(1);
    ac_copy.timeline().stop();
});
ac_copy.timeline().stop();


mask.rect(100,100).move(0,0).attr({
    'fill': '#000',
    'fill-opacity': 0.65,
    'stroke': 'none'
});

mask.text('Tap to animate').attr({
    'fill': '#fff',
    'font-family': 'arial',
    'font-size': 8
}).css('user-select', 'none').center(50,50);

mask.click(function(){
    mask.opacity(0);
    ac_copy.timeline().play();
});

canvas3.addTo('#s11 .svg');
})()







