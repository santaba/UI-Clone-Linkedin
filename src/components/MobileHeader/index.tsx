import React from 'react';
import { FaRProject } from 'react-icons/fa';

import { Container, ProfileCircle, SearchInput, MessageIcon }  from './styles';

const MobileHeader: React.FC = () => {
    return (
        <Container>
            <ProfileCircle src="https://avatars1.githubusercontent.com/u/44278966?s=460&u=b4e204384c57d9c04ac62db8e8a0b4d88bb63546&v=4" />
            <SearchInput placeholder="Pesquisar" />
            <MessageIcon />
        </Container>
    )
};

export default MobileHeader;