
const nomes = ["Herói 1", "Herói 2", "Herói 3", "Herói 4","Herói 5", "Herói 6", "Herói 7", "Herói 8",
  "Herói 9", "Herói 10", "Herói 11", "Herói 12", "Herói 13"];
const xp = [1000, 1001, 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000];

for (let i = 0; i < nomes.length; i++) {
    let nivel = "";        

    if (xp[i] <= 1000) {
      nivel = "Ferro";
    } else if (xp[i] <= 2000) {
      nivel = "Bronze";
    } else if (xp[i] <= 5000) {
      nivel = "Prata";
    } else if (xp[i] <= 7000) {
    nivel = "Ouro";
    } else if (xp[i] <= 8000) {
    nivel = "Platina";
    } else if (xp[i] <= 9000) {
    nivel = "Ascendente";
    } else if (xp[i] <= 10000) {
    nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }
  
  
  
     console.log (`O héroi de nome ${nomes[i]} está no nível ${nivel}`);
  
  }



