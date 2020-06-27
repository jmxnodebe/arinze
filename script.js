var objpeople =[
    {
        username : "patrick",
        password : "kaveli"
    },
    {
        username : "max",
        password : "jmxnodi"
    },
    {
        username : "ikenna",
        password : "okolo"
    },
    {
        username : "zoro",
        password: "stubborn"
    }
    ]
    
    
    function getinfo(){
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
    for (i = 0; i < objpeople.length; i++){
        if(username == objpeople[i].username && password == objpeople[i].password)
        {
            alert("Welcome "+username + " .You are logged in.");
            document.location = "welcome.html"
            return 
            
        }
    }
    
        alert("Incorect Username and Password")
    
    
    }
    
    //function signupinfo(){
      //  var Username = document.getElementById("loginusername").value
        
        //alert("You account has been created "  + Username);
    //}
    
    function myFunction() {
    
        var signuppassword = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmpassword").value;
            if (signuppassword != confirmPassword) {
                alert("Passwords do not match.");
    
            }
    
       else{
            var Username = document.getElementById("loginusername").value
        
        alert("You account has been created "  + Username);
        //location.replace("https://www.w3schools.com")  
        }
    
        
    
       
    
      
       
      }