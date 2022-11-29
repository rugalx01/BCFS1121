pragma solidity ^0.5.16;

contract Storage {
    string public data;
    event DataChanged(string newValue, uint256 date);

    function getData() public view returns (string memory) {
        return data;
    }

    function setData(string memory _data) public {
        data = _data;
        emit DataChanged(data, now);
    }
}
