const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennet',
    'birthLocation': 'Chicago, Illinois'
  },
  'drake' :{
    'age': 35,
    'birthName': 'Aubrey Drake Graham',
    'birthLocation': 'Toronto, Canada'
  },
  'snoop dogg' :{
    'age': 50,
    'birthName': 'Calvin Cordozar Broadus Jr',
    'birthLocation': 'Long Beach, California'
  },
  '42 dugg' :{
    'age': 26,
    'birthName': 'Dion Marquise Hayes',
    'birthLocation': 'Detroit, Michigan'
  },
  'playboi carti' :{
    'age': 25,
    'birthName': 'Jordan Terrell Carter',
    'birthLocation': 'Riverdale, Georgia'
  },
  'megan thee stallion':{
    'age': 27,
    'birthName': 'Megan Jovon Ruth Pete',
    'birthLocation': 'San Antonio, Texas'
  },
  'g herbo':{
    'age': 26,
    'birthName': 'Herbert Randall Wright III',
    'birthLocation': 'Chicago, Illinois'
  },
  'pooh shiesty' :{
    'age': 22,
    'birthName': 'Lontrell Donell Williams Jr',
    'birthLocation': 'Memphis, Tennessee'
  },
  'est gee' :{
    'age': 28,
    'birthName': 'George Albert Stone III',
    'birthLocation': 'Louisville, Kentucky'
  },
  'gunna' :{
    'age': 28,
    'birthName': 'Sergio Giavanni Kitchens',
    'birthLocation': 'College Park, Georgia'
  },
  'don toliver' :{
    'age': 27,
    'birthName': 'Caleb Zackery "Don" Toliver',
    'birthLocation': 'Houston, Texas'
  },
  'roddy rich' :{
    'age': 23,
    'birthName': 'Rodrick Wayne Moore Jr',
    'birthLocation': 'Compton, California'
  },
  'cardi b':{
    'age': 29,
    'birthName': 'Belcalis Marlenis Almánzar',
    'birthLocation': 'Washington Heights, New York'
  },
  'vince staples':{
    'age': 28,
    'birthName': 'Vince Jamal Staples',
    'birthLocation': 'Compton, California'
  },
  'baby keem':{
    'age': 21,
    'birthName': 'Hykeem Jamaal Carter Jr',
    'birthLocation': 'Carson, California'
  },
  'polo g':{
    'age': 23,
    'birthName': 'Taurus Tremani Bartlett',
    'birthLocation': 'Chicago, Illinois'
  },
  'doja cat' :{
    'age': 26,
    'birthName': 'Amala Ratna Zandile Dlamini',
    'birthLocation': 'Tarzana, Los Angeles, California'
  },
  'youngboy never broke again':{
    'age': 22,
    'birthName': 'Kentrell Desean Gaulden',
    'birthLocation': 'Baton Rouge, Louisiana'
  },
  'jack harlow':{
    'age': 24,
    'birthName': 'Jackman Thomas Harlow',
    'birthLocation': 'Louisville, Kentucky'
  },
  'lil uzi vert':{
    'age': 26,
    'birthName': 'Symere Bysil Woods',
    'birthLocation': 'Francisville, Philadelphia, Pennsylvania'
  },
  '21 savage':{
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, United Kingdom'
  },
  'lil durk':{
    'age': 29,
    'birthName': 'Durk Derrick Banks',
    'birthLocation': 'Englewood, Chicago, Illinois'
  },
  'lil baby':{
    'age': 27,
    'birthName': 'Dominique Armani Jones',
    'birthLocation': 'Atlanta, Georgia'
  },
  'unknown': {
    'age': 'unknown',
    'birthName': 'unknown', 
    'birthLocation': 'unknown'
  }
}

app.get('/', (request,response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
  const rapperName = request.params.name.toLowerCase()
  if(rappers[rapperName]){
    response.json(rappers[rapperName])
  }else{
    response.json(rappers['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
})