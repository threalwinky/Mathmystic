const { NlpManager, Language } = require('node-nlp')
const mgr = new NlpManager(({languages : ['en', 'vn']}))

const getAns = async() => {
    mgr.train().then
    let res = await mgr.process('en', 'Hello')
    return res;
}

getAns()