import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, army, setArmy, setBots }) {
  function handleClick() {
    if (army.find((botArmy) => botArmy.id === bot.id)) {
      setArmy((army) => army.filter((botArmy) => botArmy.id !== bot.id));
    } else {
      setArmy((army) => [...army, bot]);
    }
  }

  async function handleDelete(event) {
    event.stopPropagation();
    setBots((bots) => bots.filter((botArmy) => botArmy.id !== bot.id));

    try {
      const response = await fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the bot");
      }
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  }

  return (
    <div className="ui column">
      <div className="ui card" onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini red button" onClick={handleDelete}>
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;