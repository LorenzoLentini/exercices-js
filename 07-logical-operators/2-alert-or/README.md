importance: 3

---

# Quel est le résultat des alertes OR ?

Qu'est-ce que le code ci-dessous va sortir ?

```js
alert( alert(1) || 2 || alert(3) ); 
/*
l'opérateur "||" faisant office de court circuit il va envoyer alert(1)
puis 2 avant de s'arrêter car 2 est une valeure "vraie" et alert de type "undefined" car c'est une 
fonction sans retour de type et non une valeur.
*/
```

