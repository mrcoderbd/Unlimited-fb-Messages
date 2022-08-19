function sendMessage(){

	button =document.querySelector("div[aria-label^='Press']");
	button.tap=button.click;
	let size=window.prompt("Amount of Message Wana send: ", 1000);
	for(let i=0;i!=size;i++){
	    button.tap();
	}
}

sendMessage()
