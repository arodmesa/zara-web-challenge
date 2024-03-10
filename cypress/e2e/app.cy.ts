const defaultWaitTime = 2000;

describe('Navigation Favorites and back', () => {
  it('should navigate to the favorites page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "favorites" and click it
    cy.get('a[href*="favorites"]').click();

    // The new url should include "?favorites=active"
    cy.url().should('include', '/?favorites=active');

    // The new page should contain an span with "favorites"
    cy.get('span').contains('Favorites');
  });
  it('should navigate to the home page from favorites', () => {
    // Start from the favorites page
    cy.visit('http://localhost:3000/?favorites=active');

    // Find a link with an href attribute "/" and click it
    cy.get('a[href="/"]').click();

    // The new url should not include "?favorites"
    cy.url().should('equal', 'http://localhost:3000/');

    // The new page shouldn't contain an span with "favorites"
    cy.get('span').contains('Favorites').should('not.exist');
  });
  it('should navigate to the character id 1011334 page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/').wait(defaultWaitTime);
    cy.get('div[class*="infoContainer"]').first().click().wait(defaultWaitTime);

    // The new url should be http://localhost:3000/character/1011334"
    cy.url().should('equal', 'http://localhost:3000/character/1011334');

    // The new page should contain an span with "favorites"
    cy.get('span[class*="characterName"]').contains('3-D Man');
  });
  it('manual navigation to character 1010354 Adam Warlock', () => {
    cy.visit('http://localhost:3000/character/1010354').wait(defaultWaitTime);

    // The new page should contain an span with "favorites"
    cy.get('span[class*="characterName"]').contains('Adam Warlock');
  });
});

describe('Check input behavior', () => {
  it('should change search params in home page after and display results of search', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/').wait(defaultWaitTime);

    // Find the input element and type "America" to trigger search after 600ms since the last character was inputted
    cy.get('input').type('America').wait(600);

    // The new url should include "?search=America"
    cy.url().should('include', '/?search=America').wait(defaultWaitTime);

    // The input text still have to be "America"
    cy.get('input').should('have.value', 'America');

    // The search results from api should contain the word "America" (case insensitive)"
    cy.get('span[class*="name"]').each($el => {
      // Get the text content of the current span element
      const text = $el.text().toLowerCase(); // Convert text to lowercase for case-insensitive matching

      // Check if the lowercase text contains "america"
      expect(text).to.include('america');
    });
  });
  it('should navigate to favorites and clean search param and input value', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/').wait(defaultWaitTime);

    // Find the input element and type "America" to trigger search after 600ms since the last character was inputted
    cy.get('input').type('America').wait(600);

    // Find a link with an href attribute containing "favorites" and click it
    cy.get('a[href*="favorites"]').click();

    // The new url should not include "search" and should have ben navigated to favorites
    cy.url().should('equal', 'http://localhost:3000/?favorites=active');

    // The input text has to be clear
    cy.get('input').should('have.value', '');
  });
  it('should navigate to character page and clean search param and input value', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/').wait(defaultWaitTime);

    // Find the input element and type "America". Wait until data loads
    cy.get('input')
      .type('America')
      .wait(defaultWaitTime + 600);

    // Click on character card
    cy.get('div[class*="infoContainer"]').first().click().wait(defaultWaitTime);

    // The new url should be http://localhost:3000/character/1011361"
    cy.url().should('equal', 'http://localhost:3000/character/1011361');

    // The new page should contain an span with character nave American Eagle (Jason Strongbow)
    cy.get('span[class*="characterName"]').contains(
      'American Eagle (Jason Strongbow)',
    );

    // Find a link with an href attribute "/" and click it
    cy.get('a[href="/"]').click();

    // The input text has to be clear
    cy.get('input').should('have.value', '');
  });
  it('manual navigation to http://localhost:3000/?search=am should change input value to "am"', () => {
    cy.visit('http://localhost:3000/?search=am').wait(defaultWaitTime);
    cy.get('input').should('have.value', 'am');
  });
});

describe('Check cards favorite button behavior', () => {
  it('should add and delete from favorites', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/').wait(defaultWaitTime);

    // Checking element is not favorite
    cy.get('button[class*="buttonContainer"]')
      .first()
      .children()
      .first()
      .should('have.class', 'heartOutlineDiv');

    // Clicking button to add to favorites
    cy.get('button[class*="buttonContainer"]')
      .first()
      .click()
      .wait(defaultWaitTime);

    // Checking correct update of Favorites counter should be 1
    cy.get('#totalFavorites').contains('1');

    // Checking element is now favorite
    cy.get('button[class*="buttonContainer"]')
      .first()
      .children()
      .first()
      .should('have.class', 'heartFilledDiv');

    // Clicking button to remove from favorites
    cy.get('button[class*="buttonContainer"]')
      .first()
      .click()
      .wait(defaultWaitTime);

    // Checking element is not favorite again
    cy.get('button[class*="buttonContainer"]')
      .first()
      .children()
      .first()
      .should('have.class', 'heartOutlineDiv');

    // Checking correct update of Favorites counter should be 0
    cy.get('#totalFavorites').contains('0');
  });
  it('should add and delete from favorites in character page', () => {
    cy.visit('http://localhost:3000/character/1010354').wait(defaultWaitTime);

    // Checking element is not favorite
    cy.get('button[class*="buttonContainer"]')
      .first()
      .children()
      .first()
      .should('have.class', 'heartOutlineDiv');

    // Clicking button to add to favorites
    cy.get('button[class*="buttonContainer"]')
      .first()
      .click()
      .wait(defaultWaitTime);

    // Checking correct update of Favorites counter should be 1
    cy.get('#totalFavorites').contains('1');

    // Checking element is now favorite
    cy.get('button[class*="buttonContainer"]')
      .first()
      .children()
      .first()
      .should('have.class', 'heartFilledDiv');

    // Clicking button to remove from favorites
    cy.get('button[class*="buttonContainer"]')
      .first()
      .click()
      .wait(defaultWaitTime);

    // Checking element is not favorite again
    cy.get('button[class*="buttonContainer"]')
      .first()
      .children()
      .first()
      .should('have.class', 'heartOutlineDiv');

    // Checking correct update of Favorites counter should be 0
    cy.get('#totalFavorites').contains('0');
  });
});
