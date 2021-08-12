const { readFile, writeFile } = require('../helper/file.helper')

exports.getAllposts = async() => {
    const users = await readFile.readFile("./data/user.data.json")
    return users;
}

exports.addPost = async(user) => {
    const users = await readFile.readFile("./data/user.data.json", user)
    return users;
}