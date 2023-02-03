const { off } = require("process");


function* gererate() {
    for ( i = 0; i <= 100; i ++) {
        yield(i);
        
    }
}



const res = gererate();
for ( i = 0; i < 100; i ++) {
console.log(res.next())}

