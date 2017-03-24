
/**
 * Created by Administrator on 2017/3/21 0021.
 */


//倒序排列
    /*
var str="abcdefg";
var stri=str.replace("abcdefg","gfedcba");
console.log(stri);

var str1="abcddaefgb";
var str2=[];
for(var i in str1) {
    if (str1.indexOf(str1.charAt(i)) == i) {
        str2.push(str1[i]);
    }
}
*/
//去掉重复的字母
/*
var string="abcdefg";
var i=string.length;
i=i-1;
for (var x = i; x >=0; x--)
{
    console.log(string.charAt(x));
}
*/
//水仙花数
/*
var i,a,b,c;
for(i=100;i<1000;i++){
    a=parseInt(i/100);
    b=parseInt((i-a*100)/10);
    c=parseInt(i-a*100-b*10);
    if( a*a*a+b*b*b+c*c*c==i ){
        console.log(i);
    }
}
*/
//parseInt:取整


//年利率
/*
var i=1000;
var y=20;
var t=0.0325;
var sum=i*Math.pow((1+t),y);
console.log(sum);
*/

//两点间的距离
/*
var x1=1,x2=2;
var y1=3,y2=4;
var t=Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
var d=Math.sqrt(t);
console.log(d);
*/

//三角形的面积
/*
var x1=1,x2=1;x3=1;
var y1=3,y2=4;y3=8;
var t1=Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
var t2=Math.pow((x3-x1),2)+Math.pow((y3-y1),2);
var t3=Math.pow((x3-x2),2)+Math.pow((y3-y2),2);
var d1=Math.sqrt(t1);
var d2=Math.sqrt(t2);
var d3=Math.sqrt(t3);
var d=Math.sqrt(t);
var side1=d1,side2=d2,side3=d3;
var s=(side1+side2+side3)/2;
var area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(area);
*/

//月份
/*
var a=2017,b=3,c=1;
var date=new Date(a,b,c);
var q=date.getDate();
var m=date.getMonth();
var j=parseInt(a/100);
var k=a%100;
d=parseInt((26*(m+1))/10);
e=parseInt(k/4);
f=parseInt(j/4);
g=(q+d+k+e+f+5*j);
h=(g%7);
console.log(h);
*/

//学习及平均分
/*
var str="87,81,97,76,74,94,90,76,64,76";
var str1=str.split(",",10);
for(var sum=0, i=0;i<10;i++){
    a=Number(str1[i]);
    sum=sum+a;
}
var average=sum/10;
console.log(average);
*/

//数组
/*
var array1=[1,2,3,4,5];
for(var i=0;i<5;i++){
    a=array1[i];
    console.log(a);
}

var array=[0,1];
for(var i=1;i<=100;i++){
    array.push(array[i-1]+array[i]);
}
console.log(array);
*/

//求498与1000的最大公约数
/*
var array2=[1000,498];
for(var i=0;i<498;i++){
    array2.push((array2[i])%(array2[i+1]));
    if(((array2[i])%(array2[i+1]))==0){
        break;
    }
}
console.log(array2[i+1]);
*/

//求n的m次方
/*
var n=2,m=4;
var o=1;
    for (var i=0;i<m ;i++) {
        o *= n;
    }
    console.log(o);
    */


//自身相加输出
/*
    var p=[1,2,3,4,5,6];
    var result=0;
    var q=[];
    p.forEach(function (value){
        result+=value;
        q.push(result);
});
     console.log(q);
     */

//自加1
/*
var p=[1,2,3,4,5,6];
var result=0;
var q=[];
p.forEach(function (value){
    result=value+1;
    q.push(result);
});
console.log(q);
*/
//自乘
/*
var u=[1,2,3,4,5,6];
var y=0;
var v=[];
var b=u.map(function(value){
    return y=value*value
    v.push(b);
})
console.log(b);
*/

//找出小于30的元素
/*
var u=[3,35,7,42,14,2];
var b=u.filter(function(value){
    return  value<30;
})
console.log(b);
*/

//能被2整除的
/*
var u=[3,35,7,42,14,2];
var b=u.filter(function(value){
    return  value%2==0;
})
console.log(b);
*/

//function设计值
/*
var i;
function functionChengfa(x,y){
     i=2* arguments[0]+3* arguments[1];
     return i;
}
functionChengfa(2,3);
console.log(i);
*/

//找出最小的数
/*
var min;
function findMin(){
    var a;
    min=arguments[0];
    for( a=5;0<=a;a--){
        if(min>arguments[a]){
            min=arguments[a];
        }
    }
    return min;
}
findMin(1,123,500,115,44,88);
console.log(min);
*/

//各个位上相加
/*
var str="234",b,a=[];
a=str.split("",str.length);
var functionsum=a.map(function(value){
    return b=Number(value);
})
var sum=0;
functionsum.forEach(function(value){
    sum+=value;
})
console.log(sum);
*/

//二分
/*
var a = [5,7,41,15,26,9,69,35,48,28];
function findElement(e){
    for(var i=0;i<a.length;i++){
            for(var k=0;k<a.length;k++)
            if(a[k]>a[k+1]){
                var temp;
                temp=a[k];
                a[k]=a[k+1];
                a[k+1]=temp;
            }
    }
        var array=a;
        var start=0;
        var end=array.length;
        while(true){
            if(start==end)return '没有找到';
            var middle=Math.floor((start+end)/2);
            if(e==array[middle])
                return e;
            else if(e>array[middle]){
                start=middle;
            }
            else if(e<array[middle]){
                end=middle;
            }
    }
}
console.log( findElement(41)+"找到了！");
    */

//彩票
/*
function randNumber(num){
    var getNumber=Math.floor(Math.random()*90+10);
    if(num<10 && num>=100){
        return '请输入一个两位数';
    }
    var adverseNumber=String(getNumber).substr(1,1).concat(String(getNumber).substr(0,1));
    if(num==getNumber || num==10){
        return '中奖号码是'+getNumber+',恭喜你，中大奖了！';
    }
    else if(num==adverseNumber || num==10){
        return '中奖号码是'+getNumber+',恭喜你，二等奖哦！';
    }
    else{
        return '中奖号码是'+getNumber+',啊偶，你没有中奖！';
    }

}
console.log(randNumber(98));
*/


