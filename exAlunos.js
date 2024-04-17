const express = require('express')
const app = express()
const port = 3000

const alunos = [{ra: 0, nome: "", turma: "", cursos: []}, {ra: 1, nome: "", turma: "", cursos: []}]

app.use(express.json())

app.get('/alunos', (req, res) => {
  res.json(alunos)
})
app.get('/alunos/id', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.body.ra);
    res.json(alunos[index])
  })

app.post('/alunos', (req, res) => {
    alunos.push(req.body)
    res.send(`Post ${req.body.nome}`)
  })
app.post('/cursos', (req, res) => {
  const index = alunos.findIndex(x => x.ra == req.body.ra);  
  alunos[index].cursos.push(req.body.cursos)
    res.send(`Post ${req.body.cursos}`)
  })
  app.put('/alunos', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.body.ra);
    alunos[index] = {ra: req.body.ra, nome: req.body.nome, turma: req.body.turma}
    res.send(JSON.stringify(alunos))
  })
  app.put('/cursos', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.body.ra);
    alunos[index].cursos =  req.body.cursos
    res.send(JSON.stringify(alunos))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})