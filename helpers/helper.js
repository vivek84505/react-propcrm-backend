module.exports = {
  handleError: (res, err) => {
    res.status(500).json({ error: err.message });
  },
};
