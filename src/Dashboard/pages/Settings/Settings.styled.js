import styled from 'styled-components';

export const SettingsWrapper = styled.div``;

export const Card = styled.div`
  background: white;
  box-shadow: 0px 2px 22px #dce3ea;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  margin-right: 15px;

  & > div {
    border-bottom: 0.5px solid #e6e6e6;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    :last-child {
      border-bottom: none;
    }
    h1 {
      font-size: 18px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 10px;
    & > div {
      padding: 5px 15px;
      h1 {
        font-size: 16px;
      }
    }
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  text-align: left;
  top: 8px;
  input {
    display: none;
  }
  label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
  }
  span {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  span:before,
  span:after {
    float: left;
    width: 50%;
    height: 36px;
    padding: 0;
    line-height: 36px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
  }
  span:before {
    content: '';
    padding-left: 10px;
    background-color: ${({ theme }) => theme.colors.primary_blue};
    color: #fff;
  }
  span:after {
    content: '';
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
  i {
    display: block;
    width: 24px;
    height: 24px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  .checkbox:checked + label span {
    margin-left: 0;
  }
  .checkbox:checked + label i {
    right: 0px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    transform: scale(0.8);
  }
`;
