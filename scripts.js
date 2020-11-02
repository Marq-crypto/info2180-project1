/* Add your JavaScript to this file */


window.onload= ()=>{
    var p=document.getElementById("email");
    let b=document.getElementsByClassName("message");
    let o=document.getElementsByTagName("button")[0];
    const entry =(r) => {
        r.preventDefault();
        if(p.value===""||p.value==null){
            alert("Valid Email addresses only!");
            return false;
        }else{
            displayemail();
            return true
        }
    }
    o.addEventListener("click",entry);
    function displayemail(){
        if(p!=null){
            alert("Thank you!Your email address"+ "" + p.value + "" + "has been added to our mailing list!");
    
        }
    }

}



    
    

   
   
