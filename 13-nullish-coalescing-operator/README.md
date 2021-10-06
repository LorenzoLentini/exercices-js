# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme");

```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme");

```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon.");
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### -Ce que retourne, par définition, l'opérateur "||" ?

### -Ce que retourne, par définition, l'opérateur "??" ?


# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ?


### .Faut il:
 #### -Utiliser "??" avec tous les autres opérateurs ?
 #### -Ne jamais utiliser "??" avec tous les autres opérateurs ?
 #### -Quelques fois utiliser "??" avec les autres opérateurs ?

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane"
```

```js
let fruit = ("poire" && "pomme") ?? "banane"

alert(fruit)
```