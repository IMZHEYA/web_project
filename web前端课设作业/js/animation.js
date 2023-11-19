//该文件主要控制特效 实现各种事件
//实现首页的文字缓慢出现
const textContainer = document.getElementById("text-container");
const typedText = document.getElementById("typed-text");
const fullText = " 在小鸡岛上，有一个任务从来不成功的垫底刺客，名叫伍六七。他平时在发廊打工赚钱，剪刀就是他的武器。由于初入刺客行当，行情十分廉价，接到的也都是些奇葩的刺杀任务：刺杀爱唱摇滚的汪星人首领汪疯、深藏不露的水果摊阿婆和带着面具的美丽女刺客梅花十三……在执行任务的过程中和他们发生了一系列有趣的意外事件。随着各种任务的进行，伍六七的记忆逐渐被唤醒，原来他的真实身份是……";
let currentIndex = 0;
let typingTimer;
function typeText() {
    if (currentIndex < fullText.length) {
        typedText.innerHTML += fullText[currentIndex];
        currentIndex++;
        typingTimer = setTimeout(typeText, 100);
    }
}
typeText();


var eprev = document.querySelector('.prev');
var enext = document.querySelector('.next');
var esico = document.getElementById('icolist').getElementsByTagName('li');
var eicolist = document.querySelector('#icolist');//获取圆点列表元素
var eimglist = document.querySelector('#imgList');//获取图片列表
var left = 0;//移动变量
var timer;//计时器
run();
//图片轮播
function run() {
    //检查左偏移量是否超过图片列表的总宽度，若是则重置为0。
    if (left <= -5688) {
        left = 0;
    }
    //计算当前显示图片的索引 m。
    var m = Math.floor(-left / 1422);
    //设置图片列表的 margin-left 样式，实现图片的移动。
    eimglist.style.marginLeft = left + 'px';
    // var n = (left % 1422 == 0) ? n =1200 : n = 10;
    left -= 10;
    timer = setTimeout(run, 50);
    //圆点颜色变化
    icochange(m);
}
//图片定位函数
function imgchange(n) {
    let lt = - (n * 1422);
    eimglist.style.marginLeft = lt + 'px';
    left = lt;
}
//鼠标点击上一张事件
eprev.onclick = function () {
    let prevgo = Math.floor(-left / 1422) - 1;
    if (prevgo == -1) {
        prevgo = 3;
    }
    imgchange(prevgo);
}
//鼠标点击下一张事件
enext.onclick = function () {
    let nextgo = Math.floor(-left / 1422) + 1;
    if (nextgo == 4) {
        nextgo = 0;
    }
    imgchange(nextgo);
}
//  圆点跟随变化函数
function icochange(m) {
    for (let index = 0; index < esico.length; index++) {
        esico[index].style.backgroundColor = '';
    }
    if (m < esico.length) {
        esico[m].style.backgroundColor = 'red';
    }
}
eicolist.onclick = function () {
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    if (!isNaN(ico)) {
        imgchange(ico);
        icochange(ico);
    }

}
//鼠标悬浮事件处理函数
/* 鼠标在图片列表上时轮播停止，移开后又启动 */
eimglist.onmouseover = function () {
    clearTimeout(timer);//鼠标放上去的时候用clearTimeout清除计数器
}
eimglist.onmouseout = function () {
    run();
}