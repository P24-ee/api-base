const RequestHelper = req => {
    const getQueryData = () => {
        return req.query;
    };

    const isPostRequest = () => {
        return req.method === 'POST';
    };

    const isPreflightRequest = () => {
        return req.method === 'OPTIONS';
    };

    const getBodyData = async () => {
        if (isPostRequest() === false) {
            return null;
        }

        let chunks = [];

        await req.on('data', chunk => {
            chunks.push(chunk);
        });

        return Buffer.concat(chunks).toString();
    };

    const getJsonData = async () => {
        const body = await getBodyData();

        if (body) {
            return JSON.parse(body);
        }

        return null;
    };

    const getHeaders = () => {
        return req.headers;
    };

    const getHeader = key => {
        return req.headers[key] || null;
    };

    const getPath = () => {
        return req.path;
    };

    return {
        getQueryData,
        isPostRequest,
        isPreflightRequest,
        getBodyData,
        getJsonData,
        getHeaders,
        getHeader,
        getPath,
    }
};

module.exports = RequestHelper;
