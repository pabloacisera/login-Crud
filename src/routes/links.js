const express=require('express');
const router=express.Router();
const pool=require('../database');

router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };

    try {
        await pool.query('INSERT INTO links SET ?', [newLink]);
        res.status(200).json({ message: 'Link added successfully' });
    } catch (error) {
        console.error('Error adding link to the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports=router;