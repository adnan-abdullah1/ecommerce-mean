const express = require('express');
const router = express.Router();
const authRouter=require('./Auth/authRouter')
const categoryRouter=require('./Category/categoryRouter')


router.use('/auth',authRouter)
router.use('/category',categoryRouter)
module.exports=router