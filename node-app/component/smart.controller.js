import Web3 from 'web3'
import Deployment from './smart.model.js'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const artifact = require('../../build/contracts/MyNFT.json')

// let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

export const deployment = async (req, res) => {
  let deployerAddress = '0x8Bfc09C5aEFBC03de11D3100f327DD9DA9127BaF'
  let deployerPrivKey =
    '42284cf2f73f501daaa3a558d48cc181d6f658130cae337b1df2693341ba1cea'

  try {
    let bytecode = artifact.bytecode
    let abi = artifact.abi

    const web3 = new Web3('http://127.0.0.1:7545')

    const incrementer = new web3.eth.Contract(abi)

    const incrementerTx = incrementer.deploy({
      data: bytecode,
    })
    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        from: deployerAddress,
        data: incrementerTx.encodeABI(),
        gas: 3000000,
      },
      deployerPrivKey,
    )
    web3.eth
      .sendSignedTransaction(createTransaction.rawTransaction)
      .then((res_) => {
        console.log('Contract deployed at address', res_.contractAddress)
        // save contract address to DB

        let newRecord = new Deployment({
          contractAddress: res_.contractAddress,
          deployerAddress,
        })
        newRecord.save()

        res.status(200).json({ message: res_.contractAddress })
      })
  } catch (error) {
    res.status(500).json({ contractAddress: error.message })
  }
}


