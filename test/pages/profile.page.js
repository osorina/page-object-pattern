import Page from './page';

class ProfilePage extends Page {
    // Components
    get section() {
        return $('.user-section-profile');
    }

    get heading() {
        return this.section.$('header .flexbe-title');
    }

    // Validation
    isRussian() {
        return this.heading.getText() === 'Профиль';
    }

    // Actions
    open() {
        const url = browser.getUrl().replace('projects/', 'user/profile/');
        super.open(url);
    }

    toggleLanguage() {
        const isRussian = this.isRussian();

        const toggleLink = $(`.flexbe-text=${ isRussian ? 'Русский' : 'English' }`);
        toggleLink.click();

        const modal = $('.flexbe-select-content');
        modal.waitForExist();

        const targetLink = modal.$('.flexbe-select-option:not(.active)');
        targetLink.click();

        browser.refresh();
    }

}

export const profilePage = new ProfilePage();
