const nfts = [];

function mintNFT(name, rarity, backgroundColor, hairStyle){
    NFT = {
        "name": name,
        "rartiy": rarity,
        "backgroundColor": backgroundColor,
        "hairStyle": hairStyle,
    }
    nfts.push(NFT);
    console.log('minted', NFT);
}

function listNFTs(){
    for(let i = 0; i < nfts.length; i++){
        console.log("name : ", nfts[i].name);
        console.log("rarity : ", nfts[i].rarity);
        console.log("backgroundColor : ", nfts[i].backgroundColor);
        console.log("hairStyle : ", nfts[i].hairStyle);
        console.log('');
    }
}

function getTotalSupply(){
    console.log('total supplies', nfts.length);
}

mintNFT('Arush', 'rare', 'black', 'straigth');
mintNFT('Aditya', 'common', 'black', 'curly');
mintNFT('Manas', 'common', 'black', 'long');
listNFTs();
getTotalSupply();


