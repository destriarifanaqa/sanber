import loginData from "../../fixtures/loginData.json"
import LoginClass from "../../support/pageObjects/loginPOM.js"

const loginPage = new LoginClass()

describe ('Pengguna dapat melakukan login', () => {
    it('Login dengan valid username dan valid password', () =>{
        loginPage.visitPage()
        loginPage.inputUSN(loginData.validUSN)
        loginPage.inputPSW(loginData.validPSW)
        loginPage.clickLoginBTN()
        loginPage.assertionLogin()
    })
    it('Login dengan password salah', () => {
        loginPage.visitPage()
        loginPage.inputUSN(loginData.validUSN)
        loginPage.inputPSW(loginData.invalidPSW)
        loginPage.clickLoginBTN()
        loginPage.assertionInvCred()
    })
    it('Login dengan username salah', () => {
        loginPage.visitPage()
        loginPage.inputUSN(loginData.invalidUSN)
        loginPage.inputPSW(loginData.validPSW)
        loginPage.clickLoginBTN()
        loginPage.assertionInvCred()
    })
    it('Login dengan username dan password kosong', () => {
        loginPage.visitPage()
        loginPage.clearUSN()
        loginPage.clearPSW()
        loginPage.clickLoginBTN()
        loginPage.assertionUSNRequired()
        loginPage.assertionPSWRequired()
    })
    it('Login dengan username kosong', () => {
        loginPage.visitPage()
        loginPage.clearUSN()
        loginPage.inputPSW(loginData.validPSW)
        loginPage.clickLoginBTN()
        loginPage.assertionUSNRequired()
    })
    it('Login dengan password kosong', () => {
        loginPage.visitPage()
        loginPage.inputUSN(loginData.validUSN)
        loginPage.clearPSW()
        loginPage.clickLoginBTN()
        loginPage.assertionPSWRequired()
    })
    it('Login dengan spasi setelah valid username', () => {
        loginPage.visitPage()
        loginPage.inputUSN(loginData.spcUSN)
        loginPage.inputPSW(loginData.validPSW)
        loginPage.clickLoginBTN()
        loginPage.assertionLogin()
    })
    it('Login dengan spasi di tengah username', () => {
        loginPage.visitPage()
        loginPage.inputUSN(loginData.spcBtwUSN)
        loginPage.inputPSW(loginData.validPSW)
        loginPage.clickLoginBTN()
        loginPage.assertionInvCred()
    })
})