import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState', // 고유 key
    default: {
        isOpen: false,
        content: null,
        props: {}
    }
});
