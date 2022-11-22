pragma solidity ^0.5.16;

contract SecretNumber{

    // unit == unit256 兩者是一樣的 unit 算是縮寫
    uint data;
    function getData() public view returns (uint){
        return data;
    }
    function setData(uint _data) public {
        data = _data;
    }
    function setDataForMe(uint _data) public {
        data = _data + 100;
    }

}