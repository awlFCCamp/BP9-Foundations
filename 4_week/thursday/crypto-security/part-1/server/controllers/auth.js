const bcrypt = require("bcrypt");
const users = [];

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const authenticated = bcrypt.compareSync(
          password,
          users[i].hashedPassword
        );
        if (authenticated) {
          let userToReturn = { ...users[i] };
          delete userToReturn.passwordHash;
          res.status(200).send(userToReturn);
          return;
        }
      }
    }
    res.status(400).send("User not found");
  },
  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;
    const salt = 15;
    const hashedPassword = bcrypt.hashSync(password, salt);
    let user = {
      username,
      email,
      firstName,
      lastName,
      hashedPassword,
    };
    users.push(user);
    let userToReturn = { ...user };
    delete userToReturn.passwordHash;
    res.status(200).send(userToReturn);
  },
};
