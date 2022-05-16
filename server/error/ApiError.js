class ApiError extends Error {
    constructor(status, message) {
        //позволяет обращаться к методам Эрор
        super();
        this.status = status
        this.message = message
    }
    //статическая ф-ция это ф-ция к  которую можно вызывать без создания обьекта
    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError
