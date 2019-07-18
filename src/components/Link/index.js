import React from 'react';

const Link = ({linkType, to, children}) => {
    switch (linkType) {
        default: 
            return <a href={`#${to}`}>{children}</a>
    }
}

export default Link;