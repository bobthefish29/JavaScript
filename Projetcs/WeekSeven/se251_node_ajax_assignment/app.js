const express = require(`express`)
const app = express()
const fs = require(`fs`);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.get('/favicon.ico', (req, res) => res.status(204));

const readFile = (path)=>{
  return new Promise(
    (resolve, reject)=>
    {
      fs.readFile(path, `utf8`, (err, data) => {
        if (err) {
          reject(err)
        }
        else
        {
          resolve(data)
        }
      });
    })
}

//this is just so i dont need to do localhost:80/ad
app.get(`/`,(req,res)=>{
  res.sendFile(`${__dirname}/public/testform.html`)

})

app.get(`/add`, (req, res)=>{
  const filePath = path.join(__dirname, `public`, `testform.html`)
  res.sendFile(filePath);
})

app.get('/jeep', async (req, res) => {
  var data = await readFile(`./data/jeep.json`);
  res.send(JSON.parse(data));
});

app.post('/jeep', async (req, res) => { 
    var oldData =  await readFile(`./data/jeep.json`)
    var newData =  await JSON.parse(oldData)
    newData.push(req.body)
    const jsonString = JSON.stringify(newData);
    await fs.writeFile('./data/jeep.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
    });
    res.send(jsonString);
});

//this is the whole section for delete
app.post('/delete', async (req, res) => { 
  //so here we are getting the data
  var oldData =  await readFile(`./data/jeep.json`)
  //here we are setting the old data to a new data
  var newData = await JSON.parse(oldData)
  //this is sorting the data
  var sortedData = await newData.sort((a,b)=>(a.year < b.year)?1:-1)
  
  await sortedData.splice(req.body,1)
  
  //soooo this is like "barrowed from you"
  const jsonString = JSON.stringify(sortedData);
    await fs.writeFile('./data/jeep.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
    });
  
  //just sending the JSON back
  res.send(jsonString);
});

//Start up the server on port 3000.
var port = process.env.PORT || 80
app.listen(port, ()=>{
    console.log("Server Running at Localhost:80")
})