module.exports = (app, Person) => {
    const family = require('../controllers/family')(Person);
    app.get("/", family.index);

    // INDEX route -- the home page
    app.get("/family", family.getFamily);

    // SHOW route -- show a specific person 
    app.get("/family/:id", family.getPerson);

    // EDIT route -- edit the current user's info
    app.get("/family/:id/edit", family.getPersonEdit);

    app.post("/family/:id", (req, res) => { family.updatePerson(req, res) });
}