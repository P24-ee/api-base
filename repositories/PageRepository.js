const UserRepository = (db) => {
    const TABLE_NAME = "pages";

    const getBy = async (fieldName, value) => {
        let data = {};
        data[fieldName] = value;
        const results = await db.get(TABLE_NAME, "*", data);
        if (results && results.length > 0) {
            return results[0];
        }

        return null;
    };

    const getPageByRoute = async (route) => {}
};

module.exports = UserRepository;
