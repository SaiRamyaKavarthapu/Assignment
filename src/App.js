import React, { useState, useEffect } from 'react';
import './App.css';
import hodoc from './Images/hidoc.png';
import logo from './Images/logo.png';
import linegraph from './Images/line-graph.png';
import axios from 'axios';
import DrugData from './components/DrugData';

function App() {
  const [drugData, setDrugData] = useState([])
  const [list, setList] = useState([]);
  const API = "http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList"

  const fetchUsers = async () => {
    try {
      const res = await axios.post(API)
      const data = res.data.data.drugData;
      if (data.length > 0) {
        setDrugData(data)
      }

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUsers(API)
  })

  return (

    <div>
      <header className="banner">
        <div className="child1">
          <img src={logo} />
        </div>
        <div className="child2">
          <nav>
            <ul>
              <li><a href="#">Drugs</a></li>|
              <li><a href="#">Calculators</a></li>|
              <li><a href="#">Articles</a></li>|
              <li><a href="#">News</a></li>|
              <li><a href="#">Quizzes</a></li>|
              <li><a href="#">Surveys</a></li>|
              <li><a href="#">Webinars</a></li>|
              <li><a href="#">Guidelines</a></li>|
            </ul>
          </nav>
        </div>
        <div className="child3">
          <div className="child3-1">
            <div />
            <div />
            <div />
          </div>
          <div id="rcorners1" style={{ color: 'red' }}>
            274</div>
          <div id="circle">A</div>
        </div>
      </header>
      <div className="grid-row-1">
        <h3>Your one-stop Solution for</h3>
      </div>
      <div className="banner1">
        <div className="child1">
          <h4>Get knowledge of the</h4>
        </div>
        <div className="child2">
          <input type="text" className="searchTerm" placeholder="Enter drug type" />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>

        </div>
      </div>
      <main>
        <section>
          {/* ------------content------------------------- */}
          <div className="content">
            <div className="grid-containers">
              <div className="grid-item item1">
                Dailymaid Drug Database: The Dailymed database contains 143072 labeling submitted to
                the Food and Drug Administration(FDA) by companies.Dailymed does not contain a
                complete listing of labeling for FDA-regulated products
              </div>
              <div className="grid-item item2">
                <button className="btn1"> Anastesia </button>
                <button className="btn2"> Cardiology</button>
                <button className="btn3">Critical Care </button>
                <button className="btn4"> Dentistry </button>
                <button className="btn5">Dermatology </button>
                <button className="btn6"> Diabetology </button>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>drugName</th>
                  </tr>
                </thead>
                <tbody>
                  <DrugData users={drugData} setList={setList} />
                </tbody>
              </table>

            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Drug Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <li>{list}</li>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <article className="main">
        <div className="child1">
          <img style={{ width: '90px', height: '300px', paddingRight: '30px', paddingTop: '50px' }} src={linegraph} />
        </div>
        <div className="child2">
          <h2>Explore more on Hidoc Dr.</h2>
          <br />
          News
          <h2>Education: Diabetes and tooth loss together cause cognitive impairement</h2>
          <p>Diabetes and tooth loss both contribute to cognitive impairement and
            cognitve decline in older adults, according to new research published in a special
            issue of the journal of detal research. </p>
        </div>
        <div className="child3">
          <p>CRITICAL CARE</p>
          <h2>Discovering Anthrogryposis: Understanding the Causes, symptoms and Diagnosis</h2>
          <br />
          <p>Anthrogryposisc, also known as curvature of the joints, is a rare condition that affects the joints in
            the body.</p>
        </div>
        <div className="child4">
          <p>CRITICAL CARE</p>
          <h2>The Science Behind Crest Disease: Exploring the Underlying mechanisms.
            <hr />
            <p>CRITICAL CARE</p>
          </h2><h2>A Comprehensive Guide To Apache Scoring: How it works And Why you should use it</h2>
        </div>
      </article>
      {/* ----------------------------footer--------------------------------------- */}
      <footer className="footer">
        <div className="child1">
          <img src={hodoc} />
          <p>Fastest growing medical platform for doctors</p>
          <div style={{ paddingLeft: '5px' }} className="container text-center">
            <a href="#" className="fa fa-facebook" />
            <a href="#" className="fa fa-instagram" />
            <a href="#" className="fa fa-linkedin" />
            <a href="#" className="fa fa-youtube" />
          </div>
        </div>
        <div className="child2">
          <p style={{ color: 'aliceblue', paddingTop: '5px' }}>REACH US</p><br />
          <p style={{ color: 'azure' }}>Please contact the below details for any other information</p>
          <label htmlFor="Email" style={{ color: 'wheat' }}>Email:</label><br />
          <p style={{ color: 'white', padding: '2px' }}>info@hidoc.co</p>
          <label htmlFor="Address" style={{ color: 'wheat' }}>Address:</label><br />
          <p style={{ color: 'white', padding: '2px' }}>Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C,<br />wilminton,
            UnitedStates</p>
        </div>
        <div className="child3">
          <p style={{ color: 'aliceblue', paddingTop: '5px' }}>HIDOC DR. FEATURES</p><br />
        </div>


      </footer>
      <footer className='copyright'>
        <p>Copyright 2022 <b>Hidoc Dr. Inc.</b><br />
          Terms & Conditions | Privacy Policy
        </p>
      </footer>
    </div>
  )
}
export default App;