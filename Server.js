const polkadot = require('polkadot');
require('dotenv').config();
const App = require('./app');

const Server = () => {
    const setHeaders = (req, res) => {
        const requestHeaders = req.headers;
        const origin = requestHeaders['Origin'] || requestHeaders['origin'];
        if (origin) {
            res.setHeader('Access-Control-Allow-Origin', typeof origin === 'string' ? origin : origin[0]);
        }

        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Max-Age', 86400);

        if (requestHeaders['access-control-request-headers']) {
            res.setHeader('Access-Control-Allow-Headers', requestHeaders['access-control-request-headers']);
        } else {
            res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type');
        }

        if (requestHeaders['access-control-request-method']) {
            res.setHeader('Access-Control-Allow-Methods', requestHeaders['access-control-request-method']);
        }
    };

    const start = (callback) => {
        const server = polkadot(async (req, res) => {
            const app = App(req);
            const router = app.getRouter();
            if (typeof callback === "function") {
                // add routes
                callback(router);
            }
            const response = await app.getResponse();
            res.statusCode = 200;
            setHeaders(req, res);
            return response;
        });

        server.listen(3001, err => {
            if (err) throw err;

            if (process.env.NODE_ENV === 'development' && process.send) {
                process.send('online');
            }
        });
    };

    return {
        start
    }
};

module.exports = Server;
