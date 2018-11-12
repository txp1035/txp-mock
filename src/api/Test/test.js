let obj = {
  method: 'get',
  isMockData: true,
  url: '/test',
  data: {
    status: 0,
    data: {
      'recommend|3': [
        {
          'id|+1': 1,
          goodsImages: '@image(300x600)',
          hot: '@pick([0,1])',
          name: '@cword(1,10)',
          business: '@cword(1,5)',
          integral: '@natural(1,100)'
        }
      ],
      'sowing|4': ['"@image(300x600)"'],
      'icon|5': [
        {
          iconImages: '@image(300x600)',
          name: '商品分类',
          'id|+1': 1
        }
      ]
    }
  }
};
module.exports = obj;
