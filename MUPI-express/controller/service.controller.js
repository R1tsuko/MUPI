const db = require("../db");

class ServiceController {
  async createService(req, res) {
    const { name, description, price_less_80m, price_more_80m } = req.body;
    const newService = await db.query(
      `INSERT INTO service (name, description, price_less_80m, price_more_80m) values ($1, $2, $3, $4) RETURNING *`,
      [name, description, price_less_80m, price_more_80m]
    );
    res.json(newService.rows[0]);
  }
  async getServices(req, res) {
    const services = await db.query("SELECT * FROM service");
    res.json(services.rows);
  }
  async updateService(req, res) {
    const { id, name, description, price_less_80m, price_more_80m } = req.body;
    const service = await db.query(
      "UPDATE service set name = $1, description = $2, price_less_80m = $3, price_more_80m = $4 where id = $5 RETURNING *",
      [name, description, price_less_80m, price_more_80m, id]
    );
    res.json(service.rows[0]);
  }
  async deleteService(req, res) {
    const id = req.params.id;
    const service = await db.query("DELETE FROM service where id = $1", [id]);
    res.json(service.rows[0]);
  }
}

module.exports = new ServiceController();
