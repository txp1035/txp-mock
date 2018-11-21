const arr = [
  {
    method: 'get',
    url: '/test4',
    param: {
      a: 1
    }
  },
  {
    method: 'get',
    url: '/test2',
    param: (req, res) => {
      res.send('hhh');
    }
  }
];
module.exports = arr;
