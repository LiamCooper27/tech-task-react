import React from "react";
import "./style.css";

/* 
 * this takes in props for the data which is the list of players and a setPlayer callback
 * which sets the state to the id of the selected player
*/
const PlayersListView = (props) => {

  return (
    <>
        { props.data.length > 0 ? 
            props.data.map((item,i) => {
                return (
                    <div className={"player-div"} onClick={() => props.setPlayer(item.id)}>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>Position: {item.position}</p>
                        <p>Team: {item.team}</p>
                        <p>Goals: {item.goals}</p>
                        <p>Assists: {item.assists}</p>
                    </div>
                )
            })
        :
            <p>No player data</p>
        }
    </>
  );
};

export default PlayersListView;