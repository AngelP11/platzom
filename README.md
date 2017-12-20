# Platzom: Idioma oficial de Platzi

Platzom es un idioma inventado, para el Curso de Fundamento de Javascript de [Platzi](https://platzi.com).

## Descripción

- Si la palabra termina en "ar", se le quitan esos dos caracteres. 
- Si la palabra comienza con "z", se le debe agregar al final "pe".
- Si la palabra traducida tiene 10 o más caracateres, se debe partir por la mitad y unir las dos mitades con un guion medio.
- Si la palabra original es un palindromo, ninguna de las reglas anteriores aplica, y ademas, debera intercalar sus caracteres entre mayusculas y minusculas.

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom('Programar') //Program
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
platzom('abecedario') //abece-dario
platzom('sometemos') //SoMeTeMoS
```

## Creditos

[Angel Ponce](https://twitter.com/@angelp11)

## Licensia

[MIT](https://opensource.org/licenses/MIT)