const pool = require("../config/mysql-config")

exports.getUsers = async (limit) => {
    try {
        if (limit) {
            const [rows] = await pool.query(
                `select * from users limit ${limit}`
            );
            return rows;
        }
    }
    catch (err) {
        console.log(err)
    }
};

exports.getUser = async (id) => {
    try {
        const [row] = await pool.query(`SELECT * FROM users where id=${id}`);
        return row[0];
    } catch (err) {
        console.log(err)
    }
}

exports.createUser = async (user) => {
    const { lastname, firstname, email } = user;
    const [result] = await pool.query(
        `INSERT INTO users VALUES (?, ?, ?, ?)`,
        [null, lastname, firstname, email]
    );
    return result;
};

exports.updateUser = async (table, id, updatedData) => {
    let [result] = "";
    for (let i = 0; i < Object.keys(updatedData).length; i++) {
        result = await pool.query(
            `UPDATE ${table} SET ${Object.keys(updatedData)[i]} ='${Object.values(updatedData)[i]
            }'  WHERE id = ${id}`
        );
    }
    return result;
};

exports.deleteUser = async (table, id) => {
    const [result] = await pool.query(
      `DELETE FROM ${table} WHERE id='${id}'`
    );
    return result;
  };