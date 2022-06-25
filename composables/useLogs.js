
const start=Date.now() 

export const useLogs = () => {
    return useState('logs', () => [])
}

export const logit=(cat,text) =>{
    console.log(cat,text)
    useLogs().value.push({
        date: Date.now()-start,
        cat: cat,
        text: text
    })
}