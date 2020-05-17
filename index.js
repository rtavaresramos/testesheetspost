const API_URL =   "https://spreadsheets.google.com/feeds/cells/1MAjPq2HiaBWbXXlHH6JSYa26twZ4VautqCOX6wxiUhY/1/public/full?alt=json"

function insertData(e, form){
    e.preventDefault()

    const inputUsername = form.username
    const username = inputUsername.value

    const inputUseremail = form.useremail
    const useremail = inputUseremail.value

    fetch(API_URL, { 
	
	// Adding method type 
	method: "POST", 
	
	// Adding body or contents to send 
	body: JSON.stringify({ 
		name: username, 
		email: useremail, 
		userId: 1 
	}), 
	
	// Adding headers to the request 
	headers: { 
		"Content-type": "application/json; charset=UTF-8"
	} 
}) 

// Converting to JSON 
.then(response => response.json()) 

// Displaying results to console 
.then(json => console.log(json)); 

}


// main.js 

// POST request using fetch() 

