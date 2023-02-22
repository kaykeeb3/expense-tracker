import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  onAdd: (Item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {

  const  handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2023, 2, 22),
      category: 'food',
      title: 'Item de Teste',
      value: 25.80
    };
    onAdd(newItem)
  }


  return (
    <C.Container>
      <button onClick={handleAddEvent}>
        Adicionar
      </button>
    </C.Container>
  );
}