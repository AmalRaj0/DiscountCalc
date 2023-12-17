
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function App() {
  const [amount, setamount] = useState("")
  const [discount, setdiscount] = useState("")
  const [discountedprice, setdiscountedprice] = useState("")
  const [savings, setsavings] = useState("")
  function calculate() {
    const output = amount * (1 - (discount / 100))
    // console.log(output);
    setdiscountedprice(output)
    setsavings(amount - output)
  }
  console.log(discountedprice, savings);
  function reset() {
    setamount("")
    setdiscount("")
    setdiscountedprice("")
    setsavings("")
  }
  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <div >
              <div className="input1" style={{}}>
                <h3> Enter your discount details :</h3>
                <TextField value={amount || ""} onChange={(eve) => setamount(eve.target.value)} className='mt-3 text-dark' id="outlined-dark" label="Amount" variant="outlined" />
                <TextField value={discount || ""} onChange={(eve) => setdiscount(eve.target.value)} className='mt-3' id="outlined-basic" label="Discount %" variant="outlined" />
                <div className='btn1'>
                  <Button onClick={calculate} className='p-2' variant="contained">Calculate</Button>
                </div>
              </div>
              <div className="input2" style={{}}>
                <h3 className='mt-5'>After Discount :</h3>
                <TextField value={savings || ""} className='mt-3' id="outlined-basic" label="Your Savings" variant="outlined" />
                <TextField value={discountedprice || ""} className='mt-3' id="outlined-basic" label="Your Pay" variant="outlined" />
              </div>
            </div>
          </Col>
          <Col>
            <div className='seccol'>
              <h3 className='text-center'>𝓢𝓪𝓿𝓲𝓷𝓰𝓼𝓢𝓷𝓪𝓹</h3>
              <p  >
                Welcome to 𝓢𝓪𝓿𝓲𝓷𝓰𝓼𝓢𝓷𝓪𝓹, where saving money is made simple! Our Discount Calculator is your go-to tool for effortlessly and accurately determining the savings on your purchases. Whether you're a savvy shopper, a budget-conscious professional, or just someone who loves a good deal, our intuitive calculator is designed with you in mind.
                watch in real-time as our calculator unveils the final discounted amount. It's like having your own personal savings assistant at your fingertips.

                But we're not just about numbers; we're here to guide you through the world of discounts. Our website features helpful tips, practical examples, and a wealth of information to ensure you understand the ins and outs of getting the best bang for your buck.

                Ready to embark on a journey of smart spending? Dive into the world of discounts with 𝓢𝓪𝓿𝓲𝓷𝓰𝓼𝓢𝓷𝓪𝓹—your one-stop destination for savings, simplicity, and smart shopping. Happy calculating!</p>

              <div className=''>
                <div id='item1' className="box">
                  <p>Amount :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'> Rs: {amount}</p>
                </div>
                <div id='item2' className="box">
                  <p>Discount % :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'>{discount}%</p>
                </div>
                <div id='item3' className="box">
                  <p>your saving :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'>Rs: {savings}</p>
                </div>
                <div id='item4' className="box">
                  <p>Discounted Amount :</p>
                  <p style={{ position: "relative", bottom: "20px" }} className='fs-4'>Rs: {discountedprice} </p>
                </div>
              </div>
              <div className='text-center'>
                <Button onClick={reset} variant="contained" color="error">
                  Reset
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
