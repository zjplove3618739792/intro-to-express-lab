
const express = require('express');
const app = express();
// 1.
app.get('/greetings/:name', (req, res) => {
    res.send(`<h1> What a delight it is to see you once more, ${req.params.name}! </h1>`);
  });
// 2.

app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    
    if ((isNaN(number))) {
        res.send(`<h1> You must specify a number! </h1>`); 
    } else if (number >= 0) {
        res.send(`<h1> You rolled a ${number}! </h1>`); 
    } 
});


// 3.


app.get('/collectibles/:index', (req, res) => {
     const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
    const index = req.params.index;
         
    if (index >= 0 && index < collectibles.length) {
        const item = collectibles[index];
        res.send(`<h1>So, you want the ${item.name}? For ${item.price}, it can be yours!</h1>`);
      } else {
        res.send('<h1>This item is not yet in stock. Check back soon!</h1>');
      }
});

app.get('/shoes',(req, res)=> {
    const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
  

}

)
  






app.listen(3000, () => {
    console.log('Listening on port 3000')
  });


