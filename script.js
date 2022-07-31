var a=createlabel("label","for","fristname","fristname");
var p1=linebreak("br");
var a1=input("input","type","text","id","firstname");
var p2=linebreak("br");
var b=createlabel("label","for","lastname","lastname");
var p3=linebreak("br");
var b1=input("input","type","text","id","lastname");
var p4=linebreak("br");
var c=createlabel("label","for","email","email");
var p5=linebreak("br");
var c1=input("input","type","email","id","email");
var p6=linebreak("br");
var d=createlabel("label","for","phonenumber","phonenumber");
var p7=linebreak("br");
var d1=input("input","type","number","id","phonenumber");
var p8=linebreak("br");
var button=createlabel("button","type","button","clikme")
 
document.body.append(a,p1,a1,p2,b,p3,b1,p4,c,p5,c1,p6,d,p7,d1,p8,button);


function createlabel(tagname,attrname,attrvalue,content){
    var label=document.createElement(tagname);
    label.setAttribute(attrname,attrvalue);
    label.innerHTML=content;
    return label;
}



function input(inputtag,attname,attvalue,attname1,attvalue1){
    var inele=document.createElement(inputtag);
    inele.setAttribute(attname,attvalue);
    inele.setAttribute(attname1,attvalue1);
    return inele;

}


function linebreak(breaker){
    var b1=document.createElement(breaker);
    return b1;



}