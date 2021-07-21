import React from "react";
import "./style.css";

/*
 * the props this takes in is the data which is a list of players,
 * playerSelected which is the id of the selected player in state
 * setPlayer to set the current selected player
 * setData to set the current list of players
*/
const PlayerSelectedView = (props) => {

    let player = [];
    if (props.data.length > 0) {
        // filter players data down to just the player selected
        player = props.data.filter((ele) => ele.id === props.playerSelected);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let playerData = props.data;
        // find index of current selected player
        let dataIndex = playerData.findIndex((ele) => ele.id === props.playerSelected);

        // using the index update the players data based on the form inputs
        playerData[dataIndex].id = props.playerSelected;
        playerData[dataIndex].name = e.target.name.value;
        playerData[dataIndex].age = e.target.age.value;
        playerData[dataIndex].position = e.target.position.value;
        playerData[dataIndex].team = e.target.team.value;
        playerData[dataIndex].goals = e.target.goals.value;
        playerData[dataIndex].assists = e.target.assists.value;

        // set player back to null 
        props.setPlayer(null);
        // set data to include updates made to selected player
        props.setData(playerData);
    }

  return (

    <>
        { props.playerSelected ? 
            player.length > 0 ?
                <>
                    <h2 style={{borderBottom: "indigo 2px solid"}}>Player Selected</h2>
                    <form onSubmit={handleSubmit} key={props.playerSelected}>
                        <label for="name">Name:</label><br></br>
                        <input className={"player-input"} name={"name"} type={"text"} defaultValue={player[0].name}/>
                        <br></br><label for="age">Age:</label><br></br>
                        <input className={"player-input"} name={"age"} type={"number"} defaultValue={player[0].age}/>
                        <br></br><label for="position">Position:</label><br></br>
                        <input className={"player-input"} name={"position"} type={"text"} defaultValue={player[0].position}/>
                        <br></br><label for="team">Team:</label><br></br>
                        <input className={"player-input"} name={"team"} type={"text"} defaultValue={player[0].team}/>
                        <br></br><label for="goals">Goals:</label><br></br>
                        <input className={"player-input"} name={"goals"} type={"number"} defaultValue={player[0].goals}/>
                        <br></br><label for="assists">Assists:</label><br></br>
                        <input className={"player-input"} name={"assists"} type={"number"} defaultValue={player[0].assists}/>
                        
                        <button className={"update-button"} type={"submit"}>Update</button>
                    </form>
                </>
            :
                <p>player not found</p>
        :
            <p>No player selected</p>
        }
    </>
  );
};

export default PlayerSelectedView;