//jshint esversion:6

// creator function
// document.querySelector("button").addEventListener("click",function()
// {
//   alert("your data has been saved");
// });

document.querySelector(".save").addEventListener("click",function()
{
  
var FirstName=document.getElementById("text1").value;
var LastName = document.getElementById("text2").value;
var day =  document.getElementById("day").value;
var month =  document.getElementById("month").value;
var year =  document.getElementById("year").value;
var Gender = document.getElementById("text3").value;
var Age = document.getElementById("text4").value;
var Country = document.getElementById("text5").value;
if(FirstName==""||LastName==""||day==""||month==""||year==""||Gender==""||Age==""||Country=="")
{
  alert("Please fill all the field before saving ");
}
else
{
  alert("!! Your data has been saved successfully !!");

}


});


let file = document.getElementById('file');

let file2 = file.value;
var image;

file.addEventListener('change', function() {
   if(file && file.value) 
   {
       
    let val = file.files[0].name;
    image ='done';
     
        document.getElementById('value').innerHTML = "uploaded Image :";
       document.querySelector("img").setAttribute("src",val);

 }
});

document.querySelector(".up-image").addEventListener("click",function()
{
  if(image=='done')
  {
    
    alert("!! Image uploaded successfully !!");

  }
  else{
    alert("Please upload image ");
 
  }
});

document.querySelector(".username1").addEventListener("click",function()
{
  var userName =  document.getElementById("username").value;

var Email =  document.getElementById("Email").value;

var passWord =  document.getElementById("password").value;

var rePassword =  document.getElementById("repassword").value;

if(userName==""||Email==""||passWord==""||rePassword=="")
{
  alert("Please fill all the fields");
}
else
{
  if(rePassword == passWord)
  {
    alert("!! Your data has been saved successfully !!");
  }
  else{
    alert("Password do not matched");
  }

}


});


var c1 = document.getElementById("content");
var c2 =  document.getElementById("content2");
var c3=  document.getElementById("content-3");
var c4 =  document.getElementById("content-last");

function toggle4(ele) {
  var cont = document.getElementById('content-0');
  var temp = document.getElementById('switch');
  cont.style.display = 'block';
  temp.style.display ='none';
  /*if (cont.style.display == 'block')
   {
      cont.style.display = 'none';

      document.getElementById(ele.id).value = 'Click Here to Start filling form';
  }
  else
   {
      cont.style.display = 'block';
      document.getElementById(ele.id).value = 'Click Here to Start filling form';
  }*/
}


function toggle(ele) 
{
  var cont = document.getElementById('content');
 
  if (cont.style.display == 'block')
   {
      cont.style.display = 'none';

      document.getElementById(ele.id).value = 'Personal Info';
  }
  else
   {
      cont.style.display = 'block';
      c2.style.display = 'none';
      c3.style.display='none';
      c4.style.display='none';
      document.getElementById(ele.id).value = 'Personal Info';
  }
}
 function toggle1(ele) 
 {
   var cont = document.getElementById('content2');
   if (cont.style.display == 'block')
    {
       cont.style.display = 'none';

       document.getElementById(ele.id).value = 'Upload Image';
   }
   else
    {
       cont.style.display = 'block';
       c1.style.display = 'none';
      c3.style.display='none';
      c4.style.display='none';
       document.getElementById(ele.id).value = 'Upload Image';
   }
 }
 
 function toggle2(ele) 
 {
   var cont = document.getElementById('content-3');
   if (cont.style.display == 'block')
    {
       cont.style.display = 'none';

       document.getElementById(ele.id).value = 'Create-Username';
   }
   else
    {
       cont.style.display = 'block';
       c2.style.display = 'none';
      c1.style.display='none';
      c4.style.display='none';
       document.getElementById(ele.id).value = 'Create-Username';
   }
 }
 function toggle3(ele) {
  var cont = document.getElementById('content-last');
  if (cont.style.display == 'block')
   {
      cont.style.display = 'none';

      document.getElementById(ele.id).value = 'Thankyou-Page';
  }
  else
   {
      cont.style.display = 'block';
      c2.style.display = 'none';
      c3.style.display='none';
      c1.style.display='none';
      document.getElementById(ele.id).value = 'Thankyou-Page';
  }
}
 


 //togggle

















// document.querySelector("button","#verify").addEventListener("click",function()
// {
//   alert("Name :" + FirstName +" "+LastName "\n"
//         "Age :"+ Age+"\n"+
//         "Gender :"+ Gender+"\n"+
//         "Country :"+Country +"\n"+
//         "username :"+userName+"\n"+
//         "Email :"+Email+"\n"+
//         "password :"+passWord+"\n"
//           );
// });
/*var person = Array();

function personalInformation(firstName,lastName,age,gender,countryName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age= age;
    this.gender = gender;
    this.cuntryName = countryName;
}
var i=0;

function addPerson()
{
    //get value
    var FirstName=document.getElementById("text1").value;
    var LastName = document.getElementById("text2").value;
    var Gender = document.getElementById("text3").value;
    var Age = document.getElementById("text4").value;
    var Country = document.getElementById("text5").value;
    person[i] = new personalInformation(FirstName,LastName,Gender,Age,Country);
    i++;
    document.getElementById("text1").value ="";
    document.getElementById("text2").value="";
    document.getElementById("text3").value="";
    document.getElementById("text4").value="";
    document.getElementById("text5").value="";
}*/


