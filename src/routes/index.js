const express= require('express')
const router=express.Router()

/**ruta principal*/
router.get('/', (req, res)=>{
    res.send('hello kitty')
})

module.exports=router;