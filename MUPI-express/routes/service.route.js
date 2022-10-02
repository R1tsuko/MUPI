const Router = require("express");
const router = new Router();
const serviceController = require("../controller/service.controller");

router.post("/service", serviceController.createService);
router.get("/service", serviceController.getServices);
router.put("/service", serviceController.updateService);
router.delete("/service", serviceController.deleteService);

module.exports = router;
        