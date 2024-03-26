import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ cadastrarColaborador, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const criarColaborador = (event) => {
    event.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    cadastrarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  function criarTime(event) {
    event.preventDefault();
    cadastrarTime({ nome: nomeTime, cor: corTime });
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={criarColaborador}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar card" />
      </form>
      <form className="formulario" onSubmit={criarTime}>
        <h2>Preencha os dados para criar o card um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome do Time"
          placeholder="Digite o nome do time "
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor do time "
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao texto="Criar um novo time" />
      </form>
    </section>
  );
};

export default Formulario;
