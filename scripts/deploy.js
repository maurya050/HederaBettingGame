require('dotenv').config();
const { Client, PrivateKey, AccountId, ContractCreateTransaction, FileCreateTransaction, FileAppendTransaction, Hbar } = require("@hashgraph/sdk");

async function main() {
    const client = Client.forTestnet();
    client.setOperator(AccountId.fromString(process.env.MY_ACCOUNT_ID), PrivateKey.fromString(process.env.MY_PRIVATE_KEY));

    // Here,  bytecode that we will get after compiling BettingGame.sol file
    const contractBytecode = '60806040526305f5e10060026000509090553480156200001f5760006000fd5b506040516200112238038062001122833981810160405281019062000045919062000130565b5b82600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050620001de56620001dd565b6000815190506200012981620001bf565b5b92915050565b60006000600060608486031215620001485760006000fd5b6000620001588682870162000118565b93505060206200016b8682870162000118565b92505060406200017e8682870162000118565b9150505b9250925092565b600062000196826200019e565b90505b919050565b600073ffffffffffffffffffffffffffffffffffffffff821690505b919050565b620001ca8162000189565b81141515620001d95760006000fd5b5b50565b5b610f3480620001ee6000396000f3fe6080604052600436106100955760003560e01c8063c09cec7711610059578063c09cec7714610177578063d24257c0146101a3578063dfbf53ae146101cf578063e349fe3a146101fb578063fb47e3a21461023957610095565b806310fe7c481461009b578063136f1016146100b75780634664611e146100f55780634fcb4de2146101215780638b930f151461014b57610095565b60006000fd5b6100b560048036038101906100b09190610af1565b610265565b005b3480156100c45760006000fd5b506100df60048036038101906100da9190610ac6565b6104d5565b6040516100ec9190610c92565b60405180910390f35b3480156101025760006000fd5b5061010b6104fa565b6040516101189190610d32565b60405180910390f35b34801561012e5760006000fd5b5061014960048036038101906101449190610af1565b610503565b005b3480156101585760006000fd5b506101616105b3565b60405161016e9190610c76565b60405180910390f35b3480156101845760006000fd5b5061018d6105d9565b60405161019a9190610c76565b60405180910390f35b3480156101b05760006000fd5b506101b96105ff565b6040516101c69190610d32565b60405180910390f35b3480156101dc5760006000fd5b506101e5610608565b6040516101f29190610c76565b60405180910390f35b3480156102085760006000fd5b50610223600480360381019061021e9190610ac6565b61062e565b6040516102309190610d32565b60405180910390f35b3480156102465760006000fd5b5061024f610649565b60405161025c9190610c76565b60405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061030e5750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561034f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034690610d11565b60405180910390fd5b60026000505434141515610398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038f90610cf0565b60405180910390fd5b600160005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561042a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042190610ccf565b60405180910390fd5b80600060005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055506001600160005060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b60076000505481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610595576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058c90610cae565b60405180910390fd5b8060076000508190909055506105af61066f63ffffffff16565b5b50565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026000505481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006000506020528060005260406000206000915090505481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060076000505460006000506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546106e99190610d60565b9050600060076000505460006000506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050546107659190610d60565b90506000610778836108c663ffffffff16565b9050600061078b836108c663ffffffff16565b9050808210156107fd57600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108b1565b8181101561086d57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108b0565b6000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6108bf6108ee63ffffffff16565b505050505b565b600060008212156108e057816108db90610e4c565b6108e2565b815b90506108e9565b919050565b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a2857600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002600050549081150290604051600060405180830381858888f193505050501580156109b3573d600060003e3d6000fd5b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002600050549081150290604051600060405180830381858888f19350505050158015610a22573d600060003e3d6000fd5b50610a93565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610a91573d600060003e3d6000fd5b505b5b56610efd565b600081359050610aa981610ec7565b5b92915050565b600081359050610abf81610ee2565b5b92915050565b600060208284031215610ad95760006000fd5b6000610ae784828501610a9a565b9150505b92915050565b600060208284031215610b045760006000fd5b6000610b1284828501610ab0565b9150505b92915050565b610b2581610df5565b82525b5050565b610b3581610e08565b82525b5050565b6000610b49601e83610d4e565b91507f4f6e6c79204361726f6c2063616e207375626d69742061206e756d626572000060008301526020820190505b919050565b6000610b8a601f83610d4e565b91507f506c617965722068617320616c726561647920706c616365642061206265740060008301526020820190505b919050565b6000610bcb602183610d4e565b91507f42657420616d6f756e74206d7573742062652065786163746c7920312048424160008301527f520000000000000000000000000000000000000000000000000000000000000060208301526040820190505b919050565b6000610c32602083610d4e565b91507f4f6e6c7920416c696365206f7220426f622063616e20706c616365206265747360008301526020820190505b919050565b610c6f81610e41565b82525b5050565b6000602082019050610c8b6000830184610b1c565b5b92915050565b6000602082019050610ca76000830184610b2c565b5b92915050565b60006020820190508181036000830152610cc781610b3c565b90505b919050565b60006020820190508181036000830152610ce881610b7d565b90505b919050565b60006020820190508181036000830152610d0981610bbe565b90505b919050565b60006020820190508181036000830152610d2a81610c25565b90505b919050565b6000602082019050610d476000830184610c66565b5b92915050565b60008282526020820190505b92915050565b6000610d6b82610e15565b9150610d7683610e15565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615610db157610db0610e96565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018213600084121615610de957610de8610e96565b5b82820390505b92915050565b6000610e0082610e20565b90505b919050565b600081151590505b919050565b60008190505b919050565b600073ffffffffffffffffffffffffffffffffffffffff821690505b919050565b60008190505b919050565b6000610e5782610e15565b91507f8000000000000000000000000000000000000000000000000000000000000000821415610e8a57610e89610e96565b5b8160000390505b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b565b610ed081610df5565b81141515610ede5760006000fd5b5b50565b610eeb81610e41565b81141515610ef95760006000fd5b5b50565bfea26469706673582212209143b4b6b02ee700fca3ed0c089214f0947100a24e982f40f993e89f0f6f6fe464736f6c63430008000033';
    const fileCreateTx = new FileCreateTransaction()
        .setContents(contractBytecode)
        .setMaxTransactionFee(new Hbar(2)); // fee 

    const fileCreateSubmit = await fileCreateTx.execute(client);
    const fileCreateRx = await fileCreateSubmit.getReceipt(client);
    const bytecodeFileId = fileCreateRx.fileId;

    const contractInstantiateTx = new ContractCreateTransaction()
        .setBytecodeFileId(bytecodeFileId)
        .setGas(1000000) // gas value
        .setMaxTransactionFee(new Hbar(10)); // adjust fee as needed

    const contractInstantiateSubmit = await contractInstantiateTx.execute(client);
    const contractInstantiateRx = await contractInstantiateSubmit.getReceipt(client);
    const contractId = contractInstantiateRx.contractId;

    console.log(`The new contract ID is: ${contractId}`);
}

main().catch(err => {
    console.error(err);
});
