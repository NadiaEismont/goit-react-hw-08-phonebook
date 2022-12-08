import styled from '@emotion/styled';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { NavLink } from 'react-router-dom';

export const LinkNavStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  :active {
    color: #e84a5f;
  }
`;
