import axios from "axios";

export let searchRequest = (params) => axios.get('https://stock.adobe.io/Rest/Media/1/Search/Files', {
    params: {
        "search_parameters[words]": params.keyword,
        "search_parameters[limit]": params.limit,
        "locale": params.locale
    },
    headers: {
        "x-api-key": params.apiKey,
        "x-product": params.integrationName
    }
});

export let searchWithSimilarUrlRequest = (params) => axios.get('https://stock.adobe.io/Rest/Media/1/Search/Files', {
    params: {
        "search_parameters[similar_url]": params.similarUrl,
        "search_parameters[limit]": params.limit,
        "locale": params.locale
    },
    headers: {
        "x-api-key": params.apiKey,
        "x-product": params.integrationName
    }
});
