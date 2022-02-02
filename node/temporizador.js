const schedule = require('node-schedule')
const tarefa1 = schedule.scheduledJobs('*/5 * 12 * * 2', function (){
    console.log('Executando Tarefa1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30

const tarefa2 = scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds)
})