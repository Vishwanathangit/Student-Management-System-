const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// View all students
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.render('index', { students });
});

// Show add form
router.get('/add', (req, res) => {
    res.render('add');
});

// Handle add student
router.post('/add', async (req, res) => {
    const { name, email, phone } = req.body;
    await Student.create({ name, email, phone });
    res.redirect('/');
});

// Show edit form
router.get('/edit/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render('edit', { student });
});

// Handle edit
router.post('/edit/:id', async (req, res) => {
    const { name, email, phone } = req.body;
    await Student.findByIdAndUpdate(req.params.id, { name, email, phone });
    res.redirect('/');
});

// Delete
router.get('/delete/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

module.exports = router;
