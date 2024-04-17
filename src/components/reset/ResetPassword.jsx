import React from 'react'
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/modal";

const ResetPassword = () => {
    const setModal = useSetRecoilState(modalState);
    return (
        <div>ResetPassword</div>
    )
}

export default ResetPassword