const houses = require("./db.json");
let currentId = 4;
module.exports = {
  getHouses: (req, res) => res.status(200).send(houses),
  deleteHouse: (req, res) => {
    const ind = houses.indexOf(req.params);
    houses.splice(ind, 1);
    res.status(200).send(houses);
  },
  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    let addHouse = {
      id: currentId,
      address,
      price,
      imageURL,
    };
    houses.push(addHouse);
    res.status(200).send(houses);
    currentId++;
  },
  /*updateHouse: (req, res) => {
    let {id } =req.params
    let (type) =req.body 
    let index = houses.indexOf(id);
    if(type==="minus"){
      if(houses[index].price <= 10000){
         houses[index].price = 0
      }else{
        houses[index].price-=10000
      }
      res.status(200).send(houses);
    } else if(type==="plus"){
      houses[index].price+=10000
      res.status(200).send(houses);
    }else{
      res.status(400);
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  }*/
  updateHouse: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = houses.findIndex((house) => +house.id === +id);
if(type==="minus"){
  if()
}
    if (houses[index].price <= 10000 && type === "minus") {
      houses[index].price = 0;
      res.status(200).send(houses);
    } else if (type === "plus") {
      houses[index].price += 10000;
      res.status(200).send(houses);
    } else if (type === "minus") {
      houses[index].price -= 10000;
      res.status(200).send(houses);
    } else {
      res.sendStatus(400);
    }
  },
};
