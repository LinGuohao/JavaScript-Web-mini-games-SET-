import { difficulty, get_array, GenerateList, GenerateTable, starter,white } from './data/data.js';
import { Generate, Announcement, Information } from './show.js';
import { Generate_miscellaneous, changeClicked, Creat_clickedIndex, Check_three_SET, Draw_and_replace, Check_IsSet, Restart, CheckgameEnd_Extratable, AddTimer,JudgeTry_Extratable } from './basic.js';
import { Player } from "./player.js"
var main = document.querySelector("#game");
export const state = {

  TableList: [],
  CardList: [],
  PlayerList: [],
  counter: 0,
  notice: new Announcement,
  inform: new Information,
  //1 means S_P  2 means S_C  3 means M_P
  level: 0,
  canAdd: 1,
  isSet:1,
  GiveSet:1,
  Extra: false,
  PlayerIndex: -1,
  Difficult: 2,
  Timer: 0,
  PlayerNum: 0,
  Choosed : false,
  Point:0,
  GameEnd:false,
  MultiplayerResult:[],
  OneplayerThree:[],
  OneplayerFour:[]

};


export function Mod(level) {
  //console.log("mod");
  state.EndGame = false;
  for (var i=0;i<difficulty.length;i++)
  {
    difficulty[i].Clicked = false;
    difficulty[i].hint = false;
  }
  for (var i=0;i<starter.length;i++)
  {
    starter[i].Clicked = false;
    starter[i].hint = false;
  }
  if (level == 1) { Solo_Practice(); }
  if (level == 2) { Solo_Competitive(); }
  if (level == 4 || level ==3) { Multiplayer_Competitive(); }
  








}


function Multiplayer_Competitive() {
    //state.level = 3;

    state.PlayerIndex = -1;
    if (state.Difficult == 2) {

      //console.log(2);
      state.CardList = GenerateList(get_array(81), difficulty);
      state.inform = new Information(81);
    }
    else {
      //console.log(1);
      state.CardList = GenerateList(get_array(27), starter);
      state.inform = new Information(27);
    }
    state.TableList = GenerateTable(state.CardList);

    state.notice.Reset();
    state.CardList = state.CardList.splice(12, state.CardList.length);
    state.inform.Set_left(state.CardList.length);
    document.querySelector("#game").innerHTML = Generate(state.TableList);
    (state.level == 3) ? Generate_miscellaneous(state.TableList) : null;
    
    //Generate_miscellaneous(state.TableList);
    state.notice.Reset();
    state.inform.Set_total_Point();

}









export function Solo_Practice() {
  state.level = 1;
  state.PlayerIndex = 0;
  if (state.Difficult == 2) {

    //console.log(2);
    state.CardList = GenerateList(get_array(81), difficulty);
    state.inform = new Information(81);
  }
  else {
    //console.log(1);
    state.CardList = GenerateList(get_array(27), starter);
    state.inform = new Information(27);
  }
 
  state.TableList = GenerateTable(state.CardList);
  //console.log(state.TableList.length);
  state.notice.Reset();
  state.CardList = state.CardList.splice(12, state.CardList.length);
  state.inform.Set_left(state.CardList.length);
  document.querySelector("#game").innerHTML = Generate(state.TableList);
  Generate_miscellaneous(state.TableList) ;
  
  state.notice.Reset();
  if(state.GameEnd == false){
  delegate(document.querySelector("#game > table"), "click", "th", click_solo_Practice);
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





export function click(event) {
  //console.log(5);
  var clickedIndex = [];

  const x = this.cellIndex;

  const y = this.parentNode.rowIndex;
  var coordinate = y * 3 + x;
  if (changeClicked(state.TableList, coordinate)) {

    document.querySelector("#game").innerHTML = Generate(state.TableList);

    state.counter++;
    //console.log(num);
  } else {

    document.querySelector("#game").innerHTML = Generate(state.TableList);

    state.counter--;
    //console.log(num);
  }

  if (state.counter == 3) {
    clickedIndex = Creat_clickedIndex(state.TableList);
    if (Check_three_SET(state.TableList[clickedIndex[0]], state.TableList[clickedIndex[1]], state.TableList[clickedIndex[2]])) {
      state.notice.Someone_win("You");
      state.counter = 0;
      Draw_and_replace(clickedIndex);
      document.querySelector("#game").innerHTML = Generate(state.TableList);

    } else {
      state.notice.Someone_lose("You");
      changeClicked(state.TableList, clickedIndex[0]);
      changeClicked(state.TableList, clickedIndex[1]);
      changeClicked(state.TableList, clickedIndex[2]);
      state.counter = 0;
      document.querySelector("#game").innerHTML = Generate(state.TableList);

    }
  }

  delegate(document.querySelector("#game > table"), "click", "th", click);
}



export function click_solo_Practice(event) {
  var clickedIndex = [];

  const x = this.cellIndex;

  const y = this.parentNode.rowIndex;
  var coordinate = y * 3 + x;
  if(state.TableList[coordinate].shape != -1){
  if (changeClicked(state.TableList, coordinate)) {

    document.querySelector("#game").innerHTML = Generate(state.TableList);

    state.counter++;
    //console.log(num);
  } else {

    document.querySelector("#game").innerHTML = Generate(state.TableList);

    state.counter--;
    //console.log(num);
  }

  if (state.counter == 3) {
    clickedIndex = Creat_clickedIndex(state.TableList);
    if (Check_three_SET(state.TableList[clickedIndex[0]], state.TableList[clickedIndex[1]], state.TableList[clickedIndex[2]])) {
      // reset try button for players;
      state.PlayerList[state.PlayerIndex].addPoint();
      state.notice.Someone_win(state.PlayerList[state.PlayerIndex].name);
      state.counter = 0;
      Draw_and_replace(clickedIndex);
      CheckgameEnd_Extratable();
      document.querySelector("#game").innerHTML = Generate(state.TableList);

    } else {
      state.notice.Someone_lose(state.PlayerList[state.PlayerIndex].name);
      state.PlayerList[state.PlayerIndex].minPoint();
      changeClicked(state.TableList, clickedIndex[0]);
      changeClicked(state.TableList, clickedIndex[1]);
      changeClicked(state.TableList, clickedIndex[2]);
      state.counter = 0;
      document.querySelector("#game").innerHTML = Generate(state.TableList);

    }
  }

if(state.GameEnd == false){

  delegate(document.querySelector("#game > table"), "click", "th", click_solo_Practice);
}
  }
}






export function Solo_Competitive() {
  state.level = 2;
  state.PlayerIndex = 0;
  AddTimer();
  if (state.Difficult == 2) {


    state.CardList = GenerateList(get_array(81), difficulty);
    state.inform = new Information(81);
  }
  else {

    state.CardList = GenerateList(get_array(27), starter);
    state.inform = new Information(27);
  }

  state.TableList = GenerateTable(state.CardList);

  state.notice.Reset();
  state.CardList = state.CardList.splice(12, state.CardList.length);
  state.inform.Set_left(state.CardList.length);
  document.querySelector("#game").innerHTML = Generate(state.TableList);
  (state.mis == 1) ? Generate_miscellaneous(state.TableList) : null;
  //Generate_miscellaneous(state.TableList);

  state.notice.Reset();

  delegate(document.querySelector("#game > table"), "click", "th", click_solo_Practice);




}



export function click_multiplayer_competitive()
{
  state.Choosed = true;
  var clickedIndex = [];

  const x = this.cellIndex;

  const y = this.parentNode.rowIndex;
  var coordinate = y * 3 + x;
  if(state.TableList[coordinate].shape != -1){
  if (changeClicked(state.TableList, coordinate)) {

    document.querySelector("#game").innerHTML = Generate(state.TableList);

    state.counter++;
    //console.log(num);
  } else {

    document.querySelector("#game").innerHTML = Generate(state.TableList);
    //state.PlayerIndex!=-1;
    delegate(document.querySelector("#game > table"), "click", "th", click_multiplayer_competitive);
    state.counter--;
    //console.log(num);
  }

  if (state.counter == 3) {
    clickedIndex = Creat_clickedIndex(state.TableList);
    state.Choosed = false;
    if (Check_three_SET(state.TableList[clickedIndex[0]], state.TableList[clickedIndex[1]], state.TableList[clickedIndex[2]])) {
      // reset try button for players;
      state.inform.Set_total_Point();
      Reset_try();
      state.PlayerList[state.PlayerIndex].addPoint();
      state.notice.Someone_win(state.PlayerList[state.PlayerIndex].name);
      state.counter = 0;
      Draw_and_replace(clickedIndex);
      CheckgameEnd_Extratable();
      if(state.EndGame ==false){
      document.querySelector("#game").innerHTML = Generate(state.TableList);}
      state.PlayerIndex = -1;
      
      
    } else {
      state.inform.Set_total_Point();
      state.notice.Someone_lose(state.PlayerList[state.PlayerIndex].name);
      state.PlayerList[state.PlayerIndex].minPoint();
      changeClicked(state.TableList, clickedIndex[0]);
      changeClicked(state.TableList, clickedIndex[1]);
      changeClicked(state.TableList, clickedIndex[2]);
      state.counter = 0;
      state.PlayerIndex = -1;
      document.querySelector("#game").innerHTML = Generate(state.TableList);
      JudgeTry_Extratable();
      document.querySelector("#game").innerHTML = Generate(state.TableList);
      
    }

  }
  if(state.counter !=0)
  {
    delegate(document.querySelector("#game > table"), "click", "th", click_multiplayer_competitive);
  }
  
}
}


function Reset_try()
{
   for(var i=0;i<state.PlayerList.length;i++)
   {
      state.PlayerList[i].ResetTry();
   }
}

