import express from "express";
const router = express.Router();

router.get("/books", (req, res) => {
    res.send([
        { id: 1, title: "Harry Poter" },
        { id: 2, title: "Senhor dos Aneis"},
        { id: 3, title: "A coragem de ser imperfeito"},
        { id: 4, title: "Todas as flores que não te enviei"}, 
        { id: 5, title: "Inteligência emocional"},
        { id: 6, title: "Do Mil ao Milhão"},
        { id: 7, title: "Rebeldes Têm Asas"},
        { id: 8, title: "Garota Alemã"},
        { id: 9, title: "Mindset Milionário"},
        { id: 10, title: "Poder da Autorresponsabilidade"}
    ]);
});

export default router;
