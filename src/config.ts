import monk from 'monk'
import bcrypt from 'bcrypt'

export const dbUrl = 'localhost:27017/website'
export const permissionLevels = {
    user: "user",
    writer: "writer",
    admin: "admin",
}
export const saltRounds = 10
export const db = monk(dbUrl)
export const posts = db.get('posts')
export const users = db.get('users')
export const projects = db.get("projects")

export const isLoggedIn = req => {
    return req.session.user != null
}

/**
 * Assumes the user is already logged in and their session is valid
 */
export const hasRole = async (req, role) => {
    return (await users.findOne({ username: req.session.user.username })).roles.includes(role)
}