const callApi = async ()=>{
    const res = await fetch(`https://api.adviceslip.com/advice`)

    const data = await res.json()

    document.querySelector('.title').innerHTML = `Advice #${data.slip.id}`
    document.querySelector('.text').textContent = `"${data.slip.advice}"`
}

document.querySelector('.btn').addEventListener('click', (e)=>{
    callApi();
})

callApi();