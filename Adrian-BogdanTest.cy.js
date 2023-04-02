describe('Testing adrian-bogdan.com', () => {
    
    // Testing if copyright exist
    it('Copyright exist', () => {
        cy.visit('https://adrian-bogdan.com/');

        // See if the website has copyrights
        cy.contains('© 2023. All rights reserved').should('exist');

    })
    // Testing if the webpage name exist 
    it('Website name exists', () => {
        cy.visit('https://adrian-bogdan.com/');

        // See if website title
        cy.title().should('contain', 'Adrian Bogdan » Automate your work with Python');
      });
      
    // // Testing if the webpage name do not exist - take a screenshoot
    // it('Website name does not exist', () => {
    //     cy.visit('https://adrian-bogdan.com/');

    //     // If website title is not -- will take a screenshot (this test is disable)
    //     cy.title().should('not.contain', 'Adrian Bogdan » Automate your work with Python');
    //     cy.screenshot('website-name-error');
    // });

    // Testing if user can press on the menu button
    it('Menu button working', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Find Home item in the list
        cy.get('#menu-item-474 > a > :nth-child(1)').should('exist');
    })

    // Testing if Resume button exist in dropdown
    it('Resume button exist', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Find Resume item in the list
        cy.get('#menu-item-475 > a > :nth-child(1)').should('exist');
    })

    // Testing if Works button exist in dropdown
    it('Works button exist', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Find Resume item in the list
        cy.get('#menu-item-476 > a > :nth-child(1)').should('exist');
    })

    // Testing if Blog button exist in dropdown
    it('Blog button exist', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Find Blog item in the list
        cy.get('#menu-item-477 > a > :nth-child(1)').should('exist');
    })

    // Testing if Contacts button exist in dropdown
    it('Contacts button exist', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Find Blog item in the list
        cy.get('#menu-item-478 > a > :nth-child(1)').should('exist');
    })

    // Home button functionality testing
    it('Home button works', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Click on the home button 
        cy.get('#menu-item-474 > a > :nth-child(1)').click();

        // Check if the buton works
        cy.contains('Adrian Bogdan').should('exist');
    })

    // Resume button functionality testing
    it('Resume button works', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Click on the resume button
        cy.get('#menu-item-475 > a > :nth-child(1)').click();

        // Wait time of 5 seconds because the webpage loading time
        cy.wait(5000);

        // Check if the button works
        cy.contains('.h-title > span', 'Resume').should('exist');

    })

    // Works button functionality testing
    it('Works button works', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Click on the Works button
        cy.get('#menu-item-476 > a > :nth-child(1)').click();

        // Check if the button works
        cy.get('.h-title > span').contains('Works').should('exist');
    })

    // Blog button functionality testing
    it('Blog button works', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Click on the Blog button
        cy.get('#menu-item-477 > a > :nth-child(1)').click();

        // Check if the button works
        cy.get('.h-title').contains('Blog').should('exist');


    })

    // Contacts button functionality testing
    it('Contacts button works', () => {
        cy.visit('https://adrian-bogdan.com/');
        cy.get('.menu-btn').click();

        // Click on the Blog button
        cy.get('#menu-item-478 > a > :nth-child(1)').click();

        // Check if the button works
        cy.get('.h-title > span').contains('Contacts').should('exist');
    })

    // Resume page Testing
    // Testing every feature on this page

    it('Scroll button functionality', () => {
        cy.visit('https://adrian-bogdan.com/resume/');
        cy.get('.mouse_btn > .icon').click();
    })

    // Testing Download CV button
    it('Download CV button functionality', () => {
        cy.visit('https://adrian-bogdan.com/resume/');

        // Click to scroll down
        cy.get('.mouse_btn > .icon').click();

        // click the button
        cy.get('.desc > .bts > .btn > .circle').click();
    })

    // Testing Contact button for Popular tab
    it('Contact button for Popula working', () => {
        cy.visit('https://adrian-bogdan.com/resume/');

        // Click on the Contact button
        cy.get(':nth-child(1) > .pricing-item > .bts > .btn > .circle').click();

        // Verify
        cy.get('.h-title > span').contains('Contacts').should('exist');

    })

    // Testing Contact button for Premium tab
    it('Contact button for Popula working', () => {
        cy.visit('https://adrian-bogdan.com/resume/');

        // Click on the Contact button
        cy.get(':nth-child(2) > .pricing-item > .bts > .btn > .circle').click();

        // Verify
        cy.get('.h-title > span').contains('Contacts').should('exist');
    })    


    // Testing Blog Page
    // Testing Search function
    it('Can you write in search bar', () => {
        cy.visit('https://adrian-bogdan.com/blog/');

        // Write in search bar
        cy.get('#wp-block-search__input-1').type('Python');
    })

    // Testing Search button
    it('Search button works', () => {
        cy.visit('https://adrian-bogdan.com/blog/');

        // Write in search bar
        cy.get('#wp-block-search__input-1').type('Python');

        // Press search
        cy.get('.wp-block-search__button').click();

        // Check if search text is present
        cy.get('.h-title').contains('Search').should('exist');
    })

    // Stress test on search button
    it('Click on the search button 3 times', () => {
        let i; // declare the variable i before using it
        cy.visit('https://adrian-bogdan.com/blog/');
        for(i=0;i<3;i++){
            cy.get('.wp-block-search__button').click();
            cy.wait(1000);
        }
    })

    // Testing if you can click on the first blog post
    it('Clicking on the first blog post', () => {
        cy.visit('https://adrian-bogdan.com/blog/');

        // Click on the first post
        cy.get('#post-985 > .desc > .name');
    })

    // Testing Comment box
    // Can I write in comment box
    it('Type something in the comment box', () => {
        cy.visit('https://adrian-bogdan.com/2022/12/19/blackjack-counting-cards-and-hi-lo/');
        
        // Write something in comment box
        cy.get('#comment').type('Test');

        // Check if you get error if you press submit button with rest of the fields empty
        cy.get('#submit').click();

        // Check if you got an error
        cy.get('.wp-die-message > p').contains('Error').should('exist');
    })

    // Can I write something in name box
    it('Type something in name box', () => {
        cy.visit('https://adrian-bogdan.com/2022/12/19/blackjack-counting-cards-and-hi-lo/');

        // Write something in name box
        cy.get('#author').type('test');

        // Check if you get error if you press submit button with rest of the fields empty
        cy.get('#submit').click();

        // Check if you got an error
        cy.get('.wp-die-message > p').contains('Error').should('exist');

    })

    // Can I write something in email box
    it('Type something in email box', () => {
        cy.visit('https://adrian-bogdan.com/2022/12/19/blackjack-counting-cards-and-hi-lo/');

        // Write something in name box
        cy.get('#email').type('test');

        // Check if you get error if you press submit button with rest of the fields empty
        cy.get('#submit').click();

        // Check if you got an error
        cy.get('.wp-die-message > p').contains('Error').should('exist');

    })

    // Can I post a comment
    it('Can I post a comment', () => {
        cy.visit('https://adrian-bogdan.com/2022/12/19/blackjack-counting-cards-and-hi-lo/');
        
        // Write something in name box
        cy.get('#author').type('test');

        // Write something in name box
        cy.get('#email').type('test@test.com');

        // Write something in comment box
        cy.get('#comment').type('Test');

        // Check if you get error if you press submit button
        cy.get('#submit').click();

        // Check if you got an error
        cy.get('.avatar').should('exist');

    })


    
})