import FPLogin from "../../fixtures/fixturesFP/FPLogin.json"
import LoginClass from "../../support/supportFP/s01Login.js"
import ForgotPSW from "../../support/supportFP/s02ForgotPSW.js"

const loginPage = new LoginClass()
const FPSW = new ForgotPSW()


describe('Verifikasi Fitur Forgot Password', () => {
    it('Forgot Password dengan input valid username', () => {
        loginPage.visitPage()
        FPSW.interceptFPSW()
        FPSW.clickForgotPSW()
        FPSW.waitFPSW()
        FPSW.inputUSN(FPLogin.validUSN)
        FPSW.interceptRPSW()
        FPSW.clickResetPSW()
        FPSW.waitRPSW()
        FPSW.assertionFPSWSuccess()
    })
    it('Forgot Password dengan invalid username', () => {
        loginPage.visitPage()
        FPSW.interceptFPSW()
        FPSW.clickForgotPSW()
        FPSW.waitFPSW()
        FPSW.inputUSN(FPLogin.invalidUSN)
        FPSW.interceptRPSW()
        FPSW.clickResetPSW()
        FPSW.waitRPSW()
        FPSW.assertionFPSWSuccess()
    })
    it('Verifikasi tombol cancel', () => {
        loginPage.visitPage()
        FPSW.interceptFPSW()
        FPSW.clickForgotPSW()
        FPSW.waitFPSW()
        FPSW.interceptCancel()
        FPSW.clickCancel()
        FPSW.waitCancel()
    })
})