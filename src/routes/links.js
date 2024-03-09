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
        req.flash('success', 'Link successfully saved')
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

router.get('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM links WHERE ID = ?', [id]);
        req.flash('success', 'Link successfully deleted');
        res.redirect('/links');
    } catch (error) {
        console.error('Error deleting link from the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM links WHERE ID = ?', [id]);

        // Check if any rows were returned from the database
        if (result.length > 0) {
            res.render('links/edit', { links: result[0] });
        } else {
            res.status(404).send('Link not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, url, description } = req.body;
        const linkEdited = {
            title,
            url,
            description
        };
        await pool.query('UPDATE links set ? WHERE id = ?', [linkEdited, id]);
        req.flash('success', 'Link successfully updated');
        res.redirect('/links');
    } catch (error) {
        console.error('Error updating link in the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router;