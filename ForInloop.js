var j;
var n = "a b c";

for (j in n) {
    console.log(n[j]);
}


var arr_names = new Array(4)

for(var i = 0;i<arr_names.length;i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}
