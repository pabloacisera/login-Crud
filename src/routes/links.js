const express=require('express');
const router=express.Router();
const pool=require('../database');

router.get('/add', (req, res)=>{
    res.render('links/add')
})

router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };

    try {
        await pool.query('INSERT INTO links SET ?', [newLink]);
        res.redirect('/links');
    } catch (error) {
        console.error('Error adding link to the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
});

router.get('/', async (req, res) => {
    try {
        const links = await pool.query('SELECT * FROM links');
        res.render('links/list', { links })
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los enlaces de la base de datos');
    }
});


module.exports=router;