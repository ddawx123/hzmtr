//一号线主线
var line1_T1 = new Terminal('临平');
var line1_T2 = new Terminal('南苑');
var line1_T3 = new Terminal('余杭高铁站');
var line1_T4 = new Terminal('翁梅');
var line1_T5 = new Terminal('乔司');
var line1_T6 = new Terminal('乔司南');
var line1_T7 = new Terminal('客运中心');//换乘站
var line1_T8 = new Terminal('九堡');
var line1_T9 = new Terminal('九和路');
var line1_T10 = new Terminal('七堡');
var line1_T11 = new Terminal('彭埠');
var line1_T12 = new Terminal('火车东站');
var line1_T13 = new Terminal('闸弄口');
var line1_T14 = new Terminal('打铁关');
var line1_T15 = new Terminal('西湖文化广场');
var line1_T16 = new Terminal('武林广场');
var line1_T17 = new Terminal('凤起路');//换乘站
var line1_T18 = new Terminal('龙翔桥');
var line1_T19 = new Terminal('定安路');
var line1_T20 = new Terminal('城站');
var line1_T20 = new Terminal('婺江路');
var line1_T21 = new Terminal('近江');//换乘站
var line1_T22 = new Terminal('江陵路');
var line1_T23 = new Terminal('滨和路');
var line1_T24 = new Terminal('西兴');
var line1_T25 = new Terminal('滨康路');
var line1_T26 = new Terminal('湘湖');
//一号线支线
var line1plus_T1 = new Terminal('下沙江滨');
var line1plus_T2 = new Terminal('云水');
var line1plus_T3 = new Terminal('文海南路');
var line1plus_T4 = new Terminal('文泽路');
var line1plus_T5 = new Terminal('高沙路');
var line1plus_T6 = new Terminal('金沙湖');
var line1plus_T7 = new Terminal('下沙西');
var line1plus_T8 = new Terminal('客运中心');//换乘站
var line1plus_T9 = new Terminal('九堡');
var line1plus_T10 = new Terminal('九和路');
var line1plus_T11 = new Terminal('七堡');
var line1plus_T12 = new Terminal('彭埠');
var line1plus_T13 = new Terminal('火车东站');
var line1plus_T14 = new Terminal('闸弄口');
var line1plus_T15 = new Terminal('打铁关');//换乘站
var line1plus_T16 = new Terminal('西湖文化广场');
var line1plus_T17 = new Terminal('武林广场');
var line1plus_T18 = new Terminal('凤起路');//换乘站
var line1plus_T19 = new Terminal('龙翔桥');
var line1plus_T20 = new Terminal('定安路');
var line1plus_T21 = new Terminal('城站');//换乘站
var line1plus_T22 = new Terminal('婺江路');
var line1plus_T23 = new Terminal('近江');//换乘站
var line1plus_T24 = new Terminal('江陵路');
var line1plus_T25 = new Terminal('滨和路');
var line1plus_T26 = new Terminal('西兴');
var line1plus_T27 = new Terminal('滨康路');//换乘站
var line1plus_T28 = new Terminal('湘湖');
//二号线
var line2_T1 = new Terminal('良渚');
var line2_T2 = new Terminal('杜甫村');
var line2_T3 = new Terminal('白洋');
var line2_T4 = new Terminal('金家渡');
var line2_T5 = new Terminal('墩祥街');
var line2_T6 = new Terminal('三墩');
var line2_T7 = new Terminal('虾龙圩');
var line2_T8 = new Terminal('三坝');//换乘站
var line2_T9 = new Terminal('文新');
var line2_T10 = new Terminal('丰潭路');
var line2_T11 = new Terminal('古翠路');
var line2_T12 = new Terminal('学院路');
var line2_T13 = new Terminal('沈塘桥');
var line2_T14 = new Terminal('武林门');
var line2_T15 = new Terminal('凤起路');//换乘站
var line2_T16 = new Terminal('中河北路');
var line2_T17 = new Terminal('建国北路');//换乘站
var line2_T18 = new Terminal('庆菱路');
var line2_T19 = new Terminal('庆春广场');
var line2_T20 = new Terminal('钱江路');//换乘站
var line2_T21 = new Terminal('钱江世纪城');
var line2_T22 = new Terminal('盈丰路');
var line2_T23 = new Terminal('飞虹路');
var line2_T24 = new Terminal('振宁路');
var line2_T25 = new Terminal('建设三路');
var line2_T26 = new Terminal('建设一路');
var line2_T27 = new Terminal('人民广场');//换乘站
var line2_T28 = new Terminal('杭发厂');
var line2_T29 = new Terminal('人民路');
var line2_T30 = new Terminal('潘水');
var line2_T31 = new Terminal('曹家桥');
var line2_T32 = new Terminal('朝阳');
//四号线
var line4_T1 = new Terminal('彭埠');//换乘站
var line4_T2 = new Terminal('火车东站');//换乘站
var line4_T3 = new Terminal('新风');
var line4_T4 = new Terminal('新塘');
var line4_T5 = new Terminal('景芳');
var line4_T6 = new Terminal('钱江路');//换乘站
var line4_T7 = new Terminal('江锦路');
var line4_T8 = new Terminal('市民中心');
var line4_T9 = new Terminal('城星路');
var line4_T10 = new Terminal('近江');//换乘站
var line4_T11 = new Terminal('甬江路');
var line4_T12 = new Terminal('南星桥');//换乘站
var line4_T13 = new Terminal('复兴路');
var line4_T14 = new Terminal('水澄桥');
var line4_T15 = new Terminal('联庄');
var line4_T16 = new Terminal('中医药大学');
var line4_T17 = new Terminal('杨家墩');
var line4_T18 = new Terminal('浦沿');
//五号线
var line5_T1 = new Terminal('老余杭');
var line5_T2 = new Terminal('金星路');
var line5_T3 = new Terminal('绿汀路');
var line5_T4 = new Terminal('创新路');
var line5_T5 = new Terminal('中央公园');
var line5_T6 = new Terminal('仓前');
var line5_T7 = new Terminal('杭师大');
var line5_T8 = new Terminal('常二路');
var line5_T9 = new Terminal('五常');
var line5_T10 = new Terminal('蒋村');
var line5_T11 = new Terminal('浙大紫金港');
var line5_T12 = new Terminal('三坝');//换乘站
var line5_T13 = new Terminal('益乐路');
var line5_T14 = new Terminal('莫干山路');
var line5_T15 = new Terminal('巨州路');
var line5_T16 = new Terminal('上塘路');
var line5_T17 = new Terminal('沈半路');
var line5_T18 = new Terminal('再行路');
var line5_T19 = new Terminal('东新园');
var line5_T20 = new Terminal('城市之星');
var line5_T21 = new Terminal('打铁关');//换乘站
var line5_T22 = new Terminal('宝善桥');
var line5_T23 = new Terminal('建国北路');//换乘站
var line5_T24 = new Terminal('平海路');
var line5_T25 = new Terminal('城站');//换乘站
var line5_T26 = new Terminal('江城路');
var line5_T27 = new Terminal('候潮路');
var line5_T28 = new Terminal('南星桥');//换乘站
var line5_T29 = new Terminal('长河路');
var line5_T30 = new Terminal('江虹路西');
var line5_T31 = new Terminal('江晖路');
var line5_T32 = new Terminal('滨康路');//换乘站
var line5_T33 = new Terminal('青年路');
var line5_T34 = new Terminal('金鸡路');
var line5_T35 = new Terminal('人民广场');//换乘站
var line5_T36 = new Terminal('育才路');
var line5_T37 = new Terminal('通惠路');
var line5_T38 = new Terminal('火车南站');
var line5_T39 = new Terminal('新城路');
var line5_T40 = new Terminal('香樟路');

//每条路线站点
var line1Terminals = [
    line1_T1,
    line1_T2,
    line1_T3,
    line1_T4,
    line1_T5,
    line1_T6,
    line1_T7,
    line1_T8,
    line1_T9,
    line1_T10,
    line1_T11,
    line1_T12,
    line1_T13,
    line1_T14,
    line1_T15,
    line1_T16,
    line1_T17,
    line1_T18,
    line1_T19,
    line1_T20,
    line1_T21,
    line1_T22,
    line1_T23,
    line1_T24,
    line1_T25,
    line1_T26
];
var line1plusTerminals = [
    line1plus_T1,
    line1plus_T2,
    line1plus_T3,
    line1plus_T4,
    line1plus_T5,
    line1plus_T6,
    line1plus_T7,
    line1_T7,
    line1plus_T9,
    line1plus_T10,
    line1plus_T11,
    line1plus_T12,
    line1_T12,
    line1plus_T14,
    line1plus_T15,
    line1plus_T16,
    line1plus_T17,
    line1_T17,
    line1plus_T19,
    line1plus_T20,
    line1plus_T21,
    line1plus_T22,
    line1_T21,
    line1plus_T24,
    line1plus_T25,
    line1plus_T26,
    line1plus_T27,
    line1plus_T28
];
var line2Terminals = [
    line2_T1,
    line2_T2,
    line2_T3,
    line2_T4,
    line2_T5,
    line2_T6,
    line2_T7,
    line2_T8,
    line2_T9,
    line2_T10,
    line2_T11,
    line2_T12,
    line2_T13,
    line2_T14,
    line1_T17,
    line2_T16,
    line2_T17,
    line2_T18,
    line2_T19,
    line2_T20,
    line2_T21,
    line2_T22,
    line2_T23,
    line2_T24,
    line2_T25,
    line2_T26,
    line2_T27,
    line2_T28,
    line2_T29,
    line2_T30,
    line2_T31,
    line2_T32
];
var line4Terminals = [
    line4_T1,
    line1_T12,
    line4_T3,
    line4_T4,
    line4_T5,
    line2_T20,
    line4_T7,
    line4_T8,
    line4_T9,
    line1_T21,
    line4_T11,
    line4_T12,
    line4_T13,
    line4_T14,
    line4_T15,
    line4_T16,
    line4_T17,
    line4_T18
];
var line5Terminals = [
    line5_T1,
    line5_T2,
    line5_T3,
    line5_T4,
    line5_T5,
    line5_T6,
    line5_T7,
    line5_T8,
    line5_T9,
    line5_T10,
    line5_T11,
    line5_T12,
    line5_T13,
    line5_T14,
    line5_T15,
    line5_T16,
    line5_T17,
    line5_T18,
    line5_T19,
    line5_T20,
    line5_T21,
    line5_T22,
    line5_T23,
    line5_T24,
    line5_T25,
    line5_T26,
    line5_T27,
    line5_T28,
    line5_T29,
    line5_T30,
    line5_T31,
    line5_T32,
    line5_T33,
    line5_T34,
    line5_T35,
    line5_T36,
    line5_T37,
    line5_T38,
    line5_T39,
    line5_T40
];

//各条路线
var line1 = new Line(line1Terminals, '一号线（湘湖-临平）');
var line1plus = new Line(line1plusTerminals, '一号线（湘湖-下沙江滨）');
var line2 = new Line(line2Terminals, '二号线（良渚-朝阳）')
var line4 = new Line(line4Terminals, '四号线（彭埠-浦沿）');
var line5 = new Line(line5Terminals, '五号线（老余杭-香樟路）');

//初始化数据
var initData = function() {
    var startLine = $('.start .line');
    var endLine = $('.end .line');
    $('.mtr-name').text(metro.name);
    var lines = metro.getLines();
    //初始化路线
    lines.forEach(function(line, i) {
        startLine.append('<option value="' + i + '">' + line.getName() + '</option>');
        endLine.append('<option value="' + i + '">' + line.getName() + '</option>');
    });
};
var initEvent = function() {
    var startLine = $('.start .line');
    var endLine = $('.end .line');
    var startTerminal = $('.start .terminal');
    var endTerminal = $('.end .terminal');
    //改变起点和终点的路线时，重置路线途径的地体站点
    startLine.on('change', function() {
        var lineIndex = $(this).val();
        var line = metro.getLine(lineIndex);
        checkLine(metro.getLine(lineIndex).name);
        startTerminal.empty();
        line.getTerminals().forEach(function(terminal, i) {
            startTerminal.append('<option value="' + i + '">' + terminal.getName() + '</option>')
        });
    });
    endLine.on('change', function() {
        var lineIndex = $(this).val();
        var line = metro.getLine(lineIndex);
        checkLine(metro.getLine(lineIndex).name);
        endTerminal.empty();
        line.getTerminals().forEach(function(terminal, i) {
            endTerminal.append('<option value="' + i + '">' + terminal.getName() + '</option>')
        });
    });
    //初始化地铁站点
    startLine.trigger('change');
    endLine.trigger('change');
    //点击搜索，则搜索起点到终点的最短路径，并显示结果到页面
    $('.search').on('click', function() {
        var startLine = $('.start .line').val();
        var endLine = $('.end .line').val();
        var startTerminal = $('.start .terminal').val();
        var endTerminal = $('.end .terminal').val();
        metro.reset();
        var route = metro.search(metro.getLine(startLine).getTerminal(startTerminal), metro.getLine(endLine).getTerminal(endTerminal));
        $('.desc').html('最短用时约：' + route.time + '分钟<br/>' + route.desc);
        var text = route.nodes.map(function(desc) {
            return [desc.start, desc.line, desc.count + '个站', desc.end].join('  ');
        });
        text.push(route.toString());
        $('.result').html(text.join('<br/>'));
    });
};

//初始化轨道交通空间
var metro;

$.ajax({
    url: 'https://passport.dingstudio.cn/api',
    method: 'get',
    data: {
        'format': 'json',
        'action': 'status',
        'requests': Date.parse(new Date()) / 1000,
        'hostname': window.location.hostname
    },
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function (res) {
        if (res.data.authcode === 1) {
            $.ajax({
                url: 'https://passport.dingstudio.cn/api',
                method: 'get',
                data: {
                    'format': 'json',
                    'action': 'verify',
                    'reqtime': Date.parse(new Date()) / 1000,
                    'token': res.data.token,
                    'hostname': window.location.hostname,
                    'cors_domain': 'http://' + window.location.hostname
                },
                dataType: 'jsonp',
                jsonp: 'callback',
                success: function (res) {
                    if (res.data.username) {
                        $('#sso_status').html('您已作为：' + res.data.username + ' 登录，<a href="https://passport.dingstudio.cn/sso/login.php?action=dologout&url=' + encodeURIComponent(window.location.href) + '">点此</a>退出。');
                    }
                }
            });
            initApp();
        }
        else {
            $('#sso_status').html('您尚未登录，<a href="https://passport.dingstudio.cn/sso/login?returnUrl=' + encodeURIComponent(window.location.href) + '">点此</a>登录。');
            initApp();
            //是否强制要求登录
            //window.location.href = 'https://passport.dingstudio.cn/sso/login?returnUrl=' + encodeURIComponent(window.location.href);
        }
    },
    error: function (e) {
        $('#sso_status').html('通信延迟，暂时无法获取您的登录状态。<a href="https://passport.dingstudio.cn/sso/login?returnUrl=' + encodeURIComponent(window.location.href) + '">点此</a>尝试重新登录！');
        initApp();
    }
});

/**
 * 初始化并载入轨道交通数据
 * @return {anything}
 */
function initApp() {
    metro = new MTR('杭州地铁');
    metro.addLines([line1, line1plus, line2, line4, line5]);
    initData();
    initEvent();
}

function checkLine(lineName) {
    if (lineName == '杭绍城际线') {
        alert('该线路性质为城际轨道交通，耗时计算结果仅供参考！请以列车即时到站时间为准。');
    }
    else if (lineName == '风情旅游新干线') {
        alert('该线路性质为城际轨道交通，耗时计算结果仅供参考！请以列车即时到站时间为准。');
    }
}
