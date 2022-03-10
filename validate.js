

function validateinput(){
    // const quest1 = new question1("How many letters are there in 'Hello' ?", [1, 2, 5], 2);

    let points = 0;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    var radiobuttons = document.getElementsByName("q1");
    var checkboxes = document.getElementsByName("q2");
    let q3 = document.getElementById("question3").value;

    if(!/^[a-öA-Ö]+$/.test(firstname) || (!/^[a-öA-Ö]+$/.test(lastname))){
        alert("incorrect first or lastname");
        return;
    }
    if(!/[a-ö0-9]+@[a-ö]+\.[a-ö]{2,3}/.test(email)){      
        alert("incorrect email");
        return;
    }
    let selectedradio = 0;
    
    for(var i = 0; i<radiobuttons.length; i++){
        if(radiobuttons[i].checked){
            
            selectedradio = radiobuttons[i].value;
        }
    }
    if(selectedradio == 0){
        alert("Please select a button on question 1");
        return;
    }
    if(selectedradio == 5){
        points++;
    }

    var checkboxchecked = [];
    for(var i = 0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            
            checkboxchecked.push(checkboxes[i]);
        }
    }
   
    if(checkboxchecked.length == 0){
        alert("please select one or more checkbox on question 2");
        return;
    }else if(checkboxchecked.length == 1 && checkboxchecked[0].value == 7){
        
        points++;
    }

    if(q3.length == 0){
        alert("please answer the last question");
        return;
    }else if(q3.toLowerCase() == "stockholm"){
        points++;
    }
    alert(points)
}




