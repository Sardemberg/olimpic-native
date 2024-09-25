import Axios from "../base";

export default {
    getAllPlayersFromATeam: (teamId, season) => {
        return Axios.get(`/players?team=${teamId}&season=${season}`)
    },
    getPlayerInfo: (playerId, season) => {
        return Axios.get(`/players?id=${playerId}&season=${season}`)
    },
    getCachedRequest: () => {
        return {
            "get": "players",
            "parameters": {
                "team": "6",
                "season": "2024"
            },
            "errors": [],
            "results": 20,
            "paging": {
                "current": 1,
                "total": 3
            },
            "response": [
                {
                    "player": {
                        "id": 280,
                        "name": "Alisson Becker",
                        "firstname": "Alisson Ramsés",
                        "lastname": "Becker",
                        "age": 32,
                        "birth": {
                            "date": "1992-10-02",
                            "place": "Novo Hamburgo",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "193 cm",
                        "weight": "91 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/280.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 4,
                                "minutes": 360,
                                "number": null,
                                "position": "Goalkeeper",
                                "rating": "7.175000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 2,
                                "assists": 0,
                                "saves": 11
                            },
                            "passes": {
                                "total": 113,
                                "key": null,
                                "accuracy": 25
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": 0
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 2,
                                "lineups": 2,
                                "minutes": 180,
                                "number": null,
                                "position": "Goalkeeper",
                                "rating": "7.000000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 3,
                                "assists": 0,
                                "saves": 8
                            },
                            "passes": {
                                "total": 48,
                                "key": null,
                                "accuracy": 21
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": 0
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 372,
                        "name": "Éder Militão",
                        "firstname": "Éder Gabriel",
                        "lastname": "Militão Pinheiro",
                        "age": 26,
                        "birth": {
                            "date": "1998-01-18",
                            "place": "Sertãozinho",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "186 cm",
                        "weight": "78 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/372.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 4,
                                "minutes": 356,
                                "number": null,
                                "position": "Defender",
                                "rating": "7.225000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 1,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 208,
                                "key": 1,
                                "accuracy": 45
                            },
                            "tackles": {
                                "total": 7,
                                "blocks": 5,
                                "interceptions": 8
                            },
                            "duels": {
                                "total": 35,
                                "won": 22
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 5,
                                "committed": 5
                            },
                            "cards": {
                                "yellow": 1,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 1,
                                "lineups": 1,
                                "minutes": 90,
                                "number": null,
                                "position": "Defender",
                                "rating": "7.000000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 1
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 90,
                                "key": 1,
                                "accuracy": 85
                            },
                            "tackles": {
                                "total": 1,
                                "blocks": 3,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 5,
                                "won": 3
                            },
                            "dribbles": {
                                "attempts": 1,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": 1
                            },
                            "cards": {
                                "yellow": 1,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 643,
                        "name": "Gabriel Jesus",
                        "firstname": "Gabriel Fernando",
                        "lastname": "de Jesus",
                        "age": 27,
                        "birth": {
                            "date": "1997-04-03",
                            "place": "São Paulo",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "175 cm",
                        "weight": "73 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/643.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 0,
                                "lineups": 0,
                                "minutes": 0,
                                "number": null,
                                "position": "Attacker",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": null,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": null,
                                "missed": null,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 723,
                        "name": "Joelinton",
                        "firstname": "Joelinton Cássio",
                        "lastname": "Apolinário de Lira",
                        "age": 28,
                        "birth": {
                            "date": "1996-08-14",
                            "place": "Aliança",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "186 cm",
                        "weight": "81 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/723.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 0,
                                "lineups": 0,
                                "minutes": 0,
                                "number": null,
                                "position": "Attacker",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": null,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": null,
                                "missed": null,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 747,
                        "name": "Casemiro",
                        "firstname": "Carlos Henrique",
                        "lastname": "Casimiro",
                        "age": 32,
                        "birth": {
                            "date": "1992-02-23",
                            "place": "São José dos Campos",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "185 cm",
                        "weight": "84 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/747.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 0,
                                "lineups": 0,
                                "minutes": 0,
                                "number": null,
                                "position": "Midfielder",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": null,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": null,
                                "missed": null,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 762,
                        "name": "Vinícius Júnior",
                        "firstname": "Vinícius José",
                        "lastname": "Paixão de Oliveira Júnior",
                        "age": 24,
                        "birth": {
                            "date": "2000-07-12",
                            "place": "São Gonçalo",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "176 cm",
                        "weight": "73 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/762.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 3,
                                "lineups": 3,
                                "minutes": 251,
                                "number": null,
                                "position": "Attacker",
                                "rating": "7.266666",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 1,
                                "bench": 0
                            },
                            "shots": {
                                "total": 4,
                                "on": 2
                            },
                            "goals": {
                                "total": 2,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 56,
                                "key": 5,
                                "accuracy": 14
                            },
                            "tackles": {
                                "total": 6,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 40,
                                "won": 19
                            },
                            "dribbles": {
                                "attempts": 22,
                                "success": 7,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 6,
                                "committed": 3
                            },
                            "cards": {
                                "yellow": 2,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 3,
                                "minutes": 266,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.966666",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 2,
                                "bench": 1
                            },
                            "shots": {
                                "total": 9,
                                "on": 7
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 1,
                                "saves": null
                            },
                            "passes": {
                                "total": 73,
                                "key": 6,
                                "accuracy": 20
                            },
                            "tackles": {
                                "total": 1,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 21,
                                "won": 11
                            },
                            "dribbles": {
                                "attempts": 10,
                                "success": 5,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 5,
                                "committed": 2
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 899,
                        "name": "Andreas Pereira",
                        "firstname": "Andreas Hugo",
                        "lastname": "Hoelgebaum Pereira",
                        "age": 28,
                        "birth": {
                            "date": "1996-01-01",
                            "place": "Duffel",
                            "country": "Belgium"
                        },
                        "nationality": "Brazil",
                        "height": "178 cm",
                        "weight": "71 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/899.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 3,
                                "lineups": 0,
                                "minutes": 64,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "6.766666",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 3,
                                "out": 0,
                                "bench": 4
                            },
                            "shots": {
                                "total": 1,
                                "on": 1
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 16,
                                "key": null,
                                "accuracy": 3
                            },
                            "tackles": {
                                "total": 4,
                                "blocks": null,
                                "interceptions": 1
                            },
                            "duels": {
                                "total": 13,
                                "won": 6
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 2,
                                "committed": 2
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 1,
                                "minutes": 149,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "7.166666",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 3,
                                "out": 1,
                                "bench": 3
                            },
                            "shots": {
                                "total": 2,
                                "on": 2
                            },
                            "goals": {
                                "total": 1,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 44,
                                "key": 6,
                                "accuracy": 11
                            },
                            "tackles": {
                                "total": 1,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 7,
                                "won": 3
                            },
                            "dribbles": {
                                "attempts": 2,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 1,
                                "committed": 1
                            },
                            "cards": {
                                "yellow": 1,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 1496,
                        "name": "Raphinha",
                        "firstname": "Raphael",
                        "lastname": "Dias Belloli",
                        "age": 28,
                        "birth": {
                            "date": "1996-12-14",
                            "place": "Porto Alegre",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "176 cm",
                        "weight": "68 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/1496.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 3,
                                "minutes": 260,
                                "number": null,
                                "position": "Attacker",
                                "rating": "7.175000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 2,
                                "bench": 1
                            },
                            "shots": {
                                "total": 7,
                                "on": 5
                            },
                            "goals": {
                                "total": 1,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 88,
                                "key": 4,
                                "accuracy": 16
                            },
                            "tackles": {
                                "total": 5,
                                "blocks": null,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 27,
                                "won": 16
                            },
                            "dribbles": {
                                "attempts": 8,
                                "success": 5,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 6,
                                "committed": 4
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 3,
                                "lineups": 3,
                                "minutes": 189,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.700000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 3,
                                "bench": 1
                            },
                            "shots": {
                                "total": 3,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 1,
                                "saves": null
                            },
                            "passes": {
                                "total": 56,
                                "key": 2,
                                "accuracy": 24
                            },
                            "tackles": {
                                "total": 6,
                                "blocks": null,
                                "interceptions": 1
                            },
                            "duels": {
                                "total": 20,
                                "won": 11
                            },
                            "dribbles": {
                                "attempts": 5,
                                "success": 2,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 1,
                                "committed": 1
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 1646,
                        "name": "Lucas Paquetá",
                        "firstname": "Lucas",
                        "lastname": "Tolentino Coelho de Lima",
                        "age": 27,
                        "birth": {
                            "date": "1997-08-27",
                            "place": "Rio de Janeiro",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "180 cm",
                        "weight": "72 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/1646.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 4,
                                "minutes": 296,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "7.425000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 3,
                                "bench": 0
                            },
                            "shots": {
                                "total": 8,
                                "on": 1
                            },
                            "goals": {
                                "total": 1,
                                "conceded": 0,
                                "assists": 1,
                                "saves": null
                            },
                            "passes": {
                                "total": 141,
                                "key": 4,
                                "accuracy": 26
                            },
                            "tackles": {
                                "total": 15,
                                "blocks": null,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 48,
                                "won": 26
                            },
                            "dribbles": {
                                "attempts": 4,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 4,
                                "committed": 4
                            },
                            "cards": {
                                "yellow": 2,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 1,
                                "missed": 1,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 3,
                                "minutes": 255,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "6.733333",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 2,
                                "bench": 1
                            },
                            "shots": {
                                "total": 3,
                                "on": null
                            },
                            "goals": {
                                "total": 1,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 85,
                                "key": 4,
                                "accuracy": 24
                            },
                            "tackles": {
                                "total": 5,
                                "blocks": 1,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 29,
                                "won": 14
                            },
                            "dribbles": {
                                "attempts": 3,
                                "success": 2,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 4,
                                "committed": 6
                            },
                            "cards": {
                                "yellow": 2,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 2413,
                        "name": "Richarlison",
                        "firstname": "Richarlison",
                        "lastname": "de Andrade",
                        "age": 27,
                        "birth": {
                            "date": "1997-05-10",
                            "place": "Nova Venécia",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "184 cm",
                        "weight": "83 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/2413.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 0,
                                "lineups": 0,
                                "minutes": 0,
                                "number": null,
                                "position": "Attacker",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 2
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 10009,
                        "name": "Rodrygo",
                        "firstname": "Rodrygo",
                        "lastname": "Silva de Goes",
                        "age": 23,
                        "birth": {
                            "date": "2001-01-09",
                            "place": "Osasco",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "174 cm",
                        "weight": "64 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/10009.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 4,
                                "minutes": 329,
                                "number": null,
                                "position": "Attacker",
                                "rating": "7.000000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 3,
                                "bench": 0
                            },
                            "shots": {
                                "total": 7,
                                "on": 2
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 101,
                                "key": 5,
                                "accuracy": 21
                            },
                            "tackles": {
                                "total": 4,
                                "blocks": null,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 39,
                                "won": 17
                            },
                            "dribbles": {
                                "attempts": 12,
                                "success": 4,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 7,
                                "committed": 1
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 3,
                                "lineups": 3,
                                "minutes": 236,
                                "number": null,
                                "position": "Attacker",
                                "rating": "7.750000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 3,
                                "bench": 1
                            },
                            "shots": {
                                "total": 8,
                                "on": 5
                            },
                            "goals": {
                                "total": 2,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 59,
                                "key": 2,
                                "accuracy": 27
                            },
                            "tackles": {
                                "total": 5,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 13,
                                "won": 11
                            },
                            "dribbles": {
                                "attempts": 4,
                                "success": 4,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 2,
                                "committed": 1
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 10135,
                        "name": "Bruno Guimarães",
                        "firstname": "Bruno",
                        "lastname": "Guimarães Rodriguez Moura",
                        "age": 27,
                        "birth": {
                            "date": "1997-11-16",
                            "place": "Rio de Janeiro",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "182 cm",
                        "weight": "74 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/10135.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 4,
                                "minutes": 335,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "7.375000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 3,
                                "bench": 0
                            },
                            "shots": {
                                "total": 3,
                                "on": 1
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 232,
                                "key": 3,
                                "accuracy": 52
                            },
                            "tackles": {
                                "total": 12,
                                "blocks": 1,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 50,
                                "won": 29
                            },
                            "dribbles": {
                                "attempts": 7,
                                "success": 4,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 10,
                                "committed": 13
                            },
                            "cards": {
                                "yellow": 1,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 3,
                                "minutes": 206,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "7.033333",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 3,
                                "bench": 1
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 131,
                                "key": 4,
                                "accuracy": 39
                            },
                            "tackles": {
                                "total": 6,
                                "blocks": null,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 23,
                                "won": 13
                            },
                            "dribbles": {
                                "attempts": 3,
                                "success": 2,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 5,
                                "committed": 4
                            },
                            "cards": {
                                "yellow": 1,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 10329,
                        "name": "João Pedro",
                        "firstname": "João Pedro",
                        "lastname": "Junqueira de Jesus",
                        "age": 23,
                        "birth": {
                            "date": "2001-09-26",
                            "place": "Ribeirão Preto",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "182 cm",
                        "weight": "70 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/10329.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 0,
                                "lineups": 0,
                                "minutes": 0,
                                "number": null,
                                "position": "Attacker",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 0
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": null,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": null,
                                "missed": null,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 22224,
                        "name": "Gabriel Magalhães",
                        "firstname": "Gabriel",
                        "lastname": "dos Santos Magalhães",
                        "age": 27,
                        "birth": {
                            "date": "1997-12-19",
                            "place": "São Paulo",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "190 cm",
                        "weight": "78 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/22224.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 1,
                                "lineups": 0,
                                "minutes": 4,
                                "number": null,
                                "position": "Defender",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 0,
                                "bench": 4
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 5,
                                "key": null,
                                "accuracy": 4
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 0,
                                "lineups": 0,
                                "minutes": 0,
                                "number": null,
                                "position": "Defender",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 0,
                                "bench": 2
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 127769,
                        "name": "Gabriel Martinelli",
                        "firstname": "Gabriel Teodoro",
                        "lastname": "Martinelli Silva",
                        "age": 23,
                        "birth": {
                            "date": "2001-06-18",
                            "place": "Guarulhos",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "178 cm",
                        "weight": "75 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/127769.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 2,
                                "lineups": 0,
                                "minutes": 10,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.800000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 2,
                                "out": 0,
                                "bench": 4
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 13,
                                "key": null,
                                "accuracy": 5
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 2,
                                "won": 1
                            },
                            "dribbles": {
                                "attempts": 2,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 2,
                                "lineups": 1,
                                "minutes": 68,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.800000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 1,
                                "bench": 1
                            },
                            "shots": {
                                "total": 2,
                                "on": 1
                            },
                            "goals": {
                                "total": 1,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 23,
                                "key": 1,
                                "accuracy": 7
                            },
                            "tackles": {
                                "total": 1,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 10,
                                "won": 3
                            },
                            "dribbles": {
                                "attempts": 3,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": 2
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 152856,
                        "name": "Evanilson",
                        "firstname": "Francisco Evanilson",
                        "lastname": "de Lima Barbosa",
                        "age": 25,
                        "birth": {
                            "date": "1999-10-06",
                            "place": "Fortaleza",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "183 cm",
                        "weight": "80 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/152856.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 1,
                                "lineups": 0,
                                "minutes": 3,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.700000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 0,
                                "bench": 4
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 1,
                                "won": 1
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 1,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 1,
                                "lineups": 1,
                                "minutes": 61,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.700000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 1,
                                "bench": 1
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 9,
                                "key": null,
                                "accuracy": 8
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 13,
                                "won": 7
                            },
                            "dribbles": {
                                "attempts": 2,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 4,
                                "committed": 2
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 195103,
                        "name": "João Gomes",
                        "firstname": "João Victor",
                        "lastname": "Gomes da Silva",
                        "age": 23,
                        "birth": {
                            "date": "2001-02-12",
                            "place": "Rio de Janeiro",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "176 cm",
                        "weight": "74 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/195103.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 4,
                                "minutes": 327,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "6.625000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 0,
                                "out": 3,
                                "bench": 0
                            },
                            "shots": {
                                "total": 1,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 179,
                                "key": 1,
                                "accuracy": 40
                            },
                            "tackles": {
                                "total": 14,
                                "blocks": null,
                                "interceptions": 2
                            },
                            "duels": {
                                "total": 49,
                                "won": 25
                            },
                            "dribbles": {
                                "attempts": 7,
                                "success": 3,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 6,
                                "committed": 10
                            },
                            "cards": {
                                "yellow": 2,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 3,
                                "minutes": 188,
                                "number": null,
                                "position": "Midfielder",
                                "rating": "6.500000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 2,
                                "bench": 1
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 63,
                                "key": null,
                                "accuracy": 18
                            },
                            "tackles": {
                                "total": 5,
                                "blocks": null,
                                "interceptions": 4
                            },
                            "duels": {
                                "total": 22,
                                "won": 8
                            },
                            "dribbles": {
                                "attempts": 1,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 2,
                                "committed": 7
                            },
                            "cards": {
                                "yellow": 1,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 265784,
                        "name": "André",
                        "firstname": "André",
                        "lastname": "Trindade da Costa Neto",
                        "age": 23,
                        "birth": {
                            "date": "2001-07-16",
                            "place": "Ibirataia",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "176 cm",
                        "weight": "77 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/265784.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 1,
                                "lineups": 0,
                                "minutes": 44,
                                "number": null,
                                "position": "Midfielder",
                                "rating": null,
                                "captain": false
                            },
                            "substitutes": {
                                "in": 1,
                                "out": 0,
                                "bench": 2
                            },
                            "shots": {
                                "total": null,
                                "on": null
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": null,
                                "saves": null
                            },
                            "passes": {
                                "total": null,
                                "key": null,
                                "accuracy": null
                            },
                            "tackles": {
                                "total": null,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": null,
                                "won": null
                            },
                            "dribbles": {
                                "attempts": null,
                                "success": null,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 266657,
                        "name": "Savinho",
                        "firstname": "Sávio",
                        "lastname": "Moreira de Oliveira",
                        "age": 20,
                        "birth": {
                            "date": "2004-04-10",
                            "place": "São Mateus",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "179 cm",
                        "weight": "66 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/266657.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 1,
                                "minutes": 117,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.825000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 3,
                                "out": 1,
                                "bench": 3
                            },
                            "shots": {
                                "total": 2,
                                "on": 1
                            },
                            "goals": {
                                "total": 1,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 45,
                                "key": 2,
                                "accuracy": 10
                            },
                            "tackles": {
                                "total": 4,
                                "blocks": 1,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 29,
                                "won": 14
                            },
                            "dribbles": {
                                "attempts": 16,
                                "success": 8,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 2,
                                "committed": 1
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 3,
                                "lineups": 1,
                                "minutes": 111,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.800000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 2,
                                "out": 1,
                                "bench": 3
                            },
                            "shots": {
                                "total": 1,
                                "on": 1
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 1,
                                "saves": null
                            },
                            "passes": {
                                "total": 44,
                                "key": 3,
                                "accuracy": 13
                            },
                            "tackles": {
                                "total": 2,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 15,
                                "won": 9
                            },
                            "dribbles": {
                                "attempts": 8,
                                "success": 4,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 2,
                                "committed": null
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                },
                {
                    "player": {
                        "id": 377122,
                        "name": "Endrick",
                        "firstname": "Endrick Felipe",
                        "lastname": "Moreira de Sousa",
                        "age": 18,
                        "birth": {
                            "date": "2006-07-21",
                            "place": "Brasília",
                            "country": "Brazil"
                        },
                        "nationality": "Brazil",
                        "height": "173 cm",
                        "weight": "66 kg",
                        "injured": false,
                        "photo": "https://media.api-sports.io/football/players/377122.png"
                    },
                    "statistics": [
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 9,
                                "name": "Copa America",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/9.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 1,
                                "minutes": 124,
                                "number": null,
                                "position": "Attacker",
                                "rating": "6.325000",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 3,
                                "out": 0,
                                "bench": 3
                            },
                            "shots": {
                                "total": 1,
                                "on": 1
                            },
                            "goals": {
                                "total": 0,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 9,
                                "key": null,
                                "accuracy": 1
                            },
                            "tackles": {
                                "total": 1,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 20,
                                "won": 6
                            },
                            "dribbles": {
                                "attempts": 4,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": 4,
                                "committed": 3
                            },
                            "cards": {
                                "yellow": 0,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        },
                        {
                            "team": {
                                "id": 6,
                                "name": "Brazil",
                                "logo": "https://media.api-sports.io/football/teams/6.png"
                            },
                            "league": {
                                "id": 10,
                                "name": "Friendlies",
                                "country": "World",
                                "logo": "https://media.api-sports.io/football/leagues/10.png",
                                "flag": null,
                                "season": 2024
                            },
                            "games": {
                                "appearences": 4,
                                "lineups": 0,
                                "minutes": 117,
                                "number": null,
                                "position": "Attacker",
                                "rating": "7.166666",
                                "captain": false
                            },
                            "substitutes": {
                                "in": 4,
                                "out": 0,
                                "bench": 4
                            },
                            "shots": {
                                "total": 7,
                                "on": 6
                            },
                            "goals": {
                                "total": 3,
                                "conceded": 0,
                                "assists": 0,
                                "saves": null
                            },
                            "passes": {
                                "total": 13,
                                "key": 1,
                                "accuracy": 2
                            },
                            "tackles": {
                                "total": 1,
                                "blocks": null,
                                "interceptions": null
                            },
                            "duels": {
                                "total": 6,
                                "won": 2
                            },
                            "dribbles": {
                                "attempts": 2,
                                "success": 1,
                                "past": null
                            },
                            "fouls": {
                                "drawn": null,
                                "committed": 2
                            },
                            "cards": {
                                "yellow": 2,
                                "yellowred": 0,
                                "red": 0
                            },
                            "penalty": {
                                "won": null,
                                "commited": null,
                                "scored": 0,
                                "missed": 0,
                                "saved": null
                            }
                        }
                    ]
                }
            ]
        }
    }
}