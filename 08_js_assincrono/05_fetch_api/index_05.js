async function loadJson(url) {
    const retorno = await fetch(url);
    if (retorno.status === 200) {
        return retorno.json();
    } else {
        throw new Error(retorno.status)
    }
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert)