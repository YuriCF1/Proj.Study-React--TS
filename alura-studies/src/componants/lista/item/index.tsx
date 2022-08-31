import style from "../lista.module.scss";

// A partir da versao 17, não preciso importar o React no function component
export default function Item({
  tarefa,
  tempo,
}: {
  tarefa: string;
  tempo: string;
}) {
  //Posso exportar a função assim que declaro
  // export default function item(props: {tarefa: string, tempo: string}) { //Posso exportar a função assim que declaro
  // const {tarefa, tempo} = props; //Posso definiir o que é a props já nos parâmetros da função
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
