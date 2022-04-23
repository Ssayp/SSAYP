
const statusCode = {
    success: 200,
    badRequest: 400,
    unathorized: 401,
    internalError: 500
}

const message = {
    create: "Registro creado exitosamente",
    update: "Registro actualizado exitosamente",
    disable: "Registro deshabilitado exitosamente",
    enable: "Registro habilitado exitosamente",
    list: "Consulta exitosa",
    authError:{
        email: "Email invalido",
        noActive: "is_active disabled",
        password: "Invalid Password"
    }
}

const typeError = {
    tecnico: "Técnico",
    internalError: "Internal error",
    badRequest: "Bad request",
    notFound: "Not Found"
}

module.exports = {
    statusCode,
    message,
    typeError
}