import React from "react";
import "./ShareIcons.scss";
import whatsappIcon from '../../images/whatsappIcon.png'

const ShareIcons = () => {
    return (
        <div>
            <a  href="#" target="_blank">
                <i class="whats-app"><img src={whatsappIcon} class="shareImg"></img></i>
            </a>
        </div>
    )
}

export default ShareIcons;