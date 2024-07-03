import PageCert from '/cypress/e2e/Pages/PageCert.js'

const pageCert = new PageCert();
const certCommonName = 'Таксер Тест Тестерович';
const certIssuerName = 'Тестовий ЦСК АТ "ІІТ"';
const certValidFrom = '2015-04-08';
const certValidTo = '2017-04-08';

describe('Check functionality for certification', () => {

beforeEach(() => {

    cy.visit('https://js-55fbfg.stackblitz.io/')
    pageCert.clickOnRunProject();

});

it('Upload .cer file', () => {

    pageCert.addCert();
    pageCert.elements.listOfCert().should("be.visible");
    pageCert.elements.listOfCert().invoke('text').then((listOfCertText) => {
        pageCert.elements.certCommonName().invoke('text').then((certCommonNameText) => {
            expect(listOfCertText.trim()).to.equal(certCommonNameText.trim());
        })
    })
})

// Не проходить через баг на сайті - невідповідінсть даних що виводимо до вимог
it('Check Common Name is correct', () => {
    pageCert.addCert();
    pageCert.elements.listOfCert().should("be.visible");
    pageCert.elements.certCommonName()
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal(certCommonName)
        })
})

// Не проходить через баг на сайті - невідповідінсть даних що виводимо до вимог
it('Check Issuer Name is correct', () => {
    pageCert.addCert();
    pageCert.elements.listOfCert().should("be.visible");
    pageCert.elements.certIssuerName()
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal(certIssuerName)
        })
})

// Не проходить через баг на сайті - невідповідінсть даних що виводимо до вимог
it('Check ValidFrom data is correct', () => {
    pageCert.addCert();
    pageCert.elements.listOfCert().should("be.visible");
    pageCert.elements.certFromData()
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal(certValidFrom)
        })
})

// Не проходить через баг на сайті - невідповідінсть даних що виводимо до вимог
it('Check ValidTo data is correct', () => {
    pageCert.addCert();
    pageCert.elements.listOfCert().should("be.visible");
    pageCert.elements.certToData()
        .invoke('text')
        .then((text) => {
            expect(text.trim()).to.equal(certValidTo)
        })
})
})

