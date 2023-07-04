
    import './App.css';
    import ExpenseItem from './Componant/ExpenceItem';
    function App() {
      const data = [
        {
          id: 1,
          date: new Date('2020-06-20'),
          expenseDetail: 'CAR INSURANCE',
          expensePrice: '$222'
        },
        {
          id: 2,
          date: new Date('2021-08-02'),
          expenseDetail: 'TOILET PAPER',
          expensePrice: '$20'
        },
        {
          id: 3,
          date: new Date('2023-05-17'),
          expenseDetail: 'MOBILE',
          expensePrice: '$130'
        },
        {
          id: 4,
          date: new Date('2020-06-20'),
          expenseDetail: 'BIKE',
          expensePrice: '$500'
        }
      ];
    
      return (
        <div className="App">
          {data.map((item) => (
            <ExpenseItem
              key={item.id}
              id={item.id}
              date={item.date}
              expenseDetail={item.expenseDetail}
              expensePrice={item.expensePrice}
            />
          ))}
        </div>
      );
    }
    
    export default App;
    
  