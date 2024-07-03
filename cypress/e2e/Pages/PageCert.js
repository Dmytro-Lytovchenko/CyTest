class PageCert {



 elements = {

    runProjectButton: () => cy.get('button'),
    addCertButton: () => cy.get("button[class*='btn-primary']"),
    backButton: () => cy.get("button[class*='btn-secondary']"),
    dropBoxElement: () => cy.get('.dropbox'),
    listOfCert: () => cy.get("a[class*='list-group-item']"),
    certCommonName: () => cy.get("tr:nth-child(1) td.ng-binding"),
    certIssuerName: () => cy.get("tr:nth-child(2) td.ng-binding"),
    certFromData: () => cy.get("tr:nth-child(3) td.ng-binding"),
    certToData: () => cy.get("tr:nth-child(4) td.ng-binding"),
 }

 clickOnRunProject() {
    this.elements.runProjectButton().click();
 }

 addCert() {
    this.elements.addCertButton().should('be.visible').click();
    this.dragAndDropCert();
 }

 dragAndDropCert() {
        const filePath = 'cypress/fixtures/test_certs/cert.cer';
        this.elements.dropBoxElement().should('be.visible').selectFile(filePath,{
            action: 'drag-drop'
        })
 }
}

export default PageCert