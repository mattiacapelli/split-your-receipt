var percentage;
var total;
var numpeople;

function getPercentage(value)
{
    percentage = value;
    console.log("Percentage: " + percentage);
}

function getTotal(value)
{
    total = document.getElementById('total').value;
    console.log("Total: " + total);
}

function getNumPeople(value)
{
    numpeople = document.getElementById('numpeople').value;
    console.log("Number of People: " + numpeople);
}

function calculate() {
    if(percentage == null || total == null || numpeople == null || percentage == "" || total == "" || numpeople == "" || percentage <= 0 || total <= 0 || numpeople <= 0) 
    {
        alert("Please enter correct values");
    }
    else
    {
        var tip = (total / 100) * percentage;
        var totalPerPerson = (Number(total) + tip) / numpeople;

        console.log("Tip: " + tip);
        console.log("Total Per Person: " + totalPerPerson);
        document.getElementById('input').style.display = "none";
        document.getElementById('output').style.display = "block";
        document.getElementById('result').innerHTML = totalPerPerson.toFixed(2) + " €";
    }
}

function returnback() {
    document.getElementById('input').style.display = "block";
    document.getElementById('output').style.display = "none";

    document.getElementById('total').value = "";
    document.getElementById('numpeople').value = "";
    percentage = null;
    total = null;
    numpeople = null;
}

function activate(id) {
    var element1 = document.getElementById('no');
    var element2 = document.getElementById('5');
    var element3 = document.getElementById('10');
    var element4 = document.getElementById('15');
    var element5 = document.getElementById('20');
    var element6 = document.getElementById('25');

    switch (id) {
        case 'no':
            element1.classList.add("active");
            element2.classList.remove("active");
            element3.classList.remove("active");
            element4.classList.remove("active");
            element5.classList.remove("active");
            element6.classList.remove("active");
            break;
        
        case '5':
            element1.classList.remove("active");
            element2.classList.add("active");
            element3.classList.remove("active");
            element4.classList.remove("active");
            element5.classList.remove("active");
            element6.classList.remove("active");
            break;

        case '10':
            element1.classList.remove("active");
            element2.classList.remove("active");
            element3.classList.add("active");
            element4.classList.remove("active");
            element5.classList.remove("active");
            element6.classList.remove("active");
            break;
        
        case '15':
            element1.classList.remove("active");
            element2.classList.remove("active");
            element3.classList.remove("active");
            element4.classList.add("active");
            element5.classList.remove("active");
            element6.classList.remove("active");
            break;

        case '20':
            element1.classList.remove("active");
            element2.classList.remove("active");
            element3.classList.remove("active");
            element4.classList.remove("active");
            element5.classList.add("active");
            element6.classList.remove("active");
            break;

        case '25':
            element1.classList.remove("active");
            element2.classList.remove("active");
            element3.classList.remove("active");
            element4.classList.remove("active");
            element5.classList.remove("active");
            element6.classList.add("active");
            break;

        default:
            console.log("Error");
            break;

    }
}