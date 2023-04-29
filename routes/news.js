const express = require('express')
const router = express.Router()

// get data from controllers
const newsController = require('../controllers/news-controller')

router.get('/', (req, res) => {
    res.send('Landing Page')
})

// //* index page
router.get('/api/news', newsController.getNews)

// //* create page
router.post('/api/news', newsController.createNews)

// //* show page
router.get('/api/news/:id', newsController.getNewsById)

// //* update page
router.patch('/api/news/:id', newsController.updateNewsById)

// //* delete page
router.delete('/api/news/:id', newsController.deleteNewsById)


//! used to input temp data for testing purpose
// const News = require('../models/news-model')
// router.get('/api/temp', async(req,res)=>{
//     try {
//         for(let i=1;i<=10;i++) {
//             const newObj = new News({
//                 title: `News ${i}`,
//                 body: `This is the body of news ${i}`,
//                 createdAt: Date.now(),
//                 author: 'John Doe',
//             })
//             await newObj.save()
//         }
//         // res.send('Done')
//         res.status(200).send("ok")
//     } catch (error) {
//         // res.send("error",error)
//         res.status(400).send("no")
//     }
// })

module.exports = router