/**
 * Created by Administrator on 2017/3/24 0024.
 */
//--将按键内容以字符串形式存储在文字框中当按钮为“=”时，调用eval方法计算结果然后将结果输出文字框中--
var numresult;
var str;
function onclicknum(nums) {
    str = document.getElementById("nummessege");
    str.value = str.value + nums;
}
function onclickclear() {
    str = document.getElementById("nummessege");
    str.value = "";
}
function onclickresult() {
    str = document.getElementById("nummessege");
    numresult = eval(str.value);
    str.value = numresult;
}