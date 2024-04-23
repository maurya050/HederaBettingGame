# Hedera Betting Game

## Description
This project implements a smart contract on the Hedera Hashgraph network for a betting game between two players with a moderator.


### Prerequisites
- Hedera Testnet Account (Sign up at [Hedera Portal](https://portal.hedera.com/))

### Installation
1. Clone the repository and navigate into the project directory:
   ```bash
   git clone [Your Repo Link]
   cd HederaBettingGame

2. Install necessary dependencies:
    npm install

3. Install the Hedera Hashgraph SDK:
    npm install --save @hashgraph/sdk dotenv

4. Create a .env file with your Hedera account credentials:
    MY_ACCOUNT_ID=Your-Account-ID
    MY_PRIVATE_KEY=Your-Private-Key
    ALICE_ACCOUNT_ID=Your-Alice-Account-ID
    ALICE_PRIVATE_KEY=Your-Alice-Private-Key
    BOB_ACCOUNT_ID=Your-Bob-Account-ID
    BOB_PRIVATE_KEY=Your-Bob-Private-Key
    CAROL_ACCOUNT_ID=Your-Carol-Account-ID
    CAROL_PRIVATE_KEY=Your-Carol-Private-Key

5. Smart Contract in BettingGame.sol.
    - Use the Remix IDE to compile.
    - Use contract **bytecode** from Remix in the deploy.js

6. Install the Solidity compiler via npm to run on terminal (Alternative for the 5th step)
    - npm install -g solc
    - sudo snap install solc
    - solcjs --bin contracts/BettingGame.sol 
        * to compile the BettingGame.sol file
        * it will give '(contracts_BettingGame_sol_BettingGame.bin)' file with bytecode in it.
    #### Now, For saving the **bytecode**, redirecting the output to a file for easier access
    - solcjs --bin contracts/BettingGame.sol > BettingGameBytecode.txt
        * it will give BettingGameBytecode.txt

* Bytecode string is used in the deployment script to create a file transaction and then a contract on the Hedera network.

* Now, using the deploy script, we are executing the script to deploy our contract to the Hedera testnet. The deployment involves creating a file on Hedera to store the contract bytecode and then using that file ID to instantiate the contract.

* Once your contract is deployed, you can interact with it using Hedera's SDK functions for contract calls and executions.

* Now, we'll need the contract ID obtained during the deployment process. and we will use this ID to create and send transactions or calls to the contract functions defined in BettingGame.sol, such as placeBet, submitNumber.

7. Deploy the contract: 
    node scripts/deploy.js

8. Interact with the contract:
    node scripts/deploy.js

