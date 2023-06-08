const csv = require('csvtojson');
const csvFile = `${__dirname}/../data/facility.csv`;
const { queryForGetFacilities, queryForSearchFacilities } = require('./helpers');

function helloWorld(req, res) {
  res.send({ status: 200, message: 'Hello World!' });
}

async function getFacilities(req, res) {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    res.send({
      status: 400,
      message: '위도(latitude)와 경도(longitude)는 필수 값 입니다.',
    });
  }
  const data = await csv().fromFile(csvFile);
  res.send({
    status: 200,
    latitude,
    longitude,
    data: queryForGetFacilities({ latitude, longitude, data }),
  });
}

async function searchFacilities(req, res) {
  const { q } = req.query;
  if (!q) {
    res.send({
      status: 400,
      message: '검색어를 입력해주세요.',
    });
  }
  const data = await csv().fromFile(csvFile)
  res.send({
    status: 200,
    q,
    data: queryForSearchFacilities({ q, data }),
  })
}

module.exports = {
  helloWorld,
  getFacilities,
  searchFacilities,
};
