//   Read Blockchain data  
const  ethers =require("ethers");
let httpProvider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/01b1ea61019348ddb55ef44cdcfdbff8");

const query=async()=>{
    // current block detail
    const block = await httpProvider.getBlockNumber();
    console.log("block number is",block);
        // balance of particular address
    const balance = await httpProvider.getBalance('0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263');
    console.log("account balance",balance);
    
    const balanceEther= await ethers.formatEther(balance);
    console.log(balanceEther)

    const balanceWei= ethers.parseEther(balanceEther);    // const balanceWei= ethers.utils.parseEther(balanceEther);
    console.log(balanceWei)                               // utils is not supported to read data for current version
                                                          //ethers.utils.formatEther(weiValue);

    };
   query();



