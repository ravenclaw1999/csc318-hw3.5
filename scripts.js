"use strict";

function set(op) {
    document.getElementById("display").value += op;

}

function percent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = tempStore / 100
}

function ln() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}
function degToRad() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(tempStore * Math.PI / 180);

}
  
function radToDeg() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(tempStore * 180 / Math.PI);

}

function change() {
    var tempStore = document.getElementById("mode").value;
    if (tempStore = "deg") {
        document.getElementById("mode").value = "rad"
        degToRad()
    } else {
        document.getElementById("mode").value = "deg"
        radToDeg()
    }
}

function factorial() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = tempStore * factorial(tempStore - 1);
}

function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function e() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.e(tempStore));

}

function asine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));

}

function acosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));

}

function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

function atangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));

}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function sine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}

function setOp() {
    alert("gf");
    //document.getElementById("display").value += op;
}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
}

function ce() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").value = a;
    // }
    //alert(length);
}

function ac() {

    document.getElementById("display").value = "";
}