
const getLoginPage = (req, res) => {
    res.render('login', {
        title: "Login -Chat Application"
    })
};



module.exports = {
    getLoginPage
}