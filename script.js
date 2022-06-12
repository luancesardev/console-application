var s = ['abchagdsayc','asudhpcpokdkdd'];
let res2 = s;

const remDup= s=> s.split("").sort().reduce((a,b)=>(a[a.length-1]!=b)?(a+b):a,"")
console.log(remDup(res2))