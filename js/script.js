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

    function isFormValid2(){  
            let isValid = false;
            if ($("#q2").val() == "Black" || "Red" ) {
            isValid = true; 
            $("#validationFdbk").html("Wrong color");
            }
            return isValid;
   }
   
  
    
    var score = 0; 
     function rightAnswer(index){
                    $(`#q${index}Feedback`).html("Correct!");
                    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
                    $(`#markImg${index}`).html("<img src ='img/checkmark.png' alt='checkmark'>");
                    score += 12.5;   
                }
    
    
    
    
    function gradeQuiz() {
         $("validationFdbk").html("");
                
                if(!isFormValid()){
                    return; 
                }
                if(!isFormValid2()){
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
       
       
       
       
       
       
            
     