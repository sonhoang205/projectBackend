const res = require('express/lib/response');

const search = async (req, res) => {
  const food = [
        {
            name:'Súp cua chị Bụi Giảng Võ',
            img:'https://images.foody.vn/res/g99/987019/prof/s576x330/foody-upload-api-foody-mobile-foody-upload-api-foo-191205095208.jpg',
            address:'189 Giảng Võ, P. Cát Linh,  Quận Đống Đa, Hà Nội',
            tags: ['Món Nước'],
            district:'Đống Đa'
    },
        {
            name:'Phở Bò 21',
            img:'https://images.foody.vn/res/g26/250360/prof/s576x330/foody-mobile-2-jpg-566-636027284864930581.jpg',
            address:'21 Nguyễn Đình Chiểu, P. Lê Đại Hành,  Quận Hai Bà Trưng, Hà Nội',
            tags: ['Món Nước'],
            district:'Hai Bà Trưng'
    },
        {
            name:'Phở Bò 22',
            img:'https://images.foody.vn/res/g26/250360/prof/s576x330/foody-mobile-2-jpg-566-636027284864930581.jpg',
            address:'21 Nguyễn Đình Chiểu, P. Lê Đại Hành,  Quận Hai Bà Trưng, Hà Nội',
            tags: ['Món Nước'],
            district:'Hai Bà Trưng'
    },
        {
            name:'Bánh Đa Quang Gánh',
            img:'https://images.foody.vn/res/g112/1118808/prof/s576x330/foody-upload-api-foody-mobile-cv-f3a5a40e-211130124817.jpeg',
            address:'Đầu Ngõ 118 Nguyễn Khánh Toàn, P. Quan Hoa,  Quận Cầu Giấy, Hà Nội',
            tag: ['Món Khô'],
            district:'Cầu Giấy'
    },
        {
            name:'Xôi Thưởng 88 - Xôi Phú Thượng',
            img:'https://images.foody.vn/res/g100004/1000034013/prof/s576x330/file_restaurant_photo_rqw5_16371-e3156931-211117172459.jpg',
            address:'83 Mạc Thị Bưởi, P. Vĩnh Tuy,  Quận Hai Bà Trưng, Hà Nội',
            tags: ['Món Khô'],
            district:'Hai Bà Trưng'
    },
        {
            name:'Cơm Chay Nàng Tấm',
            img:'https://images.foody.vn/res/g1/6387/prof/s576x330/foody-mobile-nangtam-jpg-854-636132598971489969.jpg',
            address:'79A Trần Hưng Đạo, P. Trần Hưng Đạo,  Quận Hoàn Kiếm, Hà Nội',
            tags: ['Món Chay'],
            district:'Hoàn Kiếm'
    },
  ];
  const randomResult = food[Math.floor(Math.random() * food.length)];

  res.send({
    error: 0,
    data: {
      result: randomResult
    }
  });
}

module.exports = {
  search
}