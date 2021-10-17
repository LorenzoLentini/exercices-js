importance: 4

---

# Quelles valeurs affiche la boucle while ?

A votre avis, quelles sont les valeurs affichées pour chaque boucle ?  Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l'`alert` ou pas ?

1. Le préfixe sous forme `++i` :

    ```js
    let i = 0;
    while (++i < 5) alert( i );// l'alerte s'arrête à 4 car i prend la valeur de l’expression avant l’application de l’opération
    ```
2. Le postfixe sous forme `i++` :

    ```js
    let i = 0;
    while (i++ < 5) alert( i );// l'alerte s'arrête à 5 car i prend la valeur de l’expression après l’application de l’opération
    ```
