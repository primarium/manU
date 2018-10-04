import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// const request = require('supertest');
// const express = require('express');

// const app = express();

// app.get('/spaces', function (req, res) {
//     res.status(200).json({ name: 'seeded space', diskquota_mb: 1000, memoryquota_mb: 4000 });
// });

xdescribe('getSpacesAction', () => {
    xit('should get all spaces', async () => {
        const expectedActions = [
            { type: actions.RETRIEVE_SPACES, payload: 'payload' },
        ]

        const store = mockStore({ messages: {} })

        await store.dispatch(actions.getSpaces())
        const whatsLeft = store.getActions()
        expect(whatsLeft[0].payload[0].name).toEqual('seeded space')
        expect(whatsLeft[0].payload[0].diskquota_mb).toEqual(1000)
        expect(whatsLeft[0].payload[0].memoryquota_mb).toEqual(4000)
    })
})



