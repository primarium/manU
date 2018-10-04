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

    describe('POST /spaces', () => {
        it('insert a new space in the backend data storage', async () => {
            const space = {
                name: 'some_name',
                diskquota_mb: 100,
                memoryquota_mb: 100
            }

            const res = await api.post('/spaces').send(space);
            expect(res.body.id).to.exist;
            space.id = res.body.id;
            const getItemInDB = await Space.forge({}).where({ id: res.body.id }).fetch()
            expect(getItemInDB.attributes).to.eql(space);

        })
    })
})