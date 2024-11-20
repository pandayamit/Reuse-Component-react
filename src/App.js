import logo from './logo.svg';
import './App.css';
import User from './User'

function App() {
  const users =[
    {name:"Amit",email:"amit@test.gmail.com",contact:"2233"},
    {name:"Dev",email:"dev@test.gmail.com",contact:"6565"},
    {name:"Aryan",email:"aryan@test.gmail.com",contact:"0990"},
  ]
  return (
    <div className="App">
      <h2>Reuse Component</h2>
    
      {
        users.map((item,i)=>
          <div>
      <User data={item}></User>
  </div>
        )
      }
     
    </div>
  );
}

export default App;
