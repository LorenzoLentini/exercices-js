/*  
Ecrivez une condition `if` pour vérifier que l’`age` n’est PAS compris entre `14` et `90` ans inclus.

Créez deux variantes: la première utilisant NOT `!`, La seconde - sans ce dernier.
*/



let age = Number(prompt("age ?"));
if(!(age > 13) || age > 90){
      alert("vous avez l'age requis !")
}else{
      alert("trop jeune ou trop vieux !")
}