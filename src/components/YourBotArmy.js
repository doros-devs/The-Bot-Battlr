import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({army,setArmy}) {
  

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          
          Your Bot Army

          {army.map((bot => <BotCard key={bot.id} bot={bot} setArmy={setArmy} army={army}/>

          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
