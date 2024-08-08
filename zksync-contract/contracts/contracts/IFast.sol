// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IFast {
    function verify(bytes memory pubData, uint256 pubdataOffset) external view returns (bytes memory);
    function set(bytes memory pubData) external;
    function getInfo(bytes memory pubData) external view returns(uint32, uint128, uint32);
}