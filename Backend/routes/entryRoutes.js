module.exports = (req, res) => {
  res.status(200).json({
    message: "This is Entry Router",
    status: "success",
  });
};
