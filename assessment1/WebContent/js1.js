var fetchjson= function(q){
 fetch('assesment.json')
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
            });
}
/*
function validate()
{
var o = document.getElementById('demo1');
var t = document.getElementById('demo2');

if ( (o.checked == false ) && (t.checked == false ) )
{
alert ( "Please choose Retail: Yes/No" );
//document.myform.gender.focus();
return false;
}

return true;
}*/

function validate()
{
var o1 = document.getElementById('o1');
var o2 = document.getElementById('o2');
var o3 = document.getElementById('o3');
var o4 = document.getElementById('o4');


if ( (o1.checked == true ) )
{
alert ( "Please"+o.value );
//document.myform.gender.focus();
return true;
}
else if  (o2.checked == true ) 
{alert (document.getElementById("option1").id);
return true;
}
else if  (o3.checked == true ) 
{alert (o3.value);
return true;
}
else if  (o4.checked == true ) 
{alert (o4.value);
return true;
}
alert("please select");
return false;
}
