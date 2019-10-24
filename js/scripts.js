$(document).ready(function(){
  $("form#insurance").submit(function(event){
    var age = parseInt($("#age").val());
    var gender = $("#gender").val();

    var result = (200 - age) * 10;

    function show(x) {
      if (x === 'Male') {
        result += 100;
      }
      else if(x === 'Female') {
        return result;
      } else {
        alert('enter a number');
      }
    };
    
    show(gender);

    $(".cost").empty().append(result);
    $("#quote").show();

    event.preventDefault();

  });
});
