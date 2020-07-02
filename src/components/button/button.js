import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $primary, $secondary, $white, $GOLDEN_RATIO_MICRO } from 'styles/colors';
import { transition } from 'styles/mixins';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: ${({ isSecondary }) => isSecondary ? 1 : 0};
  border-radius: 4px;
  border: ${({ isSecondary }) => isSecondary ? `1px solid ${$primary}` : '' };
  height: 36px;
  margin: ${({ isSecondary }) => isSecondary ? '8px 0px' : '12px 8px'};
  font-size: ${({ isSecondary }) => isSecondary ? '14px' : '18px'};
  letter-spacing: ${({ isSecondary }) => isSecondary ? `${$GOLDEN_RATIO_MICRO}px` : '0px'};
  font-family: ${({ isSecondary }) => isSecondary ? 'Andes Reg' : 'Canela Med'};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  color: ${({ isSecondary }) => isSecondary ? $primary : $white};
  background: ${({ isDisabled, isSecondary, color }) => isDisabled ? `${color}66` : (isSecondary ? $white : color)};
  box-shadow: ${({ isSecondary }) => isSecondary ? '' : '0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08)'};
  ${transition}
  &:hover {
    ${({ isDisabled, isSecondary }) => isDisabled ?
      (isSecondary ? `border: 1px solid ${$secondary};` : '') :

      (isSecondary ? `border: 1px solid ${$secondary};` : `
        background: ${$secondary};
        box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.11), 0px 3px 6px rgba(0, 0, 0, 0.08);
        transform: translateY(${isDisabled ? '0px' : '-2px'});
      `)
    }
  }
`;

const Logo = styled.div`
  background: ${({ logo }) => `url(${logo}) no-repeat center center`};
  height: 24px;
  width: 24px;
  margin-right: 4px;
`;

function Button({ onClickHandler, isDisabled, isSecondary, logo, label, color }) {
  return (
    <ButtonWrapper
      onClick={isDisabled ? () => ({}) : onClickHandler}
      isDisabled={isDisabled}
      isSecondary={isSecondary}
      color={color}
    >
      {logo ? <Logo logo={logo} /> : null}{label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  onClickHandler: () => ({}),
  isDisabled: false,
  isSecondary: false,
  label: 'Continue',
  color: $primary,
};

Button.propTypes = {
  onClickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
