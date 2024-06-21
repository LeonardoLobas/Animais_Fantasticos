export default  async function initfetchBitCoin() {
   try{
        const bitCoin = await fetch('https://blockchain.info/ticker');
        const bitCoinJson = await bitCoin.json();
        const btcSpan = document.querySelector('.btc-preco');
        btcSpan.innerText = (100 / bitCoinJson.BRL.buy).toFixed(4) 
    } catch (erro) {
        console.error(erro)
    }

        
}
