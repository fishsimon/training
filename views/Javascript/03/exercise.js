/**
 * Created by Administrator on 2017/3/21 0021.
 */


/*倒序排列*/
var str="abcdefg";
var stri=str.replace("abcdefg","gfedcba");
console.log(stri);

/*indexOf的方法*/
var num=[1, 10, 31, 33, 37, 48, 60, 70, 80];



/*去掉重复的字母*/
var str="abcddaefgb";
var stri=str.replace("dda","d");
var strii=stri.replace("gb","g");
console.log(strii);

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