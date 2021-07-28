var DataTypes = require("sequelize").DataTypes;
var _agency = require("./agency");
var _citizenship = require("./citizenship");
var _city = require("./city");
var _country = require("./country");
var _event = require("./event");
var _eventperson = require("./eventperson");
var _eventtype = require("./eventtype");
var _location = require("./location");
var _person = require("./person");
var _persontype = require("./persontype");
var _traveldoc = require("./traveldoc");
var _ttype = require("./ttype");
var _role = require("./role");
var _korisnik = require("./korisnik");

function initModels(sequelize) {
  var Country = _country(sequelize, DataTypes);
  var Ttype = _ttype(sequelize, DataTypes);
  var Eventtype = _eventtype(sequelize, DataTypes);
  var Persontype = _persontype(sequelize, DataTypes);
  var Role = _role(sequelize, DataTypes);
  var City = _city(sequelize, DataTypes);
  var Location = _location(sequelize, DataTypes);
  var Agency = _agency(sequelize, DataTypes);
  var Traveldoc = _traveldoc(sequelize, DataTypes);
  var Person = _person(sequelize, DataTypes);
  var Event = _event(sequelize, DataTypes);
  var Eventperson = _eventperson(sequelize, DataTypes);
  var Citizenship = _citizenship(sequelize, DataTypes);
  var Korisnik = _korisnik(sequelize, DataTypes);


  Person.belongsTo(Agency, { as: "agency_agency", foreignKey: "agency"});
  Agency.hasMany(Person, { as: "people", foreignKey: "agency"});
  Traveldoc.belongsTo(Agency, { as: "agency_pk_agency", foreignKey: "agency_pk"});
  Agency.hasMany(Traveldoc, { as: "traveldocs", foreignKey: "agency_pk"});
  Location.belongsTo(City, { as: "city_city", foreignKey: "city"});
  City.hasMany(Location, { as: "locations", foreignKey: "city"});
  Person.belongsTo(City, { as: "cob_city", foreignKey: "cob"});
  City.hasMany(Person, { as: "people", foreignKey: "cob"});
  Traveldoc.belongsTo(City, { as: "city_pk_city", foreignKey: "city_pk"});
  City.hasMany(Traveldoc, { as: "traveldocs", foreignKey: "city_pk"});
  Citizenship.belongsTo(Country, { as: "country_pk_country", foreignKey: "country_pk"});
  Country.hasMany(Citizenship, { as: "citizenships", foreignKey: "country_pk"});
  City.belongsTo(Country, { as: "country_country", foreignKey: "country"});
  Country.hasMany(City, { as: "cities", foreignKey: "country"});
  Eventperson.belongsTo(Event, { as: "event_event", foreignKey: "event"});
  Event.hasMany(Eventperson, { as: "eventpeople", foreignKey: "event"});
  Event.belongsTo(Eventtype, { as: "eventtype_eventtype", foreignKey: "eventtype"});
  Eventtype.hasMany(Event, { as: "events", foreignKey: "eventtype"});
  Agency.belongsTo(Location, { as: "location_location", foreignKey: "location"});
  Location.hasMany(Agency, { as: "agencies", foreignKey: "location"});
  Event.belongsTo(Location, { as: "location_location", foreignKey: "location"});
  Location.hasMany(Event, { as: "events", foreignKey: "location"});
  Citizenship.belongsTo(Person, { as: "person_pk_person", foreignKey: "person_pk"});
  Person.hasMany(Citizenship, { as: "citizenships", foreignKey: "person_pk"});
  Eventperson.belongsTo(Person, { as: "person_person", foreignKey: "person"});
  Person.hasMany(Eventperson, { as: "eventpeople", foreignKey: "person"});
  Eventperson.belongsTo(Persontype, { as: "persontype_persontype", foreignKey: "persontype"});
  Persontype.hasMany(Eventperson, { as: "eventpeople", foreignKey: "persontype"});
  Person.belongsTo(Traveldoc, { as: "traveldoc_traveldoc", foreignKey: "traveldoc"});
  Traveldoc.hasMany(Person, { as: "people", foreignKey: "traveldoc"});
  Traveldoc.belongsTo(Ttype, { as: "ttype_pk_ttype", foreignKey: "ttype_pk"});
  Ttype.hasMany(Traveldoc, { as: "traveldocs", foreignKey: "ttype_pk"});

  Role.hasMany(Korisnik, { as: "korisnik_pk_korisnik", foreignKey: "role_pk"});
  Korisnik.belongsTo(Role, {as: "roles", foreignKey: "role_pk"});

  return {
    Role,
    Korisnik,
    Country,
    Citizenship,
    City,
    Location,
    Agency,
    Ttype,
    Eventtype,
    Persontype,
    Traveldoc,
    Event,
    Person,
    Eventperson,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
