var names=new Array();
names[0]="Mehdi";
names[1]="John";
names[2]="Jasminn";
names[3]="Jooker";
names[4]="Leon";
names[5]="Martin";
names[6]="javad";
names[7]="Anahita";
names[8]="Joseph";
names[9]="Sara";


function HelloGoodbye () {
for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye "+ names[i])
        document.write("Goodbye "+ names[i] + "<br>")
	}
	else{
		console.log("Hello "+ names[i])
		document.write("Hello "+ names[i] + "<br>")
	}
 }	
}