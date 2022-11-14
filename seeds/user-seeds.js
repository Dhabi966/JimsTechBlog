const { User } = require('../models');
const bcrypt = require('bcrypt');

var password = bcrypt.hashSync("George1234", 10);

const userSeedData = [{
        username: 'Jeff',
        password: password

    },
    {
        username: 'Lauren',
        password: password
    },
    {
        username: 'Isla',
        password: password
    }
];

const seedUsers = () => User.bulkCreate(userSeedData);

module.exports = seedUsers;