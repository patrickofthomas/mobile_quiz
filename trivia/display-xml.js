var xmlhttp;

if (window.XMLHttpRequest)
  {
  xmlhttp = new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","trivia/general.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

x = xmlDoc.getElementsByTagName("quiz");
i = 0;

function displayCard()
{
que=(x[i].getElementsByTagName("que")[0].childNodes[0].nodeValue);
ca=(x[i].getElementsByTagName("ca")[0].childNodes[0].nodeValue);
txt="<h3>" + que + "</h3><h4>-" + ca + "</h4>";
document.getElementById("show_card").innerHTML=txt;
}

function next()
{
if (i<x.length-1)
  {
  i++;
  displayCard();
  }
}

function previous()
{
if (i>0)
  {
  i--;
  displayCard();
  }
}