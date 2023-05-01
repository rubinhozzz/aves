from pydantic import BaseModel
import datetime

class Location(BaseModel):
    name: str
    postcode: str | None = None
    address: str | None = None
    is_active: bool | None = True

class Player(BaseModel):
   firstname: str
   lastname: str
   country_code: str | None = None

class Match(BaseModel):
	datetime: datetime.datetime
	teamA_name: str
	teamA_score: int
	teamA_players: list[int] | None = None
	teamB_name: str
	teamB_score: int
	teamB_players: list[int] | None = None
	location: int | None = None
	mvp: int | None = None
	pichichis: list[int] | None = None