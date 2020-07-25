import React, { useState, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { checkPropTypes, func } from 'prop-types';
//import { ReactComponent } from '*.svg';


function Chengdu() {
  return (
    <div>
      <h1>Chengdu of Sichuan of China</h1>
    </div>
  );
}


function Newyork() {
  return (
    <div>
      <h1>New York of California of USA</h1>
    </div>
  );
}
function Banner()  {
  return (
  <div className="App-header">
     <h1>
       Welcome to My Site! 
     </h1>
  </div>
  );
}

const managerlist = ["Hogan", "Simon","Jack"];

function GitHubUser({login}) {
  const [data,setData] =useState(null);
  useEffect(()=> {
    fetch(`https://api.github.com/users/${login}`)
      .then(res =>res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div id="gitLogin">
        <h1>
          {data.login}
        </h1>
        <img src={data.avatar_url} width={100} />
      </div>
    );
  }
  return (
    <h1 id="gitLogin">Loading...</h1>
  );
}

function Content()  {
  const [status,setStatus] = useReducer(
    status => !status,
    true
  );
  const [manager,setManager] =useReducer(
    manager => managerlist[managerlist.indexOf(manager) === 2 ? 0 : managerlist.indexOf(manager)+1],
    managerlist[0]
  );
  const [checked,handleCheck] = useReducer(
    checked =>!checked,
    false
  );
 //useEffect(()=> {
 //  alert(`checked: ${checked.toString()}`);
 //  });
  
  const [val,setVal] = useState("");
  const [val2,setVal2] = useState("");

  console.log(managerlist); 
  console.log(managerlist.indexOf(manager)); 
  console.log(status);
  
  return (
    <>
    <GitHubUser login="Simon"/>
    <div id='phaseManager'> 
      <label>
        Favorate Phrase:  
        <input 
        value={val} 
        onChange={e=>setVal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Second Favorate Phrase: 
        <input 
        value={val2} 
        onChange={e=>setVal2(e.target.value)}
        />
      </label>
      <h1>Manager On Duty today: {manager}</h1>
      <button onClick={setManager}>change the manager</button>
    </div>
    <div id='status&check'>
      <h1>
        Status: {status ? "Open" : "Closed"}
      </h1>
      <button onClick={setStatus} >
        change the status
      </button>
      <br/> <br/>
      <input type="checkbox"
          value={checked}
          onChange= {handleCheck}
          
     />
     {checked ? "checked" : "unchecked"}
    </div>
    
   </>
  );
}


function Buttom()  {
  return (
   <div className="App-buttom">
    <p>Copyright @Simonwest 2020.</p>
   </div>
  );
}


function App()  {
  return (
  <React.Fragment>
     <Banner />
     <Content place="Chengdu"/>
     <h1/>
     <Buttom />
  </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)