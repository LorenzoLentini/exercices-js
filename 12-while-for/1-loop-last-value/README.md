importance: 3

---

# Dernière valeur de boucle

Quelle est la dernière valeur affichée par ce code ? Pourquoi ?

```js
let i = 3;

while (i) {
  alert( i-- ); // La dernière valeur affichée est 1 car dès qu'un number renvoit zéro dans une boucle while, 
                // elle renvoit false et donc met fin à la boucle
}
```
