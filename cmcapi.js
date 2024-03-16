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
setInterval(updatePrices, 1000); // Update every 1 minutes


// Function to toggle the visibility of the widget container for carousel
document.getElementById('carouselToggle').addEventListener('change', function() {
    const widgetContainer = document.getElementById('widgetContainer');
    if (this.checked) {
        widgetContainer.style.display = 'block';
        localStorage.setItem('carouselToggleState', 'true'); // Store the toggle state in localStorage
    } else {
        widgetContainer.style.display = 'none';
        localStorage.setItem('carouselToggleState', 'false'); // Store the toggle state in localStorage
    }
});

// Function to toggle the visibility of the widget container for heatmap
document.getElementById('heatmapToggle').addEventListener('change', function() {
    const widgetContainer = document.querySelector('.coin-heatmap-widget-container');
    if (this.checked) {
        widgetContainer.style.display = 'block';
        localStorage.setItem('heatmapToggleState', 'true'); // Store the toggle state in localStorage
    } else {
        widgetContainer.style.display = 'none';
        localStorage.setItem('heatmapToggleState', 'false'); // Store the toggle state in localStorage
    }
});

// Function to check if the page has been refreshed and remember the toggle state for carousel switch
function rememberCarouselToggleState() {
    const widgetContainer = document.getElementById('widgetContainer');
    const isChecked = localStorage.getItem('carouselToggleState'); // Check if the toggle was previously checked
    if (isChecked === 'true') { // If previously checked, display the widget container
        widgetContainer.style.display = 'block';
        document.getElementById('carouselToggle').checked = true; // Check the toggle switch
    }
}

// Function to check if the page has been refreshed and remember the toggle state for heatmap switch
function rememberHeatmapToggleState() {
    const widgetContainer = document.querySelector('.coin-heatmap-widget-container');
    const isChecked = localStorage.getItem('heatmapToggleState'); // Check if the toggle was previously checked
    if (isChecked === 'true') { // If previously checked, display the widget container
        widgetContainer.style.display = 'block';
        document.getElementById('heatmapToggle').checked = true; // Check the toggle switch
    }
}

// Call the functions to remember the toggle state when the page is loaded
window.onload = function() {
    rememberCarouselToggleState();
    rememberHeatmapToggleState();
};


