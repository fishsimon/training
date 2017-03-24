/**
 * Created by Administrator on 2017/3/24 0024.
 */
window.onload =function(){
    //通过ID获取元素
    var element=document.getElementById("row");
    //通过Name获取元素
    var element1=document.getElementsByName("qazwsx");
    //通过标签获取元素
    var element2=document.getElementsByTagName("h1");
    //通过class选取元素
    var element3=document.getElementsByClassName("col-md-1 ros");
    //通过element查找父元素，子元素,兄弟元素
    var Parent=element.parentNode;
    var child=element.childNodes;
    var child1=element.firstChild;
    var child2=element.lastChild;
    var child3=element.children;
    var Sibling=element.nextElementSibling;
    var Sibling1=element.previousElementSibling;
    //查找,添加,删除属性值
    var input=document.getElementById("username");
    var value=input.getAttribute("placeholder");
    var value1=input.setAttribute("date-num","item");
    var value2=input.removeAttribute("text");
};
