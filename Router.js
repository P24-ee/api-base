const { UserController, UserManager } = require('p24-api-user');
const PageController = require("./controllers/PageController");

const Router = (requestHelper, repository) => {

    let routes = [];

    const userManager = UserManager(
        repository.getDb(),
        requestHelper
    );
    const user = userManager.getUser();

    const addRoute = (path, callback) => {
        routes.push([path, callback]);
    };

    const getErrorResponse = () => {
        return {
            error: "Invalid request",
        };
    };

    const getUserControllerResponse = async () => {
        const userController = UserController(repository.getDb(), user);
        return await userController.handle(requestHelper);
    };

    const getPageControllerResponse = async () => {
        const pageController = PageController(repository, user);
        return await pageController.handle(requestHelper);
    };

    const getResponse = async () => {
        if (requestHelper.isPreflightRequest()) {
            return {};
        }

        const path = requestHelper.getPath();
        const row = routes.find(([key, value]) => {
            return key === path;
        });
        if (row) {
            const [path, callback] = row;
            if (typeof callback === "function") {
                return await callback();
            }
        }

        return getErrorResponse();
    };

    const getRequestHelper = () => {
        return requestHelper;
    };

    const getRepository = () => {
        return repository;
    };

    const getUserManager = () => {
        return userManager;
    };

    addRoute('/user', getUserControllerResponse);
    addRoute('/page-data', getPageControllerResponse);

    return {
        getResponse,
        addRoute,
        getRequestHelper,
        getRepository,
        getUserManager
    }
};

module.exports = Router;
