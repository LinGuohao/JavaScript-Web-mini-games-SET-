import { Generate } from './show.js';
import { click, state, Solo_Practice, click_solo_Practice, Mod ,click_multiplayer_competitive} from './main.js';
import { GeneratePlayers,GenerateMainpage} from './game.js';
import {white} from './data/data.js';
import { Player } from './player.js';
//var main = document.querySelector("#game");
function check_Change_attribute(TableList) {
    var shape;
    var color;
    var number;
    var shading;
    var isfound = false;
    for (var i = 0; i < TableList.length - 2; i++) {
        for (var j = i + 1; j < TableList.length - 1; j++) {
            for (var z = j + 1; z <= TableList.length - 1; z++) {
                if (isfound == false&& isfound == false && TableList[i].shape != -1 && TableList[j].shape != -1 &&TableList[z].shape != -1) {
                    shape = false;
                    color = false;
                    number = false;
                    shading = false;
                    if ((TableList[i].shape == TableList[j].shape && TableList[i].shape == TableList[z].shape && TableList[j].shape == TableList[z].shape) || (TableList[i].shape != TableList[j].shape && TableList[i].shape != TableList[z].shape && TableList[j].shape != TableList[z].shape)) {
                        shape = true;
                    }
                    if ((TableList[i].color == TableList[j].color && TableList[i].color == TableList[z].color && TableList[j].color == TableList[z].color) || (TableList[i].color != TableList[j].color && TableList[i].color != TableList[z].color && TableList[j].color != TableList[z].color)) {
                        color = true;
                    }
                    if ((TableList[i].number == TableList[j].number && TableList[i].number == TableList[z].number && TableList[j].number == TableList[z].number) || (TableList[i].number != TableList[j].number && TableList[i].number != TableList[z].number && TableList[j].number != TableList[z].number)) {
                        number = true;
                    }
                    if ((TableList[i].shading == TableList[j].shading && TableList[i].shading == TableList[z].shading && TableList[j].shading == TableList[z].shading) || (TableList[i].shading != TableList[j].shading && TableList[i].shading != TableList[z].shading && TableList[j].shading != TableList[z].shading)) {
                        shading = true;
                    }
                    if (shape == true && color == true && number == true && shading == true) {
                        isfound = true;

                    }
                    if (isfound == true) {
                        TableList[i].hint = true;
                        TableList[j].hint = true;
                        TableList[z].hint = true;

                    }


                }



            }
        }
    }

    return isfound;
}


function check_Keep_attribute(TableList) {
    var shape;
    var color;
    var number;
    var shading;
    var isfound = false;
    
    for (var i = 0; i < TableList.length - 2; i++) {
        for (var j = i + 1; j < TableList.length - 1; j++) {
            for (var z = j + 1; z <= TableList.length - 1; z++) {
                if (isfound == false && TableList[i].shape != -1 && TableList[j].shape != -1 &&TableList[z].shape != -1) {
                    shape = false;
                    color = false;
                    number = false;
                    shading = false;
                    if ((TableList[i].shape == TableList[j].shape && TableList[i].shape == TableList[z].shape && TableList[j].shape == TableList[z].shape) || (TableList[i].shape != TableList[j].shape && TableList[i].shape != TableList[z].shape && TableList[j].shape != TableList[z].shape)) {
                        shape = true;
                    }
                    if ((TableList[i].color == TableList[j].color && TableList[i].color == TableList[z].color && TableList[j].color == TableList[z].color) || (TableList[i].color != TableList[j].color && TableList[i].color != TableList[z].color && TableList[j].color != TableList[z].color)) {
                        color = true;
                    }
                    if ((TableList[i].number == TableList[j].number && TableList[i].number == TableList[z].number && TableList[j].number == TableList[z].number) || (TableList[i].number != TableList[j].number && TableList[i].number != TableList[z].number && TableList[j].number != TableList[z].number)) {
                        number = true;
                    }
                    if ((TableList[i].shading == TableList[j].shading && TableList[i].shading == TableList[z].shading && TableList[j].shading == TableList[z].shading) || (TableList[i].shading != TableList[j].shading && TableList[i].shading != TableList[z].shading && TableList[j].shading != TableList[z].shading)) {
                        shading = true;
                    }
                    if (shape == true && color == true && number == true && shading == true) {
                        isfound = true;

                    }



                }



            }
        }
    }

    return isfound;
}

export function Generate_miscellaneous(TableList) {
    /*document.querySelector("#miscellaneous").innerHTML += '<button id="GiveSET">Give a SET</button><button id="isSet">Is there a Set?</button>\n<p id="MisContent"></p>';
    document.querySelector("#GiveSET").addEventListener("click", function () { Handle_checkSet(TableList); })
    document.querySelector("#isSet").addEventListener("click", function () { Handle_IsSet(TableList); })
    */
   (state.isSet == 1) ? Generate_IsSet(TableList):null;
   (state.ShowSet == 1) ? Generate_ShowMe(TableList):null;
   (state.canAdd == 2) ? Generate_CanAdd():null;
   document.querySelector("#miscellaneous").innerHTML += "<div id=MisContent></div>";
   (state.isSet == 1) ? document.querySelector("#isSet").addEventListener("click", function () { Handle_IsSet(TableList);  }):null;
   (state.ShowSet == 1) ?document.querySelector("#GiveSET").addEventListener("click", function () { Handle_checkSet(TableList);}):null ;  
   (state.canAdd == 2) ?document.querySelector("#CanAdd").addEventListener("click", function () { Handle_CanAdd(); }) :null;   

}

export function Generate_ShowMe(TableList)
{
    document.querySelector("#miscellaneous").innerHTML +='<button id="GiveSET">Show me a SET</button>';
   // document.querySelector("#GiveSET").addEventListener("click", function () { Handle_checkSet(TableList); });
}

export function Generate_IsSet(TableList)
{
    document.querySelector("#miscellaneous").innerHTML +='<button id="isSet">Is there a SET?</button>';
    //document.querySelector("#isSet").addEventListener("click", function () { Handle_IsSet(TableList); })   ;
}

export function Generate_CanAdd()
{
    document.querySelector("#miscellaneous").innerHTML +='<button id="CanAdd">Plus three cards</button>';
   // document.querySelector("#CanAdd").addEventListener("click", function () { Handle_CanAdd(); })   ; 
}



function Handle_CanAdd(TableList)
{
    if (!JudgeEnd(3)) {
        for (var i = 0; i < 3; i++) {
            state.TableList.push(state.CardList[i]);

        }
        state.CardList = state.CardList.slice(3, state.CardList.length);
        state.inform.Set_left(state.CardList.length);
        state.Extra = true;   
        document.querySelector("#game").innerHTML = Generate(state.TableList);
    if(state.level == 1)
    {
        delegate(document.querySelector("#game > table"), "click", "th", click_solo_Practice);
    }   
}
}



function Handle_checkSet(TableList) {
    
    var find = false;
    find = check_Change_attribute(state.TableList);
    if (find) {
        document.querySelector("#game").innerHTML = Generate(state.TableList);
    } else {

        console.log("Not find");
    }
    if (state.level == 1) {
        delegate(document.querySelector("#game > table"), "click", "th", click_solo_Practice);
    } 
    if(state.level ==3 && state.PlayerIndex != -1)
    {
        //console.log(state.PlayerIndex);
        delegate(document.querySelector("#game > table"), "click", "th",click_multiplayer_competitive);
    }
}

function Handle_IsSet(TableList) {
    var find = false;
    //console.log(1);
    find = check_Keep_attribute(TableList);
    if (find) {
        document.querySelector("#MisContent").innerHTML = "Yes! There is a SET !";
    } else {
        document.querySelector("#MisContent").innerHTML = "No! There is no SET !";

    }
}

export function Check_IsSet(TableList) {
    var find = false;
    find = check_Keep_attribute(TableList);
    return find;

}




export function changeClicked(TableList, coordinate) {
    if (TableList[coordinate].Clicked == false) {
        TableList[coordinate].Clicked = true;
        return true;
    }
    if (TableList[coordinate].Clicked == true) {
        TableList[coordinate].Clicked = false;
        return false;
    }
}


export function Creat_clickedIndex(TableList) {
    var tmp = [];
    for (var i = 0; i < TableList.length; i++) {
        if (TableList[i].Clicked == true) {
            tmp.push(i);
        }
    }
    return tmp;
}

export function Check_three_SET(first, second, third) {
    var isfound = false;
    var shape = false;
    var color = false;
    var number = false;
    var shading = false;
    if ((first.shape == second.shape && first.shape == third.shape && second.shape == third.shape) || (first.shape != second.shape && first.shape != third.shape && second.shape != third.shape)) {
        shape = true;
    }
    if ((first.color == second.color && first.color == third.color && second.color == third.color) || (first.color != second.color && first.color != third.color && second.color != third.color)) {
        color = true;
    }
    if ((first.number == second.number && first.number == third.number && second.number == third.number) || (first.number != second.number && first.number != third.number && second.number != third.number)) {
        number = true;
    }
    if ((first.shading == second.shading && first.shading == third.shading && second.shading == third.shading) || (first.shading != second.shading && first.shading != third.shading && second.shading != third.shading)) {
        shading = true;
    }
    if (shape == true && color == true && number == true && shading == true) {
        isfound = true;

    }
    return isfound;
}


function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}


export function Draw_and_replace(clickedIndex) {
    var cont = 0;
    for (var i = 0; i < clickedIndex.length; i++) {
        (clickedIndex[i] <= 11) ? cont++ : null;
    }
    //console.log(cont);
    if(JudgeEnd(cont) && Check_IsSet(state.TableList) == false) 
    {
        //console.log(1);
     EndGame(state.level)}
    else    
    {
        if(JudgeEnd(cont)){
        
        for (var i = 0; i < clickedIndex.length; i++) {
        if (clickedIndex[i] <= 11) {
            state.TableList[clickedIndex[i]] = white;
        
        }
    }

    }else if(!(JudgeEnd(cont)) && Check_IsSet(state.TableList) == true ){
        var index = 0;
        for (var i = 0; i < clickedIndex.length; i++) {
            if (clickedIndex[i] <= 11) {
                state.TableList[clickedIndex[i]] = state.CardList[index];
                index++;
            }
    
        }
    state.CardList = state.CardList.slice(cont, state.CardList.length);
    state.inform.Set_left(state.CardList.length);
    }
    if (state.Extra == true) {
        state.TableList = state.TableList.slice(0, 12);
        state.Extra = false;
    }
    }
}

export function Restart(level) {

}


function GenerateBody()
{
    document.querySelector("body").innerHTML = ` <div id="game"> </div>
    <div id="miscellaneous"></div>
    <div id="Game_Information"></div>
    <div id="TotalPoint"></div>
    <div id="Timer"></div>
    <div id="Announcement"></div>
    <div id="Player_information"></div>
    <script type="module" src="game.js"></script>`;
    GenerateMainpage();
    //GenerateRanking();
}

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].point < arr[j + 1].point) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

export function GenerateRanking()
{
    
    var html = "";
    if(state.OneplayerThree.length !=0 )
    {
       
        state.OneplayerThree = bubbleSort(state.OneplayerThree);
        html += `<div><h3>One-player three-property</h3><div>\n <table border="1">\n`;
        for (var i=0;i<state.OneplayerThree.length;i++)
        {
            html+="<tr>\n";
            html += `<th>${i+1}</th>\n`;
            html += `<th>${state.OneplayerThree[i].name}</th>\n`;
            html += `<th>Point:${state.OneplayerThree[i].point}</th>\n`;
            html += `</tr>\n`;
        }
        html+= `</table>`;
    }

    if(state.OneplayerFour.length !=0)
    {
        state.OneplayerFour = bubbleSort(state.OneplayerFour);
        html += `<div><h3>One-player Four-property</h3><div>\n <table border="1">\n`;
        for (var i=0;i<state.OneplayerFour.length;i++)
        {
            html+="<tr>\n";
            html += `<th>${i+1}</th>\n`;
            html += `<th>${state.OneplayerFour[i].name}</th>\n`;
            html += `<th>Point:${state.OneplayerFour[i].point}</th>\n`;
            html += `</tr>\n`;
        }
        html+= `</table>`;
    }

    if(state.MultiplayerResult.length !=0)
    {
        
        html += `<div><h3>Multiplayer Result</h3><div>\n <table border="1">\n`;
        for (var i=0;i<Math.min(10,state.MultiplayerResult.length);i++)
        {
            html+="<tr>\n";
            html += `<th>${i+1}</th>\n`;
            html += `<th>Num:${state.MultiplayerResult[i].name}</th>\n`;
            html += `<th>Point:${state.MultiplayerResult[i].point}</th>\n`;
            html += `</tr>\n`;
        }
        html+= `</table>`;
    }
    document.querySelector("#Player_information").innerHTML = html;

}




function EndGame() {
    if (state.level == 1) {
        state.EndGame = true;
        var point = document.querySelector("#Player_information > div > table > tbody > tr > td:nth-child(2)").innerHTML;
        point = parseInt(point.split(" ")[1]);
        //console.log(point);
        document.querySelector("body").innerHTML =`<div>Practice End, you got Point:${point}!<div>\n <button id="back">Back to Menu</button>`;
        if(state.Difficult == 1)
        {
            var name = state.PlayerList[0].name;
            var tmp = new Player(name,-1);
            tmp.point = point;
            state.OneplayerThree.push(tmp);
        }
        if(state.Difficult == 2)
        {
            var name = state.PlayerList[0].name;
            var tmp = new Player(name,-1);
            tmp.point = point;
            //console.log(tmp);
            state.OneplayerFour.push(tmp);
        }
        document.querySelector("#back").addEventListener("click",GenerateBody);

    }

    if (state.level == 2) {
        state.EndGame = true;
        state.Timer = 0;
        var Timer = state.Timer;
        var point = document.querySelector("#Player_information > div > table > tbody > tr > td:nth-child(2)").innerHTML;
        point = point.split(" ")[1];
        document.querySelector("body").innerHTML = `<div>Congratulations, you won in ${Timer} and got Point:${point}!! 🎉🎊🎈\n<button id="back">Back to Menu</button>`;
        document.querySelector("#back").addEventListener("click",GenerateBody);
        if(state.Difficult == 1)
        {
            var name = state.PlayerList[0].name;
            var tmp = new Player(name,-1);
            tmp.point = point;
            state.OneplayerThree.push(tmp);
        }
        if(state.Difficult == 2)
        {
            var name = state.PlayerList[0].name;
            var tmp = new Player(name,-1);
            tmp.point = point;
            state.OneplayerFour.push(tmp);
        }
       

    }

    if(state.level == 4){
        var tmpPlayers = [];
        state.EndGame = true;
        state.Point = 0;
        var table = document.querySelector("#Player_information > div > table");
        
           
            for(var i=0;i<state.PlayerList.length;i++)
            {
                
                var tmpPlayer = new Player(table.rows[i].cells[0].innerHTML,-1); 
                var tmp  = (table.rows[i].cells[1].innerHTML).split(" ");
                tmpPlayer.point = parseInt(tmp[1]);
                
                state.Point = parseInt(tmp[1]) + state.Point;
                tmpPlayers.push(tmpPlayer);
            }
        tmpPlayers = bubbleSort(tmpPlayers);
        
        var tmpPlayer = new Player(state.PlayerList.length,-1);
        tmpPlayer.point = state.Point;
        state.MultiplayerResult.push(tmpPlayer);
        var html =  `<table border="1">
        <tr>
          <th>1</th>
          <th>Name: ${tmpPlayers[0].name}</th>
          <th>Point: ${tmpPlayers[0].point}</th>
        </tr>
        <tr>
        <th>2</th>
        <th>Name: ${tmpPlayers[1].name}</th>
        <th>Point: ${tmpPlayers[1].point}</th>
        </tr>
      </table>`
        document.querySelector("#game").innerHTML = `<div>Game end, total scores is ${state.Point} !! 🎉🎊🎈<div>\n <div id="Rank"> <h3>Best two players</h3>\n<p id="best">${html}</p><div><button id="Rematch">Rematch</button><button id="back">Back to Menu</button></div><div>`;
        document.querySelector("#miscellaneous").innerHTML="";
        document.querySelector("#TotalPoint").innerHTML ="";
        document.querySelector("#Timer").innerHTML ="";
        document.querySelector("#Announcement").innerHTML ="";
        document.querySelector("#Player_information").innerHTML ="";
        document.querySelector("#Rematch").addEventListener("click",HandleRematch);
        document.querySelector("#Game_Information").innerHTML ="";
        document.querySelector("#back").addEventListener("click",GenerateBody);

    }
    if(state.level == 3)
    {
        var tmpPlayers = [];
        state.EndGame = true;
        state.Point = 0;
        var table = document.querySelector("#Player_information > div > table");
        
           
            for(var i=0;i<state.PlayerList.length;i++)
            {
                
                var tmpPlayer = new Player(table.rows[i].cells[0].innerHTML,-1); 
                var tmp  = (table.rows[i].cells[1].innerHTML).split(" ");
                tmpPlayer.point = parseInt(tmp[1]);
                
                state.Point = parseInt(tmp[1]) + state.Point;
                tmpPlayers.push(tmpPlayer);
            }
        tmpPlayers = bubbleSort(tmpPlayers);
        
        var tmpPlayer = new Player(state.PlayerList.length,-1);
        tmpPlayer.point = state.Point;
        state.MultiplayerResult.push(tmpPlayer);
        var html =  `<table border="1">
        <tr>
          <th>1</th>
          <th>Name: ${tmpPlayers[0].name}</th>
          <th>Point: ${tmpPlayers[0].point}</th>
        </tr>
        <tr>
        <th>2</th>
        <th>Name: ${tmpPlayers[1].name}</th>
        <th>Point: ${tmpPlayers[1].point}</th>
        </tr>
      </table>`
        document.querySelector("#game").innerHTML = `<div>Practice end, total scores is ${state.Point} !! 🎉🎊🎈<div>\n <div id="Rank"> <h3>Best two players</h3>\n<p id="best">${html}</p><div><button id="Rematch">Rematch</button><button id="back">Back to Menu</button></div><div>`;
        document.querySelector("#miscellaneous").innerHTML="";
        document.querySelector("#TotalPoint").innerHTML ="";
        document.querySelector("#Timer").innerHTML ="";
        document.querySelector("#Announcement").innerHTML ="";
        document.querySelector("#Player_information").innerHTML ="";
        document.querySelector("#Rematch").addEventListener("click",HandleRematch);
        document.querySelector("#Game_Information").innerHTML ="";
        document.querySelector("#back").addEventListener("click",GenerateBody);
    }
}

function HandleRematch(event)
{
    GeneratePlayers();
}


export function JudgeEnd(Cardnumber) {
    if (state.CardList.length - Cardnumber < 0) {

        return true;
    } else {
        return false;
    }
}



export function CheckgameEnd_Extratable() {
    while (check_Keep_attribute(state.TableList) == false) {
        if (!JudgeEnd(3)) {
            for (var i = 0; i < 3; i++) {
                state.TableList.push(state.CardList[i]);

            }
            state.CardList = state.CardList.slice(3, state.CardList.length);
            state.inform.Set_left(state.CardList.length);
            state.Extra = true;
        } else {
            EndGame(state.level);
        }


    }
}
// Can also able the Try buttton
export function JudgeTry_Extratable() {
    var Cantry = false;
    for (var i = 0; i < state.PlayerList.length; i++) {
        var name = state.PlayerList[i].name;
        if (document.getElementById(`${name}b`).disabled == false) {
            Cantry = true
        }
    }
    if (Cantry == false) {
        if (!JudgeEnd(3)) {
            for (var i = 0; i < 3; i++) {
                state.TableList.push(state.CardList[i]);

            }
            state.CardList = state.CardList.slice(3, state.CardList.length);
            state.inform.Set_left(state.CardList.length);
            state.Extra = true;
        } else {
            EndGame(state.level);
        }
        for (var i = 0; i < state.PlayerList.length; i++) {
            var name = state.PlayerList[i].name;
            document.getElementById(`${name}b`).disabled = false;

        }


    }
}

export function AddTimer() {
    state.Timer = 0.0;
    var time = document.querySelector("#Timer")
    function Timer() {
       
        time.innerHTML = `⏱ ${state.Timer.toFixed(1)}`;
        state.Timer = state.Timer + 0.5;
        if(state.EndGame == true)
        {
            clearInterval(interval);
        }
    }

    var interval = setInterval(Timer, 500);
}


