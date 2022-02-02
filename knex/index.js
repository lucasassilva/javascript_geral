const database = require("./database");

// INSERT
// const dados = [
//     { nome: "Call of Duty", preco: 60 },
//     { nome: "GTA", preco: 25.50 },
//     { nome: "World of Warcraft", preco: 49.90 }
// ]

// database.insert(dados).into("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// SELECT
// database.select(["id", "nome"]).table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// NESTED QUERIES - Uma query dentro da outra
// database.insert({nome: "Mists of noyah", preco: 25}).into("games").then(data => {
//     database.select(["id", "nome"]).table("games").then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// })

// WHERE
// database.select()
//         .whereRaw("nome = 'Mists of Noyah' OR preco > 120")
//         .table("games").then(data => {
//             console.log(data);
//         }).catch(err => {
//             console.log(err);
//         })

// RAW
// database.raw("SELECT * from games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err);
// });

// DELETE
// database.where({id: 4}).delete().table("games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// UPDATE
// database.where({id: 5}).update({preco: 40}).table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err);
// });

// ORDER BY
// database.select().table("games").orderBy("nome", "desc").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// ASSOCIATED INSERTS (1,1) RELATIONSHIP
// database.insert({
//     nome: "Blizzard",
//     game_id: 5
// }).table("estudios").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// INNER JOIN (1,1)
// database.select(["games.*", "estudios.nome as estudio_nome"])
// .table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 5)
// .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// INNER JOIN WITH WHERE
// database.select(["games.*", "estudios.nome as estudio_nome"])
// .table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 5)
// .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// LEFT JOIN
// database.select(["games.nome", "games.id", "games.preco", "estudios.game_id"])
// .table("games").leftJoin("estudios", "estudios.game_id", "games.id").where("games.id", 3)
// .then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

// INNER JOIN (1,N)
// database.select(["games.*", "estudios.nome as estudio_nome"])
// .table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 5)
// .then(data => {
//     const game = {
//         id: 0,
//         nome: "",
//         estudios: []
//     };
//     game.id = data[0];
//     game.nome = data[0].nome;

//     data.forEach(estudio => {
//         game.estudios.push({ nome: estudio.estudio_nome });
//     });

//     console.log(game);

// }).catch(err => {
//     console.log(err);
// });


// INNER JOIN (N,N)
// database
//     .select([
//         "estudios.nome as estudio_nome",
//         "games.nome as game_nome",
//         "games.preco"
//     ]).table("games_estudios")
//     .innerJoin("games", "games.id", "games_estudios.game_id")
//     .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
//     .where("games.id", 7)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// INNER JOIN (N,N)
// database
//     .select([
//         "estudios.nome as estudio_nome",
//         "games.nome as game_nome",
//         "games.preco"
//     ]).table("games_estudios")
//     .innerJoin("games", "games.id", "games_estudios.game_id")
//     .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
//     .where("estudios.id", 4)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// TRANSACTION
// async function transaction() {
//     try {
//         await database.transaction(async trans => {
//             await database.insert({nome: "Capcom"}).table("estudios");
//             await database.insert({nome: "Pyxerelia"}).table("estudios");
//             await database.insert({nome: "Mojang"}).table("estudios");
//             await database.insert({nome: "Gearbox"}).table("estudios");
//         });
//     } catch(err) {
//         console.log(err);
//     }
// }

// transaction();