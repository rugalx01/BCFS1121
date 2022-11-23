pragma solidity ^0.5.16;

contract EtherTransfer {
    string public status;

    function sendEther() public payable {
        status = "function called";
    }

    function() external payable {
        status = "this is a fallback function";
    }
}