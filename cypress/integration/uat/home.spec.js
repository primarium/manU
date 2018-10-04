import { expect } from 'chai'

// GIVEN that I'm a user, WHEN I visit the homepage, THEN see an "Add Space" button.
describe('homepage', () => {
    beforeEach(() => {
        cy.exec('node reseed.js')
    })

    it('loads with an add space button that can be clicked to access the add space form', () => {

        // setup
        cy.visit('http://localhost:3000');

        // exercise
        cy.get('#addSpaceBtn').click();

        // assert
        cy.get('#newSpaceName');
        cy.get('#newSpaceMemory');
        cy.get('#newSpaceDisk');
    })

    it('adds the space to the sidebar display when the form is filled in and create is clicked', async () => {
        // setup
        cy.visit('http://localhost:3000');
        const spaceName = 'testSpace';
        const testMemory = '20';
        const testDisk = '40';
        const space = {
            name: spaceName,
            diskquota_mb: testDisk,
            memoryquota_mb: testMemory
        }

        // cy.route({
        //     method: 'POST',
        //     url: '/spaces',
        //     response: space
        // }).as('createSpace')
        // exercise
        cy.get('#addSpaceBtn').click();
        cy.get('#newSpaceName').type(spaceName);
        cy.get('#newSpaceMemory').type(testMemory);
        cy.get('#newSpaceDisk').type(testDisk);
        cy.get('#createBtn').click();
        // cy.wait('@createSpace')

        // assert
        expect(cy.get('#space1')).to.exist;
    })
    it('should persist data on the screen after a refresh', () => {
        // setup
        cy.visit('http://localhost:3000');
        const spaceName = 'testSpace';
        const testMemory = '20';
        const testDisk = '40';
        const space = {
            name: spaceName,
            diskquota_mb: testDisk,
            memoryquota_mb: testMemory
        }

        // exercise
        cy.get('#addSpaceBtn').click();
        cy.get('#newSpaceName').type(spaceName);
        cy.get('#newSpaceMemory').type(testMemory);
        cy.get('#newSpaceDisk').type(testDisk);
        cy.get('#createBtn').click();
        cy.visit('http://localhost:3000');

        // assert
        expect(cy.get('#space1')).to.exist;
    })

})