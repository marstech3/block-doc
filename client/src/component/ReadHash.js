import React from "react";

class ReadHash extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);

    const contract = drizzle.contracts.ipfsHashContract;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["ipfsHash"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { ipfsHashContract } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const ipfsHash = ipfsHashContract.ipfsHash[this.state.dataKey];

    // if it exists, then we display its value
    return <p>My stored string: {ipfsHash && ipfsHash.value}</p>;
  }
}

export default ReadHash;
