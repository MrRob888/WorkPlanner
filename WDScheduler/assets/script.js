var timeDisplayEl = $("#time-display");
var block = $("#timeblocks")
var table = $(".table-contaner")
var savebtn = $(".saveBtn")
var task = $("#900").val();

// Display Time
setInterval (function () {
    timeDisplayEl.text(moment().format('DD [at] hh:mm:ss a')) 
}, 1000);

// local storage of items
// localStorage.getItem('task', JSON.stringify(task));

// function save() {
//     if (localStorage.getItem("task") == null){
//         if (localStorage.setItem("task", JSON.stringify(task)));
//     }
// }
// console.log (localStorage)

// savebtn.attr("data-hour" , i)

// $("table").on("click", ".saveBtn", function (event) {
//     event.preventdefault();
//     var saveClicked = $(event.target);
//     console.log (saveClicked.attr("data-hour"));
//     saveClicked.parent("tr").val();
// })

// change the background of the planner
//     if (hour > timeDisplayEl){
//         append.class(".future")
//     } else if (hour < timeDisplayEl){
//         append.class(".past")
//     }else{
//         append.class(".present")
//     }

