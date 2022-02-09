var myArray=[];
var out;
function myFunction()
  {
     var Name= document.getElementById("Name").value;
     var mn= document.getElementById("mNumber").value;
     console.log(isNaN (mn));

     let matchPattern =Name.match(/\d+/g);
       if (matchPattern != null )
        {
         console.log('The input string contain numbers');
         out+="enter correct name  ";
         document.getElementById("rslt").innerHTML = out;
         document.getElementById("Name").style.border="solid red 1px";
         return;
        }
     
     if(isNaN (mn)!== false)
       
       {
           out+="enter correct no. ";
           document.getElementById("rslt").innerHTML = out ;
           document.getElementById("mNumber").style.border="solid red 1px";
           return;
       }
        output(Name,mn);

  }
  
function output(NAME,MN)
{
    document.getElementById("Name").style.border="solid black 1px";
    document.getElementById("mNumber").style.border="solid black 1px";
   myArray.push({nme:NAME, mn:MN});
   out = "<table>";
    out+= "<tr><th>name</th><th>mobile no</th></tr>" ;
    for (var i = 0; i < myArray.length; i++) 
    {
        out+="<tr>";
              out+="<td>"+myArray[i].nme+"</td>";
              out+="<td>"+myArray[i].mn+"</td>";
    }
    out+="</table>";
    document.getElementById("rslt").innerHTML = out;
 
}
