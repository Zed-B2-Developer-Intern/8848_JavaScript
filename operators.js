let a,b;
a=prompt("Enter Value 1:");
b=prompt("Enter Value 2:");
let sum,sub,mul,div,mod,ainc,adec,binc,bdec;;
sum=a+b;
sub=a-b;
mul=a*b;
div=a/b;
mod=a%b;
ainc=++a;
adec=--a;
binc=++b;
bdec=--b;
console.log(`
    Sum:${sum}
    Subtraction:${sub}
    Multiplication:${mul} 
    Division:${div}
    Modulus:${mod}
    Increment A:${ainc}
    Decrement A:${adec}
    Increment B:${binc}
    Decrement B:${bdec}
`);

