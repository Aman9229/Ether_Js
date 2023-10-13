const  ethers =require("ethers");

const Provider= new ethers.JsonRpcProvider("https://goerli.infura.io/v3/01b1ea61019348ddb55ef44cdcfdbff8");   // infura goreli test ether

const ContractAdd="0xd9145CCE52D386f254917e481eB44e9943F39138"; // smart contract delpoyed address
    
const WalletAbi=[
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "accountBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sendEthContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "sendEthUser",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_num",
                    "type": "uint256"
                }
            ],
            "name": "setValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
];   // use smart contract ABI


const ContractInteraction=async()=>{
    const walletContract=new ethers.Contract(WalletAbi,ContractAdd,Provider);

    // contract name fetch from SmartContract.sol
    const contractName= await walletContract.name();  // smart contract function
    console.log("Contract Name is:- ",contractName)

    // if anyone send some ETH then  fetch value
    const num=await walletContract.getValue(); 
     // from SmartContract.sol  getValue() function call
    console.log("number value :-",num);

    // contract balance fetch 
    const contractBalance=await walletContract.contractBalance(); 
     //from SmartContract.sol  contractBalance() function call
    console.log("contractBalance value :-",contractBalance);

    const userBalance=await walletContract.accountBalance(" metamask testnet address ");   
    //from SmartContract.sol  accountBalance() function call
    console.log("userBalance value :-",userBalance);
} 


ContractInteraction();
