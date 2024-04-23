// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BettingGame {
    mapping(address => uint256) public numbers;
    mapping(address => bool) public hasBet;
    uint public betAmount = 100000000; // 1 HBAR (in tinybars)
    address public alice;
    address public bob;
    address public carol;
    address public winner;
    uint256 public winningNumber;

    constructor(address _alice, address _bob, address _carol) {
        alice = _alice;
        bob = _bob;
        carol = _carol;
    }

    function placeBet(uint256 number) public payable {
        require(msg.sender == alice || msg.sender == bob, "Only Alice or Bob can place bets");
        require(msg.value == betAmount, "Bet amount must be exactly 1 HBAR");
        require(!hasBet[msg.sender], "Player has already placed a bet");
        
        numbers[msg.sender] = number;
        hasBet[msg.sender] = true;
    }

    function submitNumber(uint256 number) public {
        require(msg.sender == carol, "Only Carol can submit a number");
        winningNumber = number;
        determineWinner();
    }

    function determineWinner() private {
        // Calculate differences and convert to int256 to handle potential negative results
        int256 aliceDiff = int256(numbers[alice]) - int256(winningNumber);
        int256 bobDiff = int256(numbers[bob]) - int256(winningNumber);

        // Use the abs function to find the absolute difference
        uint256 absAliceDiff = abs(aliceDiff);
        uint256 absBobDiff = abs(bobDiff);

        if (absAliceDiff < absBobDiff) {
            winner = alice;
        } else if (absBobDiff < absAliceDiff) {
            winner = bob;
        } else {
            winner = address(0);  // It's a tie
        }
        payOut();
    }

    function payOut() private {
        if (winner == address(0)) {
            payable(alice).transfer(betAmount);
            payable(bob).transfer(betAmount);
        } else {
            payable(winner).transfer(address(this).balance);
        }
    }
    
    function abs(int256 x) private pure returns (uint256) {
        return uint256(x >= 0 ? x : -x);
    }
}
