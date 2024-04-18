import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState', // 고유 key
    default: {
        isOpen: false,
        content: null,
        props: {}
    }
});

export const userData = atom({
    key: 'userData',
    default: {
      email: '',
      isVerified: false,
      name: '',
      nickname: '',
      blogLink: '',
      hasAgreedToPrivacyPolicy: false
    }
  });