require('dotenv').config()
const express = require('express');
const authRouter = require('./modules/auth/auth.router');
// const colorRouter = require('./modules/colorPalette/color.router');
const dishRouter = require('./modules/dish/dish.router');

const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI, err => {
  if (err) {
    return console.log('DB connect err', err);
  }
  console.log('DB connect success');
});

const app = express();
app.use(express.json());
app.use(cors());

// luon de middleware truoc router
// app.use((req,res,next)=>{
//   console.log('middleware');
//   next();
// })

// Tất cả HTTP request nào có tiền tố là /api/posts => thì đi vào postRouter

app.use('/api/auth', authRouter);
app.use('/api/dish', dishRouter);

app.use('*', (req, res) => {
  res.send({ message: '404 not found' })
})

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status.send({success:0,message:err.message})
})

app.listen(process.env.PORT || 6060, (err) => {
  if (err) {
    return console.log('Server Error', err);
  }
  console.log('Server started');
})