const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => { 
	res.send('Hello World???'); 
}); 

app.get('/api/example', (req, res) => { 
	res.send([1, 2, 3]); 
}); 

app.listen(1337);
