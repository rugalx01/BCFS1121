pragma solidity ^0.5.16;

contract EventGenerate {
    // 設定event
    event NotifyEvent(uint256 indexed id, uint256 indexed date, string value);
    uint256 nextId;
    //這邊 functino 內的變數指定的時候需要另外再說是存在於 memory或是 storage，此範例使用的是memory
    function notifyThisEvent(string memory value) public {
        emit NotifyEvent(nextId, now, value);
        nextId++;
    }
}