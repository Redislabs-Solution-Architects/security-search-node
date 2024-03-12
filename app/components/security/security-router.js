import {Router} from 'express'
import * as fs from 'fs/promises'
import {securityRepository} from './security-repository.js'

export const router = Router()

router.get('/load', async (req, res) => {
    console.log(`Load data and index`)

    fs.readFile('static/samples/equity.json').then((data) => {
        const security = JSON.parse(data)
        securityRepository.save(security.securityId, security)
    })
    .catch((error) => {
        console.log(`Error reading equity file ${error}`)
    });

    fs.readFile('static/samples/digasset.json').then((data) => {
        const security = JSON.parse(data)
        securityRepository.save(security.securityId, security)
    })
    .catch((error) => {
        console.log(`Error reading digasset file ${error}`)
    });

    fs.readFile('static/samples/option.json').then((data) => {
        const security = JSON.parse(data)
        securityRepository.save(security.securityId, security)
    })
    .catch((error) => {
        console.log(`Error reading option file ${error}`)
    });

    res.send('Loaded and indexed data')
})

router.get('/search', async (req, res) => {
    const term = req.query.term
    console.log(`Search with term ${term}`)

    let securities

    if (term) {
        securities = await securityRepository.search()
            .where('securityId').equals(term)
            .or('symbol').equals(term)
            .or('cusip').equals(term)
            .or('isin').equals(term)
            .or('securityName').matches(term)
            .return.all()
    } else {
        securities = await securityRepository.search().return.all()
   }

    res.json(securities)
})
