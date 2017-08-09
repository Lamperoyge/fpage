function updateClock ()
{
// 2. Created some variables
  var Time = new Date ();
  var Hours = Time.getHours ();
  var Minutes = Time.getMinutes ();
  var Seconds = Time.getSeconds ();

  //3. If needed, add Zeros to single intergers
  Minutes = ( Minutes < 10 ? "0" : "" ) + Minutes;
  Seconds = ( Seconds < 10 ? "0" : "" ) + Seconds;

  //4. IF Else logic for choosing "AM" or "PM"
  var timeOfDay = ( Hours < 12 ) ? "AM" : "PM";

  //5. Change from Military time to 12-hour format
  Hours = ( Hours > 12 ) ? Hours - 12 : Hours;

  //6. If Hour time is 0, change it to 12
  Hours = ( Hours == 0 ) ? 12 : Hours;

  //7. Final Clock output
  var currentTimeString = Hours + ":" + Minutes + ":" + Seconds + " " + timeOfDay;

  //8. Function to display current time
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
