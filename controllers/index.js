display = (req, res) => {
    const data = "Home";
    res.status(200).send(data);
};

module.exports = {
    display,
};