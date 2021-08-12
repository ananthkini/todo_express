const fs = require('fs').promises

exports.readFile = async(path) => {
    const data = await fs.readFile(path, "utf8", )
    return JSON.stringify(data)
}

exports.writeFile = async(path, user) => {
    const data = await fs.writeFile(path, user, "utf8", )
    return JSON.stringify(data)
}