//简单单体，就是一个对象 
//var singleton={} 
//命名空间，闭包单体 
var HHH = {}
HHH.signleton = (function() {
    var a1 = true;
    var a2 = 10;
    var f1 = function() {
        alert('f1')
    }
    return {
        attr1: a1,
        attr2: a2,
        methods1: function() {
            return f1()
        }
    }
})()
alert(HHH.signleton.attr1)
HHH.signleton.methods1