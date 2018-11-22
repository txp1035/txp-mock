const arr = {
  'GET /test1': {
    a: 1
  },
  'GET /test2': (req, res) => {
    res.send('hhh');
  }
};
module.exports = arr;
