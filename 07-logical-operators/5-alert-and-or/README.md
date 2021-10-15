importance: 5

---

# Le résultat de OR AND OR

Quel sera le résultat ?

```js
alert( null || 2 && 3 || 4 );
/*
l'alerte affichera 3 car || renvoit la permière valeur vrai null etant false mais 2&&3 etant false && renvoit la deuxième valeur aussi, il ne reste que 3 à afficher car || fait office de court circuit et cesse donc la lecture des valeur à 3.
*/
```

