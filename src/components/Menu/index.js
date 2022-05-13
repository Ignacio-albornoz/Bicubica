import React from 'react';
import { StyledMenu, A } from './styles.js';

export const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <A to="/test" >
        <span role="img" aria-label="about us"></span>
        About us
      </A>
      <A to="/test" onClick={() => setOpen(false)}>
        <span role="img" aria-label="price"></span>
        categories
        </A>
      <A to="/test" onClick={() => setOpen(false)}>
        <span role="img" aria-label="contact"></span>
        Contact
        </A>
    </StyledMenu>
  )
}