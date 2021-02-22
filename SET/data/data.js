const SHAPE = {
    oval:1,
    squiggle:2,
    diamond:3,
    white:-1

};
Object.freeze(SHAPE);

const COLOR ={
    red:1,
    green:2,
    purlple:3,
    white:-1
};
Object.freeze(COLOR);

const NUMBER={
    one:1,
    two:2,
    three:3,
    white:-1
};
Object.freeze(NUMBER);

const SHADING = {
    solid:1,
    striped:2,
    outlined:3,
    white:-1
};
Object.freeze(SHADING);

class Card {
    constructor(name, shape, color, number, shading,url) {
        this.name = name;
        this.shape = shape;
        this.color = color;
        this.number = number;
        this.shading = shading;
        this.url = url;

    }
    Clicked = false;
    hint = false
}

const one = new Card("one",SHAPE.diamond,COLOR.red,NUMBER.one,SHADING.outlined,"data/1.jpg");
const two = new Card("two",SHAPE.diamond,COLOR.red,NUMBER.two,SHADING.outlined,"data/2.jpg");
const three = new Card("three",SHAPE.diamond,COLOR.red,NUMBER.three,SHADING.outlined,"data/3.jpg");
const four = new Card("four",SHAPE.oval,COLOR.red,NUMBER.one,SHADING.outlined,"data/4.jpg");
const five = new Card("five",SHAPE.oval,COLOR.red,NUMBER.two,SHADING.outlined,"data/5.jpg");
const six = new Card("six",SHAPE.oval,COLOR.red,NUMBER.three,SHADING.outlined,"data/6.jpg");
const seven = new Card("seven",SHAPE.squiggle,COLOR.red,NUMBER.one,SHADING.outlined,"data/7.jpg");
const eight = new Card("eight",SHAPE.squiggle,COLOR.red,NUMBER.two,SHADING.outlined,"data/8.jpg");
const nine = new Card("nine",SHAPE.squiggle,COLOR.red,NUMBER.three,SHADING.outlined,"data/9.jpg");
const ten = new Card("ten",SHAPE.diamond,COLOR.red,NUMBER.one,SHADING.striped,"data/10.jpg");
const eleven = new Card("eleven",SHAPE.diamond,COLOR.red,NUMBER.two,SHADING.striped,"data/11.jpg");
const twelve = new Card("twelve",SHAPE.diamond,COLOR.red,NUMBER.three,SHADING.striped,"data/12.jpg");
const thirteen = new Card("thirteen",SHAPE.oval,COLOR.red,NUMBER.one,SHADING.striped,"data/13.jpg");
const fourteen = new Card("fourteen",SHAPE.oval,COLOR.red,NUMBER.two,SHADING.striped,"data/14.jpg");
const fifteen = new Card("fifteen",SHAPE.oval,COLOR.red,NUMBER.three,SHADING.striped,"data/15.jpg");
const sixteen = new Card("sixteen",SHAPE.squiggle,COLOR.red,NUMBER.one,SHADING.striped,"data/16.jpg");
const seventeen = new Card("seventeen",SHAPE.squiggle,COLOR.red,NUMBER.two,SHADING.striped,"data/17.jpg");
const eighteen = new Card("sixteen",SHAPE.squiggle,COLOR.red,NUMBER.three,SHADING.striped,"data/18.jpg");
const ninteen = new Card("ninteen",SHAPE.diamond,COLOR.red,NUMBER.one,SHADING.solid,"data/19.jpg");
const twenty = new Card("twenty",SHAPE.diamond,COLOR.red,NUMBER.two,SHADING.solid,"data/20.jpg");
const twenty_one = new Card("twenty_one",SHAPE.diamond,COLOR.red,NUMBER.three,SHADING.solid,"data/21.jpg");
const twenty_two = new Card("twenty_two",SHAPE.oval,COLOR.red,NUMBER.one,SHADING.solid,"data/22.jpg");
const twenty_three = new Card("twenty_three",SHAPE.oval,COLOR.red,NUMBER.two,SHADING.solid,"data/23.jpg");
const twenty_four = new Card("twenty_four",SHAPE.oval,COLOR.red,NUMBER.three,SHADING.solid,"data/24.jpg");
const twenty_five = new Card("twenty_five",SHAPE.squiggle,COLOR.red,NUMBER.one,SHADING.solid,"data/25.jpg");
const twenty_six = new Card("twenty_six",SHAPE.squiggle,COLOR.red,NUMBER.two,SHADING.solid,"data/26.jpg");
const twenty_seven = new Card("twenty_seven",SHAPE.squiggle,COLOR.red,NUMBER.three,SHADING.solid,"data/27.jpg");
const twenty_eight = new Card("twenty_five",SHAPE.diamond,COLOR.green,NUMBER.one,SHADING.outlined,"data/28.jpg");
const twenty_nine = new Card("twenty_nine",SHAPE.diamond,COLOR.green,NUMBER.two,SHADING.outlined,"data/29.jpg");
const thirty = new Card("thirty",SHAPE.diamond,COLOR.green,NUMBER.three,SHADING.outlined,"data/30.jpg");
const thirty_one = new Card("thirty_one",SHAPE.oval,COLOR.green,NUMBER.one,SHADING.outlined,"data/31.jpg");
const thirty_two = new Card("thirty_two",SHAPE.oval,COLOR.green,NUMBER.two,SHADING.outlined,"data/32.jpg");
const thirty_three = new Card("thirty_three",SHAPE.oval,COLOR.green,NUMBER.three,SHADING.outlined,"data/33.jpg");
const thirty_four = new Card("thirty_four",SHAPE.squiggle,COLOR.green,NUMBER.one,SHADING.outlined,"data/34.jpg");
const thirty_five = new Card("thirty_five",SHAPE.squiggle,COLOR.green,NUMBER.two,SHADING.outlined,"data/35.jpg");
const thirty_six = new Card("thirty_six",SHAPE.squiggle,COLOR.green,NUMBER.three,SHADING.outlined,"data/36.jpg");
const thirty_seven = new Card("thirty_seven",SHAPE.diamond,COLOR.green,NUMBER.one,SHADING.striped,"data/37.jpg");
const thirty_eight = new Card("thirty_eight",SHAPE.diamond,COLOR.green,NUMBER.two,SHADING.striped,"data/38.jpg");
const thirty_nine = new Card("thirty_nine",SHAPE.diamond,COLOR.green,NUMBER.three,SHADING.striped,"data/39.jpg");
const forty = new Card("forty",SHAPE.oval,COLOR.green,NUMBER.one,SHADING.striped,"data/40.jpg");
const forty_one = new Card("forty_one",SHAPE.oval,COLOR.green,NUMBER.two,SHADING.striped,"data/41.jpg");
const forty_two = new Card("forty_two",SHAPE.oval,COLOR.green,NUMBER.three,SHADING.striped,"data/42.jpg");
const forty_three = new Card("forty_three",SHAPE.squiggle,COLOR.green,NUMBER.one,SHADING.striped,"data/43.jpg");
const forty_four = new Card("forty_four",SHAPE.squiggle,COLOR.green,NUMBER.two,SHADING.striped,"data/44.jpg");
const forty_five = new Card("forty_three",SHAPE.squiggle,COLOR.green,NUMBER.three,SHADING.striped,"data/45.jpg");
const forty_six = new Card("forty_six",SHAPE.diamond,COLOR.green,NUMBER.one,SHADING.solid,"data/46.jpg");
const forty_seven = new Card("forty_seven",SHAPE.diamond,COLOR.green,NUMBER.two,SHADING.solid,"data/47.jpg");
const forty_eight = new Card("forty_eight",SHAPE.diamond,COLOR.green,NUMBER.three,SHADING.solid,"data/48.jpg");
const forty_nine = new Card("forty_nine",SHAPE.oval,COLOR.green,NUMBER.one,SHADING.solid,"data/49.jpg");
const fifty = new Card("fifty",SHAPE.oval,COLOR.green,NUMBER.two,SHADING.solid,"data/50.jpg");
const fifty_one = new Card("fifty_one",SHAPE.oval,COLOR.green,NUMBER.three,SHADING.solid,"data/51.jpg");
const fifty_two = new Card("fifty_two",SHAPE.squiggle,COLOR.green,NUMBER.one,SHADING.solid,"data/52.jpg");
const fifty_three = new Card("fifty_three",SHAPE.squiggle,COLOR.green,NUMBER.two,SHADING.solid,"data/53.jpg");
const fifty_four = new Card("fifty_four",SHAPE.squiggle,COLOR.green,NUMBER.three,SHADING.solid,"data/54.jpg");
const fifty_five = new Card("fifty_five",SHAPE.diamond,COLOR.purlple,NUMBER.one,SHADING.outlined,"data/55.jpg");
const fifty_six = new Card("fifty_six",SHAPE.diamond,COLOR.purlple,NUMBER.two,SHADING.outlined,"data/56.jpg");
const fifty_seven = new Card("fifty_seven",SHAPE.diamond,COLOR.purlple,NUMBER.three,SHADING.outlined,"data/57.jpg");
const fifty_eight = new Card("fifty_eight",SHAPE.oval,COLOR.purlple,NUMBER.one,SHADING.outlined,"data/58.jpg");
const fifty_nine = new Card("fifty_nine",SHAPE.oval,COLOR.purlple,NUMBER.two,SHADING.outlined,"data/59.jpg");
const sixty = new Card("sixty",SHAPE.oval,COLOR.purlple,NUMBER.three,SHADING.outlined,"data/60.jpg");
const sixty_one = new Card("sixty",SHAPE.squiggle,COLOR.purlple,NUMBER.one,SHADING.outlined,"data/61.jpg");
const sixty_two = new Card("sixty_two",SHAPE.squiggle,COLOR.purlple,NUMBER.two,SHADING.outlined,"data/62.jpg");
const sixty_three = new Card("sixty_three",SHAPE.squiggle,COLOR.purlple,NUMBER.three,SHADING.outlined,"data/63.jpg");
const sixty_four = new Card("sixty_four",SHAPE.diamond,COLOR.purlple,NUMBER.one,SHADING.striped,"data/64.jpg");
const sixty_five = new Card("sixty_five",SHAPE.diamond,COLOR.purlple,NUMBER.two,SHADING.striped,"data/65.jpg");
const sixty_six = new Card("sixty_six",SHAPE.diamond,COLOR.purlple,NUMBER.three,SHADING.striped,"data/66.jpg");
const sixty_seven = new Card("sixty_seven",SHAPE.oval,COLOR.purlple,NUMBER.one,SHADING.striped,"data/67.jpg");
const sixty_eight = new Card("sixty_eight",SHAPE.oval,COLOR.purlple,NUMBER.two,SHADING.striped,"data/68.jpg");
const sixty_nine = new Card("sixty_nine",SHAPE.oval,COLOR.purlple,NUMBER.three,SHADING.striped,"data/69.jpg");
const seventy = new Card("seventy",SHAPE.squiggle,COLOR.purlple,NUMBER.one,SHADING.striped,"data/70.jpg");
const seventy_one = new Card("seventy_one",SHAPE.squiggle,COLOR.purlple,NUMBER.two,SHADING.striped,"data/71.jpg");
const seventy_two = new Card("seventy_two",SHAPE.squiggle,COLOR.purlple,NUMBER.three,SHADING.striped,"data/72.jpg");
const seventy_three = new Card("seventy_three",SHAPE.diamond,COLOR.purlple,NUMBER.one,SHADING.solid,"data/73.jpg");
const seventy_four = new Card("seventy_four",SHAPE.diamond,COLOR.purlple,NUMBER.two,SHADING.solid,"data/74.jpg");
const seventy_five = new Card("seventy_five",SHAPE.diamond,COLOR.purlple,NUMBER.three,SHADING.solid,"data/75.jpg");
const seventy_six = new Card("seventy_six",SHAPE.oval,COLOR.purlple,NUMBER.one,SHADING.solid,"data/76.jpg");
const seventy_seven = new Card("seventy_seven",SHAPE.oval,COLOR.purlple,NUMBER.two,SHADING.solid,"data/77.jpg");
const seventy_eight = new Card("seventy_eight",SHAPE.oval,COLOR.purlple,NUMBER.three,SHADING.solid,"data/78.jpg");
const seventy_nine = new Card("seventy_seven",SHAPE.squiggle,COLOR.purlple,NUMBER.one,SHADING.solid,"data/79.jpg");
const eighty = new Card("eighty",SHAPE.squiggle,COLOR.purlple,NUMBER.two,SHADING.solid,"data/80.jpg");
const eighty_one = new Card("eighty_one",SHAPE.squiggle,COLOR.purlple,NUMBER.three,SHADING.solid,"data/81.jpg");
const white = new Card("white",SHAPE.white,COLOR.white,NUMBER.white,SHADING.white,"data/0.jpg");

export {white as white}

const difficulty = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,ninteen,twenty,twenty_one,twenty_two,
twenty_three,twenty_four,twenty_five,twenty_six,twenty_seven,twenty_eight,twenty_nine,thirty,thirty_one,thirty_two,thirty_three,thirty_four,thirty_five,thirty_six,thirty_seven,thirty_eight,thirty_nine,forty,
forty_one,forty_two,forty_three,forty_four,forty_five,forty_six,forty_seven,forty_eight,forty_nine,fifty,fifty_one,fifty_two,fifty_three,fifty_four,fifty_five,fifty_six,fifty_seven,fifty_eight,fifty_nine,
sixty,sixty_one,sixty_two,sixty_three,sixty_four,sixty_five,sixty_six,sixty_seven,sixty_eight,sixty_nine,seventy,seventy_one,seventy_two,seventy_three,seventy_four,seventy_five,seventy_six,seventy_seven,
seventy_eight,seventy_nine,eighty,eighty_one];


const starter = [];
for(var i=0;i<difficulty.length;i++)
{
    if(difficulty[i].shading == 1 )
    {
        starter.push(difficulty[i]);
    }
} 

export{starter as starter};

export {difficulty as difficulty};


export function get_array(n)
{
    var numberarray = [];
   
    for(var i=0;i<n;i++)
    {
        do
        {
            var isfound = false;
            var tmp = Math.floor(Math.random()*(n));
            for(var j=0;j<numberarray.length;j++)
            {
                if(numberarray[j] == tmp)
                {
                    isfound = true;
                }
            }
        }while(isfound == true);
        if(isfound == false )
        {
            numberarray[i] = tmp;
        }
    }
    return numberarray;

}

export function GenerateList(numberarray,array)
{
    var CardList = [];
    for (var i=0;i<numberarray.length;i++)
    {
        CardList[i] = array[numberarray[i]];
    }
    return CardList;
}


export function GenerateTable(CardList)
{
    var TableList=[];
    for (var i=0;i<12;i++)
    {
        TableList[i] = CardList[i];
    }
    return TableList;

}



