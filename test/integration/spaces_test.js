const { expect } = require('chai')
const request = require('supertest')
const app = require('../../app')
const Space = require('../../models/space')

describe('Spaces', () => {
    let api
    beforeEach(async () => {
        api = request(app)
        const spaces = await Space.forge({}).fetchAll()
        await spaces.forEach(space => space.destroy())
    })

    after(async () => {
        const spaces = await Space.forge({}).fetchAll()
        await spaces.forEach(space => space.destroy())
    })

    describe('GET /spaces', () => {
        it('returns a list of spaces in the database', async () => {
            const space = {
                name: 'some_name',
                diskquota_mb: 100,
                memoryquota_mb: 100
            }
            await Space.forge(space).save()

            const res = await api.get('/spaces')
            expect(res.body.length).to.equal(1)
            expect(res.body[0].name).to.equal(space.name)
        })
    })
})