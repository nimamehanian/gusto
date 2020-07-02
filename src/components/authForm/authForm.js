import React, { useState } from 'react';
import styled from 'styled-components';
import { $primary, $secondary, $border, $text, $white, $GOLDEN_RATIO_MACRO } from 'styles/colors';
import { transition } from 'styles/mixins';
import includes from 'lodash/includes';

import Button from 'components/button/button';
import gustoLogo from 'images/gusto.svg';
import imageLeft from 'images/imageLeft.svg';
import imageRight from 'images/imageRight.svg';
import googleLogo from 'images/google.svg';
import xeroLogo from 'images/xero.svg';
import intuitLogo from 'images/intuit.svg';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton } from '@material-ui/core';

const AuthFormWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideImage = styled.div`
  background: url(${({ image }) => image}) no-repeat center 0%;
  width: 400px;
  height: 400px;
  transform: ${({ isLeft }) => `translate3d(${isLeft ? 16 : -24}px, ${isLeft ? -25 : 50}px, 0)`};
  z-index: -1;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const FieldWrapper = styled.div`
  background: ${$white};
  padding: 24px 24px 8px;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid ${$border};
  border-radius: 4px;
  width: 343px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 1024px) {
    margin: 0px 16px;
  }
`;

const Header = styled.div`
  background: url(${gustoLogo}) no-repeat center center;
  width: ${$GOLDEN_RATIO_MACRO * 96}px;
  min-height: 96px;
  align-self: center;
`;

const Field = styled.div`
  margin-bottom: 8px;
`;

const ForgotCredentials = styled.div`
  text-align: right;
  font-size: 14px;
  font-family: 'Andes Med';
  color: ${$primary};
  cursor: pointer;
  ${transition}
  &:hover {
    @media (pointer: fine) {
      color: ${$secondary}
    }
  }
`;

const RememberDevice = styled.div`
  font-family: 'Andes Med';
  margin: 12px 0px;
  display: flex;
  align-items: center;
  position: relative;
  p {
    display: inline;
  }
`;

const Tooltip = styled.div`
  margin-left: 2px;
  color: ${$primary};
  cursor: pointer;
  position: relative;
  top: 2px;
  ${transition}
  &:hover {
    color: ${$secondary};
  }
`;

const Notification = styled.div`
  position: absolute;
  bottom: 42px;
  left: 78px;
  background: ${$white};
  color: ${$text};
  font-family: 'Andes Reg';
  padding: 12px;
  width: 248px;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid ${$border};
  border-radius: 4px;
  z-index: 2;
  display: ${({ isHoveringToolTip }) => isHoveringToolTip ? 'block' : 'none'};
`;

const Divider = styled.div`
  border-top: 1px solid ${$border};
  color: ${$text};
  height: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
  font-family: 'Andes Med';
  font-size: 18px;
  div {
    transform: translateY(-2px);
    background: ${$white};
    padding: 4px 8px;
  }
`;

const HalfWidthButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    height: 36px;
    width: 16px;
  }
`;

const HelpCenterText = styled.div`
  align-self: center;
  margin: 16px 0px;
  ${transition}
  span {
    margin-right: 4px;
  }
`;

const FooterLinks = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0px;
  width: 343px;
  height: 100px;
  transform: translateY(116px);
  span a {
    margin-left: 4px;
  }
`;

function AuthForm() {
  const [{ email }, setEmail] = useState({ email: '' });
  const [{ password }, setPassword] = useState({ password: '' });
  const [{ isPasswordVisible }, setIsPasswordVisible] = useState({ isPasswordVisible: false });
  const [{ isDeviceRemembered }, setIsDeviceRemembered] = useState({ isDeviceRemembered: false });
  const [{ isHoveringToolTip }, setIsHoveringTooltip] = useState({ isHoveringToolTip: false });

  async function handleSubmit() {
    console.log('Signing in...');
    console.log(`POST {
      email: ${email},
      password: ${password},
      isDeviceRemembered: ${isDeviceRemembered},
    `);
  }

  return (
    <AuthFormWrapper>
      <SideImage image={imageLeft} isLeft />
      <FieldWrapper>
        <Header />
        <Field>
          <TextField
            type="email"
            name="email"
            label="Email"
            value={email}
            fullWidth
            onChange={({ target: { value: email } }) => setEmail({ email })}
          />
        </Field>

        <Field>
          <TextField
            type={isPasswordVisible ? 'passwordtext' : 'password'}
            name="password"
            label="Password"
            value={password}
            fullWidth
            onChange={({ target: { value: password } }) => setPassword({ password })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    style={{ background: 'none' }}
                    onClick={() => setIsPasswordVisible({ isPasswordVisible: !isPasswordVisible })}
                  >
                    {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Field>

        <ForgotCredentials
          onClick={() => console.log('Route to instructions to solve this...')}
        >
          <a href="https://app.gusto.com/account_access/form" target="_blank">
            Having trouble signing in?
          </a>
        </ForgotCredentials>

        <RememberDevice>
          <Checkbox
            checked={isDeviceRemembered}
            onChange={() => setIsDeviceRemembered({ isDeviceRemembered: !isDeviceRemembered })}
            color="primary"
            disableRipple
          />
          <p>Remember this device</p>
          <Tooltip
            onMouseEnter={() => setIsHoveringTooltip({ isHoveringToolTip: true })}
            onMouseLeave={() => setIsHoveringTooltip({ isHoveringToolTip: false })}
          >
            <InfoOutlined fontSize="small" />
          </Tooltip>
          <Notification isHoveringToolTip={isHoveringToolTip}>
            Check this box only if you're using a trusted device,
            such as your own computer or phone.
          </Notification>
        </RememberDevice>


        <span>
          <Button
            color={$primary}
            label="Sign in"
            isDisabled={
              email.length < 6 ||
              !includes(email, '@') ||
              !includes(email, '.') ||
              password.length < 8
            }
            onClickHandler={() => handleSubmit()}
          />
        </span>

        <Divider><div>or sign in with</div></Divider>

        <span>
          <Button
            isSecondary
            logo={googleLogo}
            label={`Google`}
            onClickHandler={() => console.log('Authenticating with Google...')}
          />
        </span>

        <HalfWidthButtons>
          <Button
            isSecondary
            logo={xeroLogo}
            label={`Xero`}
            onClickHandler={() => console.log('Authenticating with Xero...')}
          />
          <span aria-label="spacer" />
          <Button
            isSecondary
            logo={intuitLogo}
            label={`Intuit`}
            onClickHandler={() => console.log('Authenticating with Intuit...')}
          />
        </HalfWidthButtons>

        <HelpCenterText>
          <span>Need help?</span>
          <a href="https://bit.ly/2NN0GrR" target="_blank" rel="noreferrer">
            Visit our Help Center
          </a>
        </HelpCenterText>
        <FooterLinks>
          <a href="https://bit.ly/2ZxT8Pn" target="_blank" rel="noreferrer">
            Don't have an employee account?
          </a>
          <a href="https://gusto.com/invite/company" target="_blank" rel="noreferrer">
            Want to sign your company up with Gusto?
          </a>
          <span>
            © 2020
            <a href="https://gusto.com" target="_blank" rel="noreferrer">
              Gusto
            </a>
          </span>
        </FooterLinks>
      </FieldWrapper>
      <SideImage image={imageRight} />
    </AuthFormWrapper>
  );
}

export default AuthForm;
