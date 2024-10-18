/*
 ITEM 1: Criar um formulário com html e typescript (Componente React TSX)
 ITEM 2: O formulário deve ter um input de TITULO
 ITEM 3: O formulário deve ter um select de TIPO (Presencial, Online)
 ITEM 4: O formulário deve ter um input de VALOR
 ITEM 5: O formulário deve ter um botão de SALVAR

 Critérios:
 Cada item do formulário deve ter um estado para guardar seu valor.
 O botão de enviar deve usar o axios para fazer a requisição enviado os dados do formulário.
 (Podem usar uma api fake com json server)

 Criar um arquivo com nome: db.json
 Colocar esse conteúdo nele: 
 {
    "eventos": []
 }

 Rodar no terminal: npm i json-server
 Rodar no terminal: npx json-server db.json
*/

/**
 * Fazer o input com formatação de MOEDA
 */

import { useContext } from "react";
import { Input } from "../../elements/Input";
import { Button } from "../../elements/Button";
// import { RadioGroup } from "../../modules/RadioGroup";
// import { Radio } from "../../modules/Radio";
import { Form } from "../../modules/Form";
// import { Option, Select } from "../../modules/Select";
import { ProfileContext } from "../../../contexts/ProfileContext";

export type Events = {
  titulo: string;
  tipo: string;
  valor: number;
};

/**
 * PRESENCIAL -> Eventos presenciais
 * ONLINE -> Eventos online
 */
// enum TipoEvento {
//   PRESENCIAL = 1, // assume o restante dos numeros a partir do primeiro.
//   ONLINE,
// }

// forms hook
export function Forms() {
  // const [valor, setValor] = useState('');
  // const [titulo, setTitulo] = useState("");
  // const [tipo, setTipo] = useState(TipoEvento.PRESENCIAL);

  const { name, setName } = useContext(ProfileContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // elemento html multi-elemento

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        id="input-titulo"
        label="Nome do usuário"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
      />

      <Button label="Enviar" type="submit" />
    </Form>
  );
}
