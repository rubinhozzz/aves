CREATE TABLE IF NOT EXISTS season (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	created_on TIMESTAMP NOT NULL,
	is_active BOOL NOT NULL DEFAULT 't'
);

CREATE TABLE IF NOT EXISTS player (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	lastname VARCHAR(50) NOT NULL,
	is_active BOOL NOT NULL DEFAULT 't'
);

CREATE TABLE IF NOT EXISTS skill (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL,
	is_active BOOL NOT NULL DEFAULT 't'
);

CREATE TABLE IF NOT EXISTS skill_player (
	id SERIAL PRIMARY KEY,
	skill INTEGER REFERENCES skill(id) NOT NULL,
	player INTEGER REFERENCES player(id) NOT NULL,
	points INTEGER NOT NULL,
	voter INTEGER REFERENCES player(id) NOT NULL,
	voted_on TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS match (
	id SERIAL PRIMARY KEY,
	season INTEGER REFERENCES season(id) NOT NULL,
	notes VARCHAR(255),
	played_on TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS match_player (
	id SERIAL PRIMARY KEY,
	match_id INTEGER REFERENCES match(id) NOT NULL,
	player_id INTEGER REFERENCES player(id) NOT NULL,
	team INTEGER NOT NULL,
	goals INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS man_of_the_match (
	id SERIAL PRIMARY KEY,
	match_id INTEGER REFERENCES match(id) NOT NULL,
	player_id INTEGER REFERENCES player(id) NOT NULL,
	voter_id INTEGER REFERENCES player(id) NOT NULL 
);
