import Stripe from 'stripe'
import mongoose, { Schema } from 'mongoose'

export const dbUrl = process.env.MONGO_URI || 'localhost:27017/website'
export const permissionLevels = {
  user: 'user',
  writer: 'writer',
  admin: 'admin',
}
export const saltRounds = 10
mongoose.connect(dbUrl, (err) => {
  if(err) throw err
})

const UserSchema = new Schema({
  name: { type: String,required: false },
  username: { type: String,required: true },
  password: { type: String,required: false },
  provider: { type: String, required: true },
  roles: {type: Array, required: true },
  picture: { type: String, required: false },
  
})

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
})

const ProjectSchema = new Schema({
  url: { type: String, required: false },
  codeUrl: { type: String, required: false },
  name: { type: String, required: true },
  description: { type: String, required: true },
})

export const User = mongoose.model('User', UserSchema);
export const Post = mongoose.model('Post', PostSchema);
export const Project = mongoose.model('Project', ProjectSchema);

const result = require('dotenv').config()
if (result.error) {
  console.log("Found dotenv error: ")
  console.error(result.error)
} else {
  process.env = result.parsed || process.env;
}

export const isLoggedIn = req => {
  return req.session.user != null
}

/**
 * Assumes the user is already logged in and their session is valid
 */
export const hasRole = async (req, role) => {
  return (
    await User.findOne({ username: req.session.user.username })
  ).get("roles").includes(role)
}

/* // TODO; make this optional
export const stripe = new Stripe(process.env.stripeKey, { apiVersion: '2020-03-02' })

export const getProducts = async () => {
  const products = await stripe.products.list({ limit: 100 })
  const productList = []
  for(const [index, p] of products.data.entries()){
    const product = {
      ...p,
      skus: (await stripe.skus.list({ product: p.id })).data,
    }
    productList.push(product)
  }
  return productList
}
 */