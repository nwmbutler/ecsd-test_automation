describe('BBC homepage ', function() {
    beforeEach(function() {
      cy.visit('https://www.bbc.co.uk/');
    });
    
    it('homepage has a nav link called news which can be clicked', function() {
        cy.get('.css-1j2epfn-NavigationLink').click()
        cy.url().should('eq', 'https://www.bbc.co.uk/news')
    });

    it('The title of the lead article is clickable', function() {
        cy.get(':nth-child(2) > .css-6gq9s0-Wrap > :nth-child(1) > .css-tbinf0-GELGrid > .css-176mwek-GELGridCell > .css-1nxelr9-Promo > .css-11vtkk5-PromoPortrait > .css-111e0g2-PromoContent > .css-l100ew-PromoContentSummary > .css-16chj87-PromoHeadline > .css-vh7bxp-PromoLink').click()
    });

    it('has a header link back to the hompage', function() {
        cy.get('.css-xzxtbh-LogoIconWrapper > .css-47d2zd-StyledIcon').click()
        cy.url().should('eq', 'https://www.bbc.co.uk/')
    })

    it('has a copyright statement at the bottom of the page', function() {
        cy.get('.css-1lb37cz-Stack > p')
        cy.get('.css-1lb37cz-Stack > p').contains('Read about our approach')
    })

})