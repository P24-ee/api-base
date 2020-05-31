const PageController = (repository, user) => {
    const handle = async requestHelper => {
        const query = requestHelper.getQueryData();
        const language = query.language;
        let response = {};

        return response;
    };

    return {
        handle
    }
};

module.exports = PageController;
