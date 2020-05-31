const Router = require('./Router');
const { Db, Repository } = require('p24-api-db');
const RequestHelper = require('./helpers/RequestHelper');

const App = (req) => {

    const db = Db();
    const repository = Repository(db);
    const requestHelper = RequestHelper(req);
    const router = Router(requestHelper, repository);

    const getRouter = () => {
        return router;
    };

    return {
        getResponse: router.getResponse,
        getRouter,
    };
};

module.exports = App;
