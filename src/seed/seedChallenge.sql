
DROP DATABASE IF EXISTS challenge_baza;

CREATE DATABASE challenge_baza;

\c challenge_baza

-- Create our table if it doesn't already exist

CREATE TABLE IF NOT EXISTS skiers
(
    id serial,
    name character varying(20),
    PRIMARY KEY(id)
);

ALTER TABLE skiers
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS resorts
(
    id serial,
    name character varying(200),
    PRIMARY KEY(id)
);
ALTER TABLE resorts
    OWNER to postgres;

-- CREATE TABLE IF NOT EXISTS skierResort
-- (
--     id serial,
--     rid int,
--     sid int,
--         PRIMARY KEY(id),
--     CONSTRAINT fk_resort
--         FOREIGN KEY (rid)
--             REFERENCES resorts (id),
--     CONSTRAINT fk_skiers
--         FOREIGN KEY(sid)
--             REFERENCES skiers(id)
-- );
--
-- ALTER TABLE skierResort
--     OWNER to postgres;