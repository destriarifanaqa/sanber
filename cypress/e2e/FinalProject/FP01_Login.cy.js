import FPLogin from "../../fixtures/fixturesFP/FPLogin.json"
import LoginClass from "../../support/supportFP/s01Login.js"

const loginPage = new LoginClass()

describe ('Verifikasi Fitur Login', () => {
    it('Login dengan valid username dan valid password', () =>{
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
    })
    it('Login dengan password salah', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.invalidPSW)
        loginPage.interceptUnsuccess()
        loginPage.clickLoginBTN()
        loginPage.waitUnsuccess()
        loginPage.assertionInvCred()
    })
    it('Login dengan username salah', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.invalidUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptUnsuccess()
        loginPage.clickLoginBTN()
        loginPage.waitUnsuccess()
        loginPage.assertionInvCred()
    })
    it('Login dengan username dan password kosong', () => {
        loginPage.visitPage()
        loginPage.clearUSN()
        loginPage.clearPSW()
        loginPage.clickLoginBTN()
        //tidak perlu intercept karena request tidak terkirim ke server, melainkan hanya UI yang memberikan respon
        loginPage.assertionUSNRequired()
        loginPage.assertionPSWRequired()
    })
    it('Login dengan username kosong', () => {
        loginPage.visitPage()
        loginPage.clearUSN()
        loginPage.inputPSW(FPLogin.validPSW)
        //tidak perlu intercept karena request tidak terkirim ke server, melainkan hanya UI yang memberikan respon
        loginPage.clickLoginBTN()
        loginPage.assertionUSNRequired()
    })
    it('Login dengan password kosong', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.clearPSW()
        //tidak perlu intercept karena request tidak terkirim ke server, melainkan hanya UI yang memberikan respon
        loginPage.clickLoginBTN()
        loginPage.assertionPSWRequired()
    })
    it('Login dengan spasi setelah valid username', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.spcUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
    })
    it('Login dengan spasi di tengah username', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.spcBtwUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptUnsuccess()
        loginPage.clickLoginBTN()
        loginPage.waitUnsuccess()
        loginPage.assertionInvCred()
    })
})
