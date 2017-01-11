const {
  getDepartments,
  getTopics,
  getResources,
  getUserInfo,
  setResource,
  requestTopic,
  completeResource,
  beginResource,
} = require('./methods');

let router = (require('express-promise-router')());

router.get('/departments', getDepartments);
router.get('/topics', getTopics);
router.get('/resources', getResources);
router.get('/user-info', getUserInfo);

router.post('/addResource', setResource);
router.post('/requestTopic', requestTopic);
router.post('/complete', completeResource);
router.post('/begin', beginResource);

module.exports = router;
