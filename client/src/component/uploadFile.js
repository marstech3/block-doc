import React, { Component } from "react";
import "../App.css";
// import ipfs from "../ipfs";
import { Button } from "reactstrap";
// import { COLORS } from "../common/colorConstant";
import { ContentWrapper } from "../common/contentWrapper";
// import { Card } from "react-bootstrap";
// import ReadHash from "./ReadHash";
// import SetHash from "./SetHash";
// import web3 from "web3";
// import storehash from "../storehash";

class UploadFile extends Component {
  state = {
    ipfsHash: null,
    buffer: "",
    ethAddress: "",
    transactionHash: "",
    txReceipt: "",
    drizzleState: null,
    drizzle: null,
    txStatus: null,
    dataKey: null,
    stackId: null,
  };

  componentDidMount() {
    this.setState({
      drizzleState: this.props.drizzleState,
      drizzle: this.props.drizzle,
    });
  }

  //Take file input from user
  captureFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };

  //Convert the file to buffer to store on IPFS
  convertToBuffer = async (reader) => {
    console.log("convert to buffer hit!");
    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer-using es6 syntax
    console.log("before buffer set");
    this.setState({ buffer });
  };

  getTxStatus = () => {
    console.log("Get transaction status");
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.state.drizzleState;
    console.log("transactions, transactionStack", transactions, transactionStack);
    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];
    console.log("txHash", txHash);
    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    if (transactions[txHash]) {
      this.setState({
        txStatus: transactions[txHash].status,
        transactionHash: txHash,
      });
    }

    const contract = this.state.drizzle.contracts.ipfsHashContract;
    console.log("contract", contract);
    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["ipfsHash"].cacheCall();

    // get the contract state from drizzleState
    const { ipfsHashContract } = this.props.drizzleState.contracts;
    console.log("ipfsHashContract", ipfsHashContract);
    // using the saved `dataKey`, get the variable we're interested in
    const ipfsHash = ipfsHashContract.ipfsHash[dataKey];

    this.setState({ ipfsHash: ipfsHash });
    console.log("Tx status: ", ipfsHash, txHash);
  };

  onSubmit = () => {
    console.log("On submit buffer: ", this.state.buffer);
    this.getTxStatus();
    const { drizzle, drizzleState } = this.state;
    const contract = drizzle.contracts.ipfsHashContract;
    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["setHash"].cacheSend(this.state.buffer, {
      from: drizzleState.accounts[0],
    });
    // save the `stackId` for later reference
    this.setState({ stackId });
    console.log("stackId: ", stackId);
  };

  render() {
    // console.log("SHIT:", this.props);
    return (
      <ContentWrapper>
        <hr />
        <grid>
          <h3> Choose file to send to IPFS </h3>
          <input type="file" onChange={this.captureFile} />
          <Button onClick={() => this.onSubmit()}>Send it </Button>
          <hr />
          <Button onClick={() => this.getTxStatus()}>
            Get transaction details
          </Button>
          <hr />
          <table bordered responsive>
            <thead>
              <tr>
                <th>Tx Receipt Category</th>
                <th> </th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IPFS Hash stored on Ethereum</td>
                <td> : </td>
                <td>{this.state.ipfsHash}</td>
              </tr>
              <tr>
                <td>Ethereum Contract Address</td>
                <td> : </td>
                <td>{this.state.ethAddress}</td>
              </tr>
              <tr>
                <td>Tx # </td>
                <td> : </td>
                <td>{this.state.transactionHash}</td>
              </tr>
              <tr>
                <td>Transaction Status </td>
                <td> : </td>
                <td>{this.state.txStatus}</td>
              </tr>
              {/* {this.state.drizzle !== null && (
                <tr>
                  {() => (
                    <ReadHash
                      drizzle={this.state.drizzle}
                      drizzleState={this.state.drizzleState}
                    />
                  )}
                  <SetHash
                    drizzle={this.state.drizzle}
                    drizzleState={this.state.drizzleState}
                  />
                </tr>
              )} */}
            </tbody>
          </table>
        </grid>
      </ContentWrapper>
    );
  }
}
export default UploadFile;
