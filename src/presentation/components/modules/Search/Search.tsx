import { useState } from "react";
import { Button } from "../../elements/Button";
import { Input } from "../../elements/Input";
import axios from "axios";

// Smart component
export function Search() {
    // hooks de estado
    // useState
    // primeira variavel/item (posicao 0) do meu array vai ser o valor atual do meu estado (variavel).
    // segunda variavel/item (posicao 0) do meu array vai ser uma funcao que altera o valor do estado (variavel).
    // Padrão de nomenclatura -> set
    // Parametro: valor inicial da variavel quando o componente inicializa
    const [inputText, setInputText] = useState('FIAP React'); // criado junto com o componente

    const handleClick = () => {
        axios.request({
            method: 'POST',
            url: `http://localhost:3000/alunas`,
            data: {
                nome: inputText
            }
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInputValue = event.currentTarget.value;
        setInputText(newInputValue); // -> Ele também é assincrono
    }

    return (
        <>
            <Input value={inputText} type="text" onChange={handleChange} placeholder="Digite o nome da aluna...." />
            <Button label="Criar" onClick={handleClick} />
        </>
    )
}


// desestruturação
// const pessoa = {
//     nome: 'Natalia',
//     idade: 24,
//     profissao: 'Dev'
// }

// const { nome, idade, profissao } = pessoa;
// const alunas = ['Susana', 'Jociane', 'Lucimar', 'Leticia'];

// alunas[0]
// alunas[1]

// A ideia da desestruturação é que voce tenha acesso a 
// um valor guardado dentro de um objeto diretamente numa variavel
// nomeSusana vai pegar o valor da posicao 0 do array de alunas
// nomeJociane vai pegar o valor da posicao 1 do array de alunas
// const [nomeSusana, nomeJociane, x] = alunas;


// Imutabilidade
// let inputText2 = 'FIAP React'

// ciclo de vida do react
// console.log('fora do change 1', inputText); // deve aparecer na tela


// Quero uma ação especifica assim que o componente monta
// useEffect(() => {
//     console.log('MONTOU');

//     return () => {
//         console.log('DESMONTOU');
//     }
// }, [])

// useEffect(() => {
//     console.log('entrada:', inputText);

//     return () => {
//         console.log('saida', inputText);
//     }
// }, [inputText])