import React from "react";
import styled from "styled-components";
import fetchAdvice from "./api";
import { AdviceCard } from "./components/AdviceCard";
import "@fontsource/manrope/variable.css";

const Wrapper = styled.div`
  background-color: #1f2533;
  color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: `"It is easy to sit up and take notice, what's difficult is getting up and taking action."`,
      adviceID: 117,
    };
  }

  getAdvice = async () => {
    try {
      const {
        data: { slip },
      } = await fetchAdvice();
      return slip;
    } catch (error) {
      console.log(error);
    }
  };

  updateAdvice = async () => {
    try {
      const { advice, id } = await this.getAdvice();
      this.setState({
        advice: advice,
        adviceID: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Wrapper>
        <AdviceCard
          slipID={this.state.adviceID}
          slipAdvice={this.state.advice}
          handleClick={this.updateAdvice}
        ></AdviceCard>
      </Wrapper>
    );
  }
}
