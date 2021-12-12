import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Link, MenuList, MenuItem } from '@chakra-ui/react';

const NavLink = ({ href, path, children }) => {
    const active = path === href;

    return (
        <NextLink href={href}>
            <Link fontSize={14} color={active ? 'teal.300' : 'light'} fontWeight={active ? 'bold' : 'normal'}>
                {children}
            </Link>
        </NextLink>
    );
};

NavLink.propTypes = {
    href: PropTypes.string,
    path: PropTypes.string,
    children: PropTypes.node,
};

export default NavLink;
