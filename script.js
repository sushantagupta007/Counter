const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(weekdays)


const giveaway = document.querySelector('.giveaway'); 
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

const futureDate = new Date(2021, 6, 1, 21, 0, 0)
console.log(futureDate.toLocaleString());

const year = futureDate.getFullYear(); 
let month = futureDate.getMonth();
const day = futureDate.getDay(); 
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const second = futureDate.getSeconds();
const date = futureDate.getDate();
console.log(date);
month= months[month];
weekday = weekdays[day]


giveaway.textContent=`starts on ${weekday} ${date} ${month} ${year} ${hour}:${minute} pm`;


//Future Time in MiliSecons

const futureTime = futureDate.getTime();



// Function to get remaining time
function getRemainingTime(){
    const today = new Date().getTime();
    const timeDifference = futureTime-today;
    

    //values in milisecons

    const oneDay_To_MS = 24*60*60*1000;
    const oneHour_To_MS=60*60*1000;
    const oneMinute_To_MS= 60*1000;

    //Calculalte All Values
    let day = Math.floor( timeDifference/oneDay_To_MS);
    let hou = Math.floor( timeDifference % oneDay_To_MS / oneHour_To_MS); // calculate how hours are left
    let min = Math.floor( timeDifference % oneHour_To_MS / oneMinute_To_MS); //calculate how minues are left
    let sec = Math.floor( timeDifference % oneMinute_To_MS / 1000); // calculate how seconds are left
    
    // values Array 
     const timeValues = [day,hou,min,sec]; 
     
     function format(item){
         if(item<10){
             return item = `0${item}`
         }
         else{
            return item;
         }
     }

     items.forEach((item,index)=>{
        item.innerHTML= format(timeValues[index]); 
    

    })

    if(timeDifference<0){
        clearInterval(coutdown);
        deadline.innerHTML= `<h4 class='expired'> Sorry, this time has expired</h4>`
    }
         
}

let coutdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

  //const months = Array.from([1,2,3,4,5,6,7,8,9,10,11,12], (item, i) => {
    //return new Date(0, i).toLocaleString('en-US', {month: 'long'})
  //});
  
  // With out i

//   const da = Array.from({length:7}, (item, i) => {
//   return new Date(0, i).toLocaleString('en-US', {weekday: 'long'})
//     });
// console.log(da); 
