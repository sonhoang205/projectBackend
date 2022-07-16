class HTTPError extends Error {
    constructor(status,message){
        super(message)
    }
}