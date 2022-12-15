// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

// Define the data types used by the contract.
struct Asset {
  string name;
  uint price;
}

struct Source {
  string name;
  uint price;
}

// Define the contract.
contract ChainlinkPriceOracle {
  // Define the assets tracked by the contract.
  Asset[] public assets;

  // Define the data sources used by the contract.
  Source[] public sources;

  // Define the mapping to store the current prices.
  mapping (string => uint) public prices;

  // Function to update the price of an asset.
  function updatePrice(string memory _asset, uint _price) public {
    // Update the price of the asset in the mapping.
    prices[_asset] = _price;

    // Log the updated price.
    emit PriceUpdated(_asset, _price);
  }

  // Function to query the current price of an asset.
  function getPrice(string memory _asset) public view returns (uint) {
    // Return the current price of the asset from the mapping.
    return prices[_asset];
  }

  // Event to log the updated price of an asset.
  event PriceUpdated(string indexed asset, uint price);
}
