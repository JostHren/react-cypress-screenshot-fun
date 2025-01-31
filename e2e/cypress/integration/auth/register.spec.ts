import { ApiRoute } from "support/enums/api.route.enum";
import { HomeScreenSelectors } from "support/selectors";

describe('auth', () => {

  it('should open signup modal', () => {
    cy.visit('/');

    cy.get(HomeScreenSelectors.FlowersGrid).should('contain.text', 'Chrysanthemum');
    cy.get(HomeScreenSelectors.SignupButton).click();

    cy.matchScreenshot();
  });


  it('should requre all fields', () => {
    cy.visit('/');

    cy.get(HomeScreenSelectors.FlowersGrid).should('contain.text', 'Chrysanthemum');

    cy.get(HomeScreenSelectors.SignupButton).click();
    cy.get(HomeScreenSelectors.SignupFirstNameInput).click();
    cy.get(HomeScreenSelectors.SignupLastNameInput).click();
    cy.get(HomeScreenSelectors.SignupEmailInput).click();
    cy.get(HomeScreenSelectors.SignupPasswordInput).click();

    cy.get(HomeScreenSelectors.SignupSubmitButton).click();

    cy.matchScreenshot();
  });
});
