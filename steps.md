### Steps

#### Criar uma aplicação react com typescript

```js 
    npx create-react-app my-app --template typescript
```

#### Executar uma aplicação react

```js 
    npm run start
```

#### Criar o código de build de uma aplicação react

```js 
    npm run build
```

### JSX
https://pt-br.legacy.reactjs.org/docs/introducing-jsx.html


### Steps com Vite

```js
    npm create vite
```

```js
    npm install
```


### Ciclo de vida dos estados do React

- Uma string com valor 'FIAP'
- Registra no useState
- uma variavel com o valor da string -> memoria temporária
- uma função de mudança
- registra um listener para esse estado

- o react muda o valor la no espaco de variaveis temporarias
- ele pega esse valor alterado
- devolve pro componente
- o componente atualiza (renderiza novamente) -> VIRTUAL DOM
- compara com a DOM Real
- Atualiza a tela



[
    {
        inputText: 'FIAP'
    }
]
