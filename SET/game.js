import {Player} from "./player.js";
import {Mod, state} from "./main.js";
import {starter,white} from "./data/data.js";
import {GenerateRanking} from "./basic.js"

export function GenerateMainpage()
{
var Number_of_people = `<select id="NoP">
<option value="Solo">Solo</option>
<option>Multiplayer</option>
</select>`;
var level = `<select id="level">
<option value="Difficult">Advanced </option>
<option>Starter </option>
</select>`;

var Mode = `<select id= "Mode">
<option value="Practice">Practice</option>
<option>Competitive</option> 
</select>`;

var IsSet = `Show if there is a SET:<select id= "IsSet"><option value = "unable">unable</option><option value = "disable">disable</option></select>`;
var ShowSet = `Show a SET:<select id= "ShowSet"><option value = "unable">unable</option><option value = "disable">disable</option></select>`;
var CanAdd= `Add 3 cards to the deck:<select id= "CanAdd"><option value = "Automatic">Automatic</option><option value = "button-based">button-based deal</option></select>`
var Startbutton = `<button id= "start">Start</button>`;
document.querySelector("#game").innerHTML = `<img src="./data/set.jpg">\n  <div>${Number_of_people}  ${level} ${Mode} <div>${IsSet}${ShowSet}${CanAdd}</div><div>${Startbutton}</div>\n<div> <a href="https://www.setgame.com/sites/default/files/instructions/SET%20INSTRUCTIONS%20-%20ENGLISH.pdf">Game rules</a></div>`;

document.querySelector("#start").addEventListener("click",handleStart);
document.querySelector("#Mode").addEventListener("change",ModeChange,false)
console.log(starter);
GenerateRanking();
}
GenerateMainpage();
function ModeChange()
{
    if(document.querySelector("#Mode").value == "Practice")
    {
        
        //document.querySelector("#mis > option:nth-child(1)").disabled = false;
        document.querySelector("#IsSet > option:nth-child(1)").disabled = false;
        document.querySelector("#ShowSet > option:nth-child(1)").disabled = false;
        document.querySelector("#CanAdd > option:nth-child(2)").disabled = false;
        //console.log(document.querySelector("#mis > option:nth-child(1)").disabled);
    }else
    {

        //document.querySelector("#mis > option:nth-child(1)").disabled = true;
        //document.querySelector("#mis > option:nth-child(2)").selected = true;

        document.querySelector("#IsSet > option:nth-child(1)").disabled = true;
        document.querySelector("#ShowSet > option:nth-child(1)").disabled = true;
        document.querySelector("#CanAdd > option:nth-child(2)").disabled = true;
        document.querySelector("#IsSet > option:nth-child(2)").selected = true;
        document.querySelector("#ShowSet > option:nth-child(2)").selected = true;
        document.querySelector("#CanAdd > option:nth-child(1)").selected = true;
    }
}



function handleStart(event)
{
    state.PlayerList = [];
    var first = document.querySelector("#NoP").value;
    var second = document.querySelector("#level").value;
    var third = document.querySelector("#Mode").value;
    var mis1 = document.querySelector("#IsSet").value;
    var mis2 =  document.querySelector("#ShowSet").value;
    var mis3 = document.querySelector("#CanAdd").value;
    (mis1 == "unable")? state.isSet = 1: state.isSet = 2;
    (mis2 == "unable")? state.ShowSet = 1: state.ShowSet = 2;
    (mis3 =="Automatic")? state.canAdd = 1: state.canAdd = 2;
    if(first == "Solo"&& third == "Practice")
    {
        //console.log(third);
       if(second == "Difficult")
       {
        
           state.Difficult = 2;
           //console.log(state.Difficult);
       }else
       {
        //console.log(second);
        state.Difficult = 1;
        //console.log(state.difficult);
       }
        S_P_Interface();
        state.level=1;
    }
    if(first == "Solo"&& third == "Competitive")
    {
        //console.log(1);
        
       if(second == "Difficult")
       {
        
           state.Difficult = 2;
           //console.log(state.Difficult);
       }else
       {
        //console.log(second);
        state.Difficult = 1;
        //console.log(state.difficult);
       }
        S_C_Interface();
        state.level=2;
    }


    if((first == "Multiplayer" && third == "Practice") ||(first == "Multiplayer" && third == "Competitive"))
    {
        GetPlayerNum();
    }

}


function GetPlayerNum()
{
    document.querySelector("#miscellaneous").innerHTML = `How Many:<Input id = "Num" value="2"> `;
    document.querySelector("#Game_Information").innerHTML = `<button>Go</button>`;
    document.querySelector("#Game_Information > button").addEventListener("click",Verify_Start);
}


function Verify_Start()
{
    var input = parseInt(document.querySelector("#Num").value);
    var second = document.querySelector("#level").value;
    if(input>10||input<2)
    {
        window.alert("There can only be 2-10 players in this mode!");
    }else
    {
        state.PlayerNum = input;
        if(second == "Difficult")
       {
        
           state.Difficult = 2;
          
       }else
       {
       
        state.Difficult = 1;
       }
       state.level = 3;
      
    }

    var third = document.querySelector("#Mode").value;

    if(third == "Competitive")
    {
        state.level = 4;
        //console.log(third);
    }

    M_P_Interface();
   
}

function M_P_Interface()
{
    document.querySelector("#miscellaneous").innerHTML = ``;
    document.querySelector("#Game_Information").innerHTML = ``;
    var html = "";
    for (var i=1;i<state.PlayerNum+1;i++)
    {
        html = html + `<p>Give name for Player${i}  <input value="Player${i}"></p>\n`;
    }
    document.querySelector("#game").innerHTML = `<div id="name">${html}<div id><button id="go">Let's Go</button> <div>` ;
    document.querySelector("#go").addEventListener("click",CreatPlayerList);
    document.querySelector("#go").addEventListener("click",GeneratePlayers);


}







function S_P_Interface()
{
    document.querySelector("#game").innerHTML = `<div id="name"><p>Give name for Player1  <input value="Player1"></p><div>\n<div id><button>Let's Go</button> <div>` ;
    document.querySelector("#game > div > div > div > button").addEventListener("click",CreatPlayerList);
    document.querySelector("#name > div > div > button").addEventListener("click",GeneratePlayers);
    


}

function CreatPlayerList(event)
{
        var NodeList = document.querySelectorAll("#name > p input");
        var namelist = [];
        for (var i=0;i<NodeList.length ;i++)
        {
           state.PlayerList.push(new Player(NodeList[i].value,i));
        }
        
        //state.PlayerList = Playerlist;
        //console.log(state.PlayerList);
}
// Can also start game
export function GeneratePlayers()
{
    var html = '';
    html+="<div>\n";
    html +=`<table border="1">\n `;
    for (var i=0;i<state.PlayerList.length;i++)
    {
        
        html+=`<tr>\n <td>${state.PlayerList[i].name} </td> \n <td>Point: ${state.PlayerList[i].point}</td>\n<td><button id="${state.PlayerList[i].name}b">Try!</button>\n    </td></tr>\n `;
       
        
    }
    html += "</div>\n";
    document.querySelector("#Player_information").innerHTML = html;
    Add_player_listener();
    Mod(state.level);
    return html;

}


function Add_player_listener()
{
    for (var i=0;i<state.PlayerList.length;i++)
    {
        state.PlayerList[i].GenerateMonitor();
    }
}


function S_C_Interface()
{
    document.querySelector("#game").innerHTML = `<div id="name"><p>Give name for Player1  <input value="Player1"></p><div>\n<div id><button>Let's Go</button> <div>` 
    document.querySelector("#game > div > div > div > button").addEventListener("click",CreatPlayerList);
    document.querySelector("#name > div > div > button").addEventListener("click",GeneratePlayers);
}