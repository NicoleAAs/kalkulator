
function calculate(val, currency){
    return (val* currency).toFixed(3);
    //tofixed 3 märki peale komat
}


function radiochange(event){
    var vastus=document.getElementById("vastus");
    var kogus=document.getElementById("kogus");
    var pilt=document.getElementById("kogus");


    const dollar=1.16;
    const kroon=10.65;
    const rub=84.20;
    const frank=1.077;


    if(event.target.id=="dollar"){
        vastus.innerHTML=calculate(kogus.value, dollar) + "$"
        pilt.src="dollar/jpg";
    }
    else if(event.target.id=="rub"){
        vastus.innerHTML=calculate(kogus.value, rub) + "₽"
        pilt.src="rubli/jpg";
    }
    else if(event.target.id=="frank"){
        vastus.innerHTML=calculate(kogus.value, frank) + "CHP";
        pilt.src="dollar/jpg";
    }
    else if(event.target.id=="kroon"){
        vastus.innerHTML=calculate(kogus.value, kroon) + "SEK";
        pilt.src="dollar/jpg";
    }

}


function selectOptionchange(event){
    var vastus2=document.getElementById("vastus2");
    var kogus2=document.getElementById("kogus2");

    const dollar=1.16;
    const kroon=10.65;
    const rub=84.20;
    const frank=1.077;

    var inputValue=kogus2.value;

    if(event.target.value=="dollar"){
        vastus2.innerHTML=calculate(kogus2.value, dollar) + "$";
    }
    else if(event.target.value=="rub"){
        vastus2.innerHTML=calculate(kogus2.value, rub) + "₽";
    }
    else if(event.target.value=="frank"){
        vastus2.innerHTML=calculate(kogus2.value, frank) + "CHP";
    }
    else if(event.target.value=="kroon"){
        vastus2.innerHTML=calculate(kogus2.value, kroon) + "SEK";
    }
}




function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Sisetsa kogus");
        return false;
    }
}

function inputValutaText(){
    var vastus3=document.getElementById("vastus3");


    const dollar=1.16;
    const kroon=10.65;
    const rub=84.20;
    const frank=1.077;

    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if (inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + "$";
    }
    else if (inputText=="kroon"){
        vastus3.innerHTML=calculate(inputValue, kroon) + "SEK";
    }
    else if (inputText=="frank"){
        vastus3.innerHTML=calculate(inputValue, frank) + "CHP";
    }
    else if (inputText=="rub"){
        vastus3.innerHTML=calculate(inputValue, rub) + "₽";
    }


}






function resultati(val)
{
    document.getElementById("result").value+=val;
}

// функция показывает цифру и возвращает результат
function rovno()
{
    let x = document.getElementById("result").value
    //eval() используется для вычисления значения арифметического выражения
    let y = eval(x)
    document.getElementById("result").value = y
}

//функция, которая очищает все
function clear()
{
    document.getElementById("result").value = "";
}
