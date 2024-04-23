# Hedera Betting Game

## Description
This project implements a smart contract on the Hedera Hashgraph network for a betting game between two players with a moderator.


### Prerequisites
- Hedera Testnet Account (Sign up at [Hedera Portal](https://portal.hedera.com/))

### Installation
1. Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/maurya050/HederaBettingGame/
   cd HederaBettingGame

2. Install necessary dependencies:
   ```bash
    npm install

4. Install the Hedera Hashgraph SDK:
    ```bash
    npm install --save @hashgraph/sdk dotenv

6. Create a .env file with your Hedera account credentials:
    MY_ACCOUNT_ID
    MY_PRIVATE_KEY
    MY_PUBLIC_KEY
    ALICE_ACCOUNT_ID
    ALICE_PRIVATE_KEY
    ALICE_PUBLIC_KEY
    BOB_ACCOUNT_ID
    BOB_PRIVATE_KEY
    BOB_PUBLIC_KEY
    CAROL_ACCOUNT_ID
    CAROL_PRIVATE_KEY
    CAROL_PUBLIC_KEY

7. Smart Contract in BettingGame.sol.
    - Use the Remix IDE to compile.
    - Use contract **bytecode**  getting after compilation from Remix in the deploy.js

8. Install the Solidity compiler via npm to run on terminal (Alternative for the 5th step)
   * to compile the BettingGame.sol file
   * it will give '(contracts_BettingGame_sol_BettingGame.bin)' file with bytecode in it.
    ```bash
      npm install -g solc
      sudo snap install solc
      solcjs --bin contracts/BettingGame.sol
    
9. Now, For saving the **bytecode**, redirecting the output to a file for easier access (it will give BettingGameBytecode.txt)
   ```bash
     solcjs --bin contracts/BettingGame.sol > BettingGameBytecode.txt

10.
   
   * Bytecode string is used in the deployment script to create a file transaction and then a contract on the Hedera network.
   
   * Now, using the deploy script, we are executing the script to deploy our contract to the Hedera testnet. The deployment involves creating a file on Hedera to store the contract bytecode and then using that file ID to instantiate the contract.
   
   * Once your contract is deployed, you can interact with it using Hedera's SDK functions for contract calls and executions.
   
   * Now, we'll need the contract ID obtained during the deployment process. and we will use this ID to create and send transactions or calls to the contract functions defined in BettingGame.sol, such as placeBet, submitNumber.

11. Deploy the contract:
   ```bash
    node scripts/deploy.js

12. Interact with the contract:
    ```bash
    node scripts/deploy.js

