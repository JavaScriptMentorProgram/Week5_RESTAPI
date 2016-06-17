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
  image.id = photos.length;
  image.name = req.body.name;
  image.url = req.body.url;
  photos.push(image);
  res.send(photos);
});

router.put('/image/:id', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.delete('/image/:imageName', (req, res) => {

});

module.exports = router;
