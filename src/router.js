const { Router } = require('express');
const Service = require('./service');

const router = Router();

router.get('/', Service.helloWorld);

router.get('/facility', Service.getFacilities);
router.get('/search', Service.searchFacilities);

module.exports = router;
