
//Get elements by id from index
var dateEl = document.getElementById('date-article');
var weekdayEl = document.getElementById('weekday-article');
var courseEl = document.getElementById('course-list');

//get todays date
const newDate = new Date();
//Variables for year, month, date, hour, minute, second
const year = newDate.getFullYear();
const month = newDate.getMonth() +1; //Months are zero indexed, add 1 to get right month
const date = newDate.getDate();
const hour = newDate.getHours();
const minute = newDate.getMinutes();
const seconds = newDate.getSeconds();
const twoNumMonth = month < 10 ? `0${month}` : month; //If month less than 10, add 0 berfore
const twoNumDate = date < 10 ?  `0${date}` : date; //If date less than 10, add 0 berfore 
const twoNumHour = hour < 10 ?  `0${hour}` : hour; //If hour less than 10, add 0 berfore 
const twoNumSec = seconds < 10?  `0${seconds}` :seconds; //If seconds less than 10, add 0 berfore 
const twoNumMin = minute < 10 ? `0${minute}` : minute; //If min less than 10, add 0 berfore

const fullDateTime = `${year}-${(twoNumMonth)}-${twoNumDate} ${twoNumHour}:${twoNumMin}:${twoNumSec}`; //get full date and time right now



const weekDay = newDate.toLocaleDateString('sv-SE', {weekday: 'long'}) //Konvert to readable string

//Write date and time with innnerhtml
function writeTodaysDateAndWeekDay(){
    dateEl.innerHTML+= `<p><strong>Datum/klockslag:</strong> ${fullDateTime}</p>`;
}
//Function init when page load, call functions to write date,time, courses and check weekday
function init(){
    window.onload=writeTodaysDateAndWeekDay;
    checkWeekDay();
    writeCourses();
}
//Init
init();
//Check weekday
function checkWeekDay(){
    //If monday, write today is monday
    if(weekDay==="måndag"){
        weekdayEl.innerHTML+=`<p><strong>Idag är det måndag</strong></p>`
    } else { //if not monday write not monday and todays weekday
        weekdayEl.innerHTML+= `<p>Idag är det inte måndag! Det är ${weekDay}!</p>`
    }
}
//Write courses 
function writeCourses(){
    //Array courses
    const courses = ["DT057G, Webbutveckling I", "DT084G, Introduktion till programmering i JavaScript", "DT068G, Webbanvändbarhet", "DT200G, Grafisk teknik för webb", "DT093G, Webbutveckling II", "DT003G, Databaser", "DT173G, Webbutveckling III", "DT173G, Webbutveckling för CMS", "DT193G, Fullstack-utveckling med ramverk", "IK060G, Projektledning", "DT071G, Programmering i C#.NET", "DT162G, JavaScriptbaserad webbutveckling", "DT191G, Webbutveckling med .NET", "IG021G, Affärsplaner och kommersialisering"];
    //Loop as long as there are data left in loop
    for(let i=0; i<courses.length; i++){
        //Write courses to course-list el
       courseEl.innerHTML += "<li>" + courses[i] + "</li>";
    }
}