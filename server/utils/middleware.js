const logger = require( "./logger" )

const requestLogger = ( req, res, next ) => {
    logger.info( "Method:", req.method )
    logger.info( "Path:  ", req.path )
    logger.info( "Body:  ", req.body )
    logger.info( "---" )
    next()
}

const unknownEndpoint = ( req, res ) => {
    res.status(404).send({ err: "unknown endpoint" })
}

const errorHandler = (err, req, res, next) => {
    logger.error( err.message )

    if ( err.name === "CastError" ) {
        return res.status(400).send({ err: "malformatted id" })
    } else if ( err.name === "ValidationError" ) {
        return res.status(400).json({ message: err.message })
    }

    next( err )
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}
