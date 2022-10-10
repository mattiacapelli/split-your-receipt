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
    if(percentage == null || total == null || numpeople == null || percentage == "" || total == "" || numpeople == "") 
    {
        alert("Please enter all values");
    }
    else
    {
        var tip = (total / 100) * percentage;
        var totalPerPerson = (Number(total) + tip) / numpeople;

        console.log("Tip: " + tip);
        console.log("Total Per Person: " + totalPerPerson);
    }
}