import { ITarefa } from "../../../types/tarefa";
import style from "./item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

// A partir da versao 17, não preciso importar o React no function component
export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  // }: {
  //   tarefa: string;
  //   tempo: string;
  // })
  // console.log("item atual: ", { tarefa, tempo, selecionado, completado, id });
  //Posso exportar a função assim que declaro
  // export default function item(props: {tarefa: string, tempo: string}) { //Posso exportar a função assim que declaro
  // const {tarefa, tempo} = props; //Posso definiir o que é a props já nos parâmetros da função
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
