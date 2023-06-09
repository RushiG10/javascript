
let n1 = 1, n2 = 2, nextTerm;

for (let i = 1; i <=11; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

}