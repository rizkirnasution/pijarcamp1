const mtk = 80;
const bIndo = 90;
const bInggris = 89;
const ipa = 69;

if (mtk && bIndo && bInggris && ipa) {
    if (
      typeof mtk === "number" &&
      typeof bIndo === "number" &&
      typeof bInggris === "number" &&
      typeof ipa === "number"
    ) {
     
    const average = (mtk + bIndo + bInggris + ipa) / 4;
  
        console.log(`Rata-rata = ${average}`);
        if (average >= 90) {
          console.log("Grade Anda = A");
        } else if (average >= 80 && average < 90) {
          console.log("Grade Anda = B");
        } else if (average >= 70 && average < 80) {
          console.log("Grade Anda = C");
        } else if (average >= 60 && average < 70) {
          console.log("Grade Anda = D");
        } else if (average >= 0 && average < 60) {
          console.log("Grade Anda = E");
        }
      }
    } else {
      console.error("Semua nilai yang diinput harus bertipe number!");
    }

  