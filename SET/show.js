import { state } from "./main.js";

export function Generate(TableList)
{
    var cont = 0;
    var html = '';
    html = html+'<table border="1">\n';
    for (var i = 0; i < TableList.length/3;i++)
    {
        html += '<tr>\n';
        for (var j = 0 ; j < 3;j++)
        {
            if( TableList[cont].Clicked == true)
            {
                html += `<th id="${cont}" bgcolor="red"> <img src="./${TableList[cont].url}"/> \n`;
                cont++;
               
            }else if(TableList[cont].hint== true)
            {
                html += `<th id="${cont}" bgcolor="blue"> <img src="./${TableList[cont].url}"/> \n`;
                cont++;
            }else
            {
                html += `<th id="${cont}" > <img src="./${TableList[cont].url}"/> \n`;
                cont++;
            }
        }
        html += '</tr>\n';
    }

    html += '</table>'

    return html;
}


export class Announcement
{
   
    Someone_win(name)
    {
        document.querySelector("#Announcement").innerHTML = `<p>${name} found a SET! 🎈</p>`;
    }
    Someone_lose(name)
    {
        document.querySelector("#Announcement").innerHTML = `<p>${name} choice wrong! 😣</p>`;
    }
    Reset()
    {
        document.querySelector("#Announcement").innerHTML = "<p>Game running</p>";
    }
}

export class Information
{
    constructor(cardnumber)
    {
        this.cardnumber = cardnumber;
    }
    Set_left(num)
    {
        this.cardnumber = num;
        document.querySelector("#Game_Information").innerHTML = `<p>🃏${this.cardnumber} cards left </p>`
        //document.querySelector("#Game_Information").innerHTML += `Total point ${state.Point}`;
        
       
    }
    Set_total_Point()
    {
            state.Point = 0;
            var table = document.querySelector("#Player_information > div > table");
           
            for(var i=0;i<state.PlayerList.length;i++)
            {
                var tmp  = (table.rows[i].cells[1].innerHTML).split(" ");
                state.Point = parseInt(tmp[1]) + state.Point;
            }
         
            document.querySelector("#TotalPoint").innerHTML = `Total point ${state.Point}`;
           
    }
    Cardleft()
    {
        return this.cardnumber;
    }

}