const DishModel = require('./dish.schema')

const res = require('express/lib/response');

const search = async (req, res) => {
  const { district, tags } = req.query;
  const food = await DishModel.find({
    district, tags
  })

  const randomResult = food[Math.floor(Math.random() * food.length)];
  res.send({
    error: 0,
    data: {
      result: randomResult
    }
  });
}

const createDish = async (req, res) => {
  try {
    const { name, address, district, tags, img } = req.body;
    const existedDish = await DishModel.findOne({ name });

    if (existedDish) throw new Error('Name duplicate');

    const newDish = await DishModel.create({
      name,
      address,
      district,
      img,
      tags
    })

    res.status(200).send({
      success: 1,
      data: newDish
    })
  } catch (error) {
    res.status(400).send({ success: 0, message: error.message })
  }
}
const deleteDish = async (req, res) => {
  try {
    const { dishId } = req.params;

    const DeletedDish = await DishModel
      .findByIdAndDelete(dishId);

    res.send({ success: 1 });
  } catch (err) {
    res.status(400).send({ success: 0, message: err.message });
  }
}

const getDishes = async(req,res) =>{
  try {
    const dishes = await (await DishModel
      .find({})
      // .skip(offset)
      // .limit(limit)
      );
    const totalDishes = await DishModel.countDocuments({});
        res.send(
      { success: 1, 
        data: {
          dishes: dishes,
          total: totalDishes
        }
        });
  } catch (err) {
    res.status(400).send({ success: 0, data: [] });
  }
}
const getDish = async(req,res) =>{
  try {
    const {dishId} = req.params;
    const dish = await (await DishModel
      .findById(dishId)
      );
        res.send(
      { success: 1, 
        data: dish
        });
  } catch (err) {
    res.status(400).send({ success: 0, data: [] });
  }
}

module.exports = {
  search, createDish, deleteDish, getDishes, getDish
}