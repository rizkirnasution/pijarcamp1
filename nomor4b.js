//mengambil nilai data 
//street and city
// dengan destructuring



let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    //mengambil data dengan destructuring
    let address = data.address;

    const {street, city} = address;

console.log(`Saya Tinggal di Jalan ${street}`);
console.log(`di Kota ${city}`);