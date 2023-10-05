
const berlinIT = {
    cours: "javascript",
    email: "berlin@gmail.com",
    etudiant: [],
    
    login(nom, prenom){
        console.log(`${nom} ${prenom} you are in ${this.cours} your email is ${this.email}`)
        this.etudiant.push(`${nom} ${prenom}`)
    }
}

berlinIT.login("berlin", "rosalva");
console.log(berlinIT.etudiant);

const reUtiliser = berlinIT.login;

const frantzIT = {
    cours: "HTML",
    email: "frantz@gmail.com",
    etudiant: [],
    
}

reUtiliser.call(frantzIT, "frantz", "rosalva");
console.log(frantzIT.etudiant);