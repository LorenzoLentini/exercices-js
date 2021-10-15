/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let connexion = prompt("connexion: login ?");
if (connexion == "Admin") {

      let password = prompt("connexion: password ?");
      
      if (password == "TheMaster") {
            alert("Welcome!");

      } else if (password == "") {
            alert("Canceled");

      } else {
            alert("Wrong password");
      }

} else if (connexion == "") {
      alert("Canceled");

} else {
      alert("I don't know you");
}