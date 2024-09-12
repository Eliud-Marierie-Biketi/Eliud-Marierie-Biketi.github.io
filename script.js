document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');

    // Function to get URL parameters
    const getQueryParams = () => {
        const params = {};
        const queryString = window.location.search.slice(1);
        const queryArray = queryString.split('&');
        queryArray.forEach(param => {
            const [key, value] = param.split('=');
            params[key] = decodeURIComponent(value);
        });
        return params;
    };

    const params = getQueryParams();
    if (Object.keys(params).length > 0) {
        let resultText = 'Callback Result:<br>';
        for (const [key, value] of Object.entries(params)) {
            resultText += `<strong>${key}:</strong> ${value}<br>`;
        }
        resultDiv.innerHTML = resultText;
    } else {
        resultDiv.innerHTML = '<p>No data received.</p>';
    }
});
