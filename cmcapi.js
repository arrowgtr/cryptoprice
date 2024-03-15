// Function to format numbers
const formatNumber = (number) => {
    if (number < 1e3) return number;
    if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(2) + "K";
    if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(2) + "M";
    if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(2) + "B";
    if (number >= 1e12) return +(number / 1e12).toFixed(2) + "T";
};

async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        return null;
    }
}

async function updatePrices() {
    const cryptoData = await fetchCryptoData();
    if (cryptoData) {
        const btc = cryptoData.find(asset => asset.symbol === 'BTC');
        const eth = cryptoData.find(asset => asset.symbol === 'ETH');
        const sol = cryptoData.find(asset => asset.symbol === 'SOL');
        const bnb = cryptoData.find(asset => asset.symbol === 'BNB');

        // Update prices in your UI
        const formatPrice = price => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
        document.getElementById('btc-price').textContent = formatPrice(btc.priceUsd);
        document.getElementById('eth-price').textContent = formatPrice(eth.priceUsd);
        document.getElementById('sol-price').textContent = formatPrice(sol.priceUsd);
        document.getElementById('bnb-price').textContent = formatPrice(bnb.priceUsd);

        // Function to format market cap
        const formatMarketCap = marketCap => `$${formatNumber(marketCap)}`;

        // Update market cap in your UI
        document.getElementById('btc-market-cap').textContent = formatMarketCap(btc.marketCapUsd);
        document.getElementById('eth-market-cap').textContent = formatMarketCap(eth.marketCapUsd);
        document.getElementById('sol-market-cap').textContent = formatMarketCap(sol.marketCapUsd);
        document.getElementById('bnb-market-cap').textContent = formatMarketCap(bnb.marketCapUsd);
    }
}

// Call updatePrices to initially fetch and update prices
updatePrices();

// Set interval to update prices periodically (e.g., every 10 minutes)
setInterval(updatePrices, 600000); // Update every 10 minutes
