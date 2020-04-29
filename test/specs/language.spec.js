import { assert } from 'chai';
import { loginPage } from '../pages/login.page';
import { profilePage } from '../pages/profile.page';
import { context } from '../data/Context';

describe('Visual regression tests on the profile page.', () => {
    before(() => {
        browser.maximizeWindow();
    });

    it('Login.', () => {
        loginPage.open();
        loginPage.login(context.logins.user);
    });

    it('Profile page: prepare.', () => {
        profilePage.open();

        browser.saveFullPageScreen(`Profile-${ profilePage.isRussian() ? 'rus' : 'en' }`);
    });

    it('Profile page: toggle language.', () => {
        const russianOnLoad = profilePage.isRussian();

        profilePage.toggleLanguage();

        assert.equal((russianOnLoad ? !profilePage.isRussian() : profilePage.isRussian()), true)
    });


    it('Profile page: check.', () => {
        browser.refresh();

        assert.equal(browser.checkFullPageScreen(`Profile-${profilePage.isRussian() ? 'rus' : 'en'}`), 0);
    });
});
