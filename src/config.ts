import monk from 'monk'
import bcrypt from 'bcrypt'
import Stripe from 'stripe'

export const dbUrl = process.env.MONGO_URI || 'localhost:27017/website'
export const permissionLevels = {
  user: 'user',
  writer: 'writer',
  admin: 'admin',
}
export const saltRounds = 10
export const db = monk(dbUrl)
export const posts = db.get('posts')
export const users = db.get('users')
export const projects = db.get('projects')
export const products = db.get('products')

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
    await users.findOne({ username: req.session.user.username })
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