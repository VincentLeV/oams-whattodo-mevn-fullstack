const projectRouter = require( "express" ).Router()
const Project = require( "../models/project" )
const Todo  = require( "../models/todo")

projectRouter.get( "/api/projects", async (_, res) => {
    try {
        const projects = await Project.find({})
        res.json( projects )
    } catch (err) {
        next(err)
    }
})

projectRouter.get( "/api/projects/:id", async (req, res, next) => {
    try {
        const project = await Project.findById( req.params.id )
        project ? res.json( project ) : res.status(404).end()
    } catch (err) {
        next(err)
    }
})

projectRouter.post( "/api/projects", async (req, res, next) => {
    try {
        const project = new Project( req.body )
        const savedProject = await project.save()
        savedProject ? res.status(201).json(savedProject) : res.status(404).end()
    } catch (err) {
        next(err)
    }
})

projectRouter.delete( "/api/projects/:id", async (req, res, next) => {
    try {
        const project = await Project.findByIdAndRemove( req.params.id )
        project ? res.json( project ) : res.status(400).end()
    } catch (err) {
        next(err)
    }
})

projectRouter.delete( "/api/projects/:projId/todo/:todoId", async (req, res, next) => {
    try {
        const project = await Project.findById( req.params.projId )
        project.todos =  project.todos.filter(t => t._id.toString() !== req.params.todoId)
        const savedProject = await project.save()
        savedProject ? res.json( project ) : res.status(400).end()
    } catch (err) {
        next(err)
    }
})

projectRouter.put( "/api/projects/:id", async (req, res, next) => {
    try {
        const body = req.body
        if (body.todo) {
            if (body.todo.description === "") throw {name : "NoLengthError"}
            const todo = new Todo( body.todo )
            const project = await Project.findById( body.project.id )
            project.todos.push(todo)
            const savedProject = await Project.findByIdAndUpdate( req.params.id, project, { new: true } )
            console.log(savedProject)
            savedProject ? res.status(201).json(savedProject) : res.status(404).end()
        } else {
            const savedProject = await Project.findByIdAndUpdate( req.params.id, body.project, { new: true } )
            savedProject ? res.status(201).json(savedProject) : res.status(404).end()
        }
        
    } catch (err) {
        next(err)
    }
})

module.exports = projectRouter
