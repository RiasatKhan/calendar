let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                    
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
                cell.onclick=function() {
                    let asd=document.getElementsByClassName("bg-primary")[0]
                    if(asd){
                    asd.classList.remove("bg-primary");
                }
                    cell.classList.add("bg-primary");
                    var d = String(currentYear+"-"+(currentMonth+1)+"-"+cell.textContent);
                    var date=new Date(d);
                    var weekday = new Array(7);
                    weekday[0] = "SUN";
                    weekday[1] = "MON";
                    weekday[2] = "TUE";
                    weekday[3] = "WED";
                    weekday[4] = "THU";
                    weekday[5] = "FRI";
                    weekday[6] = "SAT";
                    console.log(weekday[date.getDay()]);
                    
            }
            
           };


        }
       

        tbl.appendChild(row); // appending each row into calendar body.
    }
    /*const Http = new XMLHttpRequest();
    const url='http://localhost/booking_system/time_slots/read.php';
    Http.open("GET", url,true);
    Http.send();
    Http.onreadystatechange=(e)=>{
        var myObj = JSON.parse(Http.responseText);
        //var myArr = myObj.records;
        //document.getElementById("demo").innerHTML = myArr[0];
    console.log(Http.responseText)
    }*/
    //const url='http://localhost/booking_system/time_slots/read.php';
    const url='https://randomuser.me/api/?results=10';
    fetch(url)
    .then(function(data){
        let authors = data.results; // Get the results
    return authors.map(function(author){
            let demo=document.getElementById("demo");
            demo.innerHTML=author.name.first;
            console.log(author.name.first);
        })
    })
    .catch(function(error){
        console.log(error);
    })


    

}