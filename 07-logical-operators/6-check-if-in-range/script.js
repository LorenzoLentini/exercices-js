/*  
Ecrivez une condition `"if"` pour vérifier que l’`age` est compris entre `14` et `90` ans inclus.

"Inclus" signifie que l’`age` peut atteindre les `14` ou `90` ans.
*/

let age = Number(prompt("age ?"));
if(age >= 14 && age <= 90){
      alert("vous avez l'age requis !")
}else{
      alert("trop jeune ou trop vieux !")
}