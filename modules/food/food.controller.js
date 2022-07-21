const FoodModel = require('./food');

const createFood = async (req,res) =>{
     try {
         const {name, address, district, sort} = req.body;
         const existedFood = await FoodModel.findOne({name});

         if(existedFood) throw new Error ('Name duplicate');

         const newFood = await FoodModel.create({
             name,
             address,
             district,
             sort
         })

         res.send({
             success:1,
             data: newFood
             
         })
     } catch (error) {
         res.status(400).send({success: 0, message:error.message})
     }
}
