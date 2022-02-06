var DataTypes = require("sequelize").DataTypes;
var _ptd = require("./ptd");
var _citizenship = require("./citizenship");
var _city = require("./city");
var _country = require("./country");
var _event = require("./event");
var _eventperson = require("./eventperson");
var _eventtype = require("./eventtype");
var _person = require("./person");
var _persontype = require("./persontype");
var _traveldoc = require("./traveldoc");
var _ttype = require("./ttype");
var _tdtype = require("./tdtype");
var _role = require("./role");
var _korisnik = require("./korisnik");
var _facilitytype = require("./facilitytype")
var _facility = require("./facility")

function initModels(sequelize) {
  var Country = _country(sequelize, DataTypes);
  var Ttype = _ttype(sequelize, DataTypes);
  var TDtype = _tdtype(sequelize, DataTypes);
  var Eventtype = _eventtype(sequelize, DataTypes);
  var Persontype = _persontype(sequelize, DataTypes);
  var Role = _role(sequelize, DataTypes);
  var City = _city(sequelize, DataTypes);
  var Korisnik = _korisnik(sequelize, DataTypes);
  var FacilityType = _facilitytype(sequelize, DataTypes)
  var Facility = _facility(sequelize, DataTypes)
  var Traveldoc = _traveldoc(sequelize, DataTypes);
  var Person = _person(sequelize, DataTypes);
  var Event = _event(sequelize, DataTypes);
  var Eventperson = _eventperson(sequelize, DataTypes);
  var Citizenship = _citizenship(sequelize, DataTypes);
  var Ptd = _ptd(sequelize, DataTypes);


  // Each person is a member of certain agency / institution.
  Person.belongsTo(Facility, { as: "facility_facility", foreignKey: "facility"})
  Facility.hasMany(Person, { as: "people", foreignKey: "facility"})


  //Each travelling document is issued by certain agency
  Traveldoc.belongsTo(Facility, { as: "facility_pk_facility", foreignKey: "facility_pk"})
  Facility.hasMany(Traveldoc, { as: "traveldocs", foreignKey: "facility_pk"})


  //This represents city of birth connection
  Person.belongsTo(City, { as: "cob_city", foreignKey: "cob"})
  City.hasMany(Person, { as: "people", foreignKey: "cob"})


  //Citizenship is a connecting table between person and a country
  Citizenship.belongsTo(Country, { as: "country_pk_country", foreignKey: "country_pk"})
  Country.hasMany(Citizenship, { as: "citizenships", foreignKey: "country_pk"})

  Citizenship.belongsTo(Person, { as: "person_pk_person", foreignKey: "person_pk"})
  Person.hasMany(Citizenship, { as: "citizenships", foreignKey: "person_pk"})


  //Relationship between city and country
  City.belongsTo(Country, { as: "country_country", foreignKey: "country"})
  Country.hasMany(City, { as: "cities", foreignKey: "country"})


  //Event is of certain type and takes place at certain facility
  Event.belongsTo(Eventtype, { as: "eventtype_eventtype", foreignKey: "eventtype"})
  Eventtype.hasMany(Event, { as: "events", foreignKey: "eventtype"})

  Event.belongsTo(Facility, { as: "facility_event", foreignKey: "facility"})
  Facility.hasMany(Event, { as: "events", foreignKey: "facility"})

  Event.belongsTo(Ptd, { as: "ptd_event", foreignKey: "ptd"})
  Ptd.hasMany(Event, { as: "events", foreignKey: "ptd"})


  //Eventperson is a connection table between Event and Person, including the role of the person at the event
  Eventperson.belongsTo(Event, { as: "event_event", foreignKey: "event"})
  Event.hasMany(Eventperson, { as: "eventpeople", foreignKey: "event"})

  Eventperson.belongsTo(Person, { as: "person_person", foreignKey: "person"})
  Person.hasMany(Eventperson, { as: "eventpeople", foreignKey: "person"})

  Eventperson.belongsTo(Persontype, { as: "persontype_persontype", foreignKey: "persontype"})
  Persontype.hasMany(Eventperson, { as: "eventpeople", foreignKey: "persontype"})


  //What is the type of the traveling document
  Traveldoc.belongsTo(TDtype, { as: "tdtype_pk_tdtype", foreignKey: "tdtype_pk"})
  TDtype.hasMany(Traveldoc, {as: "traveldoc_td", foreignKey: "tdtype_pk"})


  //What is the type of the facility
  Facility.belongsTo(FacilityType, { as: "facilitytype_facilitytype", foreignKey: "facilitytype"})
  FacilityType.hasMany(Facility, { as: "facility", foreignKey: "facilitytype"})


  //PTD is a connection table between a person and the travelling document it is using.
  Ptd.belongsTo(Traveldoc, { as: "td_pk_td", foreignKey: "traveldoc_pk"})
  Traveldoc.hasMany(Ptd, { as: "ptds", foreignKey: "traveldoc_pk"})

  Ptd.belongsTo(Person, { as: "p_pk_p", foreignKey: "person_pk"})
  Person.hasMany(Ptd, { as: "ptds", foreignKey: "person_pk"})


  Role.hasMany(Korisnik, { as: "korisnik_pk_korisnik", foreignKey: "role_pk"})
  Korisnik.belongsTo(Role, {as: "roles", foreignKey: "role_pk"})


  return {
    Role,
    Korisnik,
    Country,
    Citizenship,
    City,
    Ttype,
    TDtype,
    Eventtype,
    Persontype,
    FacilityType,
    Event,
    Person,
    Eventperson,
    Facility,
    Traveldoc,
    Ptd
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
