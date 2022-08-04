const printSegitiga = 5;

const printTriangle = (printSegitiga) => {
    if(typeof printSegitiga === "number"){
        for (let i = printSegitiga; i >=1; i--) {
            let str = "";
                for (let j = 1; j <= i; j++) {
                    str += j+' ';
                }      
            console.log(str);
        }
    }else{
        console.log("Data harus angka")
    }
    
};

printTriangle(printSegitiga);