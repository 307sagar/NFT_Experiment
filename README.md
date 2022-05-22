# NFT_Experiment
Sample for NFT deploy and minting.

# Steps to execute
Must have node,npm,truffle,ganache,mongo DB set up, REST Api client,Metamask wallet for the dev process.

Go to the project directory and execute below commands in same order:
run ganache - Copy the blockchain netwrok details to truffle.config.js at host,port, network id: '*'  to connect.
npm install - install all dependencies in package.json.
truffle migrate - to execute the migrate scripts of smart contracts.
truffle deploy - to compile and deploy the smart contracts for deploying & minting the NFTs.
npm start - to run the application.


# Process of development / validating
 After running truffle migrate/deploy - If errors related to type:"module" occur. Change the type:"module" to type: "commonjs" in package.json.
 
 After running npm start - If errors related to type:"commonjs" occur. Change the type:"commonjs" to type: "module" in package.json.
 
 In the db.connections.js file - add the mongoDB user connection URI details- 
 e.g. - mongoose.connect('mongodb+srv://zapper307:<password>@cluster0.ui8zt.mongodb.net/?retryWrites=true&w=majority')
 replace <password> with the database password used while creating mongoDB database/clusters.
  
  
 To use the api, launch any api client. 
 1. For deploying the NFT (GET request)- http://localhost:port/api/v1/smart-contract/deploy -
 It will create a "contractAddress" and can be seen in the console where npm start was executed.
 
 2. For minting the NFT  (POST request)- http://localhost:8090/api/v1/smart-contract/mint - 
 Add in the request body in json format : 
 {"address": "{any address which is used to send the NFT/can be copied from ganache}" , "contractAddress" : "{output of the /deploy request}"}
  
 It will create a "nftID" and can be seen in the console where npm start was executed.
  
 To verify the transactions details -
 Check the "browse collections" tab in the mongo DB Atlas set up.
  
 
 To verify with a wallet transaction - Install metamask and use default Ethereum blockchain.
 Add any of the ganache's block details to create a new network in metamask.
  
 Now, go to "Import tokens" section of newly created network in metamask, and 
  - In "Token Contract Address" - provide the "contractAddress" which was generated after "/deploy" request.
  - In "Token Symbol" - provide the name as per the definition in NFTContract.sol(used in the constructor - here it is "ART").
  - In "Token Decimal" - provide 0.0
No. of ART which is minted is shown in the metamask against the sender "address" which was used to make "/mint" request.
  
This serves the entire purpose of deploying and minting NFT.
  
Additionally, to store metadata of NFTs, the functionalities can be extended to use IPFS for hosting the NFT on its server.
It will generate a URI/NFT address hash, and can be used directly as a source in our mint method of smart.controller.js (line 69 - instaed of using a dummy url of an image, we can use IPFS provided URI)
 
The NFT metadata will look like nft-metadata.json file.
  
  

