import type {SocialLinkProp} from "$lib/utils/types/link.type.js";


// export social links for the app
export const socialLinks:SocialLinkProp[] = [
    {
        props : {
            name: 'Github',
            path: 'https://github.com/Blackytuvavwene',
            id: 1
        },
        icon: './github.svg'
    },
    {
        props: {
            name: 'Twitter',
            path: 'https://twitter.com/Blackytubabwene',
            id: 2
        },
        icon: './twitter.svg'
    },
    {
        props: {
            name: 'LinkedIn',
            path: 'https://www.linkedin.com/in/boitumelo-tubabwene-7894b8192/',
            id: 3
        },
        icon: './linkedin.svg'
    },
    {
        props: {
            name: 'Facebook',
            path: 'https://www.facebook.com/boitumelo.blacky',
            id: 4
        },
        icon: './facebook.svg'
    },
    {
        props: {
            name: 'Instagram',
            path: 'https://www.instagram.com/tubabweneb/',
            id: 5
        },
        icon: './instagram.svg'
    }
]