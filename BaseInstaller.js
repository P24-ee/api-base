const BaseInstaller = (installer) => {
    const install = () => {
        installer.addMigration(
            '2020051716001_create_pages',
            __dirname + "/migrations/2020051716001_create_pages.sql"
        );
        installer.addMigration(
            '2020051716001_seed_pages',
            __dirname + "/migrations/2020051716001_seed_pages.sql"
        );
    };

    return {
        install
    };
};


module.exports = BaseInstaller;
