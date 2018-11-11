/*voorbeeld*/

<?php
    echo $_SERVER['SCRIPT_NAME'];
?>

<html>
<body>

<p>Welcome <?php echo $_POST["name"]; ?><br />
Your age: <?php echo $_POST["age"]; ?></p>

<br />

<p>this is how you display info that a user previously entered into 
	a form like displaying someone's name and age on Facebook. 
	you have the person enter their info into a form which is stored in an array on a server.  
	later that information is displayed on their profile when they log in. 
	It is pulled from the array on the server which is where it was stored when they entered it into the form. 
	That's what is being shown on the example. 
    welcome: name
    your age: age
    That other POST stuff is the link to the file on the server.
</p>
</body>
</html>