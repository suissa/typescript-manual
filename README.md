#TypeScript

##Instalação

```

``

O TypeScript é um [superset]() de Javascript.

*\- E o que isso quer dizer?*

Basicamente que ele agrega ao Javascript sem precisar mudar nada em como escrevemos normalmente, difernetemente do CoffeeScript que é um subset. NO caso do TypeScript se você escrever Javascript normalmente ele é um código de TypeScript válido e ainda inferencia os tipos sem você precisar escrever nada diferentes

*\-Ué como assim?*

Certo. Vamos a um exemplo prático.

```
var idade = 14;

idade = 'Novinha';
```

Agora vamos compilar com o TypeScript utilizando o comando `tsc`

```
tsc ex01
ex01.ts(3,1): error TS2323: Type 'string' is not assignable to type 'number'.
```

![](https://cldup.com/bh0LdK7vJC-1200x1200.jpeg)

Uma coisa bem interessante quando se usa TypeScript é que ele inferencia qual o tipo da variável sem que precisemos definir esse tipo.

```js
function oi() {
  return "Oi";
}
```

Nesse caso quando chamamos a função `oi()` o TypeScript inferencia que é uma String e nos provê autocomplete para esse tipo de objeto, como visto na imagem abaixo.

![](https://cldup.com/DkB_HqLb9s-1200x1200.png)

Uma das melhores coisas que podemos fazer com TypeScript é tipar nossos parâmetros, confesso que sempre senti falta disso no Javascript. :p

Para criamos uma variavel tipada é muito facil, como visto no código abaixo:

```js
var idade: number;
```

Para tipar parametros é bem simples, basta usarmos `var: tipo` diretamente no parametro:

```js
function somar(a: number, b: number) {
  return a + b;
}
```

Que compila para:

```js
function somar(a, b) {
    return a + b;
}
```


Bem simples não?

Então você pergunta.

*\- Ué mas não vi nada de diferente no código.*

Corretíssimo, agora veja o que acontece se chamarmos essa função passando uma String.

```js
console.log(somar(3,2));
console.log(somar(3,'Suissa'));
```

Então rodamos esse exemplo:

```
tsc ex02.ts
ex02.ts(6,21): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

Nesse caso o erro diz que o argumento do tipo 'string' não pode ser atribuído ao parâmetro do tipo 'number'.

Como nós precisamos definir nossas varáveis antes de usar, quando utilizamos globais como: exports, document, window. O TypeScript não irá automaticamente reconhecer essa global, isso é um problema caso você não saiba desse detalhe, vamos ver como o código abaixo irá quebrar:

```
exports.oi = function () {
    console.log('oi');
};
```

```
tsc declare.ts
declare.ts(1,1): error TS2304: Cannot find name 'exports'.
```

Para resolvermos isso precisamos apenas declarar `exports` como uma variável de ambiente usando `declare`.

```
declare var exports;
exports.oi = function () {
    console.log('oi');
};
```