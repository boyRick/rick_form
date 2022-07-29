
$(function() {
  window.addEventListener('message', function(event) {
    if (event.data.type === "themainmenu"){
 
      $('#container').fadeIn(100);


    } else if(event.data.type === "mainmenu") {




    }
  });
});


document.onkeyup = function(data){
  if (data.which == 27){
    $('#container').fadeOut(100);
      $.post('https://rick_form/exit', JSON.stringify({}));

  }
}



// Make the DIV element draggable:
dragElement(document.getElementById("container"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





document.getElementById('yourname').value = ''
document.getElementById('contact').value = ''
document.getElementById('jobname').value = ''
document.getElementById('message').value = ''



$('#submit').click(function() {
    var name = document.getElementById('yourname')
    var number = document.getElementById('contact')
    var jobname = document.getElementById('jobname')
    var message = document.getElementById('message')

    
    if($(name).val() == "") {
        console.log("bich fill out the form")
        return
        
    }
    if($(number).val() == "") {
        console.log("bich fill out the form")
        return

    }
    if($(jobname).val() == "") {
        console.log("bich fill out the form")
        return

    }
    if($(message).val() == "") {
        console.log("bich fill out the form")
        return
    } else{

      $('#container').fadeOut(100);
      console.log("kk")

      $.post('https://rick_form/exit', JSON.stringify({}));
      $.post('https://rick_form/end', JSON.stringify({
        name: $("#yourname").val(),
        number: $("#contact").val(),
        message: $("#message").val(),
        jobname: $("#jobname").val(),
      }));
      $('#yourname').val('');  
      $('#contact').val('');  
      $('#message').val('');  
      $('#jobname').val('');  

    }  
})