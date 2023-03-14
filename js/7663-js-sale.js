const CONTRACT_ADDR = "0xfa1d36C234306c6eb273c3Cd30A159BA899982b9";

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"MassAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"OPERATOR_FILTER_REGISTRY","outputs":[{"internalType":"contract IOperatorFilterRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costWL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeMintClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintWhitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostWL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerTx","type":"uint256"}],"name":"setMaxPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPublicMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWLMintState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var contract1 = null;
var account = null;

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var WL = null;
var cost = null;
var costWL = null;

const decrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = "";
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

const incrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

/*
// Retrieve values from contract on page load
window.addEventListener('load', async () => {
    const web3 = new Web3(window.ethereum);
    const contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR);
    const supply = await contract1.methods.totalSupply().call();
    console.log(supply);

    document.getElementById("tokens_available").innerHTML = supply + " / " + 666;
    })
*/

// WHITELIST CHECK
const wl_check = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
			document.getElementById("wl_check").innerHTML = "CHECKING..."
			try {
	  			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
				  account = accounts[0];
  
				  const web3 = new Web3(window.ethereum);
				  contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: account });

          		var chAccount = web3.utils.toChecksumAddress(account);
			    var addressIndex = signatures.indexOf(chAccount);

			  if (addressIndex != -1) {
				  addressSign = signatures[addressIndex + 1];
				  }
			  else
				  {
				  addressSign = signatures[0];
				  }

				const whitelisted = await contract1.methods.isValidData(account, addressSign).call();

				if (whitelisted == true) {
					alert("You are whitelisted!")
					console.log("WHITELISTED");
					document.getElementById("wl_check").innerHTML = "WHITELISTED";
					}
				else
					{
					alert("You are not whitelisted!")
					console.log("NOT WHITELISTED");
					document.getElementById("wl_check").innerHTML = "NOT WHITELISTED";
					}
				}
			catch(e)
				{
				alert("Error: " + e.message)
				console.log("Error: ",e)
		  		document.getElementById("wl_check").innerHTML = "CHECK WHITELIST";
		  		}
		}
	}

// PUBLIC MINT
const mint = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
      if (_mintAmount > 0) {
        var result = "";
        var success = "";
        document.getElementById("tokens_available").innerHTML = "MINTING...";
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const account = accounts[0];

          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});

          const cost = await contract.methods.cost().call()
          const value = (cost * _mintAmount)

          const gas = Math.round( await contract.methods.mint(_mintAmount).estimateGas({value: value.toString(), from: accounts[0]}) * 1.1 )
          result = await contract.methods.mint(_mintAmount).send({value: value.toString(), from: accounts[0], gas: gas})

          success = document.getElementById("mint_button").innerHTML = "MINT";
          document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          }
        catch(e) 
          {
          alert("Error: " + e.message);
          console.log("Error: ",e);
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "666";
          }
        }
    }     
}

// WHITELIST MINT
const whitelistMint = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	
	var result = "";
	var success = "";
	document.getElementById("tokens_available").innerHTML = "MINTING...";

	try {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		const account = accounts[0];

		const web3 = new Web3(window.ethereum);
		const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account});
			  
		var chAccount = web3.utils.toChecksumAddress(account);
		var addressIndex = signatures.indexOf(chAccount);

		if (addressIndex != -1) {
			addressSign = signatures[addressIndex + 1];
			}
			else
			{
			addressSign = signatures[0];
			}
			  
		value = (costWL * 1);

		const gas = Math.round( await contract.methods.mintWhitelist(addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 );
		result = await contract.methods.mintWhitelist(addressSign).send({value: value.toString(), from: account, gas: gas});

		success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
		} 
		catch(e)
		{
        alert("Error: " + e.message);
        console.log("Error: ",e);
		document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "666";
		}
	}
}

// CONNECT
const connect = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    
    if (accounts.length > 0) {
      	document.getElementById("connect_button").innerHTML = accounts[0].substr(0,10) + "..." + accounts[0].substr(-4) ;

  	  	const web3 = new Web3(window.ethereum);
  	  	const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
		maxSupply = await contract.methods.maxSupply().call();
      	totalSupply = await contract.methods.totalSupply().call();
	    const paused = await contract.methods.paused().call();
	    WL = await contract.methods.whitelistMintEnabled().call();
	    maxPerTx = await contract.methods.maxPerTx().call();
	    cost = await contract.methods.cost().call();
      	costWL = await contract.methods.costWL().call();

      if (paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
	  	else { document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER WALLET"; document.getElementById("price").innerHTML = "1 FREE, THEN 0.013Ξ EACH"; }

    //document.getElementById("tokens_available").innerHTML = "SOLD OUT";
	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "666";
	  document.getElementById("price").innerHTML = "WL 1 FREE, THEN 0.013Ξ EACH";
	  }
    else { document.getElementById("connect_button").innerHTML = "Connect wallet"; }
  }
  return false;
}

connect();

document.getElementById('connect_button').onclick = connect;
document.getElementById('wl_check').onclick = wl_check;
document.getElementById('mint_button').onclick = mint;
document.getElementById('mint_free').onclick = whitelistMint;

const signatures = [
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  '0x4616aE1589F8c62Ecf978c6660F08679089eB7Af',
  '0x325060dd950f34088fe40b33b339e02eaf2c806d3edc5664fbd6f46e434c5c8e5ce3bc5d3223b473d29aa9ff7ae2d105105aa067fcbf586facf5c92935ba02a61b',
  '0x04e8b3938D1dae373c415AA2d79Cc0B1A3B1a40d',
  '0x602c5f0e0c27be2d914f56cc255318297bd37160c08cb93e6482f3b7a1632fc310f69dfb2a4036f72ae196ff3e70e9b7ac17ff77f034cfa7c8d454a0e833bc7d1c',
  '0x4E03C2Bf6584Ac074b017E2468349Ffd25354359',
  '0xa35e76423c8bd55659fce4a29cc983269af37e974b562daad05ac3feb1f72cba205fac5028f3f40e55a8e4ef1e0e5668bfdbd936951a3d492eb889ce8234bfb31c',
  '0xF2edD6Dd7E64bE128E7008d4E8Ae83A55cDE6250',
  '0x8131f0f01a4d496376f2a08e4581730866ce83c3854e2de718f2796fa9c0ccbf516adc9a9174442ad68541c7b4d904aaefdd258997e804905c4a95e5265da1d41c',
  '0xf889f946B81635C05102F4549dB7dae1b6E0c0B5',
  '0x5c890f2bc4b84e37568d93b010612c73be53df2aa12bc807f0c55e5128453d625f7cb69438f1ffae26defa186b6d0b8ae0d81d914ec7451717b2b540cdd6d5121b',
  '0x1C259963FEd2b08cc649799ed88194AA044f459E',
  '0x5e022b716b9d1d451c9fcd11b40ed152c07c619ad1d3cb04e0e404ea965252e176c575a9571bd139a67000fb1c5f48f0956f295f5f5deb2aa5bfacc8b52eaab21b',
  '0xbe946B44a2A775E2886b106cfcC0f6dF2D3bE135',
  '0xe6fb42a050c2bfff24478890da4425fbaec7c99d487bcadfb206ea022d8adb2a552c6c961bbc9218a7b21c06c97ff86f6ace8ffa1a80494175371496ee64d0241c',
  '0x70069C30CbED62eD40Eb8813566A7a7D26A42D4C',
  '0x6fde85df0357c6c337f52a7ec77060f8f8254832e90660bf9f8e0500cfb6cf424ef238707e766dc3b4c45a0bb94fd5a0235c59728edcdb83a78acacba6cded651c',
  '0x6ed1F9d9086Ee89e6c787dAfB52f7247596155D6',
  '0x52abd410ce35a4da1142967e9cd17e29b6e11b1a4c916375b8cdcaee5c4e08a57320b115fda1fedc1baeaf3bfd2e77ab2d49dfd729e346bd52d65179f05072d81c',
  '0x868B8F9E8f5dD286A228Cbb68e9C189Eadb18edb',
  '0xd8fb97645f59fa4fd3df69349b995164d804a9e3963e263d40980c7c84bcb74d4d006f2e5bc34c6d1b101afe0cc07fbcfe377a1730fa58898eb532318ca723dd1b',
  '0xe9C9acd743A96A270C297749Aac5990354655804',
  '0xedb2a9570a88c96014318ade745f3f4fa14aa3044f36a674bfeab7ff75dad9ac6d1bdf4d879aeef454a0e2482fa364461fd145b93b85b2b22bc770d4f020d1891b',
  '0xFaF81e37ECe12E43127C75d7C86053b14fbf673D',
  '0x66d8adbd92dd0b2dc32abddd5a915124099629a7e3432d03b953b668970f7aa16d5fbe451d31b470225ba81b3741909da7c66eb749f39e9efa57d036c89d2ef91c',
  '0x2249EC7722e89d32755F1C18d85c82D4AE7BdbDe',
  '0x2ec173cba9839d8bc26a3f40661a8674e6882dcbe29f0ceb41e6338e4b78841e5fa322f4e5971b838184639aca4daf86b1b9648cee9b05df2953dc91aa2ff7fa1b',
  '0x8244D12a0605F44f630577229217043086f2ED5b',
  '0xbda0784f35e75debd44a3d8e5e6b378dd65284df971e55154e6c9aa6d2ddc5c40680c4d4faebc553364bd9b1c8357b0a9f37d13e13f973f01a126d53ab0a0b231b',
  '0xC3685CD16c1364950a27EA9748A72277Bb440b90',
  '0xb6a9b23edd7a84620366979f438d153a3d44563f3061c3e91e9444a0dbfa3189317038b582831906b7162296ed547507118abf86df95616e056bd4f3881936a61b',
  '0xaA7997d518d58daB94a9B199f1500470f83e27eF',
  '0x4a3da8f80054a0a1976cf10eaada8baf1e3b8a0d9693ffb9d91fd7ff61a8d53152837d349b8257b78c0d6dd9854eba28dda8fd435ae1c67abefbb99e774a5f491c',
  '0x4FAD7b11044f14d252f73791e1b2EB3028741dB1',
  '0x7b53eb663e764e69b0a9badee57dc11b46e9f2880c9403de5d7d6c6a1072af96546d39f48e92007a6eca8abc3a4e991ebb94ec7e3bb87cd4eb900bd1a6d6b2d51c',
  '0xBCF0E5A35033bF5c69552caDe341845010673b88',
  '0x254f48b99addc23f946a07377792e1cc7d329a88f17ccb8fc67984ef9548a2281361e95d8e9cd051f28322304ead58822026cefc40eb8154062e679372d219891b',
  '0xC0982b065b57630252D953aBF3dB93b17C23F19e',
  '0xc58a6cc56f00be0385fe673938773399ea5bc621e02144c9d8f88ad0f086c7ba6a9f27491de9ae0e1dc469154005b0aaa0880a6ea3b021b9753faf3bfcf9db3e1c',
  '0xde70e55B0E127FDCE880eD218B7d6EBF60fBEFb7',
  '0x164ec5f3487611542dcbd725f620e4290282b51450960ceb329bd5f78280a66228a188918a234e87ef37de3ce81adb319d9c68a9547897d009a2d5696f1409161c',
  '0xBAB20AA67D1A1b99A4d1044f932B6b2CE93e004e',
  '0xae6d4e20d2e697d540222bdad24d9072d6d99932a60798b4cabd81b0c048a0e67c5fdba4fbb79d37bbeb702d6fd487a1bcd1c2508fb46368c175c4b516a984a81c',
  '0x05F251c52b27858c544fB2E311576Ee7773b57a0',
  '0x47d048874d1d904f7d7d298600e6ea6dbf88a5a3df29704165d1ba1f1326d00267552a7d98b1d7478fc7a6e41cdd77e350265c752b963afc640345b2ea12327a1c',
  '0xa1b5f1ac8220b45ccE4CcEd215035d5Cb58a5F9c',
  '0xdd42e38828d57d48437ac57268592f58e9add69f95580cc0bc33ddadd504bbb97f0ee98ad11b689af46377451d59c6a52405480fa2163c0bdeb06fee7a1b10aa1b',
  '0x93c85e3a7Bd7199b43afE65A560D25cfa73a4c70',
  '0x79cbdc3e196e7fe1532e8c50b42d0bc37ef0fe836f60f89edd4278dfee93313106b2a7f9f61333775e886960491b19195d6a56bd316c5e0c4f0989ea6cddc1131c',
  '0x27648F043dB2D513ae27dC3CeA1bC58684d746AA',
  '0x608608ae6c4ec3e49ec9fab51df84e8231deb492142157fc7f499351542ad3c65288b0a285f5d501b96be005cea080502579371cb06226c4f214664fcdad8d671c',
  '0xf3b359F143E1DaF09A20dE456702c550AAfE5e18',
  '0xa45028dae3bb1dc7d197d11b94537ea272e87b378baab676d3c6517a9d3026e736a6fdae38263477593db07c773ca794ecf9b1746af89944bada6e7a799378871b',
  '0xE427a65F57301db0796c5eCEf55fbb4222265D7b',
  '0xfd8e28911fe733f0619ec4e6f64c0314aa4e887e6f5d34be7f6b17bc0524ead36b1d98519bcf84ce973a487c1d80f7d9663e70e8a1dc88aaccc6698de5a41c611c',
  '0x34DA12C553CaabEf7CAf9CC0FB4beC278D352823',
  '0xfddd9d30d4e3712e7b7d5b8fff541c901b971a3b143416aae8139b5fa44f81d333e6cf7d872ae1d8282b6f4829cb66228c7cf49b978d7ec3efd06c9d5c422d7b1b',
  '0xd5a15035d39a3B13CA0450B9737758ceeF9DF053',
  '0xd32f0b15ac30e416177f4b731e2cbfc49259e10f2928a15e3515f3259ef035906aac6fc8e54c90cf12a1771921a33c1b8f5820073f979e0e026878c8163870f11b',
  '0x24D814c03174eeb9204C171cD89b4b5F6eBB11b8',
  '0xc8800233d031d88a35514023849e486d7ee370b59d5f61d84e5e2ff07d069ce72b3fbf004cde4c153cc5de773beed86c788a42e6ea59360e6d15583af0d22d261b',
  '0xE9a30aA19C7342C02741742Ccf20FE1823eE53b7',
  '0x75b71ad83910d5ff1000669fdbf2fd2f87048628e2a79e158a5f58d5c53ff2841492294a88919510ba1f969499b8e2fa49ed9824c1196e245388dd00b1d481891b',
  '0x9Fef5892be1c331426aeb4E6E32AAc3718f96e87',
  '0x6baafc76bf213f78873def5b5f2db5676a19b961a0b06fc66b7be5a03cdf26672c4430b0fe756018e5678e8a39ddfb4fcbc637ff54024af759488cd4295d66691b',
  '0x72EaBd6c7d1285b03C9E365BBc26A636ee83Ef13',
  '0x9f44448fb12d4e65c3d68385d61596fe178616abe4ab3077a7ee2d50780267cf6dc33dbd021e4245cc4c102168465d31045400ff173ead3da560340ba1bbb0381b',
  '0x28D61a4EC00f0E6fd02fC6E08a3f8e141eF8e7Ad',
  '0xd86846881d4c5bba5ece5c12c783f1d6bbb2e8ee94e0c314f5120d21a0d6e9a11bbac2dc6df7461d6cb8a30dc3b5699eab58b313873bbcdeeca74246b19ff7a61b',
  '0xCFc2b17B8414425DCDcb6a88B1162272C7ca9720',
  '0x9cfe6592eae257d153750836990b072a9ea7b4be265bc7f16fc22fa2e68508482dafccf965ca1610f1dcec87f40a72c08f6d2a197882d74ceef3e378292f98431c',
  '0xDC387254d253D347e17743614116427FeA164959',
  '0xb7e47d059d72e2b38a7437a49ca7eee606c2e10ba50d4ccfbb84a5a5531ef6eb49226a8f40d588096a590a03421340665646cdda39b5fc842b085ef2c43aaa591c',
  '0x6E98e46DeD3E044fD41814bD3Eb2bFca14A94846',
  '0xe2e5546ec35d261541e45615b326044f8a9122665e517c89e182c6c64ce69e625dd48a30841928d26ae1c55c29ab9b144e8a74c235ac5c9f2d87622905af09d41b',
  '0x1939fF2E9e148b8C59f2CD31ca991147CC057c6b',
  '0x056769283216e0dfa70658dba5e0b94164596e65eb5d79b1976f9f3cbbd217f36273adc2785f1184c1a9b009780e4e3d1ccc658dcb1069d4bd27e7d3cc37342e1b',
  '0x581cA9E320e6f020D1a362A2D6Ffc62C3eb8Fa86',
  '0x27793476fa1948ed875860d0755d844b4b55bd4aaeda857039b42abda5abe5b76cceb1ceef2db9f7139615fe8b89475d590a8b9f5a766818c0f3822d610245bd1c',
  '0xcDA157106dFa6CACFd2b3BD7b8C89D108935a13e',
  '0xab0cc5a30b6c02e091df25cea62d6a61def135a0ba05aad7afd1236a4166602f3462ffefc2b34dbd8661c52c746ca79e13e1822aaf4268a24da0c7253ef656b21b',
  '0xf024F829A925e9411947e4134e9b2e69348e2250',
  '0x13f7099d97d48c7d6f7d59367cfc542b531d38f67db718e79d792c273e5e008e1c2db885874fec13ce14e0fbc7b8e917f5216169521a7c910c84095cc14e642c1b',
  '0x299c51B2039A0a74bD1BAacF7AB71a04E30f53Bf',
  '0x56eec396146fc907969264f12267f2da8fe05cec435a76c038d4421abec95bb8286da0266c6a0c1c7822bb691f82f86c1b3bdc9bb4526905c55ea71372993c061b',
  '0x19beBCAdf35FcbBCad2F67D0f8cb8a5580Cd220d',
  '0x776b59443b2731fb03d6e2480f3a548d986305cba414037d015333fb60649e80470ae106c1891a70270cef2314633f151891b8d2ec71971f39ac378febab749a1b',
  '0x6B4E747B19857F50c7B633e64F5c7AF54e2a2197',
  '0x04fcd15ea0dc3157b93d5c14eae53b15cfea850e5816136e3e3ce3b8dc9b083b458b9e95b4d8e16bcb70f176f40ca445d85e4b74b139ce4a2a061faa0c8823671c',
  '0x807700DbB7fb7F21303E6fCe37278b33B0dc819e',
  '0xc98fbf1a8f003c447126e1fffa4aa40c1404932022a3a8752ae1e63fc8dad33d2a0186713175405ffb5c35abcb7aed13158af50444a2f381c15ff2e96ea1e40c1c',
  '0xFe3a4092909156Ba8BfC5368c778D4F5A22c42FA',
  '0xcc1abb6b41399f842d0c680f49de9de518de546bf90b90442e5ce105e47cfb3221375c3669b9b3a33636d622902e5bbcc87221d12fbfb34ea3ca1606995b834f1c',
  '0x261385D67Aa3592570aa9fB1ae15a478Ef75ADcc',
  '0x3004312afe62081a168094d23cec08a3a395245903f5c69180eb3d3de2721d3f6192ed22045eca84826847802259a90956a5bb38e7f7d7bc0de8dbab078cb7481c',
  '0xBe710a0BdBA7F5F37c121Ca1af1b806907621035',
  '0x35fab22aed0536ae95acc428d67268dbe1e7e7f6dbc5f80037737b1c4331afaa5a6739a07fa96fe39155f477fedcaba526f3feaa07e1a0d4552cd9253e10d2811c',
  '0xE31D5F69218F8ed5bdf9455934b23868bC9e59FE',
  '0x26bba5af925c8ee456a6e163d7dfd05e02f96f85e96a64e793c7b60373cfc18f6b697976531fa3e46c5eac0f5c7b99af434a1acd9a896646019a1e338147d21c1c',
  '0x566e8e65D490ac9275C1db6Cdd140d87eCF42034',
  '0xe1056b761734cac6b9c6fe1cf419c246a6a7dc8d7db52dc52fa6306bd90d86a531656db5aa529ffb505e56db5690026632b75926f0cfcfc47bef704aaf469a851c',
  '0x7060c27f250c681CAC851F19C4A7B4805031D8E8',
  '0xdff14abb9666fabdb5cf8eb3b2395e327f54623df3af0d7c3ef95a2c5c9e5c4e1be62b31d238974c582b3b842402bfaa4912c9a6879ef33284b5d1f29258c6aa1b',
  '0x21B884cAFd88371523Af594A7dAeae83E104186a',
  '0x6d8f3a6afa606c1a6c1401dceccf9a40d7b3080141a10a66f7056f890f22c758731669209514dad2d6e564912f117acd9107a6487e5ae297d7566c9caf2b61a31c',
  '0xDC9673f5D4c4890Df3f6d1ffdE8EA83d33440C17',
  '0xac57b82b6e5785a0202150e91e4f9600855ab04bfbb9a83e69f6abb933d5c6a94c4b023a2d7745525bec99cb7059e6b8616929e752521071f6e3288c63e9244d1c',
  '0xB8D4B64399F7FE8D16f349aD98cc06eA622007F2',
  '0x0b502f8dbc16d5099446a9e8860e328000fb1e57568076574d555e3b019c3eb7503ad07cd73a9f5babdc32bf752b65178f2eb4ad1a00d536bc3534d4fe8c25eb1c',
  '0x8F242DF04731B8BE4cd1BFC2722498dbb21150Bc',
  '0x5bf9fb1853c6f176a1468295b8ddcee28beb4a34691d49a9bd54fb955acb4cfc031c502286408b3d3f28c6c8fa1373e67f251b9d296a28c26f6af2f44a899fb21c',
  '0xd265262f4bbD9C8ee773E34bDE7bAea04894AF3A',
  '0x073aa251a5d363670d4cad9abc2d4f4f0bffd5ddae0fc408d4aced90dee3f1b2095d7e8d5f24838d0664d7849aeb47a0442b51d21213e1b53b11d47da685b82c1b',
  '0xAb7e9372FcB3aEA27D71A1BFeEDED6261E07648d',
  '0xd2b40fcf6716d50d81712fce1ee8a0d9e876e2dc451f41f6ca78cb6d569049256a24f56a95787352394c406fe7176d6c6c9ab9eb16eb08c26e3532e5ad4276a51c',
  '0x66D0Ab8C4d84bB647F4ad9b5a5eF062E0A25994B',
  '0x5332307704298dbb21b6f8042e6b46463a4b961d9c31bcf73c1c70ee0ed340424df566fef67b2299307210887f3e24e9515befc78d48c4efec8cc1571414b0cb1b',
  '0xBAB20AA67D1A1b99A4d1044f932B6b2CE93e004e',
  '0xae6d4e20d2e697d540222bdad24d9072d6d99932a60798b4cabd81b0c048a0e67c5fdba4fbb79d37bbeb702d6fd487a1bcd1c2508fb46368c175c4b516a984a81c',
  '0x5d7691d13ae2a0305961c71ce26099AcDA457DFD',
  '0x80f9f491f2cf7cd8dafb9f527c94ab9c8f6f4765dc0d163edfaa0f7b4e700038039299c0a73781d5858e30ca0bad19b7f8191a56b628238de9f3ba241d0595951c',
  '0x50C69bd01eac432d831585e47D9EcD3a02049bD1',
  '0x9875b8e1a0d4755768548eaf9845e954df415c1dc374c70f18a046f49a6e32363b70515d345a8205c7f013d30bc841056330107b23d15262eda18b33377096f61b',
  '0x0df1dc6d3C085d55F65AdE4ACcFe75541BB8a504',
  '0xa4fbff2d965bf50dfbebb7aa2dcb08d541cc9f2e42a12b9861b8a3eb3aea9bb441fe6b022742ca5adece99da35951beab3011566d7057a9d509efdc585bd06741b',
  '0x7AEF35bd939cC17fC77Ec0a88032F3b3150E41FE',
  '0x7058cc185cdbf68bb72a7b08d67f36412303cd9c38b29d4b1e77691da7cc9a72020515cd8360cb34c7775040405324a9b65aa8ce7d661d6d70d8b816d5bde1151c',
  '0xaAeC065F86DDC3198df057De160064e0DA9475C8',
  '0xb82367b775c57315e99113cc66d82a7ab84c5e399309daabbb7d4ce6694b187a0b60ec9eae703bacfe107f996c472cc21aa24ed9baefd950686abfcdcf87126e1b',
  '0x78b06D9001c875e89784D57E39e951daB316aa49',
  '0x07ba22d4dca05cd60dc4de9b05f655f7807a9f312811ed31863d835608fa88a47055c695b0cfa75d61a22b525fd7a0e9db38e4a69ceb95f4948b295e7bb67d851b',
  '0xdEbFbE88d7Da8055a1e8eb716f7d97BC95Bf5295',
  '0xa2576762f658499f5c3fb976477ac2efd00ba294d3c1dcae426449169772b663715c9d4a2291dc728cf8743d3656e2c47046f665b36f3ca1d4429cb96eb5e9561b',
  '0xd17a78499E0Cf2aCa57c8D0eCf899fa081d415Cd',
  '0xbac7be8fa32079f3428ef5ca282655f7f8ab387070d041abee881535b770d5ba3e10c372637161cde7d11116cefd9324bc510d578356d3d523d7f4995a43b5751b',
  '0x31C62a95f9731EaDfdFe1A7Ff71e10344246E6EF',
  '0x3efc52891b64749904365407a17fa213025eaec41895251f442083ddbcf3be2f206b13dda120ab2b31e2114f646213068c703611fbd2001c9872e069af9e154f1b',
  '0x158CeC3A94609b2036C41415b0810F8612b4B65B',
  '0xdf52dbae9336c536b09c074784506ce97faa5382fca16986de17c8bc7ec5f6486ff1ef31e56db7ebcdf0b9fb3bcbcbb1c514f40e93607b1a74b72abaa875229b1c',
  '0xb6426844FBf593104664A1817d94D2900695BC1d',
  '0xd3e8d41a887bd3355e4497d1f7f6413d17b3ffdb8ae41c0b3163229b3007bb751d496e578bfa9b2a411e08ff28ec7553e01653bcf7aff49eb7efa6d558975bfe1c',
  '0x1e4Cc2ADE8138fE689c69bB2F4068e4c3721F054',
  '0x9db6a7dc408f30dfe5365412a812f35c1d79fca53061a163292a0e36ece6353a18451b8b743d4d0120e1352c3e0a936fca71fdf9db902f4351220ad46ff2c1a31b',
  '0x7f20f673BaAa9d1034cF044FC35BC89618F27C1A',
  '0x3be3e579e17e8e70d98dd87156ef9ef3eda4accfb66bdece3f28c8944e5285a62ca10a40e2fab7f582522abd31bca12fa312b489ec4a875813a63c8aaf7722b91b',
  '0xDcc5483B3f31c5b93c9BAFBf9C48fC5caE779EDd',
  '0x044f28a5a79235da3c144a3e12f11fa817040550883625bbbbbb7b334e2951122324bf372837a41fe984e65f32693d908f1ce792adc79b434dce31c03df3d9d01b',
  '0x78b06D9001c875e89784D57E39e951daB316aa49',
  '0x07ba22d4dca05cd60dc4de9b05f655f7807a9f312811ed31863d835608fa88a47055c695b0cfa75d61a22b525fd7a0e9db38e4a69ceb95f4948b295e7bb67d851b',
  '0xc800450fd7cC87DDf24f0a17C8Ff171237CeA4F3',
  '0xda2b28ff306c130fba75e56ce14eb8b286a895eb46d7c3d8166da5b7cd89fbc35487fbc39492c8e7637aae7a41c4e09728019e08bc34864fcc7451cad7d1df821b',
  '0x602960d71703C19Ff92b594e3cda6993c950b17C',
  '0xee2d077b0532d233affbcad92410fbaeaf8d607dda8195f4d87e0435dc6d67884a5922937f17ac02da77b0194389c171cc28326f1ccd4c0668f82756c3a58b751c',
  '0x660694F8Fd9031d031a4D8a5F2eE4C624348ED2f',
  '0xfcd4fbabef1eb6d4efab22771c53c826e7005ba46fb11732f9441fd8af69f1975b70e8f492a14c0577ed4f747d9da9137cd6b82f78ca7e8e3ffff94cdd2ce3f31c',
  '0x839995F1266aD31A5bd052Efec158ebf3AAdA7bD',
  '0x69be79a180f60edb88dab13c5a9fe2d85a3abae005428005d256d174e06aba950258d6fdbdcd054978466ef3917b146e2e816e9c371a1a7965f111824611f93f1b',
  '0x856831B02Ae0a68A6115BD12b2d1b25B4698E968',
  '0x89a76a103e7aa5e3e7ccb496c86efa82d9a02900a0522d33c9b53ba25d04753c5e006dba62be1eeb5e61ddd72d5697394c36ae14dbea6e56f23017f72fe434781b',
  '0xf24E3993BEf0f862881908Fa900e9781fc851d05',
  '0x6dee95b308543f38995ebc6abdf0d31cd491d2a12d0df181b23652a0ccac8f1f6a3b534a13ac7f3ccd9ead45825d81aeed3b052ab9f900d0b69bd99f61be78fc1b',
  '0x2Bb060ab3EDdfaB1193cBA3Be240Aa790A6D5fF2',
  '0xf6354eec8b39a151bfc6a226afaf8669204efa2729a55cd46c351a148cba9a37544edd624332131806b79a230b2f172b1d3eed5d1e687bef8f77ba69efa6910f1c',
  '0x105b07BA7Cc7A7e1a5e8F0b2B64636CCdC8610AB',
  '0x1f5ffd49639365ea5c95765d2e224cbe654d0e23f51d36ec3e6cfc834e88c13444e1b2f64cca0da79ad83f3623bacce3a673575a5a3ad3efde27eec11942f2471c',
  '0x3fEB6311a397A7317623a149EEA390Ff2E6Fbb0e',
  '0xe16b446371cb2736a7200e59c842694b1d00b44fab5812ad2e0fd8f2abdda0df763eaebedb3b751bbbc3cb317b524c3a1aec7e498b60852ad596ad0a5989977c1b',
  '0x6B4E747B19857F50c7B633e64F5c7AF54e2a2197',
  '0x04fcd15ea0dc3157b93d5c14eae53b15cfea850e5816136e3e3ce3b8dc9b083b458b9e95b4d8e16bcb70f176f40ca445d85e4b74b139ce4a2a061faa0c8823671c',
  '0xcC57bD7EdE341f7a5B5666c2ae85ED15e7c27912',
  '0xd33a9b9b6411e8fc28728503394c7ef5337bd952486e9cd0efa8703abad5c86e75d27b224a780009904b769be552ae80142cc4da18a50f386a5d458ee0170b021c',
  '0x18Fc97616bDad8Cf5bD6CA5575c474D24013274D',
  '0x68133d70dd98e54d56f4ca57419ec4a3f2846a5bd7c00be058f0db1d8c8059dc268b67452b1f18ddcfbd58f79b6e6db2590f3f44952b229932f65c6d17680f951b',
  '0xe318432E6529fF0A04416b335693b97b5eD1E8fc',
  '0x91a7c934ae0b3b6e2c16159444d0b0444099ecf694a6598f98eb9d4633495b1912dafe14dff730dbe5c990b752db3e79524b6a2512097fef617c09782829a4aa1c',
  '0x5f5467A8302CCDF4224fDfF3e87bbB15c6AB8C15',
  '0xb28b2ae49fdb261509f9fdd4f1127816c51d4959ab6859dc9609a2774a07b156304d5adb2f4ba0213d393a30e3fcea2b24006f1018dd277807f60c9a243cc7a91b',
  '0xb9aaA36B99a9461f400A7626BCEb909590677544',
  '0x2e614ac8acaf6e5909b0aefd63d9641d1e66068b2adb63fe4ef5b7a8597312431f21bebd94e636b9bc2e4d376b1d3d3e5ebba8d02b50a100e4126003e3da92351b',
  '0xC564C9729070f3bDAC3a2577dD08C01be6d9A2ac',
  '0x6d1bdaea7d44cc54c531d812dc8ba838b5d99ec321a9a9ef94d7049a43ea0f806c97c913079a7375a7ee8fd97cdeac5be35201bbe5014bf1629b4c930e1910251b',
  '0x1170C344fB19E4d687785Ea3eFb27806Ca45DF65',
  '0x3cc00fb53b5957a950bbca0a9e076a0e43c57d71932127c9fdabe879ea4bb10e39a8303a53cd95dce155c9ed7a8c3a377420d950b3476b6ce2b451b80329b0c71b',
  '0xA67bFaFb54e30F89528116d6afBB437777E9Aa8D',
  '0xbf43ef479c3d2a68a0fd17fde4f70400ff49e226b9fb2d8cf8c45ef7367770851152ad30d9e168c0cf28fcf57a87b54c7a3275f9cf31942527acfe5319668cac1b',
  '0xe88AD21a6Bd2422b821F9050105876cC693F9644',
  '0x616d4af53d401185b04840f2f503b061cb27d09818900d06a72c357a54f696b773aeb03267892a9dde00b40bf18058184c0ab018e1536641f0fda326cc0d1f641b',
  '0x4f3e5cDD343fd4c7458e704B0821eF871b774E53',
  '0x1bbaf7e2ce00aa4a4111f8ff097db15ad12c10ae8f5b1f83d893499f10c207991ee31b90da1f267cc3222eea238f5619addbd34272ebeed63eb1efbe36ec7acc1b',
  '0xB4b96A3F7778DBca98020be701fa636ba0b9d449',
  '0xc3b3cddc3ee6e53a49ba8c7d7598ca023819ea5fb6b3dd946fff159de4c6a68f4a759ee023062827bf4a7165f2ccef1f78fd0031313bd2b633085f6b8df025561c',
  '0x54C9F800f3F8756C5fD72714BB3F7d7873fD648c',
  '0x8673892bde918f7909622660b0141af6ef4a2a2f676b40e1822de48f83a23f2a60d78e65cd3274bfdc616fe4df058ea3a725e325235e5412d5d990726bf9b4851b',
  '0xBCF0E5A35033bF5c69552caDe341845010673b88',
  '0x254f48b99addc23f946a07377792e1cc7d329a88f17ccb8fc67984ef9548a2281361e95d8e9cd051f28322304ead58822026cefc40eb8154062e679372d219891b',
  '0xf024F829A925e9411947e4134e9b2e69348e2250',
  '0x13f7099d97d48c7d6f7d59367cfc542b531d38f67db718e79d792c273e5e008e1c2db885874fec13ce14e0fbc7b8e917f5216169521a7c910c84095cc14e642c1b',
  '0xFaF81e37ECe12E43127C75d7C86053b14fbf673D',
  '0x66d8adbd92dd0b2dc32abddd5a915124099629a7e3432d03b953b668970f7aa16d5fbe451d31b470225ba81b3741909da7c66eb749f39e9efa57d036c89d2ef91c',
  '0x51306502728656eBDDe07716B8D5366A38387D2D',
  '0x3127970516206eb904c70d7725dc4cb3f96bf948a99fff9c4aa8807bdbd13cf2591ec043f11a253e655af07a8b091c1ff2bbdd604fe49a851bedb2584b3c151c1b',
  '0x379a1D6e29E781309d036FA9A4267089D7824aB4',
  '0xd1948eae4735f66474be8ede5207d5e40b7afe5e70fcec5ed12f3dda19585c156e4bac2bf2bbe92dc357379bf53dfaedb2042e42ed16d9aeec7316c161fbd4ee1c',
  '0xDf9Db0F7602f17288A26C7E206289f27DA6Bf2Ca',
  '0x82ed51f79830776b44485a13eda6b1ca0010943449b566dbcf275cd4d3837ee94885ffe8a8ce8262aaa053bc8c607d904d65d128cd0606ef17f1caec539d45221b',
  '0xe016976180dA4851abc6Ef3F172800791A0fabB4',
  '0x1f22610006421fb5c0a51d43293d1091c57131b31b580fc7b790d33108effee16e6ac99e88431602005b46d27eb13e23eee4badf6a4a05d3cff63fb73e5b32771b',
  '0x4fA10E5934745790412e1186C14BA18e48A1E589',
  '0xf6a477b95f206f3723c66d12b0abb2135bd53d9717d5c869ecc24c36b4487ef35825cc296010d9334a7bed0c8ec7c35a2a137e696a132e30c461ea1c14011aad1c',
  '0x835B4485955ba8046231275318b579a1165cee2d',
  '0x68cb00b5a6a11ee383c270aa64558233eff765fbdb559b32c046a56795cb41864972c2f42a9d2c1c215578cc99eb2698eae28087b196bbda180a2e72fb5625111b',
  '0x320399e12A130294DBA8dF9c2C83aa4F4b6C31aF',
  '0xb9ef4f19d5ee84fe908021985119e9bdacbc1fe917bb01403a4be27d583fb02301e4d564b099e9c7eceb7292f795a984d3aa6b0b10c99c0d0ec34fee78594ed71b',
  '0x137A3AA55bDA465388F3a50Fc1C8d31a4C532174',
  '0xf2467f31f34df6d85056f308840f8dfca839951c30e2839220fcaec83436bb7a4be281db90c16ee1c2147aaccac73b5359bf51314c441d562ea08f0d106761541c',
  '0x09E0C5eE2cB29deB3767919ff5003e669106A49A',
  '0x3be22bf85b2d4a9cd35b81089d2799f1c4682076031029edb52a1c5e8ad8bf275a641f7775afa3658a443a8449290515da62b88c42ae2578f420ec9de15545381b',
  '0x9c2081A412aE43b43b5a1fD5264326cC17b261bF',
  '0x402eee0a8e22261d46a3de816dd32ce33d7311cfd65b931ca3e9c28fcf9739f432294862b54df5c066d9b0bbf364f7c56c29ab1d0ee459364db74b5be7dd8c1c1b',
  '0xA78173E86c74D88822121922b2a5133bd4A62655',
  '0x2ae62216ac357db60316d9afa1099bffb9db9e566d0bae3914f4f7ef2285f3c711f08f911a4053aeb12b83ffe4d5b14cc7153773307714bfe7a2a03890d130fe1c',
  '0x589962F4f08A08265CBc791bb2223d8526acDE80',
  '0xeceef51d19adb4ca9e430b32847561136b2f599e34afd5b143d45b74a09c5c107cdc8ff74caa943724f5c61a8a35da5b9b838804bf7d98c66c55412e8127a1e01c',
  '0x3BdB4318ffc2B4E754C7D1288b5eb635B411E30F',
  '0x21300d4995798e702d00fcb9485668e54589b635d1dc5694a9ebe93f2b9c314f56f3f4dca91f1b3cfa43af911827ccd4f52fa85c7e835f8555071fd6de8a2f091b',
  '0xC66D1bC29f0A859CaAb98b973e6F069a396Cf4b7',
  '0x26e71ebdf3a8e04772a2cf295fb4f55438f0bde8f6ab637774ac33949aed56cc4209565c526fd7638d3ea320102608150419c2d93db39d75d46106fe7cadd0c61b',
  '0x5274C63F1c3Fd67abe0Fdd2073c19177B8B9CdC4',
  '0x17f939fdfa22fe95bcb0fdf517acd2d299fc7a724f7ddbe3c2afb9e1a32b00b4125b574a71fea098e70c08343460760b4f94c9ee369a39541e819ad13b73b3f91b',
  '0x252c9C7025fB35cA0eDa8f5C4dc3c036cBCD8611',
  '0xefee191b0eb07617015c69c552b0eecb6b5ae5dd783ca78857609130fb37189666c58ef888a26e0c23e857df24ba74b82fd625b48d97a9baf749c6ccfee923621c',
  '0x28815De172Bb146076276Db58504C26951336407',
  '0x60db9358dbc590a305b8a06ada7f60b03493a881f0f90bed93fc3bff108dce032566af4776552692bbc47a4ab04fd9f4c15755d96ea1bb3d1ec42cef6e6ff3ec1c',
  '0x3880E7930B869B17e5E51E2F458d2Ffd6BB04a40',
  '0x56ac24024d728e3540d2a7548e7efab6499113bc1f1b089cfc6baf1eadba2a892693939cc53c7a6f96c52cff9ff33cdca029d157b75a66d17861f4679f732f0d1b',
  '0x9c2081A412aE43b43b5a1fD5264326cC17b261bF',
  '0x402eee0a8e22261d46a3de816dd32ce33d7311cfd65b931ca3e9c28fcf9739f432294862b54df5c066d9b0bbf364f7c56c29ab1d0ee459364db74b5be7dd8c1c1b',
  '0xA78173E86c74D88822121922b2a5133bd4A62655',
  '0x2ae62216ac357db60316d9afa1099bffb9db9e566d0bae3914f4f7ef2285f3c711f08f911a4053aeb12b83ffe4d5b14cc7153773307714bfe7a2a03890d130fe1c',
  '0xEf0782a4774f64Ed678a960D699408529beE1cCe',
  '0x4586d723d851f16ee1a4bd69ed88ec5f334ed916843b386367e63eb3861530703f43a55c336a463da0b49305f459ed06dfa3ddf4913c3212c4a6838ebd0089901b',
  '0x828724e03Ad00Fd4027Ace664Dc02c6E958650FC',
  '0xf8f837f7abba6574f2a1fb3e6ca8d6dd390bfaabc278247a875f90caafeaabd265bdcbff74d8c96c3f40add186014b4a3659f0df1b01daf75d2b5b2dc51314761b',
  '0x1C5f67718BE14a0C05117c04aF073752D3AbF0eA',
  '0x97db20932809ba7d08414f63e6db03559dd8099bd8ad7836ba9f50d4ca36c0901b26053157276b8bce63178149abc8f861ce079cbf501bd28da7e6c2d9ed9c051c',
  '0x3B8b28f38f4a4A79C82eb7b86a184317d9166321',
  '0x38c969a934ea0d3c092a0e96766ec671d8e7715df5467ae026978121cca257b67d6d9e12084ba6ced77fdeecb9b59dbbfbf34c92bbe547fd0d68f2372c18f9171b',
  '0xe8c4321A56ef8571017bD5a690982F71F5947BE1',
  '0xdc4d8aa2a90e72961482c155289ebc3f6ed77c4c4cb2ab1f0adf1d33a10d8e09273e67cd721ca520d96c7b9c058752453fbede6536f0de50718d55a84597adab1b',
  '0x4C4a9DC4e3fDF6A1e3A0494797Efb26600ff4481',
  '0xbb9b14ef3fc1f2941b6fd516746c65324edd3985ea27c758f4de74f064dc66dd3783c09005800cfedff60c92ea294b26fc7e1258c4efdc9b2eab1bb4f852e5d61c',
  '0x7EAc8e74B1a1E8f08364b9EA925f63e5401b9fc1',
  '0xc2107fa42be49d66eed91f0d8e3b9d37d6c17fac97ca7f1592d67554241a999914f3971dc694f4411cbca7c418f8fce3488e8a7460bb42537cf0a0440804ebb21c',
  '0x27648F043dB2D513ae27dC3CeA1bC58684d746AA',
  '0x608608ae6c4ec3e49ec9fab51df84e8231deb492142157fc7f499351542ad3c65288b0a285f5d501b96be005cea080502579371cb06226c4f214664fcdad8d671c',
  '0x1C5f67718BE14a0C05117c04aF073752D3AbF0eA',
  '0x97db20932809ba7d08414f63e6db03559dd8099bd8ad7836ba9f50d4ca36c0901b26053157276b8bce63178149abc8f861ce079cbf501bd28da7e6c2d9ed9c051c',
  '0xe8c4321A56ef8571017bD5a690982F71F5947BE1',
  '0xdc4d8aa2a90e72961482c155289ebc3f6ed77c4c4cb2ab1f0adf1d33a10d8e09273e67cd721ca520d96c7b9c058752453fbede6536f0de50718d55a84597adab1b',
  '0xeb75102Aa0022Ab5d40d4Ef042A13e9a4F2561FD',
  '0x9c7762d5040da5d3d6f2e898dfd7bcc92ff87b0dcb966e80394905ff807046ac00052cdefe66d72842e9fecd4829cb71d4da208a559293315ce6526fc800dd791b',
  '0x4AF4BA537045a4d74fe00B8bC1dc33DBA179d70F',
  '0x3ed5d23e36668b8a158b3d22a4f3f9e5eba0e6f184a00f3edb562859b122fd705b911b2c45830e9b88b665dd37df85c5cefda5599e2b1c101a7fa7876fe962d51c',
  '0x868E0F3285b329D09fb9118cc3ef74B6CcD66d35',
  '0xdc3a59bb851533d737888ed2a7144cfbb9ee92276b10c43561f34dcb6dfdb72b2c16390b910979a1ad4bc4ebccaa271bb9c4d2fcc79cb3e52ffc4856194a9a161c',
  '0x2F63A26D8D9Fea6c4cc4B299cc04eDfc383E1E48',
  '0xf95679faf78b179edcdf703aac5a28fed056a43a3f5b1f5b50e511d5447d8d2b5a553c6e4781e280d58fb7d607b8ef6eaebe3713260e987886c577b31b08e1ae1c',
  '0x599a5179e64666D8Ef9Fa529B3ad10B0EF1f33a7',
  '0x0ae2ec2792ee589066274a0a7c7a9d02157898d315aa3df4da47b0cae1ff00454cb0dfb438a4c62dade64d73464de7186ed674062496d429a0ea665f7485f3691b',
  '0x4b0eF90f3DF8be2d8d052b9381Ac15AD7a97Ae28',
  '0x1ed84c8493be3a873eb2466764bfe82fb11fcf9f0b25d50083ce1cc420bdff0468f95f213254d0c80802bf74e94984397d06a043e940416ba06382d5c7ca45191c',
  '0x76790B3938e119538c3328d5a1b3d002a9ef3809',
  '0xe5bf386905bef70c268ec749189b032687692797ccb27ad616c99912027e18d90a751ec0d1cd5509a4c538d288356afc36c947ff63404cfcf69b935955cc23c31c',
  '0x26dF53CF8Ed1eDD361f2197B21E1c4C6594e3C93',
  '0xe0dc7ccf92d337c9b76ed1a775624596229d452b36bf53b2fee52df5b26e46507e1c2b43a41b63e3dbaacdb0aa024873a173ec9af3fe5fe9366855bff6d45aeb1b',
  '0x9adEf906D7e181d7826E4eBB4633D5076bcdB7b4',
  '0x283e27950583e62eaeceb6d6736ccc790483872e54936fae975e71898cf45f7b225204cfe176fd3e9bf1c7a137b15d2e4d47745d1c32838629ae79786e8a391a1b',
  '0x14C745a05fF86bbf56626A13756E90C75eF1cfc8',
  '0xe2d50b78995dd3d0977ae25f5f4d529ddf4a964aa9c51caee9c87edd748c117c33c881b30182d808cffd41fadca4fadf08c8299da0718d169f29c30123a367951b',
  '0xE9a30aA19C7342C02741742Ccf20FE1823eE53b7',
  '0x75b71ad83910d5ff1000669fdbf2fd2f87048628e2a79e158a5f58d5c53ff2841492294a88919510ba1f969499b8e2fa49ed9824c1196e245388dd00b1d481891b',
  '0x28D61a4EC00f0E6fd02fC6E08a3f8e141eF8e7Ad',
  '0xd86846881d4c5bba5ece5c12c783f1d6bbb2e8ee94e0c314f5120d21a0d6e9a11bbac2dc6df7461d6cb8a30dc3b5699eab58b313873bbcdeeca74246b19ff7a61b',
  '0x7b20387140a540326Fa767Ce679D327C0ff8024e',
  '0x1f4a87652ab907cc192fda8e35958a6b2f7cdca14199afbc70574937e53b45955a35924e64095ce99ba151473fd9d63811da83e75329db43f768a33eca6aae1b1b',
  '0x2a7edC23aDd17BD1770e2615Fc0eDaA3Fd2db396',
  '0xf2cdb74045d5b932072ea8cd586d9493fa3dcaa1164d095c050da88e028bafef2cc4e9c55e0d1681997c481500ada89c71ce077e0847ff99a849c1f2e15ac3a61b',
  '0x0849c84b1534CFE2673d0116388Ed21B5Ece94b3',
  '0x937876bb3a668d23429c0b9ef47213d50d3765a846a103ad9d73fd456c3a587c669a61003e6db1077545415ff7de5adb24c21a1c4f80b378e04444235fa6077d1b',
  '0x4a5359d06D35Bc80376326228F12Cd25b28BF351',
  '0xc96f5667ff7c5ddc498f11917e65ce655c0d17f383726db4e5a9752f5b35a76b363328f3f6a964bbad3ac689c2daa54de5e279aa635ffbd06ab504afb27a1e081b',
  '0x2a7edC23aDd17BD1770e2615Fc0eDaA3Fd2db396',
  '0xf2cdb74045d5b932072ea8cd586d9493fa3dcaa1164d095c050da88e028bafef2cc4e9c55e0d1681997c481500ada89c71ce077e0847ff99a849c1f2e15ac3a61b',
  '0x0849c84b1534CFE2673d0116388Ed21B5Ece94b3',
  '0x937876bb3a668d23429c0b9ef47213d50d3765a846a103ad9d73fd456c3a587c669a61003e6db1077545415ff7de5adb24c21a1c4f80b378e04444235fa6077d1b',
  '0xaa52d83CEf454583788d6e8BE3A79551336F03dB',
  '0x2dd0e9b2267e7f4d2dab7766fabff7ebecace98813bf33336885a6e6ba8a9b9043816ae7d04691204552fcdcc7fb464d2f16f0d30218719351e29f4216b9394c1c',
  '0x2249EC7722e89d32755F1C18d85c82D4AE7BdbDe',
  '0x2ec173cba9839d8bc26a3f40661a8674e6882dcbe29f0ceb41e6338e4b78841e5fa322f4e5971b838184639aca4daf86b1b9648cee9b05df2953dc91aa2ff7fa1b',
  '0xF767DafA521D0D0907795711b9EFAB640fC254ca',
  '0xed30a6600889143e11488a5f92e4a474269410f62deb8879b3dbe9a0d6201db76a74199f9038721cfbfcd370343489b443f4825f842a27fe8092794f5819675b1b',
  '0x56c90FF304920CF78bB8336ECEa1a3b6427B62AB',
  '0xe2e0f285b09cbb2d0a1d466a093fbab1d189845f660688dc9ec190103a35f1f366b5d5a642cee600a592ba4ff37096f26cd2221171b69634bc1adbbf761fcb7a1c',
  '0x6B4E747B19857F50c7B633e64F5c7AF54e2a2197',
  '0x04fcd15ea0dc3157b93d5c14eae53b15cfea850e5816136e3e3ce3b8dc9b083b458b9e95b4d8e16bcb70f176f40ca445d85e4b74b139ce4a2a061faa0c8823671c',
  '0x19d2BED8eA8c3A1256a1818BD4020dDBe02E84A0',
  '0x2637434a14a021983aa708126da97893ffe1a9360c00e047bb387da1b5369cdb42be9abd5d276513b3939a3cbe5550d81dc044b866b69f0f1d35b164c7ce49441b',
  '0x70069C30CbED62eD40Eb8813566A7a7D26A42D4C',
  '0x6fde85df0357c6c337f52a7ec77060f8f8254832e90660bf9f8e0500cfb6cf424ef238707e766dc3b4c45a0bb94fd5a0235c59728edcdb83a78acacba6cded651c',
  '0x3C49fA3A836Aa4D6B0786Ed4Cda823efD7Cb48F7',
  '0x13832c2c72524d3d0a8072c05ea798f27227dd532ad9da1ab4110936952e71e51144cc185e243c06fc0e8edbdc650ae517d4e030b18f65ba58d96e54adced7021c',
  '0x0cE8Ea15C5163bd31D60E4253b8399988C16d2f9',
  '0x346cdcf7071e17fe5e7c28b3a5e49fe430030d651c6f226e96bf06c8a872f5e026ad53240c8e37bf9e922578668985aba8156a548eb58f9d1e7e6693b6c3b6ca1b',
  '0xDC387254d253D347e17743614116427FeA164959',
  '0xb7e47d059d72e2b38a7437a49ca7eee606c2e10ba50d4ccfbb84a5a5531ef6eb49226a8f40d588096a590a03421340665646cdda39b5fc842b085ef2c43aaa591c',
  '0x6262998Ced04146fA42253a5C0AF90CA02dfd2A3',
  '0x313e94a0095bdee00ee12bda05c8963d5e5789f1e61c10603e0264ffad461ad366079be9065441fcbe7606f651270a106963cb65f4ef6f5a88a0a6a49d2663a81b',
  '0xFC399173c022d81b335e8b9f288E769683751266',
  '0xba9b0fb409ba11d24df011e8149dede3511f5141b9d42ff7f7a1b861e2cc86006f67606feff2e0d0efc225f81bc722fb2f319e79660baa0e4e27878599ada7ca1c',
  '0xD14237DdA1eA14CB1CeA90b540E7BecF891c961B',
  '0x612ff8a5ef8187f404502eee8ff61d60cccb054bbf85909f80dc240945badc3431993aeede51b9bd643e3b149d5b09b066e94fa0aaad7b65c6f7512a5c7173f21c',
  '0x4b0eF90f3DF8be2d8d052b9381Ac15AD7a97Ae28',
  '0x1ed84c8493be3a873eb2466764bfe82fb11fcf9f0b25d50083ce1cc420bdff0468f95f213254d0c80802bf74e94984397d06a043e940416ba06382d5c7ca45191c',
  '0x2a7edC23aDd17BD1770e2615Fc0eDaA3Fd2db396',
  '0xf2cdb74045d5b932072ea8cd586d9493fa3dcaa1164d095c050da88e028bafef2cc4e9c55e0d1681997c481500ada89c71ce077e0847ff99a849c1f2e15ac3a61b',
  '0xd5a15035d39a3B13CA0450B9737758ceeF9DF053',
  '0xd32f0b15ac30e416177f4b731e2cbfc49259e10f2928a15e3515f3259ef035906aac6fc8e54c90cf12a1771921a33c1b8f5820073f979e0e026878c8163870f11b',
  '0xFD6EbF8de66878A354f651A696967701eE72430B',
  '0x8ec9eb2cdceee33f62d836eddd60b889e5331867ba7b117d3397e8e5cd9262262af87ffdd73cfc0d4ebd6c52f88247fa4c17b478ff0b76589561bf3d2f505a4c1b',
  '0xE672D8B7A4e91AcCCd5B098Fa2D20e3D62CEB5E0',
  '0x138f5e708cad5f073038dbe3a212d163eb39e56ffdf0f490e91056cdfceee68d48569e91dd1f9d17b11851728e1777b2c030b9a29e34c82f9e4a37565d59b2d61b',
  '0x647A06Df7D5528b8D5FfB3e09C994406a5fc9227',
  '0x5fedf8fe6c535aed27894c2ad9c14c0ed33fbdd2fcebe46dd81213f0dcd28a18555cc6e2ff94adbabff91a1f6ae068cac34c3be92caec735432b87fab38cbe771c',
  '0xb124Ba75e4F102d4c7AC6Cdcd4Bdd21b64038cc7',
  '0xba01536331f1584b36e4cbdd5a0d274e46fac19f5a796da861fd71cbdbe9e54f2deeedd49ffe6cbf32b2e493914b51b456c001677c0d79d0e8121d25339e892a1b',
  '0x992102814E5bF532D3cAd53a289079D776CF2eCc',
  '0x0eb684395d940879f2569d9500848caeb220c29fc02d2f23c4cd96eb02a3ab55384d652a2dd2735a8336c4d89e56e0fa70c58962276b359daffbf3d2fb3771e01b',
  '0x34DA12C553CaabEf7CAf9CC0FB4beC278D352823',
  '0xfddd9d30d4e3712e7b7d5b8fff541c901b971a3b143416aae8139b5fa44f81d333e6cf7d872ae1d8282b6f4829cb66228c7cf49b978d7ec3efd06c9d5c422d7b1b',
  '0x868B8F9E8f5dD286A228Cbb68e9C189Eadb18edb',
  '0xd8fb97645f59fa4fd3df69349b995164d804a9e3963e263d40980c7c84bcb74d4d006f2e5bc34c6d1b101afe0cc07fbcfe377a1730fa58898eb532318ca723dd1b',
  '0xE427a65F57301db0796c5eCEf55fbb4222265D7b',
  '0xfd8e28911fe733f0619ec4e6f64c0314aa4e887e6f5d34be7f6b17bc0524ead36b1d98519bcf84ce973a487c1d80f7d9663e70e8a1dc88aaccc6698de5a41c611c',
  '0x8fA5bfcDC1CfE0572245495d3d181b03Ce914A8c',
  '0xd61c9b5df8a3b0a8850aeb756068081ac44cc8776b89bcbc28bb5a0e3ba976584e7fc33dee8e8d794dbb2493905788b2c8f8736cbf3248e05bfef7c78d5fb9181b',
  '0x252c9C7025fB35cA0eDa8f5C4dc3c036cBCD8611',
  '0xefee191b0eb07617015c69c552b0eecb6b5ae5dd783ca78857609130fb37189666c58ef888a26e0c23e857df24ba74b82fd625b48d97a9baf749c6ccfee923621c',
  '0x534586f3f06714a61D4c78C9280c9ffFA503F44C',
  '0x0e67b9e962d73c415c3affb5ee9ed31a68df38775bc18b522a3868878fbbfb767132f037f940b6a86279e57d1aabc9810e192d0427f0cc4309579617f461d0701c',
  '0xF4069295d9E8f8161Ab4db80cABB4d103E67BDad',
  '0xb375260c97ae0259ef830c8cf81e4f730948d06d56a0d51d8a278ecb169b7f7e3f96efadc802fd2a536c06bb3204ce3c76f8defd56db1b5781bee6d0f3e14fb81b',
  '0x0Fa52640E484cFf1d081E14C5A3b35d89A4f9931',
  '0x96d420fd6e50ea9038e1c30b51dd09c88321a8f716310cef9b58328ddb216a4b5913ea239c1959927448804ca545e04c61a88680f06f9dd7b0c32627447cd5461b',
  '0xA0e91Ceb142A552FEB99a89560f405c66bbDA8A4',
  '0x53ab8b342e8080d8d1896e403945f13df764243524eb1cf3c12978d624f85a3f72d798b23072c77999c226226ecd6acb3c3730418fea9452066afba6883f1e011b',
  '0x3c1A2A1c814efF7E1f224f511c71bC558e3deE11',
  '0xfb75d29f998d20d066fa5e56292ccfb4ff2b1bccb2ce38eb06c99b385d23f5a651e77917a664ee5dd66edc62445617d446585ecd87504880d2da49afbca181111c',
  '0xE61DA731a9eB11BDAc1604ad9B192a307C1d8b42',
  '0xc0923e75c19073947c3b38437fe2f0f7c31317fe1df23381ea1ba95f75ad35f83cb34e99df581bf0e2e86b4db599b1c09dffeb00fdbf13728b8624773a50fe6f1b',
  '0x750930d0619328BBB038A4EfE899Fd56D33113E1',
  '0x0ea306aa2a6cd84036f2cbea1894265423383fb168d19ac8b8861c60b1fe1e7e25bcde7fe5c79636709085646b1ec8c48e8356d181fd4460e7404fb93486204f1c',
  '0x9752Bb2d1Fe6B607349322C2bCdB91300E50A904',
  '0x244e7e7ce87e52e255c57d0ddb10f96e6ac2775dd6b75a62d631ba38a520e65a12167af24c41634fb45e2a081d76e6d0d3f9e36ac2ab16286d0945a4abb272ca1b',
  '0x6ead7554368E8b0e26DEA48EC522428CDe8Ebb27',
  '0xc23e914053537c1e4b593b9d15eb0d549da60718ff990b2033da4ff7a98ccf8f4154f281f8247b9d99ca4bce8c98ec1cbf8df4f04cd0e304af3f7cde8d3d53cb1c',
  '0xd4Dc5270A0a504b55b89a279F823C3159E3DB3E8',
  '0x6fcf8668410a17571ba24c453a5089d3795b1b0119afc7423bf64e6828a9ba250a3f485e485f202c308ee36a6e23dd704d51870e71d88ff3c5031f5ae5d95c521b',
  '0xC8fb78A75FB5d4166c6b092eB9eC84B35B1B51b3',
  '0xe54f4ab92b2abde9768589fea6ee30199e79221aaa3f268381ee75b287f8469f07419b73098f8d68f6c88c19dddb4df6e916f0cd5a9ad398c4982bb690f471a51c',
  '0x8199971Bee1d89404E0d52900bC18F9D83881F0A',
  '0x114afb942c44d1a116c1290e963c22f283eb66c43f14b7688d26151a2d5492b74b645ac454a6d6c0215581951798b40dd036d1ac22165685330a26f12c63142c1b',
  '0x4bFa2B372F2447e215d57645B2086996B0BAF597',
  '0x598501235630de1e21c63a1cb02f7c62da7555afb52f6a96701a61598983d4b964e4e617b9b3ce635e6df41ea9388770585b46c33312b55e49ec8017d8f7ac021b',
  '0x121854cca631cDcA774CafE52D75157EE3Dc447A',
  '0x1ec02e101b4c3f4c0938aca3f80682472412ab91de651e01556f9a47e58995a90894a00cf90c60c2bf7cfae4b789d36f1f8d3de09ada776d33dd3f286ea5534e1c',
  '0xcc0E6D05981d000BC8987C443ea909256bD1C8C7',
  '0x92f628c617d2d669f77fb35ba26bbdf6e8f06c5bb02864b3aa937c6b959238ea086c92036b140930b29c17f33a64a75bda2a86f94de62c99bedc2395a59f04c71c',
  '0x530220237563A136D2ACb9eAd55028B742e88B76',
  '0x1e6c9bb97d3d6cacdbd15f7567a11566208742f53be43b0b92210296233c914809c5e01508d01db269d4634919c4aba08fe906110c781f7a9e52324f65665cd51b',
  '0xdd17b67F3c9Fb5928a1ca1e638EC5Ff8332Ec7c5',
  '0xbf574d8206a6ccd1b3a516760d1510284e9e16ec04bd2de1ecd3441e58ecf8ae08a29cf0688ddd1d8e90111b4cd0106e99b066e161a5ae3ee16ef34a8480eb581b',
  '0x646a4f3D15fc18c6643D83B9fDe70Ee513bbC0b5',
  '0x8c3b34c99e4800a3a6e63a3767a57972fbfbf2f7a46fb01a2c74988096b26d497517a84cd24c3b367824c2ec07a26459272960fe7c88020a9871ad37fb13997a1b',
  '0x02E1A0d3e5b5Bf8E6C518C2Bc6aF10C365fBD93a',
  '0x1871929447ecb95a14d690f989e25fd1f9f7411ab074fa3dba1b0a2dc570319a5c7e82cef2b3b6f9779bd406ec0edab6e7c2b5f31bb0d28ee43a30754d7c36991b',
  '0x741aaEA52E2D9C815c6c0B9512e956D7094a2933',
  '0x7c1f8afbe051837f42464b37b1f356e329bd2815726b98caa52ebb99dfc6d6ac11c95070266c14ab82d7a736359296332c396d2c01702beec200ae8433d38b961b',
  '0xa69F2e76eBA2F52938EA03DEdDf84822102Ae69f',
  '0x79f65aeee589f2fe5716820c547ec41f9dfd30b5d1c648908677dadc8fd8aa7c441fb05cbe10a922d0b20c9b82cb03aa8bd2fe4664f10f7f0c20cea7fcf0da461b',
  '0x9f96c04F0CcD14A23E48c052110ba7ab8219baf5',
  '0xc30114622072cd886699d556f9e584fa937aa40c12b79c6cc7aabefdfa88c249044a8b309ba36fca53b33633163967de920eb6b525edca1ca8cdab4cc8c6caa81b',
  '0x2155A2853Dc771bdE241f43bBAc64B9aE4bC3127',
  '0x22ba08d498f063e46f7a46dfe9010f20514f9e30aee4f6393b056c630c21921901e77257ab49c64b24b50f60a6c734fb539c19127e66f9909856a1fd00c6d9c91c',
  '0x6f3a8FAD651464D4e6cd18fc82892Fd37CEDeB57',
  '0x853d9314a4ad64a1feca53d253d82c43d39397b02c985301703696ec2daf60846922f61eccdceadaa4407f599d12fab0af863c7ebbc5dc1e3f2208154e5844771c'
  ]
