import React,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots]= useState([])
  const [army, setArmy]= useState([])
  
  useEffect(() =>{
     fetch("http://localhost:8002/bots")
     .then(res=>res.json())
     .then((data) => setBots(data))
       },[]);
 
       
      
  return (
    <div>
      <YourBotArmy army={army} setArmy={setArmy}  setBots={setBots} />
      <BotCollection army={army} setArmy={setArmy} bots={bots} setBots={setBots}/>
    </div>
  )
}

export default BotsPage;
