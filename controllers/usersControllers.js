
const getUsersPage = (req, res) => {
    res.render('users', {
        title: "Users -Chat Application"
    })
};



module.exports = {
    getUsersPage
}