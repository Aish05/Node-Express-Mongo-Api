
const express = require('express')
const router = express.Router();
const Joi = require('@hapi/joi');


const Post = require('../models/Post')

//get all the posts
router.get('/', async (request, response) => {
    try {
        const posts = await Post.find()
        response.json(posts)
    } catch (error) {
        response.json({ message: error })
    }
})

//sumbit a post
router.post('/', async (request, response) => {

    const { error } = validateBody(request.body)
    if (error) {
        //400 Bad request
        response.status(400).send(error)
        return
    }

    const post = new Post({
        title: request.body.title,
        description: request.body.description
    })

    try {
        const savedPost = await post.save()
        response.json(savedPost)
    } catch (error) {
        response.json({ message: error })
    }
})

//gets a specific post
router.get('/:id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.id)
        response.json(post)
    } catch (error) {
        response.json({ message: error })
    }
})

//delete a specific post
router.delete('/:id', async (request, response) => {
    const post = await Post.findById(request.params.id)
        if (!post) {
            response.status(404).json({ message: 'The post with a given id was not found' })
            return
        }

    try {
        const removedPost = await Post.remove({ _id: request.params.id })
        response.json(removedPost)
    } catch (error) {
        response.json({ message: error })
    }
})

//update a post
router.patch('/:id', async (request, response) => {
    try {

        const post = await Post.findById(request.params.id)
        if (!post) {
            response.status(404).json({ message: 'The post with a given id was not found' })
            return
        }

        const updatedPost = await Post.updateOne(
            { _id: request.params.id },
            { $set: { title: request.body.title } })

        response.json(updatedPost)
    } catch (error) {
        response.json({ message: error })
    }
})

function validateBody(body) {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(3).required()
    })
    return schema.validate(body)
}


module.exports = router