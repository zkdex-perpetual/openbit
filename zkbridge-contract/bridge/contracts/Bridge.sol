pragma solidity ^0.7.5;

import "./SafeERC20.sol";
import "./ReentrancyGuard.sol";
import "./IERC20.sol";

contract Bridge is ReentrancyGuard {
    address public owner;
    //mapping(address => mapping(uint32 => address)) public token;
    //local token -> zToken
    mapping(address => address) private tokenToZtoken;
    //tokenId -> local token
    mapping(uint32 => address) private tokenIdToToken;
    //baseToken=address(1)
    address public operator;

    event Deposit(address token, uint256 amount, address zksyncAddress, uint32 chainId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyOperator() {
        require(msg.sender == operator, "Only operator");
        _;
    }

    function transferOwner(address _owner) public onlyOwner() {
        owner = _owner;
    }

    function transferOperator(address _operator) public onlyOperator() {
        operator = _operator;
    }

    function addToken(uint32 tokenId, address _zToken, address _token) public onlyOperator() {
        require(tokenToZtoken[_token]==address(0),"token is exist");
        require(tokenIdToToken[tokenId]==address(0),"tokenId is exist");
        tokenToZtoken[_token] = _zToken;
        tokenIdToToken[tokenId] = _token;
    }

    constructor() public {
        owner = msg.sender;
        operator = msg.sender;
    }

    function getChainId() internal view returns (uint32) {
        uint256 id;
        assembly {
            id := chainid()
        }
        return uint32(id);
    }

    function depositETH(address _zkSyncAddress) external nonReentrant payable {
        require(tokenToZtoken[address(1)] != address(0), "wrong token!");
        require(msg.value > 0, "M");
        uint32 chainId = getChainId();
        emit Deposit(tokenToZtoken[address(0)], msg.value, _zkSyncAddress, chainId);
    }

    function depositERC20(
        address _token,
        uint128 _amount,
        address _zkSyncAddress
    ) external nonReentrant {
        require(tokenToZtoken[_token] != address(0), "wrong token!");
        require(_amount > 0, "amount must > 0!");
        SafeERC20.safeTransferFrom(IERC20(_token), msg.sender, address(this), _amount);
        uint32 chainId = getChainId();
        emit Deposit(tokenToZtoken[_token], _amount, _zkSyncAddress, chainId);
    }

    function withdraw(uint32 _tokenId, address toAddress, uint104 amount) onlyOwner public {
        require(tokenIdToToken[_tokenId] != address(0), "wrong token!");
        address token = tokenIdToToken[_tokenId];
        if (token == address(1)) {
            safeTransferETH(toAddress, amount);
        } else {
            SafeERC20.safeTransfer(IERC20(token), toAddress, amount);
        }
    }


    function safeTransferETH(address to, uint amount) internal {
        (bool success,) = to.call{value : amount}(new bytes(0));
        require(success, "Transfer failed");
    }

    function getToken(uint32 tokenId) public view returns (address){
        return tokenIdToToken[tokenId];
    }
}