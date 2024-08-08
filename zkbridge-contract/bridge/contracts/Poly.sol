// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import "./IERC20.sol";

pragma abicoder v2;

contract Poly {
    function getTokenInfo(IERC20[] memory tokens) external view returns (string[] memory names, string[] memory symbols, uint8[] memory decimals) {
        uint256 length = tokens.length;
        names = new string[](length);
        symbols = new string[](length);
        decimals = new uint8[](length);

        for (uint256 i = 0; i < length; i++) {
            names[i] = tokens[i].name();
            symbols[i] = tokens[i].symbol();
            decimals[i] = tokens[i].decimals();
        }

        return (names, symbols, decimals);
    }
}
