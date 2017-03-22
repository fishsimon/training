/**
 * Created by Administrator on 2017/3/21 0021.
 */


/*倒序排列*/
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
/*去掉重复的字母*/
var string="abcdefg";
var i=string.length;
i=i-1;
for (var x = i; x >=0; x--)
{
    console.log(string.charAt(x));
}
/*水仙花数*/
var i,a,b,c;
for(i=100;i<1000;i++){
    a=parseInt(i/100);
    b=parseInt((i-a*100)/10);
    c=parseInt(i-a*100-b*10);
    if( a*a*a+b*b*b+c*c*c==i ){
        console.log(i);
    }
}
//parseInt:取整


/*年利率*/
var i=1000;
var y=20;
var t=0.0325;
var sum=i*Math.pow((1+t),y);
console.log(sum);

/*两点间的距离*/
var x1=1,x2=2;
var y1=3,y2=4;
var t=Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
var d=Math.sqrt(t);
console.log(d);

/*三角形的面积*/
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

/*月份*/
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

/*学习及平均分*/
var str="87,81,97,76,74,94,90,76,64,76";
var str1=str.split(",",10);
for(var sum=0, i=0;i<10;i++){
    a=Number(str1[i]);
    sum=sum+a;
}
var average=sum/10;
console.log(average);

/*数组*/
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

/*求498与1000的最大公约数*/
var array2=[1000,498];
for(var i=0;i<498;i++){
    array2.push((array2[i])%(array2[i+1]));
    if(((array2[i])%(array2[i+1]))==0){
        break;
    }
}
console.log(array2[i+1]);

/*求n的m次方*/
var n=2,m=4;
var o=1;
    for (var i=0;i<m ;i++) {
        o *= n;
    }
    console.log(o);


