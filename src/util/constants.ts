const menuItems = [
    {
        icon: 'fa fa-home',
        link: "/",
        name: "Home",
    },
    {
        icon: 'fa fa-address-book',
        link: "/contacts",
        name: "Contacts",
    },
    {
        icon: 'fa fa-heart',
        link: "/favorites",
        name: "Favorites",
    },
    {
        icon: 'fa fa-user',
        link: "/people",
        name: "People",
    },
    {
        icon: 'fa fa-users',
        link: "/companies",
        name: "Companies",
    }
];

const avatars:any[] =  [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg',
    'img/img8.jpg'
];

const listPosition:any[] = [
    'Select Position',
    'Web Designer',
    'UI Designer',
    'Senior full stack engineer',
    'Software engineer frontend',
    'Senior Software Engineer',
    'Software engineer backend',
    'Android developer',
    'Project coordinator',
    'Mobile Software Engineer'
];

const listCity:any[] = [
    'Select City',
    'Ukraine, Kyiv',
    'Ukraine, Kharkiv',
    'Ukraine, Odessa',
    'Ukraine, Dnipro',
    'Ukraine, Lviv',
    'Cambodia, Phnom Penh'
];

const defaultContact = {
    isContact: false,
    isFavorite: false,
    actionLabel: 'Create',
    index: 0,
    avatar: '',
    name: '',
    company: '',
    position: '',
    city: '',
    social_networks: {
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: ''
    }
}

export {
    menuItems,
    avatars,
    listPosition,
    listCity,
    defaultContact
}
