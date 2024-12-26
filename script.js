// JavaScript to dynamically alter the modal content based on the card clicked
const pdfjsLib = window['pdfjs-dist/build/pdf'];

// Set PDF.js worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js';
const modalBody = document.getElementById('dynamicContentDisplay');

// Add event listeners to each card
const serviceCards = document.querySelectorAll('.services_card');



// Import Firebase compatibility scripts
import "https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.21.0/firebase-database-compat.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaV_ijJ0vCrjkE-wkxVeihzoe-oWTXHZE",
  authDomain: "memu-website.firebaseapp.com",
  projectId: "memu-website",
  storageBucket: "memu-website.firebasestorage.app",
  messagingSenderId: "1030671738904",
  appId: "1:1030671738904:web:cbb7779637541023a2bb6d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Initialize PPIO links with placeholder until data is fetched
const pdfLinks = {
  'RDSO/RB Guidelines': [
    { name: 'RDSO/RB Guidelines', url: 'https://memushedjhajha.in/PDF/08072024.pdf' },
  ],
  'Contact Details for all memo shed': [
    { name: 'Contact Details', url: 'https://memushedjhajha.in/PDF/Contact_compressed.pdf' }
  ],
  'In House Developement': [
    { name: 'Memories', url: 'https://memushedjhajha.in/PDF/INNOVATION_compressed.pdf' }
  ],
  'Contact Details for all memo shed': [
    { name: 'Contact Details', url: 'https://memushedjhajha.in/PDF/Contact_compressed.pdf' }
  ],
  'Proposed Umbrella Works': [
    { name: 'Proposed Umbrella Works ', url: 'https://memushedjhajha.in/PDF/PWP 25-26_compressed.pdf' }
  ],
  'KPA Related Issues': [
    { name: 'Regarding axle lock', url: 'https://memushedjhajha.in/PDF/POH/1.pdf' },
    { name: 'Assistance Required', url: 'https://memushedjhajha.in/PDF/POH/2.pdf' },
    { name: 'Failure in MEMU ', url: 'https://memushedjhajha.in/PDF/POH/3.pdf' },
    { name: 'Failure of air spring bellow ', url: 'https://memushedjhajha.in/PDF/POH/4.pdf' },
    { name: 'Non-Fitment of Transparent Heat Shrinkable Sleeves ', url: 'https://memushedjhajha.in/PDF/POH/5.pdf' },
    { name: 'Defect  deficiency found ', url: 'https://memushedjhajha.in/PDF/POH/6.pdf' },
    { name: 'List of Traction Motors Fitted ', url: 'https://memushedjhajha.in/PDF/POH/7.pdf' },
    { name: 'Assistance required to provide material ', url: 'https://memushedjhajha.in/PDF/POH/8.pdf' },
    { name: 'Defect  deficiency -2 ', url: 'https://memushedjhajha.in/PDF/POH/6.pdf' },
    { name: 'Request for attention to defects found in power cables', url: 'https://memushedjhajha.in/PDF/POH/10.pdf' },
  ],
  'Fire Prevention': [
    { name: 'Fire Prevention ', url: 'https://memushedjhajha.in/PDF/fire.pdf' },
    { name: 'Fire Prevention-2', url: 'https://memushedjhajha.in/PDF/fire2.pdf' }
  ],
  'Internal Visit/Audit': [
    { name: 'Internal Visit/Audit ', url: 'https://memushedjhajha.in/PDF/audit.pdf' }
  ],
  'Safety Drives': [
    { name: 'Safety Drives', url: 'https://memushedjhajha.in/PDF/safety%20drive.pdf' }
  ],
  'Layout': [
    { name: 'Layout', url: 'https://memushedjhajha.in/PDF/layout.pdf' }
  ],
  'Sections': [
    { name: 'Structure', url: 'https://memushedjhajha.in/PDF/structure.pdf' }
  ],
  'Awards': [
    { name: 'Awards', url: 'https://memushedjhajha.in/PDF/ARRD.pdf' },
    { name: 'Award Details', url: 'https://memushedjhajha.in/PDF/awarddes..pdf' },
  ],
  'Training': [
    { name: 'Energisation of 3 PHASE EMU-min', url: 'https://memushedjhajha.in/trai/11.pdf' },
    { name: 'Regenerative braking-min', url: 'https://memushedjhajha.in/trai/15.pdf' },
    { name: 'AC EMU power cicuit Explanation-min', url: 'https://memushedjhajha.in/trai/13.pdf' },
    { name: 'EMU MEMU Introduction-min', url: 'https://memushedjhajha.in/trai/9.pdf' },
    { name: 'AWS TPWS-min', url: 'https://memushedjhajha.in/trai/6.pdf' },
    { name: 'Siemens Control Circuit-min', url: 'https://memushedjhajha.in/trai/18.pdf' },
    { name: 'EMU MEMU Fire Prevention-min', url: 'https://memushedjhajha.in/trai/8.pdf' },
    { name: 'Siemens EMU Technical Details-min', url: 'https://memushedjhajha.in/trai/20.pdf' },
    { name: 'Siemens Components-min', url: 'https://memushedjhajha.in/trai/17.pdf' },
    { name: 'AC EMU Pnuematic ckt braking-min', url: 'https://memushedjhajha.in/trai/1.pdf' },
    { name: 'AC EMU Pnuematic ckt theory-min', url: 'https://memushedjhajha.in/trai/2.pdf' },
    { name: 'Auxiliary Circuit I & II of AC EMU-min', url: 'https://memushedjhajha.in/trai/5.pdf' },
    { name: 'Siemens pneumatic ckt final-min', url: 'https://memushedjhajha.in/trai/21.pdf' },
    { name: 'contorl cicuit of AC EMU-min', url: 'https://memushedjhajha.in/trai/7.pdf' },
    { name: 'Introduction of SIEMENS EMU-min', url: 'https://memushedjhajha.in/trai/12.pdf' },
    { name: 'MEMU TROUBLE SHOOTING BOOKLET-min', url: 'https://memushedjhajha.in/trai/13.pdf' },
    { name: 'AC EMU MEMU Con Traction motors-min', url: 'https://memushedjhajha.in/trai/10.pdf' },
    { name: 'Siemens AC-DC EMU  Operational Features-min', url: 'https://memushedjhajha.in/trai/16.pdf' },
    { name: 'MEMU TSD-min', url: 'https://memushedjhajha.in/trai/14.pdf' },
    { name: 'Siemens EMU Power Circuit-min', url: 'https://memushedjhajha.in/trai/19.pdf' },
    { name: 'AIR SPRING-NDT-min', url: 'https://memushedjhajha.in/trai/14.pdf' },
  ],
  'VC/ Online Meetings': [
    { name: 'VC/ Online Meetings', url: 'https://memushedjhajha.in/PDF/vc.pdf' },
  ],
  'Shed Holding': [
    { name: 'Holding of motor coach & Trailer coach', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7dXgkUbyqiG_3iXmWsFFCBQGXzr5gyWgfCiWQRD-cbZ7-0A2koWoE1z6bSRjC4g/pubhtml?gid=795350971&amp;single=true&amp;widget=true&headers=false' }
  ],
  'Rake Link / Train Service': [
    { name: 'Rake Link data', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTeqATK4tQnFXlmqU8T1Qpv1aM-X7lSV1fvmZVRAdiAOYnNKstTE2VfrjKv-7nsYNHjB10ye7XXoOx3/pubhtml?gid=848641368&amp;single=true&amp;widget=true&amp;headers=false' }
  ], 
  'List of SMI': [
    { name: 'List of SMI', url: 'https://rdso.indianrailways.gov.in/view_section.jsp?lang=0&id=0,4,6523,7162' }
  ],
  'PPIO': [
    { name: 'PPIO daily maintenance program & POH plan', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRn0kQgOdCG2lK3ZI8HDcDIlcL6-H_dQpdxh6yv9_hAMzlrze38GeFyMbTUnRjxIQnFNej6TAk7-Mj0/pubhtml?gid=1962048861&amp;single=true&amp;widget=true&amp;headers=false' },
    { name: 'PPIO - MEMU COACH POSITION (Daily Position)', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZ6MFmg44M3nDhP5KwwWn3shy4HWYWgqpVhG3DU4jsxavXVJki08-5dA4ikNA4vA/pubhtml?gid=688664547&amp;single=true&amp;widget=true&amp;headers=false' },
  ],
};



let pdfDoc = null;
          let currentPage = 1;
          let scale = 1.5;
serviceCards.forEach((card) => {
  card.addEventListener('click', () => {
    // Extract information from the clicked card
    const title = card.querySelector('h3').innerText;

    // Update modal content dynamically
    const modalTitle = document.getElementById('exampleModalLabel2');
    const modalBody = document.getElementById('dynamicContentDisplay');

    modalTitle.innerText = title;

    // Set dynamic content based on the title
    let content = '';
    if (title === 'Maintainence Activity') {
        content = '<div class="container my-5 text-black"><ul class="list-unstyled"><li><strong>Type of activity by MEMU/CAR/SHED, Jhajha:-</strong></li><li>Trip Inspection (15+0/3 days)</li><li>IA (60+0/5 days)</li><li>IC (240+0/10 days)</li><li>POH (18 months) at KPA Workshop/E.Rly.</li><li><strong>Heavy repair: -</strong> Changing of Transformer, Pantograph, Compressor, VCB, Choketank, Traction Motor, Auxiliary Motors, Radiator, Bogie, Wheel & Axle when required.</li><li><strong>Revised periodicity of maintenance schedule -</strong> Rly. Bd. L. No. 95/Elec (G) 181/19F, Dtd. 14.08.19</li></ul></div>';
      } else if (title === 'POH Activity') {
        content = `
    <div>
        <button class="btn btn-outline-warning" id="btnActivity" onclick="updateIframe('activity')">POH Activity Chart <STRONG>FY Wise</STRONG></button>
        <button class="btn btn-outline-warning" id="btnSummary" onclick="updateIframe('summary')">POH Activity Chart <STRONG>Month Wise</STRONG> - FY 2024-25</button>
    </div>
    <br>
    <div id="iframeContainer">
        <div id="loadingAnimation" style="text-align: center; display: none;">
            <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." style="width: 50px; height: 50px;">
            <p>Loading...</p>
        </div>
        <iframe id="iframeActivity" width="547" height="303" seamless frameborder="0" scrolling="no" style="display: none;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFG-XGNQQJOFGFQYx-o6ZghNfkudq7eqzBB3UJgbrUhXgogmb84oyRQ6kCLYwMJlc1p85md1MWX4lW/pubchart?oid=181140422&amp;format=interactive"></iframe>
        <iframe id="iframeSummary" width="1225" height="343" seamless frameborder="0" scrolling="no" style="display: none;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFG-XGNQQJOFGFQYx-o6ZghNfkudq7eqzBB3UJgbrUhXgogmb84oyRQ6kCLYwMJlc1p85md1MWX4lW/pubchart?oid=2140993180&amp;format=interactive"></iframe>
    </div>
     <style>
        .btn.active {
            background-color: #rgb(230, 181, 7);
            color: black;
        }
        .btn {
            transition: opacity 0.3s;
        }
    </style>

`;

    } else if (title === 'Asset Failure') {
        content = '<div class="container my-5"><h2>Assets Failure (As per ICMS)</h2><div class="row"><div class="col-12"><table class="table table-bordered"><thead><tr><th>SN</th><th>Head</th><th>2021-22</th><th>2022-23</th><th>2023-24</th><th>2024-25 Upto NOV</th><th>% Inc over last year</th></tr></thead><tbody><tr><td>1</td><td>No. of rakes in service</td><td>30</td><td>47</td><td>47</td><td>47</td><td>-</td></tr><tr><td>2</td><td>Asset failure of hallia based MEMU coaches</td><td>120</td><td>97</td><td>86</td><td>57</td><td>-7</td></tr><tr><td>3</td><td>Failure per rake</td><td>4</td><td>2</td><td>1.83</td><td>1.21</td><td>1.29</td></tr></tbody></table></div></div></div><br><div class="chart-container text-center" style="width: 100%; max-width: 600px; margin: 20px auto; border-left: 2px solid black; border-bottom: 2px solid black; position: relative; padding: 20px 0;">  <div style="position: absolute; left: -30px; top: 5%; font-size: 14px; transform: translateY(-50%); color: purple;">4</div> <div style="position: absolute; left: -30px; top: 30%; font-size: 14px; transform: translateY(-50%); color: purple;">3</div> <div style="position: absolute; left: -30px; top: 55%; font-size: 14px; transform: translateY(-50%); color: purple;">2</div> <div style="position: absolute; left: -30px; top: 80%; font-size: 14px; transform: translateY(-50%); color: purple;">1</div> <div style="position: absolute; left: -30px; top: 95%; font-size: 14px; transform: translateY(-50%); color: purple;">0</div>  <h4 style="color: purple; font-weight: bold;">Failure cases per rake</h4>  <div class="d-flex justify-content-between align-items-end" style="height: 300px; position: relative;">  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 100%; width: 100%; border-radius: 5px;">4</div> <p class="mt-2">2021-22</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 50%; width: 100%; border-radius: 5px;">2</div> <p class="mt-2">2022-23</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 45.75%; width: 100%; border-radius: 5px;">1.83</div> <p class="mt-2">2023-24</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 32.25%; width: 100%; border-radius: 5px;">1.29</div> <p class="mt-2">2024-25<br>(upto NOV-24)</p> </div> </div>  <p style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); font-weight: bold; color: purple;">Years</p> </div>';
      } else if (title === 'Failure Analysis') {
        content = '<div class="container my-5"> <h2 class="text-primary">Month Wise Failure Analysis FY 2024-25</h2> <table class="table table-bordered"> <thead> <tr> <th>SN</th> <th>Head</th> <th>APR</th> <th>MAY</th> <th>JUNE</th> <th>JULY</th> <th>AUG</th> <th>SEP</th> <th>OCT</th> <th>NOV</th> <th>Total</th> </tr> </thead> <tbody> <tr> <td>1</td> <td>Wrong operation by LP</td> <td>3</td> <td>4</td> <td>3</td> <td>4</td> <td>1</td> <td>2</td> <td>1</td> <td>4</td> <td>22</td> </tr> <tr> <td>2</td> <td>PU pipe burst</td> <td>1</td> <td>1</td> <td>3</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>4</td> </tr> <tr> <td>3</td> <td>Air suspension below burst</td> <td>1</td> <td>1</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>4</td> <td>BP/MR hose pipe cut</td> <td>-</td> <td>1</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>5</td> <td>Angle/ limit Switch</td> <td>-</td> <td>2</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>6</td> <td>Ferrule joint/check nut joint</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>7</td> <td>MCB action stuck/tap changer</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>8</td> <td>WCO BEAM valve stuck</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>9</td> <td>Brake block</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>10</td> <td>TM internal defect/bearing</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>11</td> <td>Power cable M3 failure</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>12</td> <td>Malfunction of EFRA 2 relay</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>13</td> <td>SK first pick up</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>14</td> <td>MCB oil hit</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>15</td> <td>Pneumatic pipe broken from</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>16</td> <td>Burst MBIC/EFIC cock</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>17</td> <td>DIH tippling</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>18</td> <td>Signal bell not working</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>19</td> <td>No feed in 141A & shunt power cable burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>20</td> <td>BACH Capacitor bank burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>21</td> <td>Brake blader broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>22</td> <td>Line clearance not given (Misled by IB)</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>23</td> <td>Foot step welding broken.</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>24</td> <td>Tripple valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>25</td> <td>TM tripped</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>26</td> <td>4412/4423A wire broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>27</td> <td>Parking brake applied</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td>28</td> <td>Feed valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td></td> <td>Grand Total</td> <td>8</td> <td>8</td> <td>11</td> <td>7</td> <td>3</td> <td>4</td> <td>8</td> <td>7</td> <td>61</td> </tr> </tbody> </table> </div><br><div class="container my-5"><h2>Technical/Nontechnical failure</h2><table class="table table-bordered"><thead><tr><th>Head</th><th>Sub-head</th><th>2023-24</th><th>2024-25 (Up to NOV)</th></tr></thead><tbody><tr><td rowspan="3">Technical</td><td>POH</td><td>12</td><td>8</td></tr><tr><td>Material</td><td>9</td><td>11</td></tr><tr><td>Maintenance</td><td>5</td><td>14</td></tr><tr><td rowspan="3">Non tech</td><td>TRD/OHE</td><td>0</td><td>1</td></tr><tr><td>Miscreant</td><td>19</td><td>2</td></tr><tr><td>Operational/LP</td><td>13</td><td>25</td></tr><tr><td>Total</td><td/><td>57</td><td>61</td></tr></tbody></table></div>';
      } else if (title === 'RAP') {
        content = '<div class="container mt-4">  <table class="table table-bordered table-striped" style="width: 100%; font-size: 14px;"> <thead class="table-warning"> <tr> <th style="width: 5%; text-align: center;">SN</th> <th style="width: 30%; text-align: center;">Head</th> <th style="width: 65%; text-align: center;">RAP</th> </tr> </thead> <tbody> <tr> <td style="text-align: center;">1</td> <td>Crew account</td> <td> 1. Online training related to minor trouble shooting of line failures and operation issues has been given to Crew. Approx. till date 250 Crew has been trained through this training program. It is being continued. <br> 2. Crews are book at MEMU Shed, Jhajha and counselling is being done. </td> </tr> <tr> <td style="text-align: center;">2</td> <td>Power Cable</td> <td> 1. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 136 MCs have intensively checked out of which in 04 MCs bulging of Power cables and melted Power cables has been found and these are jointly attended with staff of Workshop/KPA. <br> 2. Radium marking on power cable nuts. </td> </tr> <tr> <td style="text-align: center;">3</td> <td>TM</td> <td> 1. Grease gun are being used for greasing of TMs during IC schedule as recommended by RDSO. Till date one cycle has been completed and it is continued. <br> 2. Irreversible Temp strip is being fitment on bearing side to observe any abnormal Temp rise in TM for Early changing to arrest line failure. Till date one cycle has been completed and it is continued. <br> 3. Special attention is being paid to cleaning of Mico filters of TM3 & TM4. Till date one cycle is completed and it is continued. </td> </tr> <tr> <td style="text-align: center;">4</td> <td>PU pipe burst</td> <td> A drive has been launched for changing of old PU pipes with white color GARFLON 202 Nylon tube from 01 July24. Out of 187 MCs till date 174 MCs has been completely changed with white color GARFLON 202 Nylon tube. </td> </tr> <tr> <td style="text-align: center;">5</td> <td>MCP oil nil</td> <td> 1. Regular Instruction to NS points is being given regarding cleaning of MCP contactor and checking of cut-in & cut-out of MCP governor as RDSO recommendation. <br> 2. PPIO/Jhajha is liaison the NS point staffs on regular basis during Night stabling of rakes. <br> 3. MEMU Shed, Jhajha officials is visiting NS points regularly. </td> </tr> <tr> <td style="text-align: center;">6</td> <td>Bursting of air Suspension bellow</td> <td> 1. Premature Material failure of 140KN capacity air spring. Joint checking with firm representative has been done. <br> 2. A letter has been written to RDSO to provide proper guideline for replacement of 140KN capacity of air spring. </td> </tr> <tr> <td style="text-align: center;">7</td> <td>Brake Binding</td> <td> 1. Availability of material at CSD/ JAJ is being ensured. <br> 2. Regular chasing at officer level is being done. </td> </tr> <tr> <td style="text-align: center;">8</td> <td>Ferrule joint/check nut joint</td> <td> To arrest chance of opening of Ferrule joint MRIC & BPIC secure with GI wire and proper tightens of its checkout is being ensured during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">9</td> <td>MRIC/EPIC/BPIC cock operated by miscreant</td> <td> EPIC & BPIC are secured with GI wire/cable tie during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">10</td> <td>BP/MR hose pipe cut</td> <td> Counselling to concerned staff has been done for proper securing of loco hose pipe after attachment. </td> </tr> <tr> <td style="text-align: center;">11</td> <td>SR not pick up</td> <td> Counselling of maintenance staff is being done. </td> </tr> </tbody> </table>  <div class="mt-4"> <h5 class="text-primary"> <i class="bi bi-check-square"></i> General RAP </h5> <table class="table table-bordered" style="width: 100%; font-size: 14px;"> <tbody> <tr> <td style="width: 5%; text-align: center;">a)</td> <td> Earmarking of MEMU trained staffs and their deputation during NS to be ensured. </td> </tr> <tr> <td style="text-align: center;">b)</td> <td> Tools and materials availability to be ensured at NS points. </td> </tr> <tr> <td style="text-align: center;">c)</td> <td> Filling of NS Performa and posting it in Groups. </td> </tr> <tr> <td style="text-align: center;">d)</td> <td> Preferably TL staffs to be trained for MEMU. </td> </tr> <tr> <td style="text-align: center;">e)</td> <td> Crew and maintenance staffs to be trained at NS points itself by sending instructors from JAJ. </td> </tr> <tr> <td style="text-align: center;">f)</td> <td> Vifalta se Seekh to be started for maintenance wing and also to be circulated widely. </td> </tr> </tbody> </table> </div> </div>';
      } else if (title === 'Training') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
        content = '<div style="background-color: #FFF5D8; border: 1px solid #FFD700; padding: 20px;"> <h4 style="color: #333333; font-weight: bold;">Training organized status i.e. no of manpower trained till date.</h4> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">A. Physical training</h5> <p style="color: #333333;">Physical Training for Trouble shooting related to online failures of MEMU rakes has been imparted to total 18 nos. of SSE, JE & maintenance staffs in this FY 24-25 till date.</p> </div> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">B. Online training</h5> <p style="color: #333333;">Online training related to trouble shooting of line failures was conducted on 17.05.2024 & 03.07.24. Approx. 250 staffs (CLI, LP and ALP) had participated from SSE & SFO of ECR.</p> </div> <div> <h5 style="color: #333333; font-weight: bold;">Refresher course i.e. no. of Manpower of MEMU Shed Jjajha trained till date</h5> <p style="color: #333333;">Till date a total of 12 staffs has been provided refresher course training at MDWTC/KPA & ETTC/DDU in FY 2024-25.</p> </div> </div>';
      } else if (title === 'Achievements') {
        content = '<div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS 2023-24</h2> <ul class="list-unstyled"> <li>1. One Rake of 16 coaches was provided for PM inauguration of line between Narkatiagunj and Gaunaha. This Rake was inaugurated by Honourable Prime Minister of India, Shri Narendra Modi on 06.03.2024.</li> <li>2. ACWP (Automatic Coach Washing Plant) was inaugurated by General Manager East Central Railway, Shri A.K. Khandelwal on 20.12.2023.</li> <li>3. In the month Jun-23 one 16 coach MEMU rake has been provided to E.Co. Railway to cater the rush during "PURI RATH YATRA".</li> <li>4. In the month Jul-23 one 16 coach MEMU rake has been provided for SHRAVANI MELA SPCL.</li> <li>5. In the month Aug-23 one no. 12 coach MEMU rake has been provided for BPSC Teacher Recruitment Exam on 25.08.2023 & One no. 16 coach MEMU rake has been provided for SHRAVANI MELA SPECIAL on 16.08.2023.</li> <li>6. In the month Oct-23 new MEMU passenger special services (03333 & 03234) between station JAI NAGAR and extension of 03273 & 03274 has been started w.e.f. 13.10.2023. Accordingly, timely maintenance of MEMU rakes have been started by MEMU Shed Jhajha to provide MEMU Services on above mentioned new routes.</li> <li>7. In the month Nov-23 one MEMU rake of 16 coach formation has been provided to work as kartik Purnima puja special train.</li> <li>8. Scrap disposal done in FY 2023-24 : 126 MT of value ₹ 49,33,744.40 against target of 87.78 MT.</li> </ul> </div> </div> </div><br><div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS FY 24-25</h2> <ul class="list-unstyled"> <li>1. In Sept-2024, asset failures has been kept 4, resulting in a rate of 0.08 per rate. This is the lowest rate recorded in FY 2024-25 and represents a 56% reduction compared to the same month last year.</li> <li>2. 80 nos. LED Twin Beam light have been fitted and replaced with Halogen type in DMC of MEMU rakes at MEMU shed Jhajha.</li> <li>3. In the month of JULY-24, a drive has been launched for replacement of all old fitted blue PU pipes with white colour super flexible GARFLON-202 nylon tube in tap changers and switch groups of MEMU motor coaches for prevention of line failure due to PU pipe burst. In last two months such cases become nil. So far, a total of 174 motor coaches have now been fitted with white coloured super flexible GARFLON-202 nylon tube. TDC for 09 remaining coaches: Sep 24.</li> <li>4. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 175 MCs have intensively checked out of which in 11 MCs bulging of Power cables melted Power cables oil leakage from JB has been found and these are jointly attended with staff of Workshop/KPA.</li> <li>5. 01 MEMU rake of 12 coach formation has been provided in June 24 to work as Exam special train (Diploma certificate entrance competitive examination).</li> <li>6. 02 MEMU rakes of 16 coach formation have been provided in July 24 to work as "PURI special train" & 01 rake of 16 coach formation has been provided to work as "SHRAVANI MELA special train".</li> <li>7. 01 MEMU rake of 16 coach formation has been provided in Aug 24 to work as "EXAM SPECIAL train".</li> <li>8. 01 MEMU rake of 16 coach formation has been provided to work as SRSR-DJHR in replacement of 3 phase MEMU in Sept 24.</li> <li>9. The modification work on the pneumatic pipelines in MEMU MC 188004 has been completed to facilitate the inspection of the TFP secondary Junction Box.</li> </ul> </div> </div> </div>'
      } else if (title === 'Awards') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'In House Developement') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'Fire Prevention') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'RSP') {
        content = `<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Particulars of Work</th>
        <th>Sanction year/ Allocation</th>
        <th>Cost (in Thou)</th>
        <th>Qty</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Wheel & Axle set for MEMU FTM (Fuji Traction Motor)</td>
        <td>2021-22 / DF-3</td>
        <td>4228</td>
        <td>04 set</td>
        <td>PO of one of the NS item (91 Teeth Gear) issued to M/S Swastika Kolkata on 23.12.2022. DP 06.02.2023, but firm failed to supply even after continuous request. Hence PO cancelled on 25.02.2024. Four times tender done by AMM/JAI office but due to single offer with higher rate, tender had to cancel and finally discharged. Letter for procurement of Gear wheel teeth has been given to CMM/KPPA from HQ/HJP side. Indent is under preparation to be placed to KPA for procurement.</td>
      </tr>
      <tr>
        <td>2.</td>
        <td>Procurement of supply, testing and commissioning of LED Twin 1355/2020-21 beam head light (Bulk RSP).</td>
        <td>PB Item nos</td>
        <td>141.00/unit</td>
        <td>80 nos.</td>
        <td>LOA issued on 26.01.2023 to M/S Marvel ,Mumbai for 32 set and M/S Matshushi, Dehradun for 48 set. Matsushi has supplied on 18.01.2024 and Marvel on 24.04.2024. Fitment in all 80 M/C have been completed by 14.05.2024.</td>
      </tr>
      <tr>
        <td>3.</td>
        <td>Buchholz Relay for MEMU Motor Coach, BHEL drawing no. E62500/2916 CS no ACS 6002, make/brand- P&B WEIR UK or equivalent</td>
        <td></td>
        <td>678.22</td>
        <td>10 nos.</td>
        <td>PO issued on 20.11.2024 to M/S Rajesh Traders. DP- 04.01.2025.</td>
      </tr>
      <tr>
        <td>4.</td>
        <td>Single Bottle VCB Complete 600A for application on 25 KV AC EMU as per CLW specification CWW/ESC/47 ALT-G or latest/2022/M(c) / CLW/ESC/47 ALT-G or latest/2022/M(c) suitable for MEMU application.</td>
        <td>Sanctioned vide Rly. Bd. L. No. 1485.56</td>
        <td></td>
        <td>04 nos.</td>
        <td>PO issued on 21.11.2024 to M/S Autometers Alliance Limited. DP-20.02.2025</td>
      </tr>
      <tr>
        <td>5.</td>
        <td>Supply, testing, commissioning of LED twin beam head lights in 20 nos. of conventional MEMU Motor coach from RDSO approved sources as per PB Item nos. 1257/2022-23 & 673/2023-24)</td>
        <td>Under Umbrella PB Item nos. 1257/2022-23 & 673/2023-24)</td>
        <td>1227.09</td>
        <td>20 nos.</td>
        <td>PO issued on 21.11.2024 to M/S Power Technology Corporation. DP-20.02.2025</td>
      </tr>
      <tr>
        <td>6.</td>
        <td>Metal oxide gapless lightning arrester for 25KV BG AC EMU/MEMU Specification / RDSO's Specn. No.SPEC/E-14/2/05 dt.1987,Amendment-1/2/05 dt.1987,Amendment-</td>
        <td></td>
        <td>576.99</td>
        <td>10 nos.</td>
        <td>As per Sr.DMM/DNR office, Procurement has been stopped due to stock item.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Sl.</th>
        <th>Description</th>
        <th>Qty.</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Provision of smoke detection /fire alarm and suppression system</td>
        <td>168 MEMU units</td>
        <td>Indent initiated for procurement. After approval of PCME/HJP on 04.11.2024, it is under procurement at PCMM/HJP.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Sl. no.</th>
        <th>Description</th>
        <th>Qty.</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>CABLE 19 CORE 3 sq mm, 750 volts, composition class - 5, with elastomeric insulation and sheath,colour of sheath-black. Conforming to rdso specification no. : spec/e-14/01, (part i), rev- ii, 1993, with amendment no. 3 april-2000 & amendment no. 4 september – 2003.</td>
        <td>7500 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>2.</td>
        <td>CABLE SINGLE CORE 3 sq mm,750 volt, composition class- 5, with elastomeric insulation, colour- black. Conforming to rdso specification no. spec/e-14/01 (part i), rev ii,1993, with amendment no.2 april-1998, amendment no.3, april-2000, amendment no.4, september- 2003.</td>
        <td>30000 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>3.</td>
        <td>CABLE SINGLE CORE 6 sq mm, 750 volts, composition class - 5, elastomeric insulation and sheath, colour of sheath black. Conforming to rdso specification no. spec/e-14/01, (part - i), rev. ii, 1993, with amendment no. : 1 november 1997, amendment no. : 2 april - 1998, amendment no. : 3 april - 2000 & amendment no. : 4 september - 2003.</td>
        <td>4250 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>4.</td>
        <td>CABLE SINGLE core 25 sq mm, 750 volts, composition class- 5, with elastomeric insulation, colour - black. conforming to rdso specification no. spec/e-14/01 (part i): rev ii - february 1993, amendment no. 2 - april 1998, amendment no. 3 - april- 2000.</td>
        <td>5000 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>5.</td>
        <td>CABLE SINGLE CORE – 50 square mm, 750 volts, composition class: 5, with elastomeric insulation & sheath. Colour of sheath: black. Packing length 100 mtrs, plus/minus 5 percent tolerance. Length less than 95 mtrs. Will be supplied separately or along with last length of cable. Specn/drg.no.: rdso specn. No.- spec/e-14/01 (part i)rev-ii, 1993, with amendment no.1 november 1997, amendment no.2 april-1998, amendment no.3 april - 2000 & amendment no.4 september – 2003.</td>
        <td>2500 mtr.</td>
        <td></td>
      </tr>
      <tr>
        <td>6.</td>
        <td>CABLE SINGLE CORE- 95 Sq.mm, 1500 VOLTS, COMPOSITION CLASS - 5, WITH ELASTOMERIC INSULATION AND SHEATH, COLOUR OF SHEATH- BLACK. CONFORMING TO RDSO SPECIFICATION NO: SPEC/E-14/01 (PT-II): REV-II, FEBRUARY 1993.</td>
        <td>3000 mtr.</td>
        <td></td>
      </tr>
      <tr>
        <td>7.</td>
        <td>Cable single core 150 Sq mm, 1500 Volts, Composition Class 5, with Elastomeric Insulation and Sheath, Colour of Sheath Black, Conforming to RDSO Specification No. SPEC/E-14/01 Part I,Rev- 2- 1993 with amendment No. 1.</td>
        <td>14375 mtr.</td>
        <td></td>
      </tr>
      <tr>
        <td>8.</td>
        <td>Air Dryer -Twin Tower heat less Generating type Air Dryer with filter to RDSO Specification No. MP.0.01.00.06 (Rev.05) dated March 2011. As per RDSO Approved Sources suitable for MEMU application</td>
        <td>10 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>9.</td>
        <td>Main Air Compressor for MEMU Motor Coaches as per RDSO Specn. No. 70 BM-41 JAN-1979 Make ELGI or KPC.</td>
        <td>09 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>10.</td>
        <td>Electro-Pneumatic Brake unit complete for EMUs as per M/S Escorts Drg. No. DA8805/1/A or M/S WSF Part no. ID/023J/4 or M/S KBL Drg. No. C213883 & II 106238 as per RDSO Spec no. RDSO/2013/CG-03 (Rev.-1).</td>
        <td>30 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>11.</td>
        <td>KPCL make DC motor, 9.4 KW, 110 VDC as per KPCL drawing no. LP-7901 REV-01 RJP-7902 Rev-., for use in AC IGBT-VVVF/ MEMU/ TC coaches as per RDSO specification No.- 70-B-M-41. Make /Brand-KPCL.</td>
        <td>10 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>12.</td>
        <td>BOGIE BOLSTER ARRGT. FOR AC EMUs/ MEMU/ TC COACHES TO DRG. NO.ET04130 ALT-c. Note- DIMENSION AGAINST THE ITEM NO.17 SHOULD BE READ AS 259 MM IN PLACE OF 236 MM. Material to be procured from RCF/JCF Sources only.</td>
        <td>12 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>13.</td>
        <td>Bogie Frame Arrangement for Air Spring MEMU TC Bogie as per RCF Drg. No. ET03150 ALT F. RDSO Spec. No. G-9202 & ICF/MD/Spec.-147 incorporating RCF Coach Alteration instruction No. CAI/RCF/MECH/CONV/126 REV 01 For MEMU TC Bogie Frame and Drg. MI007441 ALT A.</td>
        <td>12 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>14.</td>
        <td>Set of top and Bottom arching Contacts (Tungsten tipped) for Tap changer GR Contactors (T1-19) of MEMUs as per KPA drg. no ER/KPA/EL/GR-4HE.3084C or M/S BHEL's Drg. no. 358011301020V00, CS no. BCS 1263 Fie. ref. 8030 page no. 59 and BHEL's Drg. No. 358011301020V01, CS no. CCS1263, Fie. ref. C001 page no. 61 of M/S BHEL's price list 2013-14. Suitable for MEMU Application/</td>
        <td>170 Set</td>
        <td></td>
      </tr>
      <tr>
        <td>15.</td>
        <td>Single bottle VCB complete 600A for application on 25 KV AC EMU as per CLW specification CLW/ES/C-47 Alt F and RSO Spec. no. E.2/05/84 and ICF/SK/908 or latest.</td>
        <td>06 Nos.</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>`
      } else if (title === 'M&P') {
        content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <table class="table table-bordered table-striped"> <thead> <tr> <th>S.N.</th> <th>Particulars of Work</th> <th>Sanctioned year</th> <th>Anticipated Cost (In Rs.)</th> <th>Qty</th> <th>Remarks</th> </tr> </thead> <tbody> <tr> <td>1.</td> <td>Diesel Engine operated automatic forklifts (GODEL) 8.0 T Diesel FLT Model GX 300( PH-41/CAP) 2-stage MFH 3660 MM ATT Single drive PHEU Type-1 speed 18& Make GODEL or similar.</td> <td>2023-24</td> <td>11,22,115.86</td> <td>01</td> <td>As per Sr.DMM/DNR office, file for TR has mistakenly been submitted to then Sr.COO/MEMU/JAI IREPS platform. Withdrawn of said file is yet to be done and will be put up to Sr.DET/MEMU/JAI for TR.</td> </tr> <tr> <td>2.</td> <td>TROLLEY MOUNTED MOBILE SEWAGE EVACUATION MACHINE with Positive displacement reversible rotary lobe pump of capacity: 150 Litres Per Minute</td> <td>2023-24</td> <td>12,85,448.41</td> <td>01</td> <td>It is under retendering. Indent at Sr. DMM/DNR office.</td> </tr> <tr> <td>3.</td> <td>Supply, installation, & testing of EMSON/Speedometer test bench for MEMU/DEMU coaches. As per technical specification in Annexure-1</td> <td>2024-25</td> <td>15,22,925.59</td> <td>01</td> <td>Detailed estimate has been vetted on 22.11.2024. Indent is under preparation.</td> </tr> </tbody> </table> </div> </div> </div>';
      } else if (title === 'PWP') {
        content = '<div class="container-fluid"><div class="row"><div class="col-12"><table class="table table-bordered table-striped"><thead><tr><th>S.N.</th><th>Year of section/PH</th><th>Name of Works</th><th>Cost (in Rs Thou)</th><th>Remarks</th></tr></thead><tbody><tr><td>1.</td><td>2019-20 (GM Power)</td><td>CAP / PH-42: Conversion of heavy repair line into inspection pit line at MEMU Shed Jhajha (Gm Shahi)</td><td>2433</td><td>Work completed. As SD/DC (G)/AL, LDA for the firm in March-24. Work started by firm.</td></tr><tr><td>2.</td><td>2021-22 (GM Power)</td><td>DF-3/PH-42: Improvement of basic infrastructure at MEMU Shed Jhajha (civil work) consisting of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td><td>4324</td><td>Work started but presently stopped. Regarding of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td></tr><tr><td>3.</td><td>2021-22 (GM Power)</td><td>CAP/PH-42: Augmentation of MEMU Shed Jhajha (Gm Shahi) 1. Approach road to MEMU Shed 2. Two nos. rooms for MEMU staff 3. Testing Lab 4. Toilets facility for Officers 5. Motor cycle stand 6. Conference Hall 7. Separate common urinal and lavatory for female and male employees</td><td>13577</td><td>Work started on 14.12.2022 and is under progress. 1. Approach road completed 2. Motor cycle stand completed 3. Construction of common urinal and lavatory for employees is under progress 4. Construction of conference hall and work of testing lab under progress.</td></tr><tr><td>4.</td><td>2019-20 (GM Power)</td><td>RSP/PH-65: Construction of basic training center at MEMU Shed Jhajha (Gm Shahi)</td><td>517</td><td>Work not yet started.</td></tr></tbody></table></div></div></div>';
      } else if (title === 'POH Related Complaints') {
        content = '<p>Details about POH Related Complaints...</p>';
      } else if (title === 'KPA Related Issues') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      }  else if (title === 'RDSO/RB Guidelines') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      }else if (title === 'HQ/HP Instruction') {
        content = '<p>Details about HQ/HP Instruction...</p>';
      } else if (title === 'Contact Details for all memo shed') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'VC/ Online Meetings') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'Internal Visit/Audit') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'Safety Drives') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'RM Complaints') {
          content = '<p>Details about RM Complaints...</p>';
        }   else if (title === 'Proposed Umbrella Works') {
          content = `
            <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          `;
          const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
        
          const buttonsHtml = pdfSection
            .map(
              (pdf, index) =>
                `<button class="btn ${
                  index === 0 ? 'btn-warning' : 'btn-outline-warning'
                } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                  ${pdf.name}
                </button>`
            )
            .join('');
        
          const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
        
          setTimeout(() => {
            modalBody.innerHTML = `
              <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
                <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
                <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
                <div>
                  <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                  <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
                </div>
              </div>
              <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
            `;
        
        
            // Load the initial PDF
            loadPdf(initialPdfUrl);
        
            // Add event listeners to navigation buttons
            const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
            navButtons.forEach((button) => {
              button.addEventListener('click', () => {
                navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
                button.classList.replace('btn-outline-warning', 'btn-warning');
                const pdfUrl = button.getAttribute('data-pdf-url');
                loadPdf(pdfUrl);
              });
            });
        
            // Pagination controls
            document.getElementById('prevPage').addEventListener('click', () => {
              if (currentPage > 1) {
                currentPage -= 1;
                renderPage();
              }
            });
        
            document.getElementById('nextPage').addEventListener('click', () => {
              if (currentPage < pdfDoc.numPages) {
                currentPage += 1;
                renderPage();
              }
            });
        
          }, 1000);
        }else {
        content = '<p>No detailed information available.</p>';
      }
    modalBody.innerHTML = content;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal2'));
    modal.show();
  });
});

          // Function to render a specific page
          const renderPage = () => {
            const canvas = document.getElementById('pdfCanvas');
            const context = canvas.getContext('2d');
      
            // Clear the canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
      
            pdfDoc.getPage(currentPage).then((page) => {
              const viewport = page.getViewport({ scale });
      
              canvas.width = viewport.width;
              canvas.height = viewport.height;
      
              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };
              page.render(renderContext);
      
              // Update page indicator
              document.getElementById('currentPage').innerText = currentPage;
              document.getElementById('totalPages').innerText = pdfDoc.numPages;
              console.log(scale)

            });
          };

                    // Function to load a PDF and render the first page
                    const loadPdf = (pdfUrl) => {
                      pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
                        pdfDoc = pdf;
                        currentPage = 1; // Reset to the first page
                        renderPage();
                      }).catch((error) => {
                        console.error('Error loading PDF:', error);
                        modalBody.innerHTML = '<p class="text-danger">Failed to load PDF.</p>';
                      });
                    };



function showPDF() {
  const pdfViewer = document.getElementById('pdfViewer');
  const loadingAnimation = document.getElementById('loadingAnimation');
  
  // Show loading animation and hide PDF viewer initially
  loadingAnimation.style.display = 'block';
  pdfViewer.style.display = 'none';
  
  // Set the PDF source dynamically
  pdfViewer.src = './assets/PDF/8072024.pdf'; // Replace with your PDF file's local path
  
  // Show PDF once it loads
  pdfViewer.onload = function () {
      loadingAnimation.style.display = 'none'; // Hide loading animation
      pdfViewer.style.display = 'block'; // Show PDF
  };
}

function updateIframe(type) {
  const iframeActivity = document.getElementById('iframeActivity');
  const iframeSummary = document.getElementById('iframeSummary');
  const loadingAnimation = document.getElementById('loadingAnimation');
  const btnActivity = document.getElementById('btnActivity');
  const btnSummary = document.getElementById('btnSummary');
  
  // Reset buttons
  btnActivity.classList.remove('active');
  btnSummary.classList.remove('active');
  btnActivity.style.opacity = '0.5';
  btnSummary.style.opacity = '0.5';

  // Hide all iframes and show loading animation
  iframeActivity.style.display = 'none';
  iframeSummary.style.display = 'none';
  loadingAnimation.style.display = 'block';

  // Determine which iframe to show
  if (type === 'activity') {
      btnActivity.classList.add('active');
      btnActivity.style.opacity = '1'; // Highlight active button
      iframeActivity.onload = function () {
          loadingAnimation.style.display = 'none'; // Hide loading animation
          iframeActivity.style.display = 'block'; // Show iframe
      };
      iframeActivity.src = iframeActivity.src; // Reload iframe
  } else if (type === 'summary') {
      btnSummary.classList.add('active');
      btnSummary.style.opacity = '1'; // Highlight active button
      iframeSummary.onload = function () {
          loadingAnimation.style.display = 'none'; // Hide loading animation
          iframeSummary.style.display = 'block'; // Show iframe
      };
      iframeSummary.src = iframeSummary.src; // Reload iframe
  }
}

// Add event listeners to each link card
const linkCards = document.querySelectorAll('a.d-flex.align-items-center');

linkCards.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of the <a> tag

    // Extract information from the clicked link
    const title = link.querySelector('strong').innerText;

    // Update modal content dynamically
    const modalTitle = document.getElementById('exampleModalLabel2');
    const modalBody = document.getElementById('dynamicContentDisplay');

    modalTitle.innerText = title;

    // Set dynamic content based on the title
    let content = '';
    if (title === 'Layout') {
      content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
    } else if (title === 'Shed Holding') {
      content = `
      <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  
    const excelSection = pdfLinks[title]; // Get the list of Excel files for the section
  
    const buttonsHtml = excelSection
      .map(
        (excel, index) =>
          `<button class="btn ${
            index === 0 ? 'btn-warning' : 'btn-outline-warning'
          } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
            ${excel.name}
          </button>`
      )
      .join('');
  
    const initialExcelUrl = excelSection[0].url; // Load the first Excel file by default
  
     
     
    setTimeout(() => {
      // Ensure excelSection is valid and contains data
      const excelSection = pdfLinks[title]; // This retrieves the Excel file array
    
      // Check if excelSection is available
      if (!excelSection || excelSection.length === 0) {
        modalBody.innerHTML = `<p class="text-danger">No Excel files found for this section.</p>`;
        return;
      }
    
      // Generate navigation buttons for Excel files
      const buttonsHtml = excelSection
        .map(
          (excel, index) =>
            `<button class="btn ${
              index === 0 ? 'btn-warning' : 'btn-outline-warning'
            } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
              ${excel.name}
            </button>`
        )
        .join('');
    
      // Now, use buttonsHtml in the modalBody content
      modalBody.innerHTML = `
        <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
        <div id="excelViewerContainer" style="position: relative; height: 500px; background-color: #f4f4f4; border: 1px solid #ddd;">
          <div id="loadingAnimation" class="d-flex justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(255, 255, 255, 0.8);">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <iframe id="excelIframe" src="${excelSection[0].url}" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
      `;
    
      // Function to hide the loading animation
      const hideLoadingAnimation = () => {
        console.log("g")
        const loadingAnimation = document.getElementById('loadingAnimation');
        
          loadingAnimation.style ="display:none !important";
        
      };
    
      // Attach the onload event to hide the loading animation
      const iframe = document.getElementById('excelIframe');
      iframe.onload = hideLoadingAnimation;
    
      // Add event listeners to the Excel navigation buttons
      const excelNavButtons = modalBody.querySelectorAll('.excel-nav-button');
      excelNavButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // Show loading animation again
          const loadingAnimation = document.getElementById('loadingAnimation');
          if (loadingAnimation) {
            loadingAnimation.style.display = 'flex';
          }
    
          // Update iframe source to load the selected Excel file
          const excelUrl = button.getAttribute('data-excel-url');
          iframe.src = excelUrl;
        });
      });
    }, 1000);
    
      


 }else if (title === 'Shed History / Glimpses') {
      content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <table class="table table-bordered table-striped"> <thead> <tr> <th>Event</th> <th>Date</th> </tr> </thead> <tbody> <tr> <td>Foundation of MEMU Car Shed, Jhajha</td> <td>14.02.1999</td> </tr> <tr> <td>Inauguration of MEMU Car Shed, Jhajha</td> <td>01.10.2003</td> </tr> <tr> <td>Arrival of 1st MEMU rake & Night Inspection</td> <td>13.10.2003</td> </tr> <tr> <td>Commissioning of 1st MEMU rake</td> <td>13.01.2004</td> </tr> <tr> <td>Weekly Inspection of 1st MEMU rake</td> <td>15.02.2004</td> </tr> <tr> <td>Monthly Inspection of 1st MEMU rake</td> <td>18.10.2004</td> </tr> <tr> <td>Commissioning of 25/05 Ton EOT crane</td> <td>07.01.2006</td> </tr> <tr> <td>Lifting of 1st MEMU Coach by Jamalpur Jack</td> <td>14.06.2006</td> </tr> <tr> <td>Introduction of 16 car MEMU rake</td> <td>25.07.2008</td> </tr> <tr> <td>Commissioning of CNC Under floor Lathe (B.G)</td> <td>27.08.2010</td> </tr> <tr> <td>Transformer changing of 1st MEMU done</td> <td>03.04.2013</td> </tr> <tr> <td>Commissioning of 1" DGA Machine</td> <td>25.09.2014</td> </tr> <tr> <td>Commissioning of Speedometer Test Bench</td> <td>20.10.2016</td> </tr> <tr> <td>Commissioning of 03 Phase BEML MEMU Rake</td> <td>22.12.2021</td> </tr> <tr> <td>Commissioning of Screw Air Compressor Capacity 500 CFM, 7.5 Kg/Cm2</td> <td>17.02.2022</td> </tr> <tr> <td>Commissioning of 01 set (05 Nos), 25 Ton capacity Synchronized lifting Jamalpur Jack</td> <td>30.07.2022</td> </tr> <tr> <td>Commissioning of transformer oil filtration plant capacity 3000 Lph</td> <td>08.09.2022</td> </tr> <tr> <td>Commissioning of 2nd DGA machine (under commissioning)</td> <td>03.10.2022</td> </tr> <tr> <td>Commissioning of EP test bench (Make-ESCORT)</td> <td>03.04.2023</td> </tr> <tr> <td>Automatic transformer oil BDV test apparatus received</td> <td>17.03.2023</td> </tr> <tr> <td>Automatic Coach Washing Plant commissioning</td> <td>30.11.2023</td> </tr> </tbody> </table> </div> </div> </div>';
    } else if (title === 'Historical Memories') {
      content = '<p>Details about Historical Memories...</p>';
    } else if (title === 'Infrastructure') {
      content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <h2>Infrastructure & Facilities:</h2> <table class="table table-bordered table-striped"> <thead> <tr> <th>Details</th> <th>Qty</th> </tr> </thead> <tbody> <tr> <td>Pit lines</td> <td>02 no. (16 coach length)</td> </tr> <tr> <td>Stabling line</td> <td>04 no. (02, 16 coach & 02, 12 coach length)</td> </tr> <tr> <td>Lifting bay</td> <td>01 no.</td> </tr> <tr> <td>Washing Line</td> <td>01 no.</td> </tr> <tr> <td>No. of EOT Crane 25/5 MT</td> <td>2 no.</td> </tr> <tr> <td>Pit wheel lathe machine (PWL)</td> <td>1 no.</td> </tr> <tr> <td>Automatic Coach Washing plant</td> <td>1 no.</td> </tr> <tr> <td>Screw Air Compressor Capacity 500 CFM, 7.5 Kg/Cm2</td> <td>1 no.</td> </tr> <tr> <td>25 Ton capacity Synchronized lifting Jamalpur Jack</td> <td>1 Set (05 no.)</td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-12"> <h2>Holding of MEMU Car Shed, Jhajha:-</h2> <div class="row"> <div class="col-12"> <h3>CONVENTIONAL</h3> <table class="table table-bordered table-striped"> <thead> <tr> <th>Details</th> <th>Qty</th> </tr> </thead> <tbody> <tr> <td>MEMU Motor Coach</td> <td>187 Coaches</td> </tr> <tr> <td>MEMU Trailer Coach</td> <td>559 Coaches</td> </tr> <tr> <td>Total coaches</td> <td>746 Coaches</td> </tr> <tr> <td>Rakes 12 coach</td> <td>23 rakes</td> </tr> <tr> <td>Rakes 16 coach</td> <td>24 rakes</td> </tr> <tr> <td>Services</td> <td>142 Trains</td> </tr> </tbody> </table> </div> </div> </div> </div> </div>';
    } else if (title === 'Man Power Position') {
      content = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th/><th>Man-Power Position of MEMU Car Shed, Jhajha-</th></tr></thead><tbody><tr><td style="font-weight: bold;">Sanctioned Strength</td><td style="text-align: right;">234</td></tr><tr><td style="font-weight: bold;">On Roll</td><td style="text-align: right;">205 (Vacancy 29)</td></tr><tr><td style="font-weight: bold;">As per workstik (3 Men/Unit)</td><td style="text-align: right;">-</td></tr><tr><td style="font-weight: bold;">CURRENT IR AVERAGE MPR/unit</td><td style="text-align: right;">2.50</td></tr><tr><td style="font-weight: bold;">CURRENT MPR of MEMU Shed Jd</td><td style="text-align: right;">1.1 (lowest in IR)</td></tr></tbody></table></div>';
    } else if (title === 'Staff Position') {
      content = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th/><th>CATEGORY</th><th>SANCTION</th><th>ON ROLL</th><th>VACANCY</th></tr></thead><tbody><tr><td style="font-weight: bold;">01</td><td style="font-weight: bold;">Sr. SECTION ENGINEER</td><td style="text-align: right;">16</td><td style="text-align: right;">12</td><td style="text-align: right;">4</td></tr><tr><td style="font-weight: bold;">02</td><td style="font-weight: bold;">JUNIOR ENGINEER</td><td style="text-align: right;">10</td><td style="text-align: right;">6</td><td style="text-align: right;">4</td></tr><tr><td style="font-weight: bold;">03</td><td style="font-weight: bold;">MCM</td><td style="text-align: right;">22</td><td style="text-align: right;">22</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">04</td><td style="font-weight: bold;">Tech-I</td><td style="text-align: right;">59</td><td style="text-align: right;">55</td><td style="text-align: right;">4</td></tr><tr><td style="font-weight: bold;">05</td><td style="font-weight: bold;">Tech-II</td><td style="text-align: right;">24</td><td style="text-align: right;">12</td><td style="text-align: right;">12</td></tr><tr><td style="font-weight: bold;">06</td><td style="font-weight: bold;">Tech-III</td><td style="text-align: right;">25</td><td style="text-align: right;">22</td><td style="text-align: right;">3</td></tr><tr><td style="font-weight: bold;">07</td><td style="font-weight: bold;">App. Tech-III</td><td style="text-align: right;">-</td><td style="text-align: right;">4</td><td style="text-align: right;">-1</td></tr><tr><td style="font-weight: bold;">08</td><td style="font-weight: bold;">Khalasi/Khalasi Dafadar</td><td style="text-align: right;">56</td><td style="text-align: right;">57</td><td style="text-align: right;">-1</td></tr><tr><td style="font-weight: bold;">09</td><td style="font-weight: bold;">Asst. Clerk</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">10</td><td style="font-weight: bold;">Office Clerk</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">11</td><td style="font-weight: bold;">Armature Winder</td><td style="text-align: right;">-</td><td style="text-align: right;">-</td><td style="text-align: right;">-</td></tr><tr><td style="font-weight: bold;">12</td><td style="font-weight: bold;">Carpenter</td><td style="text-align: right;">1</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">13</td><td style="font-weight: bold;">Crane Driver</td><td style="text-align: right;">2</td><td style="text-align: right;">2</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">14</td><td style="font-weight: bold;">Draft Man</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">15</td><td style="font-weight: bold;">Machinist</td><td style="text-align: right;">2</td><td style="text-align: right;">0</td><td style="text-align: right;">2</td></tr><tr><td style="font-weight: bold;">16</td><td style="font-weight: bold;">Mill Wright</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">17</td><td style="font-weight: bold;">Painter</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">18</td><td style="font-weight: bold;">Plant Attendant</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">19</td><td style="font-weight: bold;">Shed Contr. Attendant</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">20</td><td style="font-weight: bold;">Store Clerk</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">21</td><td style="font-weight: bold;">Tool Keeper</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">22</td><td style="font-weight: bold;">Tool Checker</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">23</td><td style="font-weight: bold;">Welder</td><td style="text-align: right;">4</td><td style="text-align: right;">2</td><td style="text-align: right;">2</td></tr><tr><td style="font-weight: bold;">24</td><td style="font-weight: bold;">CMS</td><td style="text-align: right;">1</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">25</td><td style="font-weight: bold;">Peon</td><td style="text-align: right;">-</td><td style="text-align: right;">0</td><td style="text-align: right;">-</td></tr><tr><td style="font-weight: bold;">Total</td><td/><td style="text-align: right;">234</td><td style="text-align: right;">205</td><td style="text-align: right;">29</td></tr></tbody></table></div>';
    } else if (title === 'Rake Link / Train Service') {
       content = `
      <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  
    const excelSection = pdfLinks[title]; // Get the list of Excel files for the section
  
    const buttonsHtml = excelSection
      .map(
        (excel, index) =>
          `<button class="btn ${
            index === 0 ? 'btn-warning' : 'btn-outline-warning'
          } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
            ${excel.name}
          </button>`
      )
      .join('');
  
    const initialExcelUrl = excelSection[0].url; // Load the first Excel file by default
  
     
     
    setTimeout(() => {
      // Ensure excelSection is valid and contains data
      const excelSection = pdfLinks[title]; // This retrieves the Excel file array
    
      // Check if excelSection is available
      if (!excelSection || excelSection.length === 0) {
        modalBody.innerHTML = `<p class="text-danger">No Excel files found for this section.</p>`;
        return;
      }
    
      // Generate navigation buttons for Excel files
      const buttonsHtml = excelSection
        .map(
          (excel, index) =>
            `<button class="btn ${
              index === 0 ? 'btn-warning' : 'btn-outline-warning'
            } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
              ${excel.name}
            </button>`
        )
        .join('');
    
      // Now, use buttonsHtml in the modalBody content
      modalBody.innerHTML = `
        <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
        <div id="excelViewerContainer" style="position: relative; height: 500px; background-color: #f4f4f4; border: 1px solid #ddd;">
          <div id="loadingAnimation" class="d-flex justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(255, 255, 255, 0.8);">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <iframe id="excelIframe" src="${excelSection[0].url}" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
      `;
    
      // Function to hide the loading animation
      const hideLoadingAnimation = () => {
        console.log("g")
        const loadingAnimation = document.getElementById('loadingAnimation');
        
          loadingAnimation.style ="display:none !important";
        
      };
    
      // Attach the onload event to hide the loading animation
      const iframe = document.getElementById('excelIframe');
      iframe.onload = hideLoadingAnimation;
    
      // Add event listeners to the Excel navigation buttons
      const excelNavButtons = modalBody.querySelectorAll('.excel-nav-button');
      excelNavButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // Show loading animation again
          const loadingAnimation = document.getElementById('loadingAnimation');
          if (loadingAnimation) {
            loadingAnimation.style.display = 'flex';
          }
    
          // Update iframe source to load the selected Excel file
          const excelUrl = button.getAttribute('data-excel-url');
          iframe.src = excelUrl;
        });
      });
    }, 1000);
    } else if (title === 'Sections') {
      content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
    } else if (title === 'List of SMI') {
        content=`<div align="center"> <table border="0" cellspacing="3" width="100%" height="100%" id="table20" valign="top" > <tbody><tr> <td align="left" valign="top"> <div id="ntext" style="font-family:tahoma;font-size:20px;"> <p align="justify"></p><div id="ViEtDeVdIvId" style="POSITION:Relative;FONT-FAMILY:Arial;font-size:20pxpx;BACKGROUND-COLOR:white">  </div> <div style="POSITION:Relative;FONT-FAMILY:Arial;font-size:20pxpx;BACKGROUND-COLOR:white">  </div> <div style="POSITION:Relative;FONT-FAMILY:Arial;font-size:20pxpx;BACKGROUND-COLOR:white">  </div> <div style="POSITION:Relative;FONT-FAMILY:Arial;font-size:20pxpx;BACKGROUND-COLOR:white"> <table border="1" cellpadding="1" cellspacing="1" style="width: 100%" class="table .table-bordered .table-hover " font-size="1rem"> <tbody> <tr> <td style="width: 40px;"> <p> <strong><span style="font-size:20px;"><span style="font-family:tahoma,geneva,sans-serif;">S. No.</span></span></strong></p> </td> <td> <p> <strong><span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><strong style="color: rgb(0, 0, 0); font-family: tahoma, geneva, sans-serif; text-align: -webkit-center;">Specification  No.</strong></span></span></strong></p> </td> <td> <p> <strong><span style="font-size:20px;"><span style="font-family:tahoma,geneva,sans-serif;"><strong style="color: rgb(0, 0, 0); font-family: tahoma, geneva, sans-serif; text-align: -webkit-center;">Description</strong></span></span></strong></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">1.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0061_2005_Rev_%201.pdf"> RDSO/PE/SPEC/AC/0061/2005 (Rev. 1) </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Roof mounted AC package unit for LHB variant AC coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">2.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0192_2018_Rev_%201.pdf">RDSO/PE/SPEC/AC/0192-2018 Rev.1</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Microprocessor based Smart switch Board Cabinet (MSSBC) for LHB EOG/HOG Type AC Coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">3.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-Revision%203%20VRLA%20specification.pdf">RDSO/PE/SPEC/AC/0009 - 2021 (Rev.3) </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">120 Ah VRLA battery</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">4.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-Revision%203%20VRLA%20specification.pdf">RDSO/PE/SPEC/AC/0009 - 2021 (Rev.3)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">1100 Ah VRLA battery</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">5.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_TL_0195_2019_Rev%200.pdf">RDSO/PE/SPEC/TL/0195-2019(Rev.0)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Switch Board Cabinet for HOG Complaint LSLRD Coaches (Without DA Set)</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">6.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-Revision%203%20VRLA%20specification.pdf">RDSO/PE/SPEC/AC/0009 - 2021 (Rev.3) </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">12 V, 70 Ah VRLA battery</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">7.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0200_2020_Rev%200.pdf">RDSO/PE/SPEC/AC/0200-2020 Rev.0</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Set of Panels for LHB EOG/HOG Garib Rath type AC coaches of Indian Railways</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">8.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/EDTS%20103%20Rev_D%20with%20am%201_7%20and%20RDSO%20mod%20sheet%20Rev%202%20with%20am%201.pdf">EDTS 103 Part 4 of 4, EDTS 103 Part 2 of 4, EDTS 103 Part 3 of 4, EDTS 103 Part 1 of 4, </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Switch Board Cabinet for LHB AC Power Car for 2x500 KVA DA Set</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">9.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_TL_0040_Rev%202-2021.pdf">RDSO/PE/SPEC/TL/0040 Rev 2 - 2021 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Battery for TRD-Lead Acid 150 AH -LM</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">10.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_TL_0040_Rev%202-2021.pdf">RDSO/PE/SPEC/TL/0040 Rev 2 - 2021 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Battery for TRD- Lead acid 250 AH-LM</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">11.</span></span></p> </td> <td> <p> <a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/Signed%20Rev%202%20RBC%20Cum%20EBC%20specification.pdf"><span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">RDSO/PE/SPEC/AC/0183 (Rev. 2) - 2024</span></span></a></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">4.5 kW Underslung Constant Voltage, Regulated Cum Emergency Battery Charger for LHB Coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">12.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0138-2009%20(Rev-1).pdf">RDSO/PE/SPEC/AC/0138-2009 (REV.1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Flexible Polyamide Conduit with its end Fittings and Accessories</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">13.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0089%E2%80%93%202008%20(Rev_%20%E2%80%980%E2%80%99)%20(Amndt_%201%202).pdf">RDSO/PE/SPEC/AC/0089 (Rev. 0) 2008 with Amendment 1 & 2</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">3- phase induction motors of Blower for AC Package unit</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">14.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0013-2011_Rev%203.pdf">RDSO/PE/SPEC/ AC/0013-2011 (Rev.3), </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">ERRU for 4.5 kW alternator</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">15.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_EMU_SPEC_0014-2000%20Rev%200%20with%20amendment%201%202.pdf">RDSO/PE/EMU/SPEC/0014-2000 (Rev. '0') with A&C slip no. 1&2, </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Battery for Low Maintenance Lead Acid Battery 75 Ah for locomotives (PPCP Container)</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">16.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/EDTS_327_Rev_A_Corr_1_Amend_%201.pdf">EDTS 327 Rev.A, Corr-1 Amendment 1 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Switch Board Cabinet for EOG Type Double Decker Coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">17.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/EDTS%20144%20Rev_C.pdf">EDTS 144 Rev.C, </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Switch Board Cabinet for LHB type SG AC Coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">18.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/EDTS%20134%20Rev_D%20with%20Cor_1%20with%20Am%201-5.pdf">EDTS 134, Rev.D Amend.5 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Switch Board Cabinet for LHB AC Hot buffet Coach</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">19.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_TL_0040_Rev%202-2021(2).pdf">RDSO/PE/SPEC/TL/0040 Rev 2 - 2021 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Battery for TRD- Lead Acid 40Ah -LM</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">20.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/EDTS_%20105_%20Rev%20E.pdf">EDTS 105 Rev. E with Amndt. No. 1, 2 &3</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">ZS coupler (400A, 750V)</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">21.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0139-2009%20Rev%201.pdf">RDSO/PE/SPEC/AC/0139-2009(Rev.1) </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Microprocessor controller for roof mounted AC package unit for LHB coaches and double decker coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">22.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_184-2015_Rev_1.pdf">RDSO/PE/SPEC/AC/0184-2015 (Rev.'1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Switch Board cabinet for LHB EOG AC coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">23.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0134-2009%20(Rev_%200).pdf">RDSO/PE/SPEC/AC/0134-2009(Rev.'0)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Roof Mounted AC Package Unit for Double Decker EOG Type AC Coaches (10 TR)</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">24.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0055_2003_Rev_2_%20Jan_2004.pdf">RDSO/PESPEC/AC/0055 -2003 (Rev. '2')</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Dry Type air filter for LHB RMPU</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">25.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_TL_0040_Rev%202-2021(2).pdf">RDSO/PE/SPEC/TL/0040 Rev 2 - 2021 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Battery for TRD-Lead Acid 200Ah-LM</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">26.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/96%20RDSOPESPECAC0084-2008(Rev1).pdf">RDSO/PE/SPEC/AC/0084 2008 REV 1 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Diesel Alternator Set 500 kVA, 750 V</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">27.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RDSO_PE_SPEC_AC_0177_2013_Rev%200.pdf">RDSO/PE/SPEC/AC/0177 (Rev.'0')-2013</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Inter Vehicular coupler High capacity ( 500A 750V)</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">28.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">RDSO/PE/SPEC/AC/0203-2020 (Rev.0)</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Specification of control transformer & measuring voltage transformer for switch board cabinet of LHB EOG/HOG AC/Non AC coaches, LSLRD Coaches, Power Car and Pantry Car.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">29.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/Final%20Specification%200197%20-merged%20(1).pdf">RDSO/PE/SPEC/AC/0197- 2020 (Rev.0)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Specification for fresh, supply and Return Bellow Duct made of meta Aramid/para Aramid fabric with silicon rubber coating on both sides for RMPU for LHB EOG/HOG Type AC coaches of Indian Railways</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">30.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/33.pdf">RDSO/PE/SPEC/AC/0080 -2007 (Rev.2)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Specification for 60KVA Transformer for LHB variant AC coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">31.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/34.pdf">RDSO/PE/SPEC/EMU/0191-2018(Rev.0)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Emergency Talk back system for EMUs MEMUs and Kolkata Metro rakes.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">32.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-ii-%20spec%20for%20EMU-MEMU-163.pdf">RDSO/PE/SPEC/EMU/0163- 2022 (Rev.3)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">IGBT based 3-phase Electrics (on-board mounted) for AC EMUs MEMUs.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">33.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/36.pdf">RDSO/PE/SPEC/TL/0095-2019 (Rev.3)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Technical Specification for passenger escalator to be installed at various Railway Station of Indian  Railways.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">34.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/37.pdf">RDSO/PE/SPEC/AC/0103-2008(Rev-1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Under slung Diesel Alternator set 500kVA,750V</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">35.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">EDTS-350 (Rev-0) With Amendment No.1</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Diesel Alternator set 450KW,750V</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">36.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">RDSO/PE/SPEC/AC/0188-2016(Rev-0)</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Under slung Diesel Alternator Set 450KW,750V</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">37.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/40.pdf">RDSO/PE/SPEC/AC/0056-2014(Rev-1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">25KW Alternator with RRU</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">38.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/41.pdf">RDSO/PE/SPEC/TL/0054-2003(Rev-0) with Amendment No.1& 2</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">4.5KW Alternator with RRU</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">39.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">RDSO/PE/SPEC/AC/0059-2019(Rev-1)</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">V-Belt for TL&AC Coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">40.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/43.pdf">EL/TL-41/A</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">12KW Alternator with RRU</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">41.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/3%20ELPSSPEC%20TL13%20-1998.pdf">ELPS/SPEC/TL/13 March 1998</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Alternator & Axel pulley for brushless Alternators</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">42.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/45.pdf">RDSO/PE/SPEC/AC/0006-2009(Rev-1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Nylon Bushes for Alternator Suspension Bracket.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">43.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">EDTS 355-Rev.1 with Am no. 1-3</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Specification for Set of Panels for LHB EOG Type Non-AC coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">44.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/47.pdf">RDSO/PE/SPEC/TL/0158 -2010 (Rev.1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Specification for 9/15KVA Transformer for LHB variant Non AC coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">45.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/files/RMPU%20Specification%20Rev-2(1).pdf">RDSO/PE/SPEC/AC/0061-2005(Rev-2) effective from November-2022</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Specification for Roof Mounted AC Package unit for LHB Varient AC Coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">46.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/Specification%20of%20HVLS%20fan%20for%20uploading.pdf">IS/RDSO-PSE/1002:2023</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Technical Specification for High Volume Low Speed Fan to be installed at various Railway installations</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">47.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-i-spec-60%20kVA-transformer.pdf">RDSO/PE/SPEC/AC/0080-2007 (Rev. 3)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">60 KVA Transformer fo LHB variant AC coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">48.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-ii-79%20ELTL48(Rev-1)-2005%20(1).pdf">EL/TL/48(Rev. 1)-2005</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">System specification and code of practice for wiring for 110 V DC self generation train lighting system</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">49.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-iii-0%20ELTL56-1992.pdf">EL/TL/56-1992</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Code of practice for train lighting maintenance on prevention of fires on 110 V DC self generating coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">50.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-iv-%20RDSOPEO0008-2005(Rev%200).pdf">RDSO/PE/O/0008-2005 (Rev. 0)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Code of practice for train lighting maintenance on prevention of fires on 110 V DC self generating coaches</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">51.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-i-Specification%20for%20Loco%20%26%20EMU%20(LMLA).pdf">PE/EMU/SPEC/0014-2000 (Rev. 0) with Amendment No. 1 & 2</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Low Maintenance Batteres for Electric Locomotives and Electrical Multiple Units.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">52.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-ii-RC%20FAN%20450%20MM%20SPECIFICATION%20REV-1.pdf">RDSO/PE/SPEC/TL/0050-2010 (Rev. 1) </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">450 mm sweep 110 V AC and 140 V AC Railway Carriage Fans.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">53.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-iii-BLDC%20Spec_Rev_3%20with%20Amnd_%201_270416.pdf">RDSO/PE/SPEC/TL/0021/2005 (Rev. 3) with Amendment no. 1 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Brushless DC Railway Carriage Fans (Sensorless)</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">54.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-iv-RDSO_PE_SPEC_TL_0091_2016%20(Rev_1).pdf">RDSO/PE/SPEC/TL/0091-2016 (Rev. 1) </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Energy Efficient LED Based Luminaire Units for Passenger Coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">55.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-v-SPEC_TL_0119-2008%20(Rev_0).pdf">RDSO/PE/SPEC/TL/0119-2008 (Rev. 0)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">LED Bases Tail Lamp in SLR & Power Car-Tolling Stock Application.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">56.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-vi-RDSO_PE_SPEC_EMU_0063_2004_Rev_1.pdf">RDSO/PE/SPEC/EMU/0063-2004 (Rev. 1)</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">LED Based Tail Light for 1500V DC & 25 KV AC EMUs and MEMUs.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">57.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-vii-Rev-2%20spec%20for%2025kVA%20Inv.pdf">RDSO/PE/SPEC/AC/0024 (Rev.2)-2021</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">25 KVA -Three Phase Natural Cooled Underslung Inverter for Roof Mounted AC Package Unit & Fans. </span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">58.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-viii-static%20battery%20charger%20008%20Rev%202.pdf">RDO/PE/SPEC/AC/0008 (Rev.2)-2010</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Static Battery Charger for AC and TL Coaches.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">59.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-ix-Low%20Maintenance%20Lead%20Acid%2040%20Ah%2C%20150%20Ah%2C%20200%20Ah%20%26%20250%20Ah%20Cells%20for%20Traction%20Distribution%20System.pdf">RDSO/PE/SPEC/TL/0040 (Rev. 2)-2021 </a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Low Maintenance Lead Acid 40Ah, 150Ah, 200Ah and 250Ah Cells for Traction Distribution System</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">60.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/3-x.pdf">RDSO/PE/GL/TL/0001 (Rev. 0)-2022</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">General Guidelines on Battery section</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">61.</span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;"><a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/1-i-RDSO_PE_SPEC_EMU_0196-2019(Rev_0)_Trainset%20Propulsion%20Specification_Only%20Cover%20Page%20Sign_Seperate%20Addendum%201%20To%205.pdf">RDSO/PE/SPEC/EMU/0196-2019 (Rev. 0) with Addendum/ Corrigendum</a></span></span></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">3-Phase Propulsion Equipment and Control system for Electric Train sets.</span></span></p> </td> </tr> <tr> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">62.</span></span></p> </td> <td> <p> <a class="linkn" href="https://rdso.indianrailways.gov.in/uploads/191227%20_Passenger%20Elevator%20final.pdf"><span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">RDSO/2013/EM/SPEC/0016 (Rev. 1)-2019</span></span></a></p> </td> <td> <p> <span style="font-size:20pxpx;"><span style="font-family:tahoma,geneva,sans-serif;">Technical Specification for Passenger Elevator for Indian Railways</span></span></p> </td> </tr> </tbody> </table> </div>`

      }else if (title === 'PPIO') {
        content = `
       <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
         <div class="spinner-border text-primary" role="status">
           <span class="visually-hidden">Loading...</span>
         </div>
       </div>
     `;
   
     const excelSection = pdfLinks[title]; // Get the list of Excel files for the section
   
     const buttonsHtml = excelSection
       .map(
         (excel, index) =>
           `<button class="btn f${
             index === 0 ? 'btn-warning' : 'btn-outline-warning'
           } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
             ${excel.name}
           </button>`
       )
       .join('');
   
     const initialExcelUrl = excelSection[0].url; // Load the first Excel file by default
   
      
      
     setTimeout(() => {
       // Ensure excelSection is valid and contains data
       const excelSection = pdfLinks[title]; // This retrieves the Excel file array
     
       // Check if excelSection is available
       if (!excelSection || excelSection.length === 0) {
         modalBody.innerHTML = `<p class="text-danger">No Excel files found for this section.</p>`;
         return;
       }
     
       // Generate navigation buttons for Excel files
       const buttonsHtml = excelSection
         .map(
           (excel, index) =>
             `<button class="btn ${
               index === 0 ? 'btn-warning' : 'btn-outline-warning'
             } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
               ${excel.name}
             </button>
             <a href="${excel.url}" class="btn btn-outline-primary" download>Download</a>`
         )
         .join('');
     
       // Now, use buttonsHtml in the modalBody content
       modalBody.innerHTML = `
         <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
         <div id="excelViewerContainer" style="position: relative; height: 90vw; background-color: #f4f4f4; border: 1px solid #ddd;">
           <div id="loadingAnimation" class="d-flex justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(255, 255, 255, 0.8);">
             <div class="spinner-border text-primary" role="status">
               <span class="visually-hidden">Loading...</span>
             </div>
           </div>
           <iframe id="excelIframe" src="${excelSection[0].url}" style="width: 100%; height: 100%; border: none;"></iframe>
         </div>
       `;
     
       // Function to hide the loading animation
       const hideLoadingAnimation = () => {
         console.log("g")
         const loadingAnimation = document.getElementById('loadingAnimation');
         
           loadingAnimation.style ="display:none !important";
         
       };
     
       // Attach the onload event to hide the loading animation
       const iframe = document.getElementById('excelIframe');
       iframe.onload = hideLoadingAnimation;
     
       // Add event listeners to the Excel navigation buttons
       const excelNavButtons = modalBody.querySelectorAll('.excel-nav-button');
       excelNavButtons.forEach((button) => {
         button.addEventListener('click', () => {
           // Show loading animation again
           const loadingAnimation = document.getElementById('loadingAnimation');
           if (loadingAnimation) {
             loadingAnimation.style.display = 'flex';
           }
     
           // Update iframe source to load the selected Excel file
           const excelUrl = button.getAttribute('data-excel-url');
           iframe.src = excelUrl;
         });
       });
     }, 1000);
     } else {
      content = '<p>No detailed information available.</p>';
    }

    modalBody.innerHTML = content;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal2'));
    modal.show();
  });
});


const linkCards1 = document.querySelectorAll('a.dropdown-item');
console.log(linkCards1)

linkCards1.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of the <a> tag

    // Extract information from the clicked link
    const title = link.querySelector('strong').innerText;

    // Update modal content dynamically
    const modalTitle = document.getElementById('exampleModalLabel2');
    const modalBody = document.getElementById('dynamicContentDisplay');

    modalTitle.innerText = title;

    // Set dynamic content based on the title
    let content = '';
    if (title === 'Layout') {
      content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
    } else if (title === 'Shed Holding') {
      content = `
      <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  
    const excelSection = pdfLinks[title]; // Get the list of Excel files for the section
  
    const buttonsHtml = excelSection
      .map(
        (excel, index) =>
          `<button class="btn ${
            index === 0 ? 'btn-warning' : 'btn-outline-warning'
          } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
            ${excel.name}
          </button>`
      )
      .join('');
  
    const initialExcelUrl = excelSection[0].url; // Load the first Excel file by default
  
     
     
    setTimeout(() => {
      // Ensure excelSection is valid and contains data
      const excelSection = pdfLinks[title]; // This retrieves the Excel file array
    
      // Check if excelSection is available
      if (!excelSection || excelSection.length === 0) {
        modalBody.innerHTML = `<p class="text-danger">No Excel files found for this section.</p>`;
        return;
      }
    
      // Generate navigation buttons for Excel files
      const buttonsHtml = excelSection
        .map(
          (excel, index) =>
            `<button class="btn ${
              index === 0 ? 'btn-warning' : 'btn-outline-warning'
            } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
              ${excel.name}
            </button>`
        )
        .join('');
    
      // Now, use buttonsHtml in the modalBody content
      modalBody.innerHTML = `
        <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
        <div id="excelViewerContainer" style="position: relative; height: 500px; background-color: #f4f4f4; border: 1px solid #ddd;">
          <div id="loadingAnimation" class="d-flex justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(255, 255, 255, 0.8);">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <iframe id="excelIframe" src="${excelSection[0].url}" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
      `;
    
      // Function to hide the loading animation
      const hideLoadingAnimation = () => {
        console.log("g")
        const loadingAnimation = document.getElementById('loadingAnimation');
        
          loadingAnimation.style ="display:none !important";
        
      };
    
      // Attach the onload event to hide the loading animation
      const iframe = document.getElementById('excelIframe');
      iframe.onload = hideLoadingAnimation;
    
      // Add event listeners to the Excel navigation buttons
      const excelNavButtons = modalBody.querySelectorAll('.excel-nav-button');
      excelNavButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // Show loading animation again
          const loadingAnimation = document.getElementById('loadingAnimation');
          if (loadingAnimation) {
            loadingAnimation.style.display = 'flex';
          }
    
          // Update iframe source to load the selected Excel file
          const excelUrl = button.getAttribute('data-excel-url');
          iframe.src = excelUrl;
        });
      });
    }, 1000);
    
      


 }else if (title === 'Shed History / Glimpses') {
      content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <table class="table table-bordered table-striped"> <thead> <tr> <th>Event</th> <th>Date</th> </tr> </thead> <tbody> <tr> <td>Foundation of MEMU Car Shed, Jhajha</td> <td>14.02.1999</td> </tr> <tr> <td>Inauguration of MEMU Car Shed, Jhajha</td> <td>01.10.2003</td> </tr> <tr> <td>Arrival of 1st MEMU rake & Night Inspection</td> <td>13.10.2003</td> </tr> <tr> <td>Commissioning of 1st MEMU rake</td> <td>13.01.2004</td> </tr> <tr> <td>Weekly Inspection of 1st MEMU rake</td> <td>15.02.2004</td> </tr> <tr> <td>Monthly Inspection of 1st MEMU rake</td> <td>18.10.2004</td> </tr> <tr> <td>Commissioning of 25/05 Ton EOT crane</td> <td>07.01.2006</td> </tr> <tr> <td>Lifting of 1st MEMU Coach by Jamalpur Jack</td> <td>14.06.2006</td> </tr> <tr> <td>Introduction of 16 car MEMU rake</td> <td>25.07.2008</td> </tr> <tr> <td>Commissioning of CNC Under floor Lathe (B.G)</td> <td>27.08.2010</td> </tr> <tr> <td>Transformer changing of 1st MEMU done</td> <td>03.04.2013</td> </tr> <tr> <td>Commissioning of 1" DGA Machine</td> <td>25.09.2014</td> </tr> <tr> <td>Commissioning of Speedometer Test Bench</td> <td>20.10.2016</td> </tr> <tr> <td>Commissioning of 03 Phase BEML MEMU Rake</td> <td>22.12.2021</td> </tr> <tr> <td>Commissioning of Screw Air Compressor Capacity 500 CFM, 7.5 Kg/Cm2</td> <td>17.02.2022</td> </tr> <tr> <td>Commissioning of 01 set (05 Nos), 25 Ton capacity Synchronized lifting Jamalpur Jack</td> <td>30.07.2022</td> </tr> <tr> <td>Commissioning of transformer oil filtration plant capacity 3000 Lph</td> <td>08.09.2022</td> </tr> <tr> <td>Commissioning of 2nd DGA machine (under commissioning)</td> <td>03.10.2022</td> </tr> <tr> <td>Commissioning of EP test bench (Make-ESCORT)</td> <td>03.04.2023</td> </tr> <tr> <td>Automatic transformer oil BDV test apparatus received</td> <td>17.03.2023</td> </tr> <tr> <td>Automatic Coach Washing Plant commissioning</td> <td>30.11.2023</td> </tr> </tbody> </table> </div> </div> </div>';
    } else if (title === 'Historical Memories') {
      content = '<p>Details about Historical Memories...</p>';
    } else if (title === 'Infrastructure') {
      content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <h2>Infrastructure & Facilities:</h2> <table class="table table-bordered table-striped"> <thead> <tr> <th>Details</th> <th>Qty</th> </tr> </thead> <tbody> <tr> <td>Pit lines</td> <td>02 no. (16 coach length)</td> </tr> <tr> <td>Stabling line</td> <td>04 no. (02, 16 coach & 02, 12 coach length)</td> </tr> <tr> <td>Lifting bay</td> <td>01 no.</td> </tr> <tr> <td>Washing Line</td> <td>01 no.</td> </tr> <tr> <td>No. of EOT Crane 25/5 MT</td> <td>2 no.</td> </tr> <tr> <td>Pit wheel lathe machine (PWL)</td> <td>1 no.</td> </tr> <tr> <td>Automatic Coach Washing plant</td> <td>1 no.</td> </tr> <tr> <td>Screw Air Compressor Capacity 500 CFM, 7.5 Kg/Cm2</td> <td>1 no.</td> </tr> <tr> <td>25 Ton capacity Synchronized lifting Jamalpur Jack</td> <td>1 Set (05 no.)</td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-12"> <h2>Holding of MEMU Car Shed, Jhajha:-</h2> <div class="row"> <div class="col-12"> <h3>CONVENTIONAL</h3> <table class="table table-bordered table-striped"> <thead> <tr> <th>Details</th> <th>Qty</th> </tr> </thead> <tbody> <tr> <td>MEMU Motor Coach</td> <td>187 Coaches</td> </tr> <tr> <td>MEMU Trailer Coach</td> <td>559 Coaches</td> </tr> <tr> <td>Total coaches</td> <td>746 Coaches</td> </tr> <tr> <td>Rakes 12 coach</td> <td>23 rakes</td> </tr> <tr> <td>Rakes 16 coach</td> <td>24 rakes</td> </tr> <tr> <td>Services</td> <td>142 Trains</td> </tr> </tbody> </table> </div> </div> </div> </div> </div>';
    } else if (title === 'Man Power Position') {
      content = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th/><th>Man-Power Position of MEMU Car Shed, Jhajha-</th></tr></thead><tbody><tr><td style="font-weight: bold;">Sanctioned Strength</td><td style="text-align: right;">234</td></tr><tr><td style="font-weight: bold;">On Roll</td><td style="text-align: right;">205 (Vacancy 29)</td></tr><tr><td style="font-weight: bold;">As per workstik (3 Men/Unit)</td><td style="text-align: right;">-</td></tr><tr><td style="font-weight: bold;">CURRENT IR AVERAGE MPR/unit</td><td style="text-align: right;">2.50</td></tr><tr><td style="font-weight: bold;">CURRENT MPR of MEMU Shed Jd</td><td style="text-align: right;">1.1 (lowest in IR)</td></tr></tbody></table></div>';
    } else if (title === 'Staff Position') {
      content = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th/><th>CATEGORY</th><th>SANCTION</th><th>ON ROLL</th><th>VACANCY</th></tr></thead><tbody><tr><td style="font-weight: bold;">01</td><td style="font-weight: bold;">Sr. SECTION ENGINEER</td><td style="text-align: right;">16</td><td style="text-align: right;">12</td><td style="text-align: right;">4</td></tr><tr><td style="font-weight: bold;">02</td><td style="font-weight: bold;">JUNIOR ENGINEER</td><td style="text-align: right;">10</td><td style="text-align: right;">6</td><td style="text-align: right;">4</td></tr><tr><td style="font-weight: bold;">03</td><td style="font-weight: bold;">MCM</td><td style="text-align: right;">22</td><td style="text-align: right;">22</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">04</td><td style="font-weight: bold;">Tech-I</td><td style="text-align: right;">59</td><td style="text-align: right;">55</td><td style="text-align: right;">4</td></tr><tr><td style="font-weight: bold;">05</td><td style="font-weight: bold;">Tech-II</td><td style="text-align: right;">24</td><td style="text-align: right;">12</td><td style="text-align: right;">12</td></tr><tr><td style="font-weight: bold;">06</td><td style="font-weight: bold;">Tech-III</td><td style="text-align: right;">25</td><td style="text-align: right;">22</td><td style="text-align: right;">3</td></tr><tr><td style="font-weight: bold;">07</td><td style="font-weight: bold;">App. Tech-III</td><td style="text-align: right;">-</td><td style="text-align: right;">4</td><td style="text-align: right;">-1</td></tr><tr><td style="font-weight: bold;">08</td><td style="font-weight: bold;">Khalasi/Khalasi Dafadar</td><td style="text-align: right;">56</td><td style="text-align: right;">57</td><td style="text-align: right;">-1</td></tr><tr><td style="font-weight: bold;">09</td><td style="font-weight: bold;">Asst. Clerk</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">10</td><td style="font-weight: bold;">Office Clerk</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">11</td><td style="font-weight: bold;">Armature Winder</td><td style="text-align: right;">-</td><td style="text-align: right;">-</td><td style="text-align: right;">-</td></tr><tr><td style="font-weight: bold;">12</td><td style="font-weight: bold;">Carpenter</td><td style="text-align: right;">1</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">13</td><td style="font-weight: bold;">Crane Driver</td><td style="text-align: right;">2</td><td style="text-align: right;">2</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">14</td><td style="font-weight: bold;">Draft Man</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">15</td><td style="font-weight: bold;">Machinist</td><td style="text-align: right;">2</td><td style="text-align: right;">0</td><td style="text-align: right;">2</td></tr><tr><td style="font-weight: bold;">16</td><td style="font-weight: bold;">Mill Wright</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">17</td><td style="font-weight: bold;">Painter</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">18</td><td style="font-weight: bold;">Plant Attendant</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">19</td><td style="font-weight: bold;">Shed Contr. Attendant</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">20</td><td style="font-weight: bold;">Store Clerk</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">21</td><td style="font-weight: bold;">Tool Keeper</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">22</td><td style="font-weight: bold;">Tool Checker</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td><td style="text-align: right;">1</td></tr><tr><td style="font-weight: bold;">23</td><td style="font-weight: bold;">Welder</td><td style="text-align: right;">4</td><td style="text-align: right;">2</td><td style="text-align: right;">2</td></tr><tr><td style="font-weight: bold;">24</td><td style="font-weight: bold;">CMS</td><td style="text-align: right;">1</td><td style="text-align: right;">1</td><td style="text-align: right;">0</td></tr><tr><td style="font-weight: bold;">25</td><td style="font-weight: bold;">Peon</td><td style="text-align: right;">-</td><td style="text-align: right;">0</td><td style="text-align: right;">-</td></tr><tr><td style="font-weight: bold;">Total</td><td/><td style="text-align: right;">234</td><td style="text-align: right;">205</td><td style="text-align: right;">29</td></tr></tbody></table></div>';
    } else if (title === 'Rake Link / Train Service') {
       content = `
      <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  
    const excelSection = pdfLinks[title]; // Get the list of Excel files for the section
  
    const buttonsHtml = excelSection
      .map(
        (excel, index) =>
          `<button class="btn ${
            index === 0 ? 'btn-warning' : 'btn-outline-warning'
          } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
            ${excel.name}
          </button>`
      )
      .join('');
  
    const initialExcelUrl = excelSection[0].url; // Load the first Excel file by default
  
     
     
    setTimeout(() => {
      // Ensure excelSection is valid and contains data
      const excelSection = pdfLinks[title]; // This retrieves the Excel file array
    
      // Check if excelSection is available
      if (!excelSection || excelSection.length === 0) {
        modalBody.innerHTML = `<p class="text-danger">No Excel files found for this section.</p>`;
        return;
      }
    
      // Generate navigation buttons for Excel files
      const buttonsHtml = excelSection
        .map(
          (excel, index) =>
            `<button class="btn ${
              index === 0 ? 'btn-warning' : 'btn-outline-warning'
            } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
              ${excel.name}
            </button>`
        )
        .join('');
    
      // Now, use buttonsHtml in the modalBody content
      modalBody.innerHTML = `
        <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
        <div id="excelViewerContainer" style="position: relative; height: 500px; background-color: #f4f4f4; border: 1px solid #ddd;">
          <div id="loadingAnimation" class="d-flex justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(255, 255, 255, 0.8);">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <iframe id="excelIframe" src="${excelSection[0].url}" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
      `;
    
      // Function to hide the loading animation
      const hideLoadingAnimation = () => {
        console.log("g")
        const loadingAnimation = document.getElementById('loadingAnimation');
        
          loadingAnimation.style ="display:none !important";
        
      };
    
      // Attach the onload event to hide the loading animation
      const iframe = document.getElementById('excelIframe');
      iframe.onload = hideLoadingAnimation;
    
      // Add event listeners to the Excel navigation buttons
      const excelNavButtons = modalBody.querySelectorAll('.excel-nav-button');
      excelNavButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // Show loading animation again
          const loadingAnimation = document.getElementById('loadingAnimation');
          if (loadingAnimation) {
            loadingAnimation.style.display = 'flex';
          }
    
          // Update iframe source to load the selected Excel file
          const excelUrl = button.getAttribute('data-excel-url');
          iframe.src = excelUrl;
        });
      });
    }, 1000);
    } else if (title === 'Sections') {
      content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
    } else if (title === 'List of SMI') {
      
        
      
        content = `
        <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      `;
      const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section

    
      const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
    
      setTimeout(() => {
        modalBody.innerHTML = `
          <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
          <iframe src="${initialPdfUrl}" />
        `;

    
      }, 1000);
      }else if (title === 'PPIO') {
          content = `
         <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
           <div class="spinner-border text-primary" role="status">
             <span class="visually-hidden">Loading...</span>
           </div>
         </div>
       `;
     
       const excelSection = pdfLinks[title]; // Get the list of Excel files for the section
     
       const buttonsHtml = excelSection
         .map(
           (excel, index) =>
             `<button class="btn f${
               index === 0 ? 'btn-warning' : 'btn-outline-warning'
             } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
               ${excel.name}
             </button>`
         )
         .join('');
     
       const initialExcelUrl = excelSection[0].url; // Load the first Excel file by default
     
        
        
       setTimeout(() => {
         // Ensure excelSection is valid and contains data
         const excelSection = pdfLinks[title]; // This retrieves the Excel file array
       
         // Check if excelSection is available
         if (!excelSection || excelSection.length === 0) {
           modalBody.innerHTML = `<p class="text-danger">No Excel files found for this section.</p>`;
           return;
         }
       
         // Generate navigation buttons for Excel files
         const buttonsHtml = excelSection
           .map(
             (excel, index) =>
               `<button class="btn ${
                 index === 0 ? 'btn-warning' : 'btn-outline-warning'
               } me-2 excel-nav-button" data-excel-url="${excel.url}" data-excel-index="${index}">
                 ${excel.name}
               </button>`
           )
           .join('');
       
         // Now, use buttonsHtml in the modalBody content
         modalBody.innerHTML = `
           <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
           <div id="excelViewerContainer" style="position: relative; height: 90vw; background-color: #f4f4f4; border: 1px solid #ddd;">
             <div id="loadingAnimation" class="d-flex justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: rgba(255, 255, 255, 0.8);">
               <div class="spinner-border text-primary" role="status">
                 <span class="visually-hidden">Loading...</span>
               </div>
             </div>
             <iframe id="excelIframe" src="${excelSection[0].url}" style="width: 100%; height: 100%; border: none;"></iframe>
           </div>
         `;
       
         // Function to hide the loading animation
         const hideLoadingAnimation = () => {
           console.log("g")
           const loadingAnimation = document.getElementById('loadingAnimation');
           
             loadingAnimation.style ="display:none !important";
           
         };
       
         // Attach the onload event to hide the loading animation
         const iframe = document.getElementById('excelIframe');
         iframe.onload = hideLoadingAnimation;
       
         // Add event listeners to the Excel navigation buttons
         const excelNavButtons = modalBody.querySelectorAll('.excel-nav-button');
         excelNavButtons.forEach((button) => {
           button.addEventListener('click', () => {
             // Show loading animation again
             const loadingAnimation = document.getElementById('loadingAnimation');
             if (loadingAnimation) {
               loadingAnimation.style.display = 'flex';
             }
       
             // Update iframe source to load the selected Excel file
             const excelUrl = button.getAttribute('data-excel-url');
             iframe.src = excelUrl;
           });
         });
       }, 1000);
       } else  if (title === 'Maintainence Activity') {
        content = '<div class="container my-5 text-black"><ul class="list-unstyled"><li><strong>Type of activity by MEMU/CAR/SHED, Jhajha:-</strong></li><li>Trip Inspection (15+0/3 days)</li><li>IA (60+0/5 days)</li><li>IC (240+0/10 days)</li><li>POH (18 months) at KPA Workshop/E.Rly.</li><li><strong>Heavy repair: -</strong> Changing of Transformer, Pantograph, Compressor, VCB, Choketank, Traction Motor, Auxiliary Motors, Radiator, Bogie, Wheel & Axle when required.</li><li><strong>Revised periodicity of maintenance schedule -</strong> Rly. Bd. L. No. 95/Elec (G) 181/19F, Dtd. 14.08.19</li></ul></div>';
      } else if (title === 'POH Activity') {
        content = `
    <div>
        <button class="btn btn-outline-warning" id="btnActivity" onclick="updateIframe('activity')">POH Activity Chart <STRONG>FY Wise</STRONG></button>
        <button class="btn btn-outline-warning" id="btnSummary" onclick="updateIframe('summary')">POH Activity Chart <STRONG>Month Wise</STRONG> - FY 2024-25</button>
    </div>
    <br>
    <div id="iframeContainer">
        <div id="loadingAnimation" style="text-align: center; display: none;">
            <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." style="width: 50px; height: 50px;">
            <p>Loading...</p>
        </div>
        <iframe id="iframeActivity" width="547" height="303" seamless frameborder="0" scrolling="no" style="display: none;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFG-XGNQQJOFGFQYx-o6ZghNfkudq7eqzBB3UJgbrUhXgogmb84oyRQ6kCLYwMJlc1p85md1MWX4lW/pubchart?oid=181140422&amp;format=interactive"></iframe>
        <iframe id="iframeSummary" width="1225" height="343" seamless frameborder="0" scrolling="no" style="display: none;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFG-XGNQQJOFGFQYx-o6ZghNfkudq7eqzBB3UJgbrUhXgogmb84oyRQ6kCLYwMJlc1p85md1MWX4lW/pubchart?oid=2140993180&amp;format=interactive"></iframe>
    </div>
     <style>
        .btn.active {
            background-color: #rgb(230, 181, 7);
            color: black;
        }
        .btn {
            transition: opacity 0.3s;
        }
    </style>

`;

    } else if (title === 'Asset Failure') {
        content = '<div class="container my-5"><h2>Assets Failure (As per ICMS)</h2><div class="row"><div class="col-12"><table class="table table-bordered"><thead><tr><th>SN</th><th>Head</th><th>2021-22</th><th>2022-23</th><th>2023-24</th><th>2024-25 Upto NOV</th><th>% Inc over last year</th></tr></thead><tbody><tr><td>1</td><td>No. of rakes in service</td><td>30</td><td>47</td><td>47</td><td>47</td><td>-</td></tr><tr><td>2</td><td>Asset failure of hallia based MEMU coaches</td><td>120</td><td>97</td><td>86</td><td>57</td><td>-7</td></tr><tr><td>3</td><td>Failure per rake</td><td>4</td><td>2</td><td>1.83</td><td>1.21</td><td>1.29</td></tr></tbody></table></div></div></div><br><div class="chart-container text-center" style="width: 100%; max-width: 600px; margin: 20px auto; border-left: 2px solid black; border-bottom: 2px solid black; position: relative; padding: 20px 0;">  <div style="position: absolute; left: -30px; top: 5%; font-size: 14px; transform: translateY(-50%); color: purple;">4</div> <div style="position: absolute; left: -30px; top: 30%; font-size: 14px; transform: translateY(-50%); color: purple;">3</div> <div style="position: absolute; left: -30px; top: 55%; font-size: 14px; transform: translateY(-50%); color: purple;">2</div> <div style="position: absolute; left: -30px; top: 80%; font-size: 14px; transform: translateY(-50%); color: purple;">1</div> <div style="position: absolute; left: -30px; top: 95%; font-size: 14px; transform: translateY(-50%); color: purple;">0</div>  <h4 style="color: purple; font-weight: bold;">Failure cases per rake</h4>  <div class="d-flex justify-content-between align-items-end" style="height: 300px; position: relative;">  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 100%; width: 100%; border-radius: 5px;">4</div> <p class="mt-2">2021-22</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 50%; width: 100%; border-radius: 5px;">2</div> <p class="mt-2">2022-23</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 45.75%; width: 100%; border-radius: 5px;">1.83</div> <p class="mt-2">2023-24</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 32.25%; width: 100%; border-radius: 5px;">1.29</div> <p class="mt-2">2024-25<br>(upto NOV-24)</p> </div> </div>  <p style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); font-weight: bold; color: purple;">Years</p> </div>';
      } else if (title === 'Failure Analysis') {
        content = '<div class="container my-5"> <h2 class="text-primary">Month Wise Failure Analysis FY 2024-25</h2> <table class="table table-bordered"> <thead> <tr> <th>SN</th> <th>Head</th> <th>APR</th> <th>MAY</th> <th>JUNE</th> <th>JULY</th> <th>AUG</th> <th>SEP</th> <th>OCT</th> <th>NOV</th> <th>Total</th> </tr> </thead> <tbody> <tr> <td>1</td> <td>Wrong operation by LP</td> <td>3</td> <td>4</td> <td>3</td> <td>4</td> <td>1</td> <td>2</td> <td>1</td> <td>4</td> <td>22</td> </tr> <tr> <td>2</td> <td>PU pipe burst</td> <td>1</td> <td>1</td> <td>3</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>4</td> </tr> <tr> <td>3</td> <td>Air suspension below burst</td> <td>1</td> <td>1</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>4</td> <td>BP/MR hose pipe cut</td> <td>-</td> <td>1</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>5</td> <td>Angle/ limit Switch</td> <td>-</td> <td>2</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>6</td> <td>Ferrule joint/check nut joint</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>7</td> <td>MCB action stuck/tap changer</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>8</td> <td>WCO BEAM valve stuck</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>9</td> <td>Brake block</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>10</td> <td>TM internal defect/bearing</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>11</td> <td>Power cable M3 failure</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>12</td> <td>Malfunction of EFRA 2 relay</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>13</td> <td>SK first pick up</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>14</td> <td>MCB oil hit</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>15</td> <td>Pneumatic pipe broken from</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>16</td> <td>Burst MBIC/EFIC cock</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>17</td> <td>DIH tippling</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>18</td> <td>Signal bell not working</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>19</td> <td>No feed in 141A & shunt power cable burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>20</td> <td>BACH Capacitor bank burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>21</td> <td>Brake blader broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>22</td> <td>Line clearance not given (Misled by IB)</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>23</td> <td>Foot step welding broken.</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>24</td> <td>Tripple valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>25</td> <td>TM tripped</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>26</td> <td>4412/4423A wire broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>27</td> <td>Parking brake applied</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td>28</td> <td>Feed valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td></td> <td>Grand Total</td> <td>8</td> <td>8</td> <td>11</td> <td>7</td> <td>3</td> <td>4</td> <td>8</td> <td>7</td> <td>61</td> </tr> </tbody> </table> </div><br><div class="container my-5"><h2>Technical/Nontechnical failure</h2><table class="table table-bordered"><thead><tr><th>Head</th><th>Sub-head</th><th>2023-24</th><th>2024-25 (Up to NOV)</th></tr></thead><tbody><tr><td rowspan="3">Technical</td><td>POH</td><td>12</td><td>8</td></tr><tr><td>Material</td><td>9</td><td>11</td></tr><tr><td>Maintenance</td><td>5</td><td>14</td></tr><tr><td rowspan="3">Non tech</td><td>TRD/OHE</td><td>0</td><td>1</td></tr><tr><td>Miscreant</td><td>19</td><td>2</td></tr><tr><td>Operational/LP</td><td>13</td><td>25</td></tr><tr><td>Total</td><td/><td>57</td><td>61</td></tr></tbody></table></div>';
      } else if (title === 'RAP') {
        content = '<div class="container mt-4">  <table class="table table-bordered table-striped" style="width: 100%; font-size: 14px;"> <thead class="table-warning"> <tr> <th style="width: 5%; text-align: center;">SN</th> <th style="width: 30%; text-align: center;">Head</th> <th style="width: 65%; text-align: center;">RAP</th> </tr> </thead> <tbody> <tr> <td style="text-align: center;">1</td> <td>Crew account</td> <td> 1. Online training related to minor trouble shooting of line failures and operation issues has been given to Crew. Approx. till date 250 Crew has been trained through this training program. It is being continued. <br> 2. Crews are book at MEMU Shed, Jhajha and counselling is being done. </td> </tr> <tr> <td style="text-align: center;">2</td> <td>Power Cable</td> <td> 1. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 136 MCs have intensively checked out of which in 04 MCs bulging of Power cables and melted Power cables has been found and these are jointly attended with staff of Workshop/KPA. <br> 2. Radium marking on power cable nuts. </td> </tr> <tr> <td style="text-align: center;">3</td> <td>TM</td> <td> 1. Grease gun are being used for greasing of TMs during IC schedule as recommended by RDSO. Till date one cycle has been completed and it is continued. <br> 2. Irreversible Temp strip is being fitment on bearing side to observe any abnormal Temp rise in TM for Early changing to arrest line failure. Till date one cycle has been completed and it is continued. <br> 3. Special attention is being paid to cleaning of Mico filters of TM3 & TM4. Till date one cycle is completed and it is continued. </td> </tr> <tr> <td style="text-align: center;">4</td> <td>PU pipe burst</td> <td> A drive has been launched for changing of old PU pipes with white color GARFLON 202 Nylon tube from 01 July24. Out of 187 MCs till date 174 MCs has been completely changed with white color GARFLON 202 Nylon tube. </td> </tr> <tr> <td style="text-align: center;">5</td> <td>MCP oil nil</td> <td> 1. Regular Instruction to NS points is being given regarding cleaning of MCP contactor and checking of cut-in & cut-out of MCP governor as RDSO recommendation. <br> 2. PPIO/Jhajha is liaison the NS point staffs on regular basis during Night stabling of rakes. <br> 3. MEMU Shed, Jhajha officials is visiting NS points regularly. </td> </tr> <tr> <td style="text-align: center;">6</td> <td>Bursting of air Suspension bellow</td> <td> 1. Premature Material failure of 140KN capacity air spring. Joint checking with firm representative has been done. <br> 2. A letter has been written to RDSO to provide proper guideline for replacement of 140KN capacity of air spring. </td> </tr> <tr> <td style="text-align: center;">7</td> <td>Brake Binding</td> <td> 1. Availability of material at CSD/ JAJ is being ensured. <br> 2. Regular chasing at officer level is being done. </td> </tr> <tr> <td style="text-align: center;">8</td> <td>Ferrule joint/check nut joint</td> <td> To arrest chance of opening of Ferrule joint MRIC & BPIC secure with GI wire and proper tightens of its checkout is being ensured during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">9</td> <td>MRIC/EPIC/BPIC cock operated by miscreant</td> <td> EPIC & BPIC are secured with GI wire/cable tie during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">10</td> <td>BP/MR hose pipe cut</td> <td> Counselling to concerned staff has been done for proper securing of loco hose pipe after attachment. </td> </tr> <tr> <td style="text-align: center;">11</td> <td>SR not pick up</td> <td> Counselling of maintenance staff is being done. </td> </tr> </tbody> </table>  <div class="mt-4"> <h5 class="text-primary"> <i class="bi bi-check-square"></i> General RAP </h5> <table class="table table-bordered" style="width: 100%; font-size: 14px;"> <tbody> <tr> <td style="width: 5%; text-align: center;">a)</td> <td> Earmarking of MEMU trained staffs and their deputation during NS to be ensured. </td> </tr> <tr> <td style="text-align: center;">b)</td> <td> Tools and materials availability to be ensured at NS points. </td> </tr> <tr> <td style="text-align: center;">c)</td> <td> Filling of NS Performa and posting it in Groups. </td> </tr> <tr> <td style="text-align: center;">d)</td> <td> Preferably TL staffs to be trained for MEMU. </td> </tr> <tr> <td style="text-align: center;">e)</td> <td> Crew and maintenance staffs to be trained at NS points itself by sending instructors from JAJ. </td> </tr> <tr> <td style="text-align: center;">f)</td> <td> Vifalta se Seekh to be started for maintenance wing and also to be circulated widely. </td> </tr> </tbody> </table> </div> </div>';
      } else if (title === 'Training') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
        content = '<div style="background-color: #FFF5D8; border: 1px solid #FFD700; padding: 20px;"> <h4 style="color: #333333; font-weight: bold;">Training organized status i.e. no of manpower trained till date.</h4> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">A. Physical training</h5> <p style="color: #333333;">Physical Training for Trouble shooting related to online failures of MEMU rakes has been imparted to total 18 nos. of SSE, JE & maintenance staffs in this FY 24-25 till date.</p> </div> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">B. Online training</h5> <p style="color: #333333;">Online training related to trouble shooting of line failures was conducted on 17.05.2024 & 03.07.24. Approx. 250 staffs (CLI, LP and ALP) had participated from SSE & SFO of ECR.</p> </div> <div> <h5 style="color: #333333; font-weight: bold;">Refresher course i.e. no. of Manpower of MEMU Shed Jjajha trained till date</h5> <p style="color: #333333;">Till date a total of 12 staffs has been provided refresher course training at MDWTC/KPA & ETTC/DDU in FY 2024-25.</p> </div> </div>';
      } else if (title === 'Achievements') {
        content = '<div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS 2023-24</h2> <ul class="list-unstyled"> <li>1. One Rake of 16 coaches was provided for PM inauguration of line between Narkatiagunj and Gaunaha. This Rake was inaugurated by Honourable Prime Minister of India, Shri Narendra Modi on 06.03.2024.</li> <li>2. ACWP (Automatic Coach Washing Plant) was inaugurated by General Manager East Central Railway, Shri A.K. Khandelwal on 20.12.2023.</li> <li>3. In the month Jun-23 one 16 coach MEMU rake has been provided to E.Co. Railway to cater the rush during "PURI RATH YATRA".</li> <li>4. In the month Jul-23 one 16 coach MEMU rake has been provided for SHRAVANI MELA SPCL.</li> <li>5. In the month Aug-23 one no. 12 coach MEMU rake has been provided for BPSC Teacher Recruitment Exam on 25.08.2023 & One no. 16 coach MEMU rake has been provided for SHRAVANI MELA SPECIAL on 16.08.2023.</li> <li>6. In the month Oct-23 new MEMU passenger special services (03333 & 03234) between station JAI NAGAR and extension of 03273 & 03274 has been started w.e.f. 13.10.2023. Accordingly, timely maintenance of MEMU rakes have been started by MEMU Shed Jhajha to provide MEMU Services on above mentioned new routes.</li> <li>7. In the month Nov-23 one MEMU rake of 16 coach formation has been provided to work as kartik Purnima puja special train.</li> <li>8. Scrap disposal done in FY 2023-24 : 126 MT of value ₹ 49,33,744.40 against target of 87.78 MT.</li> </ul> </div> </div> </div><br><div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS FY 24-25</h2> <ul class="list-unstyled"> <li>1. In Sept-2024, asset failures has been kept 4, resulting in a rate of 0.08 per rate. This is the lowest rate recorded in FY 2024-25 and represents a 56% reduction compared to the same month last year.</li> <li>2. 80 nos. LED Twin Beam light have been fitted and replaced with Halogen type in DMC of MEMU rakes at MEMU shed Jhajha.</li> <li>3. In the month of JULY-24, a drive has been launched for replacement of all old fitted blue PU pipes with white colour super flexible GARFLON-202 nylon tube in tap changers and switch groups of MEMU motor coaches for prevention of line failure due to PU pipe burst. In last two months such cases become nil. So far, a total of 174 motor coaches have now been fitted with white coloured super flexible GARFLON-202 nylon tube. TDC for 09 remaining coaches: Sep 24.</li> <li>4. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 175 MCs have intensively checked out of which in 11 MCs bulging of Power cables melted Power cables oil leakage from JB has been found and these are jointly attended with staff of Workshop/KPA.</li> <li>5. 01 MEMU rake of 12 coach formation has been provided in June 24 to work as Exam special train (Diploma certificate entrance competitive examination).</li> <li>6. 02 MEMU rakes of 16 coach formation have been provided in July 24 to work as "PURI special train" & 01 rake of 16 coach formation has been provided to work as "SHRAVANI MELA special train".</li> <li>7. 01 MEMU rake of 16 coach formation has been provided in Aug 24 to work as "EXAM SPECIAL train".</li> <li>8. 01 MEMU rake of 16 coach formation has been provided to work as SRSR-DJHR in replacement of 3 phase MEMU in Sept 24.</li> <li>9. The modification work on the pneumatic pipelines in MEMU MC 188004 has been completed to facilitate the inspection of the TFP secondary Junction Box.</li> </ul> </div> </div> </div>'
      } else if (title === 'Awards') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'In House Developement') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'Fire Prevention') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'RSP') {
        content = `<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Particulars of Work</th>
        <th>Sanction year/ Allocation</th>
        <th>Cost (in Thou)</th>
        <th>Qty</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Wheel & Axle set for MEMU FTM (Fuji Traction Motor)</td>
        <td>2021-22 / DF-3</td>
        <td>4228</td>
        <td>04 set</td>
        <td>PO of one of the NS item (91 Teeth Gear) issued to M/S Swastika Kolkata on 23.12.2022. DP 06.02.2023, but firm failed to supply even after continuous request. Hence PO cancelled on 25.02.2024. Four times tender done by AMM/JAI office but due to single offer with higher rate, tender had to cancel and finally discharged. Letter for procurement of Gear wheel teeth has been given to CMM/KPPA from HQ/HJP side. Indent is under preparation to be placed to KPA for procurement.</td>
      </tr>
      <tr>
        <td>2.</td>
        <td>Procurement of supply, testing and commissioning of LED Twin 1355/2020-21 beam head light (Bulk RSP).</td>
        <td>PB Item nos</td>
        <td>141.00/unit</td>
        <td>80 nos.</td>
        <td>LOA issued on 26.01.2023 to M/S Marvel ,Mumbai for 32 set and M/S Matshushi, Dehradun for 48 set. Matsushi has supplied on 18.01.2024 and Marvel on 24.04.2024. Fitment in all 80 M/C have been completed by 14.05.2024.</td>
      </tr>
      <tr>
        <td>3.</td>
        <td>Buchholz Relay for MEMU Motor Coach, BHEL drawing no. E62500/2916 CS no ACS 6002, make/brand- P&B WEIR UK or equivalent</td>
        <td></td>
        <td>678.22</td>
        <td>10 nos.</td>
        <td>PO issued on 20.11.2024 to M/S Rajesh Traders. DP- 04.01.2025.</td>
      </tr>
      <tr>
        <td>4.</td>
        <td>Single Bottle VCB Complete 600A for application on 25 KV AC EMU as per CLW specification CWW/ESC/47 ALT-G or latest/2022/M(c) / CLW/ESC/47 ALT-G or latest/2022/M(c) suitable for MEMU application.</td>
        <td>Sanctioned vide Rly. Bd. L. No. 1485.56</td>
        <td></td>
        <td>04 nos.</td>
        <td>PO issued on 21.11.2024 to M/S Autometers Alliance Limited. DP-20.02.2025</td>
      </tr>
      <tr>
        <td>5.</td>
        <td>Supply, testing, commissioning of LED twin beam head lights in 20 nos. of conventional MEMU Motor coach from RDSO approved sources as per PB Item nos. 1257/2022-23 & 673/2023-24)</td>
        <td>Under Umbrella PB Item nos. 1257/2022-23 & 673/2023-24)</td>
        <td>1227.09</td>
        <td>20 nos.</td>
        <td>PO issued on 21.11.2024 to M/S Power Technology Corporation. DP-20.02.2025</td>
      </tr>
      <tr>
        <td>6.</td>
        <td>Metal oxide gapless lightning arrester for 25KV BG AC EMU/MEMU Specification / RDSO's Specn. No.SPEC/E-14/2/05 dt.1987,Amendment-1/2/05 dt.1987,Amendment-</td>
        <td></td>
        <td>576.99</td>
        <td>10 nos.</td>
        <td>As per Sr.DMM/DNR office, Procurement has been stopped due to stock item.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Sl.</th>
        <th>Description</th>
        <th>Qty.</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Provision of smoke detection /fire alarm and suppression system</td>
        <td>168 MEMU units</td>
        <td>Indent initiated for procurement. After approval of PCME/HJP on 04.11.2024, it is under procurement at PCMM/HJP.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Sl. no.</th>
        <th>Description</th>
        <th>Qty.</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>CABLE 19 CORE 3 sq mm, 750 volts, composition class - 5, with elastomeric insulation and sheath,colour of sheath-black. Conforming to rdso specification no. : spec/e-14/01, (part i), rev- ii, 1993, with amendment no. 3 april-2000 & amendment no. 4 september – 2003.</td>
        <td>7500 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>2.</td>
        <td>CABLE SINGLE CORE 3 sq mm,750 volt, composition class- 5, with elastomeric insulation, colour- black. Conforming to rdso specification no. spec/e-14/01 (part i), rev ii,1993, with amendment no.2 april-1998, amendment no.3, april-2000, amendment no.4, september- 2003.</td>
        <td>30000 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>3.</td>
        <td>CABLE SINGLE CORE 6 sq mm, 750 volts, composition class - 5, elastomeric insulation and sheath, colour of sheath black. Conforming to rdso specification no. spec/e-14/01, (part - i), rev. ii, 1993, with amendment no. : 1 november 1997, amendment no. : 2 april - 1998, amendment no. : 3 april - 2000 & amendment no. : 4 september - 2003.</td>
        <td>4250 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>4.</td>
        <td>CABLE SINGLE core 25 sq mm, 750 volts, composition class- 5, with elastomeric insulation, colour - black. conforming to rdso specification no. spec/e-14/01 (part i): rev ii - february 1993, amendment no. 2 - april 1998, amendment no. 3 - april- 2000.</td>
        <td>5000 mtr.</td>
        <td>Proposal has been vetted by HQ/HJP finance. It is under approval of GM thereafter will be submitted to Rly. Bd. for sanction.</td>
      </tr>
      <tr>
        <td>5.</td>
        <td>CABLE SINGLE CORE – 50 square mm, 750 volts, composition class: 5, with elastomeric insulation & sheath. Colour of sheath: black. Packing length 100 mtrs, plus/minus 5 percent tolerance. Length less than 95 mtrs. Will be supplied separately or along with last length of cable. Specn/drg.no.: rdso specn. No.- spec/e-14/01 (part i)rev-ii, 1993, with amendment no.1 november 1997, amendment no.2 april-1998, amendment no.3 april - 2000 & amendment no.4 september – 2003.</td>
        <td>2500 mtr.</td>
        <td></td>
      </tr>
      <tr>
        <td>6.</td>
        <td>CABLE SINGLE CORE- 95 Sq.mm, 1500 VOLTS, COMPOSITION CLASS - 5, WITH ELASTOMERIC INSULATION AND SHEATH, COLOUR OF SHEATH- BLACK. CONFORMING TO RDSO SPECIFICATION NO: SPEC/E-14/01 (PT-II): REV-II, FEBRUARY 1993.</td>
        <td>3000 mtr.</td>
        <td></td>
      </tr>
      <tr>
        <td>7.</td>
        <td>Cable single core 150 Sq mm, 1500 Volts, Composition Class 5, with Elastomeric Insulation and Sheath, Colour of Sheath Black, Conforming to RDSO Specification No. SPEC/E-14/01 Part I,Rev- 2- 1993 with amendment No. 1.</td>
        <td>14375 mtr.</td>
        <td></td>
      </tr>
      <tr>
        <td>8.</td>
        <td>Air Dryer -Twin Tower heat less Generating type Air Dryer with filter to RDSO Specification No. MP.0.01.00.06 (Rev.05) dated March 2011. As per RDSO Approved Sources suitable for MEMU application</td>
        <td>10 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>9.</td>
        <td>Main Air Compressor for MEMU Motor Coaches as per RDSO Specn. No. 70 BM-41 JAN-1979 Make ELGI or KPC.</td>
        <td>09 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>10.</td>
        <td>Electro-Pneumatic Brake unit complete for EMUs as per M/S Escorts Drg. No. DA8805/1/A or M/S WSF Part no. ID/023J/4 or M/S KBL Drg. No. C213883 & II 106238 as per RDSO Spec no. RDSO/2013/CG-03 (Rev.-1).</td>
        <td>30 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>11.</td>
        <td>KPCL make DC motor, 9.4 KW, 110 VDC as per KPCL drawing no. LP-7901 REV-01 RJP-7902 Rev-., for use in AC IGBT-VVVF/ MEMU/ TC coaches as per RDSO specification No.- 70-B-M-41. Make /Brand-KPCL.</td>
        <td>10 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>12.</td>
        <td>BOGIE BOLSTER ARRGT. FOR AC EMUs/ MEMU/ TC COACHES TO DRG. NO.ET04130 ALT-c. Note- DIMENSION AGAINST THE ITEM NO.17 SHOULD BE READ AS 259 MM IN PLACE OF 236 MM. Material to be procured from RCF/JCF Sources only.</td>
        <td>12 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>13.</td>
        <td>Bogie Frame Arrangement for Air Spring MEMU TC Bogie as per RCF Drg. No. ET03150 ALT F. RDSO Spec. No. G-9202 & ICF/MD/Spec.-147 incorporating RCF Coach Alteration instruction No. CAI/RCF/MECH/CONV/126 REV 01 For MEMU TC Bogie Frame and Drg. MI007441 ALT A.</td>
        <td>12 Nos.</td>
        <td></td>
      </tr>
      <tr>
        <td>14.</td>
        <td>Set of top and Bottom arching Contacts (Tungsten tipped) for Tap changer GR Contactors (T1-19) of MEMUs as per KPA drg. no ER/KPA/EL/GR-4HE.3084C or M/S BHEL's Drg. no. 358011301020V00, CS no. BCS 1263 Fie. ref. 8030 page no. 59 and BHEL's Drg. No. 358011301020V01, CS no. CCS1263, Fie. ref. C001 page no. 61 of M/S BHEL's price list 2013-14. Suitable for MEMU Application/</td>
        <td>170 Set</td>
        <td></td>
      </tr>
      <tr>
        <td>15.</td>
        <td>Single bottle VCB complete 600A for application on 25 KV AC EMU as per CLW specification CLW/ES/C-47 Alt F and RSO Spec. no. E.2/05/84 and ICF/SK/908 or latest.</td>
        <td>06 Nos.</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>`
      } else if (title === 'M&P') {
        content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <table class="table table-bordered table-striped"> <thead> <tr> <th>S.N.</th> <th>Particulars of Work</th> <th>Sanctioned year</th> <th>Anticipated Cost (In Rs.)</th> <th>Qty</th> <th>Remarks</th> </tr> </thead> <tbody> <tr> <td>1.</td> <td>Diesel Engine operated automatic forklifts (GODEL) 8.0 T Diesel FLT Model GX 300( PH-41/CAP) 2-stage MFH 3660 MM ATT Single drive PHEU Type-1 speed 18& Make GODEL or similar.</td> <td>2023-24</td> <td>11,22,115.86</td> <td>01</td> <td>As per Sr.DMM/DNR office, file for TR has mistakenly been submitted to then Sr.COO/MEMU/JAI IREPS platform. Withdrawn of said file is yet to be done and will be put up to Sr.DET/MEMU/JAI for TR.</td> </tr> <tr> <td>2.</td> <td>TROLLEY MOUNTED MOBILE SEWAGE EVACUATION MACHINE with Positive displacement reversible rotary lobe pump of capacity: 150 Litres Per Minute</td> <td>2023-24</td> <td>12,85,448.41</td> <td>01</td> <td>It is under retendering. Indent at Sr. DMM/DNR office.</td> </tr> <tr> <td>3.</td> <td>Supply, installation, & testing of EMSON/Speedometer test bench for MEMU/DEMU coaches. As per technical specification in Annexure-1</td> <td>2024-25</td> <td>15,22,925.59</td> <td>01</td> <td>Detailed estimate has been vetted on 22.11.2024. Indent is under preparation.</td> </tr> </tbody> </table> </div> </div> </div>';
      } else if (title === 'PWP') {
        content = '<div class="container-fluid"><div class="row"><div class="col-12"><table class="table table-bordered table-striped"><thead><tr><th>S.N.</th><th>Year of section/PH</th><th>Name of Works</th><th>Cost (in Rs Thou)</th><th>Remarks</th></tr></thead><tbody><tr><td>1.</td><td>2019-20 (GM Power)</td><td>CAP / PH-42: Conversion of heavy repair line into inspection pit line at MEMU Shed Jhajha (Gm Shahi)</td><td>2433</td><td>Work completed. As SD/DC (G)/AL, LDA for the firm in March-24. Work started by firm.</td></tr><tr><td>2.</td><td>2021-22 (GM Power)</td><td>DF-3/PH-42: Improvement of basic infrastructure at MEMU Shed Jhajha (civil work) consisting of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td><td>4324</td><td>Work started but presently stopped. Regarding of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td></tr><tr><td>3.</td><td>2021-22 (GM Power)</td><td>CAP/PH-42: Augmentation of MEMU Shed Jhajha (Gm Shahi) 1. Approach road to MEMU Shed 2. Two nos. rooms for MEMU staff 3. Testing Lab 4. Toilets facility for Officers 5. Motor cycle stand 6. Conference Hall 7. Separate common urinal and lavatory for female and male employees</td><td>13577</td><td>Work started on 14.12.2022 and is under progress. 1. Approach road completed 2. Motor cycle stand completed 3. Construction of common urinal and lavatory for employees is under progress 4. Construction of conference hall and work of testing lab under progress.</td></tr><tr><td>4.</td><td>2019-20 (GM Power)</td><td>RSP/PH-65: Construction of basic training center at MEMU Shed Jhajha (Gm Shahi)</td><td>517</td><td>Work not yet started.</td></tr></tbody></table></div></div></div>';
      } else if (title === 'POH Related Complaints') {
        content = '<p>Details about POH Related Complaints...</p>';
      } else if (title === 'KPA Related Issues') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      }  else if (title === 'RDSO/RB Guidelines') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      }else if (title === 'HQ/HP Instruction') {
        content = '<p>Details about HQ/HP Instruction...</p>';
      } else if (title === 'Contact Details for all memo shed') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'VC/ Online Meetings') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'Internal Visit/Audit') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'Safety Drives') {
        content = `
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
        const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
      
        const buttonsHtml = pdfSection
          .map(
            (pdf, index) =>
              `<button class="btn ${
                index === 0 ? 'btn-warning' : 'btn-outline-warning'
              } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                ${pdf.name}
              </button>`
          )
          .join('');
      
        const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
      
        setTimeout(() => {
          modalBody.innerHTML = `
            <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
              <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
              <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
              <div>
                <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
              </div>
            </div>
            <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
          `;
      
      
          // Load the initial PDF
          loadPdf(initialPdfUrl);
      
          // Add event listeners to navigation buttons
          const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
          navButtons.forEach((button) => {
            button.addEventListener('click', () => {
              navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
              button.classList.replace('btn-outline-warning', 'btn-warning');
              const pdfUrl = button.getAttribute('data-pdf-url');
              loadPdf(pdfUrl);
            });
          });
      
          // Pagination controls
          document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage -= 1;
              renderPage();
            }
          });
      
          document.getElementById('nextPage').addEventListener('click', () => {
            if (currentPage < pdfDoc.numPages) {
              currentPage += 1;
              renderPage();
            }
          });
      
        }, 1000);
      } else if (title === 'RM Complaints') {
          content = '<p>Details about RM Complaints...</p>';
        }   else if (title === 'Proposed Umbrella Works') {
          content = `
            <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          `;
          const pdfSection = pdfLinks[title]; // Get the list of PDFs for the section
        
          const buttonsHtml = pdfSection
            .map(
              (pdf, index) =>
                `<button class="btn ${
                  index === 0 ? 'btn-warning' : 'btn-outline-warning'
                } me-2 pdf-nav-button" data-pdf-url="${pdf.url}" data-pdf-index="${index}">
                  ${pdf.name}
                </button>`
            )
            .join('');
        
          const initialPdfUrl = pdfSection[0].url; // Load the first PDF by default
        
          setTimeout(() => {
            modalBody.innerHTML = `
              <div class="mb-3 d-flex justify-content-start flex-wrap">${buttonsHtml}</div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <button class="btn btn-outline-primary btn-sm" id="prevPage">Previous</button>
                <span>Page <span id="currentPage">1</span> of <span id="totalPages">0</span></span>
                <button class="btn btn-outline-primary btn-sm" id="nextPage">Next</button>
                <div>
                  <button class="btn btn-outline-secondary btn-sm" id="zoomOut">-</button>
                  <button class="btn btn-outline-secondary btn-sm" id="zoomIn">+</button>
                </div>
              </div>
              <canvas id="pdfCanvas" style="width: 100%; background-color: #f4f4f4;"></canvas>
            `;
        
        
            // Load the initial PDF
            loadPdf(initialPdfUrl);
        
            // Add event listeners to navigation buttons
            const navButtons = modalBody.querySelectorAll('.pdf-nav-button');
            navButtons.forEach((button) => {
              button.addEventListener('click', () => {
                navButtons.forEach((btn) => btn.classList.replace('btn-warning', 'btn-outline-warning'));
                button.classList.replace('btn-outline-warning', 'btn-warning');
                const pdfUrl = button.getAttribute('data-pdf-url');
                loadPdf(pdfUrl);
              });
            });
        
            // Pagination controls
            document.getElementById('prevPage').addEventListener('click', () => {
              if (currentPage > 1) {
                currentPage -= 1;
                renderPage();
              }
            });
        
            document.getElementById('nextPage').addEventListener('click', () => {
              if (currentPage < pdfDoc.numPages) {
                currentPage += 1;
                renderPage();
              }
            });
        
          }, 1000);
        }else {
        content = '<p>No detailed information available.</p>';
      }
      console.log(title)
    
    modalBody.innerHTML = content;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal2'));
    modal.show();
  });
});






// Apply CSS dynamically for modal width, centering, and scrollable content
document.addEventListener('DOMContentLoaded', () => {
  const modalDialog = document.querySelector('.modal-dialog');
  const modalContent = document.querySelector('.modal-content');
  if (modalDialog && modalContent) {
    modalDialog.style.minWidth = '95%'; // Set width to 80% of the screen

    modalDialog.style.margintop = 'auto'; // Center the modal

    // modalContent.style.maxHeight = '80vh'; // Allow the content to grow to 80% of viewport height
    modalContent.style.overflow = 'auto'; // Make the content scrollable if it exceeds height
  }
});

// Change "Save Changes" button to "Download PDF"



let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    dots[index].classList.remove("active");

    if (index === currentSlide) {
      slide.classList.add("active");
      dots[index].classList.add("active");
    }
  });

  // Update the transform property for smooth transitions
  const offset = currentSlide * -100;
  document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
}

// Next Slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

// Previous Slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}

// Set a specific slide
function setSlide(index) {
  currentSlide = index;
  updateSlides();
}

// Auto-Scroll Carousel
setInterval(() => {
  nextSlide();
}, 5000);

// Initialize Carousel
updateSlides();




 
// Select the input, buttons, and error message container
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// const clearButton = document.getElementById('clearButton');
// const errorMessage = document.getElementById('errorMessage');

// Function to handle search
function handleSearch() {
  const query = searchInput.value.trim(); // Get the input value and trim whitespace

  if (query) {
    // Clear any previous highlights and error messages
    clearHighlights();
    errorMessage.style.display = 'none';

    // Find and highlight matching text
    const found = highlightText(query);

    if (!found) {
      // If no matches found, display an error message
      // errorMessage.textContent = `No results found for "${query}". Please try again.`;
      // errorMessage.style.display = 'block';
    }
  } else {
    alert('Please enter a search query.');
  }
}

// Function to highlight matching text and scroll to the first match
function highlightText(query) {
  let foundMatch = false; // Track whether a match was found
  let firstMatch = null; // Store the first matched element

  // Use a tree walker to find and highlight matching text nodes
  const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT, // Only show text nodes
    null,
    false
  );

  while (treeWalker.nextNode()) {
    const currentNode = treeWalker.currentNode;
    const parent = currentNode.parentNode;

    if (currentNode.nodeValue.toLowerCase().includes(query.toLowerCase())) {
      foundMatch = true; // A match is found

      // Split the text to create highlighted elements
      const regex = new RegExp(`(${query})`, 'gi');
      const splitText = currentNode.nodeValue.split(regex);

      splitText.forEach((textPart) => {
        if (regex.test(textPart)) {
          const span = document.createElement('span');
          span.className = 'highlight';
          span.textContent = textPart;

          if (!firstMatch) {
            firstMatch = span; // Store the first match
          }

          parent.insertBefore(span, currentNode);
        } else {
          parent.insertBefore(document.createTextNode(textPart), currentNode);
        }
      });

      // Remove the original node after replacement
      parent.removeChild(currentNode);
    }
  }

  // Scroll to the first match if it exists
  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return foundMatch;
}

// Function to clear previous highlights
function clearHighlights() {
  const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach((element) => {
    const parent = element.parentNode;
    parent.replaceChild(document.createTextNode(element.textContent), element);
  });
}

// Function to clear input, highlights, and error message
function clearSearch() {
  searchInput.value = ''; // Clear the input field
  clearHighlights(); // Remove highlights
  errorMessage.style.display = 'none'; // Hide error message
}

// Event listener for the search button


// Event listener for input changes to hide error message when empty
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') {
    errorMessage.style.display = 'none'; // Hide error message
    clearHighlights(); // Optionally clear highlights on empty input
  }
});

// Optional: Add 'Enter' key functionality
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

const saveButton = document.querySelector('.modal-footer .btn-primary');

document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.querySelector('.modal-footer .btn-primary');

  if (saveButton) {
      saveButton.innerText = 'Download PDF';

      saveButton.addEventListener('click', async () => {
          const { jsPDF } = window.jspdf;

          const contentElement = document.getElementById('dynamicContentDisplay');
          const modalTitleText = document.querySelector('.modal-title')?.innerText;

          const pdfTitle = 'Memu Shed Jhajha';

          // Define PDF Document in Landscape orientation
          const pdf = new jsPDF({
              orientation: "l",   // Landscape
              unit: "mm",
              format: "a4"
          });

          // Title "Memu Shed Jhajha"
          pdf.setFontSize(14);
          pdf.setFont('helvetica', 'bold');
          pdf.text(pdfTitle, 105, 15, { align: "center" });

          // Subheading from Modal Title
          pdf.setFontSize(16);
          pdf.setFont('helvetica', 'normal');
          pdf.text(modalTitleText, 105, 25, { align: "center" });

          // PDF Content Conversion with html2canvas and Scaling
          const options = {
              margin: 10,
              filename: `${modalTitleText}.pdf`,
              image: { type: "jpeg", quality: 0.95 },
              html2canvas: {
                  scale: 6.2,    // Ensure proper scaling
                  useCORS: true,
                  width: 190,
                  height: 250
              },
              jsPDF: {
                  unit: "mm",
                  format: "a4",
                  orientation: "l"
              }
          };

          html2pdf().from(contentElement).set(options).save();
      });
  }
});




let zoomLevel = 1;

// Open modal and load image
document.querySelectorAll('.img-btn').forEach(image => {
    image.addEventListener('click', (e) => {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = e.target.src;
        zoomLevel = 1;
        modalImage.style.transform = `scale(${zoomLevel})`;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
});

// Get all submenu parents
const submenuParents = document.querySelectorAll('.dropdown-submenu');

// Add event listeners for hover and focus
submenuParents.forEach((parent) => {
  parent.addEventListener('mouseenter', () => {
    const submenu = parent.querySelector('.dropdown-menu');
    if (submenu) {
      submenu.style= "display: block !important;";
    }
  });

  parent.addEventListener('mouseleave', () => {
    const submenu = parent.querySelector('.dropdown-menu');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });
});



window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
window.updateIframe  = updateIframe ;
window.setSlide  = setSlide ;
window.clearSearch  = clearSearch ;