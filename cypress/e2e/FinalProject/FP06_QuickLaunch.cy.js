import FPLogin from "../../fixtures/fixturesFP/FPLogin.json"
import LoginClass from "../../support/supportFP/s01Login.js"
import QuickLaunch from "../../support/supportFP/s06QuickLaunch.js"
import f06QuickLaunch from "../../fixtures/fixturesFP/f06QuickLaunch.json"

const loginPage = new LoginClass()
const qlaunch = new QuickLaunch()

describe('Verifikasi fitur-fitur pada Quick Launch', ()=> {
    it('Pengguna dapat melakukan Assign Leave', ()=> {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        qlaunch.clickAssignLeave()
        qlaunch.assertionAssignLeave()
        qlaunch.inputAssignLeave(
            f06QuickLaunch.empname1, 
            f06QuickLaunch.leavetype1, 
            f06QuickLaunch.fromdate1, 
            f06QuickLaunch.todate1, 
            f06QuickLaunch.comment1)
        qlaunch.clickAssign()
        qlaunch.clickOK()
        qlaunch.asssertionOKAssignLeave()
    })
    it('Pengguna dapat melihat dan mengakses Leave List', ()=> {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        qlaunch.clickLeaveList()
        qlaunch.assertionLeaveList()
    })
    it('Pengguna dapat melihat dan mengakses Timesheets', ()=> {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        qlaunch.clickTimesheets()
        qlaunch.assertionTimesheets()
    })
    it('Pengguna dapat melihat dan mengakses Apply Leave', ()=> {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        qlaunch.clickApplyLeave()
        qlaunch.assertionApplyLeave()
    })
    it('Pengguna dapat melihat dan mengakses My Leave', ()=> {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        qlaunch.clickMyLeave()
        qlaunch.assertionMyLeave()
    })
    it('Pengguna dapat melihat dan mengakses My Timesheets', ()=> {
        loginPage.visitPage()
        loginPage.inputUSN(FPLogin.validUSN)
        loginPage.inputPSW(FPLogin.validPSW)
        loginPage.interceptSuccess()
        loginPage.clickLoginBTN()
        loginPage.waitSuccess()
        loginPage.assertionLogin()
        qlaunch.clickMyTimesheets()
        qlaunch.assertionMyTimesheets()
    })
})