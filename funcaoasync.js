async function olamundo(){
    return "Ola mundo assincrono"
}
(async () => {

    let msg = await olamundo()
    console.log(msg)
})()
