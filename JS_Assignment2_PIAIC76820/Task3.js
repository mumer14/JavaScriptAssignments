
var tInput = prompt("Enter Temprature for today");

var a = "It is too hot outside....";
var b = "The weatehr today os Normal.";
var c = "Today's weather is cool.";
var d = "OMG! Today's weatehr is so cool."
if (tInput >= 40)
{
  document.write(a);
}
else if (tInput >=30)
{
  document.write(b);
}
else if (tInput >=20)
{
  document.write(c);
}
else
{
  document.write(d);
}

