import React from 'react';
import Logo from '../../../../assets/img/png/logo.png';
import SocialLikns from '../../SocialLinks';

import './MyInfo.scss';

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Logo} alt="Renzo" />
            <h4>
                Entra al mundo del desarrollo web, disfruta proyecto de todo tipo, deja que tu imaginacion fluya y crea
                verdaderas maravillas.
            </h4>
            <SocialLikns />
        </div>
    );
}
