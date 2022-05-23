import express from 'express'
import { deployment } from './smart.controller.js'

const Router = express.Router()

Router.get('/deploy', deployment)

export default Router
