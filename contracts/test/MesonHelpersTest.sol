// SPDX-License-Identifier: MIT
pragma solidity =0.8.6;

import "../utils/MesonHelpers.sol";

contract MesonHelpersTest is MesonHelpers {
  // function getSwapId(
  //   address inToken,
  //   uint128 amount,
  //   uint48 fee,
  //   uint48 expireTs,
  //   bytes4 outChain,
  //   bytes memory outToken
  // ) external view returns (bytes32) {
  //   return _getSwapId(
  //     encodeSwap(
  //       abi.encodePacked(inToken),
  //       amount,
  //       fee,
  //       expireTs,
  //       outChain,
  //       outToken
  //     )
  //   );
  // }

  // function encodeSwap(
  //   bytes memory inToken,
  //   uint128 amount,
  //   uint48 fee,
  //   uint48 expireTs,
  //   bytes4 outChain,
  //   bytes memory outToken
  // ) public pure returns (bytes memory) {
  //   return
  //     abi.encode(
  //       SWAP_REQUEST_TYPEHASH,
  //       keccak256(inToken),
  //       amount,
  //       fee,
  //       expireTs,
  //       outChain,
  //       keccak256(outToken)
  //     );
  // }

  // function decodeSwapInput(bytes calldata encodedSwap)
  //   external
  //   pure
  //   returns (bytes32, uint128, uint48, uint48)
  // {
  //   return _decodeSwapInput(encodedSwap);
  // }

  function checkRequestSignature(
    bytes32 swapId,
    address signer,
    bytes32 r,
    bytes32 s,
    uint8 v
  ) public pure {
    require(signer == ecrecover(swapId, v, r, s), "invalid signature");
  }

  function checkReleaseSignature(
    bytes32 swapId,
    address recipient,
    address signer,
    bytes32 r,
    bytes32 s,
    uint8 v
  ) public view {
    _checkReleaseSignature(swapId, keccak256(abi.encodePacked(recipient)), DOMAIN_SEPARATOR, signer, r, s, v);
  }
}
