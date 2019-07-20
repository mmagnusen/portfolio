import React from 'react';
import { LINK_TYPE } from '../../constants/linkType'

const Link = ({linkType, to, children}) => {
    switch (linkType) {
        case LINK_TYPE.EXTERNAL:
            return <a href={to} target="blank">{children}</a>
        case LINK_TYPE.ANCHOR:
        default: 
            return <a href={`#${to}`}>{children}</a>
    }
}

export default Link;