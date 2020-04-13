const PageController = (repository, user) => {
    const handle = async requestHelper => {
        const query = requestHelper.getQueryData();
        const language = query.language;
    };

    return {
        handle
    }
};

module.exports = PageController;
