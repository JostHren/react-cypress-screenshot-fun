import { ApiRoute } from "support/enums/api.route.enum";
import { HomeScreenSelectors } from "support/selectors";

describe('basic', () => {
  it('should load home screen', () => {
    cy.visit('/');

    cy.get(HomeScreenSelectors.FlowersGrid).should('contain.text', 'Chrysanthemum');

    //cy.matchScreenshot('desktop-size');

    cy.viewport('iphone-8')
    cy.matchScreenshot('mobile-size');
  });
});
