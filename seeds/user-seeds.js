const { User } = require('../models');
const bcrypt = require('bcrypt');

var password = bcrypt.hashSync("Smith1234", 10);

const userSeedData = [{
        username: 'Jimmy',
        password: password

    },
    {
        username: 'David',
        password: password
    },
    {
        username: 'Mark',
        password: password
    }
];

const seedUsers = () => User.bulkCreate(userSeedData);

module.exports = seedUsers;