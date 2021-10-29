var express = require('express');
var router = express.Router();
var storeValue;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
      storeValue=Number(search_params.get("x"))
      storeValue1=Number(search_params.get("y"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(storeValue == 0)
    storeValue=Math.random()
    if(storeValue1 == 0)
    storeValue1=Math.random()
    res.write("Computes the values for Math.abs and math.acos function."+"\n")
    res.write('Math.hypot applied to '+storeValue+" and " +storeValue1+ "is "+Math.hypot(storeValue,storeValue1)+"\n");
    res.write('Math.ceil applied to '+storeValue+" is "+Math.ceil(storeValue)+"\n");
    res.end('Math.clz32 applied to '+storeValue+" is "+Math.clz32(storeValue));
 });

module.exports = router; 