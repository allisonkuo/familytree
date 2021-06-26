function FamilyController(Person) {
    controllerMethods = {};

    controllerMethods.index = function (req, res) {
        res.redirect("/family");
    },

    controllerMethods.getFamily = function (req, res) {
        // get the user's entry, go through and get all the relative ID's that exist and then recursively find those
        Person.find({}, (err, people) => {
            if (err) {
                console.log("Error retrieving people from database");
            } else {
                // create a graph w/ all the relatives
                req.app.locals.relativesGraph = getDirectRelatives(people);
                res.render("index", { people: people });
            }
        });
    };

    controllerMethods.getPerson = function (req, res) {
        Person.findById(req.params.id, (err, foundPerson) => {
            foundPerson = foundPerson.toObject();
            if (err) {
                console.log(err);
                res.redirect("/family");
            } else {
                var directRelatives;
                // check if we still have the massaged data available
                if (req.app.locals.relativesGraph !== undefined) {
                    directRelatives = req.app.locals.relativesGraph[foundPerson.id];
                    res.render("show", { person: foundPerson, relatives: directRelatives });

                } else {
                    console.log("directRelativesGraph undefined");
                    Person.find({}, (err, people) => {
                        if (err) {
                            console.log("Error retrieving people from database");
                        } else {
                            directRelatives = getDirectRelatives(people);
                            req.app.locals.relativesGraph = directRelatives;
                            res.render("show", { person: foundPerson, relatives: directRelatives });
                        }
                    });
                }
            }
        });
    };

    controllerMethods.getPersonEdit = function (req, res) {
        Person.findById(req.params.id, (err, foundPerson) => {
            if (err) {
                console.log(err);
                res.redirect("/family");
            } else {
                var relativeIds = [];
                var relationMap = {}; // Map the relative's id to their relation (i.e. spouse, parent)
                if (foundPerson !== null) {
                    foundPerson = foundPerson.toObject();
                    Object.keys(foundPerson).forEach((key) => {
                        if (key.includes("Id")) {
                            relativeIds.push(foundPerson[key]);
                            relationMap[foundPerson[key]] = key;
                        }
                    });
                    console.log(relationMap);
                    Person.find({ "id": { $in: relativeIds } }, (err, foundRelatives) => {
                        if (err) {
                            console.log(err);
                            res.redirect("/family");
                        } else {
                            console.log(foundRelatives);
                            res.render("edit", { person: foundPerson, relatives: foundRelatives, relationMap: relationMap });
                        }
                    });
                } else {
                    console.log("There is an error loading the edit page, redirecting to home");
                    res.redirect("/");
                }
            }
        });

        controllerMethods.updatePerson = function (req, res) {
            // dummy the image link 
            req.body.person.avatarSrc = "https://images.unsplash.com/photo-1560830672-575980201c33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";
            console.log(req.body.person);
            Person.findByIdAndUpdate(req.params.id, req.body.person, (err, updatedPerson) => {
                if (err) {
                    console.log(err);
                    res.redirect("/");
                } else {
                    res.redirect(`/family/${req.params.id}`);
                }
            })
        }
    }

    return controllerMethods;
}

function getDirectRelatives(people) {
    var directRelativesArray = [];
    people.forEach((currPerson) => {
        var directRelatives = {
            'parents': [],
            'siblings': [],
            'children': [],
            'spouse': [],
        };
        currPerson = currPerson.toObject();
        people.forEach((person2) => {
            // assume parentId1 and parentId2 always the same respectively if two people have the same parents 
            // assume if you have parents, they are 2 parents
            // same parents = siblings
            person2 = person2.toObject();
            if (person2.id !== currPerson.id) {
                if (currPerson.parentId1 !== undefined && currPerson.parentId2 !== undefined &&
                    person2.parentId1 === currPerson.parentId1 && person2.parentId2 === currPerson.parentId2) {
                    directRelatives.siblings.push(person2);
                }
                // get the parents
                if (person2.id === currPerson.parentId1 || person2.id === currPerson.parentId2) {
                    directRelatives.parents.push(person2);
                }
                // get the spouse, assume only 1 spouse per person
                if (person2.id === currPerson.spouseId) {
                    directRelatives.spouse.push(person2);
                }
                // get children
                if (person2.parentId1 === currPerson.id) {
                    directRelatives.children.push(person2);
                }
            }
        });
        var obj = {};
        obj[currPerson.id] = directRelatives;
        directRelativesArray.push(obj);
    });
    return directRelativesArray;
}


module.exports = FamilyController;