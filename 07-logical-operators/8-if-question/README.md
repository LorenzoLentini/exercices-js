importance: 5

---

# Une question à propos de "if"

Lesquelles de ces `alert`es vont s'exécuter ?

Quels seront les résultats des expressions à l'intérieur de `if (...)` ?  

```js
if (-1 || 0) alert( 'first' ); // s'éxécute car -1 est true
if (-1 && 0) alert( 'second' ); // ne s'éxécute pas car 0 est false
if (null || -1 && 1) alert( 'third' ); // s'éxecute car -1 et 1 sont true

/*
la première et la troisième vont s'exécuter car pour la deuxième alerte le && trouve la première valeur fausse et renvoit donc false on ne rentre donc pas dans la condition. 0 étant considéré comme false alors que -1 non
*/

```
