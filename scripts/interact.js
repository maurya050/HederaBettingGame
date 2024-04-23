require('dotenv').config();
const {
    Client,
    AccountId,
    PrivateKey,
    ContractCallQuery,
    ContractExecuteTransaction,
    Hbar
} = require("@hashgraph/sdk");

async function main() {
    const client = Client.forTestnet();
    client.setOperator(AccountId.fromString(process.env.MY_ACCOUNT_ID), PrivateKey.fromString(process.env.MY_PRIVATE_KEY));

    const contractId = '0.0.123456'; //contract ID

    //placing a bet by Alice
    await placeBet(client, contractId, process.env.ALICE_ACCOUNT_ID, process.env.ALICE_PRIVATE_KEY, 500000);
    
    // placing a bet by Bob
    await placeBet(client, contractId, process.env.BOB_ACCOUNT_ID, process.env.BOB_PRIVATE_KEY, 600000);
    
    // Carol submitting the moderator's number
    await submitNumber(client, contractId, process.env.CAROL_ACCOUNT_ID, process.env.CAROL_PRIVATE_KEY, 550000);

    // Fetching the result
    await fetchResult(client, contractId);
}

async function placeBet(client, contractId, accountId, privateKey, number) {
    const accountPrivateKey = PrivateKey.fromString(privateKey);
    const tx = new ContractExecuteTransaction()
        .setContractId(contractId)
        .setGas(100000)
        .setFunction("placeBet", ["uint256"], [number])
        .setPayableAmount(new Hbar(1)) // Sending 1 Hbar as a bet
        .freezeWith(client)
        .sign(accountPrivateKey);

    const response = await tx.execute(client);
    const receipt = await response.getReceipt(client);
    console.log(`Bet placed by ${accountId}, status: ${receipt.status.toString()}`);
}

async function submitNumber(client, contractId, accountId, privateKey, number) {
    const accountPrivateKey = PrivateKey.fromString(privateKey);
    const tx = new ContractExecuteTransaction()
        .setContractId(contractId)
        .setGas(100000)
        .setFunction("submitNumber", ["uint256"], [number])
        .freezeWith(client)
        .sign(accountPrivateKey);

    const response = await tx.execute(client);
    const receipt = await response.getReceipt(client);
    console.log(`Number submitted by moderator ${accountId}, status: ${receipt.status.toString()}`);
}

async function fetchResult(client, contractId) {
    const query = new ContractCallQuery()
        .setContractId(contractId)
        .setGas(100000)
        .setFunction("winner");

    const response = await query.execute(client);
    const result = response.getString(0);
    console.log(`The winner is: ${result}`);
}

main().catch(error => {
    console.error("Error:", error);
    process.exit(1);
});
