// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PSToken is ERC20 {
    address public minter;

    constructor() payable ERC20("Rugalx", "XYZ-Coin") {
        minter = msg.sender; //設定發幣的管理員
    }

     modifier restricted(string memory message) {
        require(msg.sender == minter, message);
        _;
    }

    function mint(address account, uint256 amount) public restricted("sorry, only sender can mint") {
        _mint(account, amount);
    }

    event MinterChanged(address indexed from, address to);

    function transferMinterRole(address newHolder)
        public
        restricted("only minter can pass minter role to others")
        returns (bool)
    {
        minter = newHolder;
        emit MinterChanged(msg.sender, newHolder);
        return true;
    }
}
