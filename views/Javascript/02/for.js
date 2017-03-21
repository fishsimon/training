/**
 * Created by Administrator on 2017/3/21 0021.
 */
/*输出0~9的数字*/
for(var i=0;i<=9;i++){
    console.log(i);
}

/*计算1+2+3+.....+100*/
for(var a=1,b=0;a<=100;a++){
    b=b+a;
}
console.log(b);

/*计算1-2+3-4.....-100*/
for(var q=1,w=0,e=0,r=0;q<=100;q++){
   if(q%2==0){
       w=w-q;
   }
   else {
       e=e+q;
   }
   r=w+e;
}
console.log("1-2+3-4.....-100="+r);

/*99乘法表*/
var f=0;
for(var s=1;s<=9;s++){
    for(var d=1;d<=9;d++){
        f=s*d;
        console.log(s+"*"+d+"="+f);
    }
}
/*do while循环*/
var i=0;
do{
    console.log(i);
    i++;
}
while( i<=9 );

var i=0;
do{
    console.log("The Number is"+i);
    i++;
}
while( i<=5 );

var obj={
    "first":"first",
    "zoo":"zoo",
    "2":"2",
    "34":"34",
    "1":"1",
    "second":"second"
};
for( var i in obj){
    console.log(i);
}

/*对象*/
var person={
    name:'Liubing',
    age:22,
    hasgirlfriend:false,
    city:'Chengdu',
    height:'120cm'
};
