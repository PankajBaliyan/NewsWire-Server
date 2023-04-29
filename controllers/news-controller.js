const News = require('../models/news-model')

const getNews = async (req, res) => {
    try {
        const newNews = await News.find()
        res.status(200).json(newNews)
    } catch (err) {
        res.status(400).json({ info: err.message })
    }
}

const createNews = async (req, res) => {
    const newNews = new News({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    })
    try {
        const savedNews = await newNews.save()
        res.status(200).json(savedNews)
    } catch (err) {
        res.status(400).json({ info: err.message })
    }
}

const getNewsById = async (req, res) => {
    try {
        const newNews = await News.findById(req.params.id)
        res.status(200).json(newNews)
    } catch (err) {
        res.status(400).json({ info: err.message })
    }
}

const updateNewsById = async (req, res) => {
    try {
        await News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
        })
        res.status(200).json('ok')
    } catch (err) {
        res.status(400).json({ info: err.message })
    }
}

const deleteNewsById = async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id)
        res.status(200).json('ok')
    } catch (err) {
        res.status(400).json({ info: err.message })
    }
}

module.exports = {
    getNews,
    createNews,
    getNewsById,
    updateNewsById,
    deleteNewsById
}