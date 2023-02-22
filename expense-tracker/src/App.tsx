import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item  } from "./types/Item";
import { Category  } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items"; 
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/infoArea";
import { InputArea } from "./components/InputArea";


const App = () => {
  const [list, setList] = useState(items);
  const [filterdList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIcome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=> {
    setFilteredList(  filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseConunt= 0;

    for(let i in filterdList) {
      if(categories[filterdList[i].category].expense) {
        expenseConunt += filterdList[i].value;
      } else {
        incomeCount += filterdList[i].value;
      }
    }

    setIcome(incomeCount);
    setExpense(expenseConunt);

  }, [filterdList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        
      <InfoArea 
        currentMonth={currentMonth} 
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        
       />


       <InputArea onAdd={handleAddItem}/> 


      <TableArea list={filterdList}/>



      </C.Body>
    </C.Container>


  );
}

export default App;