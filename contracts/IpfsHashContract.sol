pragma solidity ^0.5.0;
    contract ipfsHashContract {
        
        string public ipfsHash = "#Que34233hhjj3fsd5";
        
        function setHash(string memory x) public {
            ipfsHash = x; 
            
        }
        
        function getHash() public view returns (string memory x) {
            return ipfsHash; 
            
        }
    }
