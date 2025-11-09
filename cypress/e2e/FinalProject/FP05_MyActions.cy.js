import FPLogin from "../../fixtures/fixturesFP/FPLogin.json"
import LoginClass from "../../support/supportFP/s01Login.js"
import MyAction from "../../support/supportFP/s05MyActions.js"

const loginPage = new LoginClass()
const maction = new MyAction()

describe('Verifikasi fitur-fitur pada My Actions', () => {
    it('Pengguna dapat mengakses fitur Self Pending Review', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        maction.clickPendingSelfReview()
        maction.assertionReview()
    })
    it('Pengguna mengakses fitur Candidates to View dan memasukkan sebarang data', () => {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        maction.clickCandidatestoIntv()
        maction.inputValidCandidates()
        maction.clickSearch()
        maction.asssertionNotFound()
    })
})