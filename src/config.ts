import Stripe from 'stripe'
import { createSchema, Type, typedModel } from 'ts-mongoose';
import mongoose from 'mongoose'

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

const UserSchema = createSchema({
  name: Type.string({ required: false }),
  username: Type.string({ required: true }),
  password: Type.string({ required: false }),
  provider: Type.string({ required: true }),
  roles: Type.array({}).of(String),
  picture: Type.string({ required: false }),
  
})

const PostSchema = createSchema({
  title: Type.string({ required: true }),
  content: Type.string({ required: true }),
  createdAt: Type.date({ required: true }),
  author: Type.string({ required: true }),
  description: Type.string({ required: true }),
})

const ProjectSchema = createSchema({
  url: Type.string({ required: false }),
  codeUrl: Type.string({ required: false }),
  name: Type.string({ required: true }),
  description: Type.string({ required: true }),
})

export const User = typedModel('User', UserSchema);
export const Post = typedModel('Post', PostSchema);
export const Project = typedModel('Post', ProjectSchema);

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
  ).roles.includes(role)
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