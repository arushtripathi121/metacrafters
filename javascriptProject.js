const nfts = [];

function mintNFT(name, rarity, backgroundColor, hairStyle){
    NFT = {
        "name": name,
        "rartiy": rarity,
        "backgroundColor": backgroundColor,
        "hairStyle": hairStyle,
    }
    nfts.push(NFT);
    console.log(minted, NFT);
}

function listNFTs(){
    for(let i = 0; i < nfts.length; i++){
        console.log("name : ", name);
        console.log("rarity : ", rarity);
        console.log("backgroundColor : ", backgroundColor);
        console.log("hairStyle : ", hairStyle);
    }
}

function getTotalSupply(){
    console.log('total supplies', nfts.length());
}


