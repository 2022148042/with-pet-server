function queryForGetFacilities({ latitude, longitude, data }) {
  const result = [];
  for (const facility of data) {
    // 최대 300개만
    if (result.length >= 300) {
      return result;
    }
    // 위도 경도 차이가 0.4 이하인 것들만
    if (
      Math.abs(Number(facility['위도']) - Number(latitude)) < 0.4 &&
      Math.abs(Number(facility['경도']) - Number(longitude)) < 0.4
    ) {
      result.push(facility);
    }
  }
  return result;
}

function queryForSearchFacilities({ q, data }) {
  const result = [];
  for (const facility of data) {
    // 최대 30개만
    if (result.length >= 30) {
      return result;
    }

    if (
      facility['시설명'].includes(q) ||
      facility['시도 명칭'].includes(q) ||
      facility['시군구 명칭'].includes(q) ||
      facility['법정읍면동명칭'].includes(q) ||
      facility['리 명칭'].includes(q) ||
      facility['도로명주소'].includes(q) ||
      facility['지번주소'].includes(q)
    ) {
      result.push(facility);
    }
  }
  return result;
}

module.exports = {
  queryForGetFacilities,
  queryForSearchFacilities,
};
