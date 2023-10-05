const fetch = require('node-fetch');

const API_ENDPOINT = "https://api.altern.ai/v1/info.json";

const isStatusSuccess = async () => {
    const response = await fetch(API_ENDPOINT);
    if (response.ok) {
        const data = await response.json();
        return data.status === "success";
    }
    return false;
};

module.exports = { isStatusSuccess };