/**
 * Created by Administrator on 2017/3/20 0020.
 */
var time=100;
if(time<10)
{
    console.log("Good day");
}
else if(time>=10&&time<20){
    console.log("Good evening");
}
else{
    console.log("ARE YOU DIE?");
}

var num=1;
if(num===1){
    console.log("num is equal to 1")
}

var month=3;
if(month=3){
    console.log("March");
}
/*switch*/
var d=new Date().getDay();
switch(d) {
    case 0:
        x="今天是星期日";
        console.log(x);
        break;
    case 1:
        x="今天是星期一";
        console.log(x);
        break;
    case 2:
        x="今天是星期二";
        console.log(x);
        break;
    case 3:
        x="今天是星期三";
        console.log(x);
        break;
    case 4:
        x="今天是星期四";
        console.log(x);
        break;
    case 5:
        x="今天是星期五";
        console.log(x);
        break;
    case 6:
        x="今天是星期六";
        console.log(x);
        break;
}
var x=23;
var w=typeof x;
switch (w){
    case "string":
        x="x是字符串";
        console.log(x);
        break;
    case "number":
        x="x是数字";
        console.log(x);
        break;
    case "object":
        x="x是对象";
        console.log(x);
        break;
    case "undefined":
        x="x是未定义";
        console.log(x);
        break;
    case "boolean":
        x="x是布朗型";
        console.log(x);
        break;
}
/*循环语句*/
var t=0;
while(t<10){
    t=t+1;
    console.log(t);
}
/*100以内的阶乘*/
var a=1;
var b=1;
while(a<=100){
    b=b*a;
    console.log(a+"的阶乘是"+b);
    a++;
}
/*1+2+3+.....+100*/
var p=0;
var q=1;
while(q<=100){
    p=p+q;
    q++;
}
console.log("1+2+3+.....+100="+p);