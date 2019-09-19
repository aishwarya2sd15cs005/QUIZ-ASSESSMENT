function validateForm()
{
var o1 = document.getElementById('a');
var o2 = document.getElementById('b');
var o3 = document.getElementById('c');
var o4 = document.getElementById('d');

if ( (o1.checked == false ) && (o2.checked == false )  && (o3.checked == false ) && (o4.checked == false ) )
{
alert ( "please select" );
return false;
}
else
	return true;
}

function getchecked(){
	var o1 = document.getElementById('a');
	var o2 = document.getElementById('b'); 
	var o3 = document.getElementById('c');
	var o4 = document.getElementById('d');
  
	if(o1.checked){
		 return (document.getElementById("option1").id);
	}
	else if(o2.checked){
		return (document.getElementById("option2").id);
	}
	else if(o3.checked){
		 return (document.getElementById("option3").id);
	}
	else
		 return (document.getElementById("option4").id);
}

var fetchjson= function(q){
	fetch('assess.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
             
                document.getElementById("question").innerHTML=data[q].question;
                document.getElementById("option1").innerHTML=data[q].options[0];
                document.getElementById("option2").innerHTML=data[q].options[1];
                document.getElementById("option3").innerHTML=data[q].options[2];
                document.getElementById("option4").innerHTML=data[q].options[3];
                result=data[q].result;
             })
;
}

function setcookie(id)  
{  
    var info=getchecked();
     document.cookie= id+ " =" + info;  
     alert(document.cookie);
}  

function getcookie(qnum) {
	  var name = qnum + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ans = decodedCookie.split(';');
	  for(var i = 0; i <ans.length; i++) {
	    var a = ans[i];
	    while (a.charAt(0) == ' ') {
	      a = a.substring(1);
	    }
	    if (a.indexOf(name) == 0) {
	      return a.substring(name.length, a.length);
	    }
	  }
	  return "";
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

 function finalScore() {
    var score = 0;
    readTextFile("assess.json", function(text){
    var data = JSON.parse(text);
    //alert(getcookie(text));
    for (var x in data)  {
         if ( data[x].result == getcookie(x) ) {
            score ++;
         }
        
      }
   // alert("the final score is " + score);
    //document.write("the final score is " + score);
    var para = document.createElement("h1");               // Create a <h1> element
    para.innerText = "the final score is " + score;               // Insert text
    document.body.appendChild(para);                      // Append <p> to <body>

    }); 
 }
