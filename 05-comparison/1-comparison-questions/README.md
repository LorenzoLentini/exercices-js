importance: 5

---

# Comparaisons

Quel sera le résultat pour les expressions suivantes :

```js no-beautify
5 > 4 //true 5 est un number plus grand que 4
"apple" > "pineapple" //false car le a de apple a un plus petit indice que p dans l'alphabet
"2" > "12" //true 2 est bien plus grand que 1 en tant que premier caractère de la chaine
undefined == null //true null est bien l'équivalent pour les types à ce qu'undefined est pour tout le reste
undefined === null //false null est de type number alors qu'undefined ne lest pas
null == "\n0\n" //false null est considéré comme number alors que "/n0/n" est de type string
null === +"\n0\n" //false null est l'absence de valeur numérique alors que 0 est bien une valeur
```

