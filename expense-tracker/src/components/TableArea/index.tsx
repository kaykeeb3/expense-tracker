import * as C from './styles';
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem';

type Props = {
  list: Item[]
}

export const TableArea = ({list}: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadeColumn width={100}>Data</C.TableHeadeColumn>
          <C.TableHeadeColumn width={130}>Categoria</C.TableHeadeColumn>
          <C.TableHeadeColumn>Título</C.TableHeadeColumn>
          <C.TableHeadeColumn width={150}>Valor</C.TableHeadeColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem  key={index} item={item}/>
        ))}
      </tbody>
    </C.Table>
  )
}