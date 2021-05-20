/**
 *
 * Header
 *
 */

import React from 'react';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SearchIcon from '@material-ui/icons/Search';
import InputField from '../FormFields/InputField';
import { debounce } from '../../utils/helpers';

// import PropTypes from 'prop-types';
import {
  StyledHeader,
  NavWrapper,
  SearchBoxWrapper,
} from './styledComponents/styledHeader';

function Header({ onSerchTermChange }) {
  const handleSearch = debounce(
    searchTerm =>
      onSerchTermChange &&
      typeof onSerchTermChange === 'function' &&
      onSerchTermChange(searchTerm),
    300,
  );
  return (
    <StyledHeader>
      <NavWrapper>
        <EqualizerIcon />
        <SearchBoxWrapper>
          <SearchIcon className="search-icon" />
          <InputField placeholder="Search..." onChange={handleSearch} />
        </SearchBoxWrapper>
      </NavWrapper>
    </StyledHeader>
  );
}

Header.propTypes = {};

export default Header;
