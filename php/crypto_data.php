<?php
function fetchCryptoData($apiKey) {
    $url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    $parameters = [
      'start' => '1',
      'limit' => '5000',
      'convert' => 'USD'
    ];

    $headers = [
      'Accepts: application/json',
      'X-CMC_PRO_API_KEY: ' . $apiKey
    ];

    $qs = http_build_query($parameters); // query string encode the parameters
    $request = "{$url}?{$qs}"; // create the request URL

    $curl = curl_init(); // Get cURL resource
    // Set cURL options
    curl_setopt_array($curl, array(
      CURLOPT_URL => $request,            // set the request URL
      CURLOPT_HTTPHEADER => $headers,     // set the headers 
      CURLOPT_RETURNTRANSFER => 1         // ask for raw response instead of bool
    ));

    $response = curl_exec($curl); // Send the request, save the response
    curl_close($curl); // Close request

    return json_decode($response, true); // Decode JSON response
}

// Replace 'YOUR_API_KEY' with your actual CoinMarketCap API key
$apiKey = '0ce68b36-2d24-4a70-bd0c-857597d4043f';

// Fetch cryptocurrency data using the API key
$cryptoData = fetchCryptoData($apiKey);

// Check if data was fetched successfully
if ($cryptoData && isset($cryptoData['data'])) {
    // Process and use the cryptocurrency data as needed
    foreach ($cryptoData['data'] as $crypto) {
        echo 'Name: ' . $crypto['name'] . '<br>';
        echo 'Symbol: ' . $crypto['symbol'] . '<br>';
        echo 'Price (USD): ' . $crypto['quote']['USD']['price'] . '<br>';
        echo 'Market Cap (USD): ' . $crypto['quote']['USD']['market_cap'] . '<br>';
        echo '<hr>';
    }
} else {
    echo 'Failed to fetch cryptocurrency data.';
}
?>
