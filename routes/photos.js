let express = require('express');
let router = express.Router();

let photos = require('../public/res');

router.get('/', (req, res, next) => {
  res.send(photos);
});

router.get('/image/:id', (req, res) => {
  let imageId = req.params.id;
  let image = {};
  for(let i =0; i < photos.length; i++){
    if(photos[i].id === imageId){
      image.id = photos[i].id;
      image.name = photos[i].name;
      image.url = photos[i].url;
      break;
    }
  }
  res.send(image);
});

router.post('/', (req, res) =>{
  let image = {};
  image.id = String(Number(photos[photos.length-1].id) + 1);
  image.name = req.body.name;
  image.url = req.body.url;
  photos.push(image);
  res.send(photos);
});

router.put('/image/:id', (req, res) => {
  let id = req.params.id;
  photos.forEach((image)=>{
    if(image.id === id){
      image.name = req.body.name;
      image.url = req.body.url;
    }
  });
  res.send(photos);
});

/*router.delete('/', (req, res) => {
  photos = {};
  res.send(photos);
});*/

router.delete('/image/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  for(let i = 0; i < photos.length; i++){
    if(photos[i].id === id){
      console.log(photos[i].id);
      photos.splice(i, 1);
    }
  }
  res.send(photos);
});

module.exports = router;
