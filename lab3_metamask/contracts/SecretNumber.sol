pragma solidity ^0.5.16;
contract SecretNumber {
    uint256 data;
    function getData() public view returns (uint256){
        return data;
    }
    function setData(uint256 _data) public {
        data = _data;
    }
}