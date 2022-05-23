import mongoose from 'mongoose'

const deploymentSchema = new mongoose.Schema(
  {
    contractAddress: String,
    deployerAddress: String,
  },
  { timestamps: true },
)
const Deployment = mongoose.model('deployment', deploymentSchema)



export default Deployment
