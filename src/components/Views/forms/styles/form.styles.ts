import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  color: black;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  padding: 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  .inputbox {
    width: 100%;
    padding: 10px 0;
    font-size: 15px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    background: transparent;

    // input {
    //   color: white;
    // }
  }

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: black;
    text-align: center;
  }

  .submit {
    // padding: 1rem 3rem;
    // text-transform: uppercase;
    // font-size: 1rem;
    // background: blue;
    // color: black;
    // border: 1px solid blue;
    // cursor: pointer;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: #9ac0d5;
    color: black;
    font-size: 16px;
    padding: 16px 30px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
  }
`;
