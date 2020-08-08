import React from 'react';
import { ReactComponent as YouTubeIcon } from '../../../assets/img/svg/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/svg/facebook.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/img/svg/linkedin.svg';

import './SocialLinks.scss';

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.youtube.com" className="youtube" target="_blank" rol="noopener noreferrer">
                <YouTubeIcon />
            </a>
            <a href="https://www.twitter.com" className="twitter" target="_blank" rol="noopener noreferrer">
                <TwitterIcon />
            </a>
            <a href="https://www.facebook.com" className="facebook" target="_blank" rol="noopener noreferrer">
                <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com" className="linkedin" target="_blank" rol="noopener noreferrer">
                <LinkedInIcon />
            </a>
        </div>
    );
}
