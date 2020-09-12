


$(document).ready(function() {
  $(window).keydown(function(event){
    if( (event.keyCode == 13) ) {
      event.preventDefault();
    }
  });
});

// function to dynamically getting list on adding
$(function(){
    $('#taskBtn').click(function(){
        $('#taskListSection').append('<li class="list-group-item " name="list" style = "display: inline-flex;"> ' 
        + '<input type = "radio" checked> '  
        + '<input id = "listinputCheckbox" type = "text" class = "inputlistclass"  name = "list" >'  
        + '<i class="fas fa-minus-circle deletetask"></i>' + '</li>');
        deleteTasks();
    })
});

//to delete dynamically created list
function deleteTasks(){
     $('.deletetask').click(function(){
        $(this).closest('.list-group-item').remove();
   });
}

// to delete list fected from db and displayed in ui
$(function(){
    $('.deletetask').click(function(){
       $(this).closest('.list-group-item').remove();
  });
});

//datepicker functionality
  $('.datepicker').datepicker({
    minDate:0,
    dateFormat: "dd/mm/yy",
  });



function alertFn(){
  alert("Data Updated Successfully!!");
}
function successmsgFunction(){
  alert("Data Added Successfully!!")
}

function myFunction() {
  var elem = document.getElementById("myLinks");
  if (elem.style.display === "block") {
    elem.style.display = "none";
  } else {
    elem.style.display = "flex";
  }
}


  
