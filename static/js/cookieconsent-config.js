
import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  
            readOnly: true  
        },
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'Freshly baked cookies! 🍪',
                    description: 'There are only strictly necessary cookies in this website<br><br><a href="https://cookieconsent.orestbida.com/" target="_blank">Cookie consent by orestbida</a>',
                    acceptAllBtn: 'Ok grandma... I\'ll take them',
                    showPreferencesBtn: 'I want to know what kind of cookies you have'
                },
                preferencesModal: {
                    title: 'Cookie menu',
                    description: 'This cookie consent form from <a href="https://cookieconsent.orestbida.com/">orestbida</a>, go check it out!',
                    acceptAllBtn: 'You were right, they ARE delicious',
                    savePreferencesBtn: '(eat them silently)',
                    closeIconLabel: 'Close the menu',
                    sections: [
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'Wherever you encounter the comments feature is when the cookies are, at least, first loaded. These are essential for it\'s proper functioning and cannot be disabled. A cookie related to the website\'s cookies preferences is also stored to remember that you read these, so this popup doesn\'t show up anymore.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Remove my data',
                            description: 'It is possible to remove your data, just: sign in, click on your user and then on the button to request data removal. A tab to send an e-mail will open, send it and I will promptly answer it.'
                        },
                        {
                            title: 'Privacy policy',
                            description: '<a href="https://remark42.davidsales.pt/web/privacy.html">Check it here</a>, I have not changed remark42\'s implementation, and am using their docker compose solution.'
                        },
                        {
                            title: 'Cookie consent form',
                            description: 'This wonderful cookie consent form is from <a href="https://cookieconsent.orestbida.com/" target="_blank">orestbida</a>, go check it out!',
                        }
                    ]
                }
            }
        }
    }
});