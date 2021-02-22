//import { Playerlist } from "./game.js"
import { click_solo_Practice, state,click_multiplayer_competitive } from "./main.js";
import { Generate } from "./show.js";
import {JudgeTry_Extratable} from "./basic.js";

export class Player {
    constructor(name, index) {
        this.name = name;
        this.point = 0;
        this.Canclicked = true;
        this.index = index;
    }
    GenerateMonitor() {
        var tmp = this.name;
        document.querySelector(`#${this.name}b`).addEventListener("click", function () { HandleTry(tmp); });
        //document.querySelector(`#${this.name}b`).addEventListener("keydown",HandleKeyboard);
        
        
        if (state.level == 1 || state.level == 2) {

            document.getElementById(`${this.name}b`).disabled = true;
            document.getElementById(`${this.name}b`).innerHTML = "Always";


        }else
        {
            window.addEventListener("keydown",HandleKeyboard);
        }


    }
    //reset try button when one round end.
    ResetTry() {
        document.querySelector(`#${this.name}b`).disabled = false;
        
    }

    addPoint() {
        this.point++;
        document.querySelector("#Player_information > div > table").rows[state.PlayerIndex].cells[1].innerText = "Point: " + this.point;

    }
    minPoint() {
        this.point--;
        document.querySelector("#Player_information > div > table").rows[state.PlayerIndex].cells[1].innerText = "Point: " + this.point;
    }


}

function HandleTry(name) {
    state.Choosed = true;
    document.getElementById(`${name}b`).disabled = true;
    //console.log(document.getElementById(`${name}b`).parentNode.parentNode.rowIndex);
    state.PlayerIndex = document.getElementById(`${name}b`).parentNode.parentNode.rowIndex;
    state.Playername = name;
    //console.log(state.PlayerIndex);
    for (var i = 0; i < state.PlayerList.length; i++) {
        if (state.PlayerList[i].name == name) {
            state.PlayerList[i].Canclicked = false;
        }
    }
    if(state.level == 3 || state.level==4)
    {
        Stopwatch();
        if(state.PlayerIndex!=-1){
        delegate(document.querySelector("#game > table"), "click", "th", click_multiplayer_competitive);
        }
    }


}

function HandleKeyboard(event)
{
    
    var code = event.keyCode || event.which ||event.charCode;
    if(code >=48 && code <= 57)
    {
        var index = code - 49;
        if(index == -1)
        {
            index == 9;
        }
       
        HandleTry(state.PlayerList[index].name);
        
    }
}


function Stopwatch()
{
    state.Timer = 10.0;
    function Timer() {
        document.querySelector("#Timer").innerHTML = `⏱ ${state.Timer.toFixed(1)}`;
        if(state.Timer === parseFloat(0.0))
        {
            document.querySelector("#Timer").innerHTML = `⏱ Time is over😥`;
            Reset_Tablielist_Attributes();
            clearInterval(interval);
            //console.log(1);
            state.PlayerList[state.PlayerIndex].minPoint();
            document.querySelector("#game").innerHTML = Generate(state.TableList);
            state.PlayerIndex = -1;
            state.counter = 0;
            JudgeTry_Extratable();
            document.querySelector("#game").innerHTML = Generate(state.TableList);

        }
        if(state.Choosed ==false)
        {
            document.querySelector("#Timer").innerHTML = ``;
            clearInterval(interval);
        }
        state.Timer = state.Timer - 0.5;
    }
    var interval = setInterval(Timer, 500);

}


function Reset_Tablielist_Attributes()
{
    for(var i=0;i<state.TableList.length;i++)
    {
        if(state.TableList[i].SHAPE!= -1){
        state.TableList[i].Clicked = false;
        }
    }
}





function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}