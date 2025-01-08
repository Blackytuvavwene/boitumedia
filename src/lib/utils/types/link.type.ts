export interface LinkProp {
    name: string;
    path: string;
    id: number;
}

// link props
export interface SocialLinkProp {
    props: LinkProp,
    icon: string,
}