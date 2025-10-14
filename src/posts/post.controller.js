import Post from ',/Post.model.js'
import User from '../users/user.model.js'
import Comment from '../comments/comments.model.js'
import { populate } from 'dotenv'

export const crearePost = async (req, res)=>{
    try{
        const { title, content} = req.body
        const authorId = req.uid
        
        const post = new Post.create({
            title,
            content,
            author: authorId

        })
        await User.findByIdAndAndUpdate(author, {
            $push: {post: post,_id}

        })
        const populatedPost = await Post.findById(post,_id)
        .populate('author', 'name surmane username profilePicture')
        .populate('comments')

        return res.status(201).json({
            message:'Publicación exitosa',
            post : populatedPost

        })
    }catch (error){
        return res.status (500).jason({
            message: 'Error al guardar la publicación',
            error: error.message
        })
    }
}

export const getAllPosts = async (req, res) => {
    try{
        const { page = 1, limite = 8 } = req.query
        const skip = (page - 1) * limit

        const post = await Post.find ()
        .populate ('author', 'name surname username profilePicture')
        .populate ({
            path: 'comments',
            populate : {
                path: 'author',
                select: 'name surname username profilePicture'
            }
        }) 
        .sort ({ createdAt: - 1 })
        .skip (skip)
        .limit (parseInt(limit))

    const totalPosts = await Post.countDocuments ()
    return res.status (200).json({
        message: 'Publicaciones obtenidas exitosamente',
        posts,
        pagination: {
            page: parseInt (page),
            limit: parseInt(limit),
            totalPosts,
            pages: Math.ceil(totalPosts / limit)
        }
    })
    }catch (error){
        return res.status (500).json({
            message: 'Error al obtener las publicaciones',
            error: error.message
        })
    }
}
export const getPostById = async (req, res) => {
    try{
        const {id} = req.params

        const post = await Post.findById(id)
            .populate("author", "name surname username profilePicture")
            .populate({
                path: "comments",
                populate: {
                path: "author",
                select: "name surname username profilePicture"
            }
        })

        return res.status(200).json({
            message: "Publicación obtenida exitosamente",
            post
        })
    }catch(error){
        return res.status(500).jason({
            message: 'Error al obtener la publicacion',
            error: error.message
        })
    }
}