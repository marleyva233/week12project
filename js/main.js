// [0]provided data
// [1]topLeft
// [2]topRight
// [3]bottomLeft
// [4]bottomRight
// [5]menu



// [0]provided data
    var user = {
        name: "Maribel Leyva Ramirez",
        image: "https://avatars2.githubusercontent.com/u/37347968?s=460&v=4",
        progress: 0.66
    }

    var courseArr = [{
            title: "Readings in World Literature",
            subject: "Social Studies"
        }, {
            title: "Theory of Numbers",
            subject: "Mathematics"
        }, {
            title: "Farsi 301",
            subject: "Languages"
        }];

    var activityArr = [{
            title: "Completed SOSC 503 Module 7 Quiz",
            subject: "Submitted for review 6/11/18 at 10:39PM"
        }, {
            title: "Commented in MATH104 Tuesday Discussion Group",
            subject: "Who wants to grab coffee to talk..."
        }, {
            title: "Enrolled in FARS301",
            subject: "Cohort begins 9/08/18"
        }];

    var accountArr = [{
            title: "Enrolled since: ",
            subject: "9/06/2017"
        }, {
            title: "Enrollment Status: ",
            subject: "Active Student"
        }, {
            title: "Department",
            subject: "Computer Science"
        }];



// [1]topLeft

//an object constructor that takes an user image, image, name and id
function userDetails(user, image, name, id){
    image.src=user.image;
    image.alt=user.name;
    name.innerText=user.name;
    id.innerText="User#: "+ Math.floor(Math.random()*1000)+1;
}

//using the object constructor to create an user
userDetails(user,document.getElementById("studentImage"), document.getElementById("studentName"), document.getElementById("studentID"));





// [2]topRight
//content for topRight div

//for the time
function leadingZero(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

function displayDate(){
    var myDate = new Date();
    //time
    var currentSs=leadingZero(myDate.getSeconds());
    var currentHr=leadingZero(myDate.getHours());
    if (currentHr>12){
        currentHr=currentHr-12;
    }
    if (currentHr<12){
        currentSs=currentSs+" pm";
    }else{
        currentSs=currentSs+" am";
    }
    //date
    var currentMin=leadingZero(myDate.getMinutes());
    var currentYear=myDate.getFullYear();
    var currentMonth=leadingZero(myDate.getMonth()+1);
    var currentDay=leadingZero(myDate.getDate());

    //display time
    var displayArea=document.getElementById("displayTime");
        displayArea.innerHTML=currentHr+":"+currentMin+":"+currentSs +" | "+ currentDay+"/"+currentMonth+"/"+currentYear;

setTimeout(function() {
    displayDate();
  }, 1000)
}
displayDate();

function studentProgress(user, progress){
progress.innerText=user.progress*100+"%";
progress.style.width=user.progress*100+"%";
}

studentProgress(user, document.getElementById("studentProgress"),(document.getElementById("studentProgress")));


// [3]bottomLeft


//[4]bottomRight
function currentTab(array, title, list, string){
    title.innerText=string;
    list.innerHTML="";
    for(var i=0; i<array.length; i++){
        list.innerHTML+="<li><h6>"+array[i].title+ "</h6><p>"+ array[i].subject+ "</p></li>"
    }
}

function courses(){
    currentTab(courseArr, document.getElementById("title"), document.getElementById("list"), "My Courses:")
}

function activity(){
    currentTab(activityArr, document.getElementById("title"), document.getElementById("list"), "My Recent Activity:")
}

function account() {
    currentTab(accountArr, document.getElementById("title"), document.getElementById("list"), "My Account:")
}

//[5]menu
//when the button is clicked the words log out and home will appear
//also the menu will expand from 10 to 20% 
function menu(){
    document.getElementById("menu").classList.toggle("menuExpand");
    document.getElementById("home").classList.toggle("whiteText");
    document.getElementById("logOut").classList.toggle("whiteText");
}

courses();