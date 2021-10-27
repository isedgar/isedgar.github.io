var w = 40;
var h = 40;
var span = 7;
var coord_s0 = [0, 20];
var coord_s1 = [10, 0];
var coord_s2 = [20, 15];
var coord_s3 = [30, 10];
var coord_z_linear = [14, 6];
var coord_z_lanczos = [14, 4.463058288806787];

var s0 = [coord_s0[0] + span, h-coord_s0[1]];
var s1 = [coord_s1[0] + span, h-coord_s1[1]];
var s2 = [coord_s2[0] + span, h-coord_s2[1]];
var s3 = [coord_s3[0] + span, h-coord_s3[1]];
var z_linear = [coord_z_linear[0] + span, h-coord_z_linear[1]];
var z_lanczos = [coord_z_lanczos[0] + span, 36.22922120601046];

var interpolant = [[7.0, 20.0], [7.303030303030303, 20.412324806640736], [7.606060606060606, 20.876832646530083], [7.909090909090909, 21.391898245262443], [8.212121212121213, 21.95535717622747], [8.515151515151516, 22.564530099357246], [8.818181818181818, 23.216252730803404], [9.121212121212121, 23.906911147783845], [9.424242424242424, 24.632481965064787], [9.727272727272727, 25.388576858110817], [10.030303030303031, 26.17049085370829], [10.333333333333334, 26.9732537626083], [10.636363636363637, 27.79168409109354], [10.93939393939394, 28.620444739875797], [11.242424242424242, 29.454099779771376], [11.545454545454547, 30.287171584437402], [11.848484848484848, 31.114197601199095], [12.151515151515152, 31.929786051626934], [12.454545454545453, 32.728669873862806], [12.757575757575758, 33.505758248431206], [13.06060606060606, 34.2561850879571], [13.363636363636363, 34.97535391826519], [13.666666666666668, 35.658978633054886], [13.96969696969697, 36.30311966591938], [14.272727272727273, 36.90421519099316], [14.575757575757576, 37.459107035973204], [14.878787878787879, 37.965061067598285], [15.181818181818182, 38.41978188876419], [15.484848484848484, 38.821421767143], [15.787878787878787, 39.16858379627887], [16.090909090909093, 39.46031937047196], [16.393939393939394, 39.69612013316594], [16.696969696969695, 39.875904633891224], [17.0, 40.0], [17.303030303030305, 40.06647873013312], [17.606060606060606, 40.07242741163917], [17.909090909090907, 40.01733102429048], [18.21212121212121, 39.90115098946377], [18.515151515151516, 39.72434375064104], [18.81818181818182, 39.48787390419522], [19.12121212121212, 39.19322156228256], [19.424242424242422, 38.84238370087209], [19.727272727272727, 38.43786932171147], [20.03030303030303, 37.98268833635507], [20.333333333333336, 37.480334162197664], [20.636363636363637, 36.93476010365599], [20.93939393939394, 36.35034967507967], [21.242424242424242, 35.73188110449821], [21.545454545454547, 35.084486337769206], [21.848484848484848, 34.41360493995303], [22.151515151515152, 33.72493336370227], [22.454545454545453, 33.02437012207505], [22.757575757575758, 32.317957464479406], [23.060606060606062, 31.611820208533146], [23.363636363636363, 30.912102426675354], [23.666666666666668, 30.22490272369224], [23.96969696969697, 29.55620886934079], [24.272727272727273, 28.911832568509755], [24.575757575757574, 28.29734515952613], [24.87878787878788, 27.718015029106912], [25.181818181818183, 27.17874752002628], [25.484848484848484, 26.68402808491084], [25.78787878787879, 26.237869406926855], [26.090909090909093, 25.84376316585865], [26.393939393939394, 25.504637076703066], [26.696969696969695, 25.222817768056462], [27.0, 25.0], [27.303030303030305, 24.83458238144708], [27.606060606060606, 24.722946301952504], [27.909090909090907, 24.66286151494546], [28.21212121212121, 24.651596171933104], [28.515151515151516, 24.685977605369676], [28.818181818181817, 24.7624572698417], [29.121212121212125, 24.877178801878756], [29.424242424242426, 25.026048128101753], [29.72727272727273, 25.204804537056052], [30.03030303030303, 25.4090916320482], [30.333333333333336, 25.63452710046834], [30.636363636363637, 25.87677026904471], [30.93939393939394, 26.131586463616443], [31.242424242424242, 26.39490725546935], [31.545454545454547, 26.662885752990803], [31.848484848484848, 26.93194618609885], [32.151515151515156, 27.198827130148434], [32.45454545454545, 27.46061782422224], [32.75757575757576, 27.71478715415389], [33.06060606060606, 27.959204991488576], [33.36363636363636, 28.192155703966446], [33.66666666666667, 28.41234377908311], [33.96969696969697, 28.618891627892218], [34.27272727272727, 28.811329759536594], [34.57575757575758, 28.98957963614538], [34.87878787878788, 29.153929630908134], [35.18181818181819, 29.305004617630544], [35.484848484848484, 29.443729816317752], [35.78787878787879, 29.57128960489916], [36.09090909090909, 29.689082080858956], [36.39393939393939, 29.79867021721446], [36.696969696969695, 29.90173050414598], [37.0, 30.0]];

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

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s0[0],s0[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s1[0],s1[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s2[0],s2[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s3[0],s3[1]);

    canvas.addTo('#s3 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s0[0],s0[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s1[0],s1[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s2[0],s2[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s3[0],s3[1]);

    canvas.line(z_linear[0],0,z_linear[0],h+span-span).attr({'stroke':'#00b41e','stroke-width':0.4,'stroke-dasharray':0.8});
    canvas.text(1.4).attr({'fill':'#00b41e','font-family':'arial','font-size':3}).center(span+14, h+span/2);

    canvas.addTo('#s5 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.line(z_linear[0],0,z_linear[0],h+span-span).attr({'stroke':'#00b41e','stroke-width':0.4,'stroke-dasharray':0.8});
    canvas.line(span,z_linear[1],span+w,z_linear[1]).attr({'stroke':'#00b41e','stroke-width':0.4,'stroke-dasharray':0.8});
    canvas.text('1.4').attr({'fill':'#00b41e','font-family':'arial','font-size':3}).center(span+14, h+span/2);
    canvas.text('0.6').attr({'fill':'#00b41e','font-family':'arial','font-size':3}).center(span/2, 34);

    canvas.line(s0[0],s0[1],s1[0],s1[1]).attr({'stroke':'#000','stroke-width':0.4});
    canvas.line(s1[0],s1[1],s2[0],s2[1]).attr({'stroke':'#000','stroke-width':0.4});
    canvas.line(s2[0],s2[1],s3[0],s3[1]).attr({'stroke':'#000','stroke-width':0.4});

    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s0[0],s0[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s1[0],s1[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s2[0],s2[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s3[0],s3[1]);
    canvas.circle(2).attr({'fill':'#00b41e','stroke':'#000','stroke-width':.25}).center(z_linear[0],z_linear[1]);

    canvas.addTo('#s7 .svg');
})();

(function(){
    var canvas = SVG();

    canvas.viewbox(0,0,w+span,h+span);

    canvas.css('background', 'rgb(200,200,200)');

    draw_lines(canvas);

    canvas.line(z_lanczos[0],0,z_lanczos[0],h+span-span).attr({'stroke':'#00b41e','stroke-width':0.4,'stroke-dasharray':0.8});
    canvas.line(span,z_lanczos[1],span+w,z_lanczos[1]).attr({'stroke':'#00b41e','stroke-width':0.4,'stroke-dasharray':0.8});
    canvas.text('1.4').attr({'fill':'#00b41e','font-family':'arial','font-size':3}).center(span+14, h+span/2);
    canvas.text('.4463').attr({'fill':'#00b41e','font-family':'arial','font-size':2.5}).center(span/2, z_lanczos[1]);

    canvas.polyline(interpolant).attr({'fill':'none','stroke':'#000','stroke-width':0.4});

    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s0[0],s0[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s1[0],s1[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s2[0],s2[1]);
    canvas.circle(2).attr({'fill':'red','stroke':'#000','stroke-width':.25}).center(s3[0],s3[1]);
    canvas.circle(2).attr({'fill':'#00b41e','stroke':'#000','stroke-width':.25}).center(z_lanczos[0],z_lanczos[1]);

    canvas.addTo('#s13 .svg');
})();