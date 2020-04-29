import Page from './page';

class LoginPage extends Page {
    // Components
    get buttonLogin() {
        return $('header .link-enter-header');
    }

    get inputEmail() {
        return $('input[name="form[user_mail]"]');
    }

    get inputPassword() {
        return $('input[name="form[user_pass]"]');
    }

    get buttonSignIn() {
        return $('button[type="submit"]');
    }

    get userMail() {
        return $('div[user-mail]').getAttribute('user-mail');
    }

    get projectList() {
        return $('body .admin-project-list');
    }

    // Actions
    open() {
        super.open('/');
    }

    login(user) {
        this.buttonLogin.click();
        this.inputEmail.waitForEnabled();
        this.inputEmail.setValue(user.login);
        this.inputPassword.setValue(user.password);
        this.buttonSignIn.click();
        this.projectList.waitForExist();
    }

    // Validation
    isLoggedIn(userMail) {
        return this.userMail === userMail;
    }
}

export const loginPage = new LoginPage();
