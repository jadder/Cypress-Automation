describe('Text Box module', ()=>{
    beforeEach(()=>{
        cy.visit("/text-box")
    });

    it('Text Box case mit CSS',()=>{
        let userName: string = "Jadder Moya";
        let email :string = "demoemail@email.com";
        let actualAddress : string = "Chocolate Ave 34, 10023, Germany";
        let permanentAddress : string = "Vino Blanco st 85, 3593, Italy";
        
        //test steps
        cy.get('input#userName').type(userName);
        cy.get('input#userEmail').type(email);
        cy.get("textarea#currentAddress").type(actualAddress);
        cy.get("textarea#permanentAddress").type(permanentAddress);
        cy.get("#submit").click();

        //assertions
        cy.get("p#name").should('have.text', "Name:" + userName);
        cy.get("p#email").should('have.text', "Email:" + email);
        cy.get("p#currentAddress").should('have.text', `Current Address :${actualAddress} `);
        cy.get("p#permanentAddress").should('have.text', `Permananet Address :${permanentAddress}`);
    });

    it.skip ('Text Box case mit XPath',()=>{
        let userName: string = "Jadder Moya";
        let email :string = "demoemail@email.com";
        let actualAddress : string = "Chocolate Ave 34, 10023, Germany";
        let permanentAddress : string = "Vino Blanco st 85, 3593, Italy";
        
        //test steps
        cy.get('input#userName').type(userName);
        cy.get('input#userEmail').type(email);
        cy.get("textarea#currentAddress").type(actualAddress);
        cy.get("textarea#permanentAddress").type(permanentAddress);
        cy.get("#submit").click();

        //assertions
        cy.get("p#name").should('have.text', "Name:" + userName);
        cy.get("p#email").should('have.text', "Email:" + email);
        cy.get("p#currentAddress").should('have.text', `Current Address :${actualAddress} `);
        cy.get("p#permanentAddress").should('have.text', `Permananet Address :${permanentAddress}`);
    });
});