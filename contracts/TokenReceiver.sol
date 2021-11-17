// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title TokenReceiver
 * @dev Very simple example of a contract receiving ERC20 tokens.
 */
contract TokenReceiver {
    IERC20 private _token;

    event DoneStuff(address from);

    /**
     * @dev Constructor sets token that can be received
     */
    constructor(IERC20 token) public {
        _token = token;
    }

    /**
     * @dev Do stuff, requires tokens
     */
    function doStuff() external {
        address from = msg.sender;
        _token.transferFrom(msg.sender, address(this), 1000);
        emit DoneStuff(from);
    }
}
