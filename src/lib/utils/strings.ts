// export a class that has strings used in the landing page
export class HomePageStrings {
    static readonly SITE_NAME = 'Boitumedia'
    static readonly HERO_PARAGRAPH= `Unlock limitless potential with cutting-edge web and mobile solutions. Stay ahead in the digital race and
          watch your business soar.`
    // hero primary button
    static readonly HERO_PRIMARY_BUTTON = 'Start Your Digital Journey'
    // hero secondary button
    static readonly HERO_SECONDARY_BUTTON = 'Learn More'

    // services offered
    static readonly SERVICES_TITLE = 'Services Offered'
    static readonly services = {
        WEB_DEV : {
                title: 'Web Development',
                description: 'Custom websites and web applications tailored to your needs.',
                ariaLabel: "Web Development: Custom websites and web applications tailored to your needs."
            },
        MOBILE_DEV : {
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps for iOS and Android.',
            ariaLabel: "Mobile App Development: Native and cross-platform mobile apps for iOS and Android."
        },
        BACKEND_DEV : {
            title: 'Backend Development',
            description: 'Robust and scalable server-side solutions and APIs.',
            ariaLabel: "Backend Development: Robust and scalable server-side solutions and APIs."
        },
        UI_UX_DESIGN : {
            title: 'Frontend Development',
            description: 'Responsive and interactive user interfaces with modern frameworks.',
            ariaLabel: "Frontend Development: Responsive and interactive user interfaces with modern frameworks."
        }
    }
}
