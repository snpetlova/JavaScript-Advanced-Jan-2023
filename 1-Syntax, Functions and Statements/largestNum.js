function largestNum(n1,n2,n3) {

    let res = 0;

    if (n1 > n2 && n1 > n3) {
       res = n1;
    } 
    
    if (n2 > n1 && n2 > n3) {
       res = n2;
    } 
    
    if (n3 > n1 && n3 > n2) {
       res = n3; 
    }

    console.log(`The largest number is ${res}.`);

}largestNum(5, -3, 16)