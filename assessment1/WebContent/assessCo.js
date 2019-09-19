var fetchjson= function(q){
	fetch('assess.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
                console.log(data[q]);
                document.getElementById("question").innerHTML=data[q].question;
                document.getElementById("option1").innerHTML=data[q].options[0];
                document.getElementById("option2").innerHTML=data[q].options[1];
                document.getElementById("option3").innerHTML=data[q].options[2];
                document.getElementById("option4").innerHTML=data[q].options[3];
            })
;
}

function setCookie(cname, cvalue, exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	  var expires = "expires="+d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}