/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let n = prompt('prime number until where ?');

for (let i = 2; i < n; i++) {
      for(let j = 2; j<i; j++){
            if(i%j == 0){
             i++;
            }
      }
  if(i<n){
      alert(i);
  }
}