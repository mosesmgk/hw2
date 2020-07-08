/* global $ */
      
       $(document).ready(function() {
         
         //listener
         $("button").on("click", gradeQuiz);
           

        //functions
   function isFormValid(){
            let isValid = true; 
            if ($("#q1").val() == "" ) {
            isValid = false; 
            $("#validationFdbk").html("Enter Your Name to Play");
            }
            return isValid;
            
   }      
/*
    function isFormValid2(){  
            let isValid = false;
            if ($("#q2").val() == "Black" || "Red" ) {
            isValid = true; 
            $("#validationFdbk").html("Wrong color");
            }
            return isValid;
   }
   
 */
    
    function gradeQuiz() {
         $("validationFdbk").html("");
                
                if(!isFormValid()){
                    return; 
                }
                
                
    
    
       var array=["Won", "Lost"];
    $('#button').bind('click', function() {

        var random = array[Math.floor(Math.random() * array.length)];
        $("h1").html(random);
    
    });   
    
    }    
     /*  global location */   
     $(".play-again").on("click", function(){
            location.reload();
        });    
});
       
       
       
       
       
       
            
     