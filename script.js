// JavaScript to dynamically alter the modal content based on the card clicked

// Add event listeners to each card
const serviceCards = document.querySelectorAll('.services_card');

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
        content ='<div class="chart-container text-center" style="width: 100%; max-width: 700px; margin: 20px auto; border-left: 2px solid black; border-bottom: 2px solid black; position: relative; padding: 20px;"><div style="position: absolute; left: -40px; top: 5%; font-size: 14px; transform: translateY(-50%); color: blue;">150</div><div style="position: absolute; left: -40px; top: 30%; font-size: 14px; transform: translateY(-50%); color: blue;">100</div><div style="position: absolute; left: -40px; top: 55%; font-size: 14px; transform: translateY(-50%); color: blue;">50</div><div style="position: absolute; left: -40px; top: 95%; font-size: 14px; transform: translateY(-50%); color: blue;">0</div><h4 style="color: red; font-weight: bold;">POH ARISING FY WISE CHART</h4><div style="color: black; font-size: 14px;"><span style="color: red; font-weight: bold;">ARISING</span> | <span style="color: green; font-weight: bold;">DONE</span></div><div class="d-flex justify-content-between align-items-end" style="height: 300px; position: relative;"><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 90%; width: 45%; margin-right: 5%; border-radius: 5px;">136</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 85%; width: 45%; border-radius: 5px;">128</div><p class="mt-2">2021-22</p></div><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 56.67%; width: 45%; margin-right: 5%; border-radius: 5px;">85</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 59.33%; width: 45%; border-radius: 5px;">89</div><p class="mt-2">2022-23</p></div><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 83.33%; width: 45%; margin-right: 5%; border-radius: 5px;">126</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 83.33%; width: 45%; border-radius: 5px;">125</div><p class="mt-2">2023-24</p></div><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 70%; width: 45%; margin-right: 5%; border-radius: 5px;">105</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 38%; width: 45%; border-radius: 5px;">57</div><p class="mt-2">2024-25</p></div></div><p style="position: absolute; top: 50%; left: -70px; transform: translateY(-50%) rotate(-90deg); font-weight: bold; color: blue;">ARISING</p><p style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); font-weight: bold;">Years</p></div>'
    } else if (title === 'Asset Failure') {
        content = '<div class="container my-5"><h2>Assets Failure (As per ICMS)</h2><div class="row"><div class="col-12"><table class="table table-bordered"><thead><tr><th>SN</th><th>Head</th><th>2021-22</th><th>2022-23</th><th>2023-24</th><th>2024-25 Upto NOV</th><th>% Inc over last year</th></tr></thead><tbody><tr><td>1</td><td>No. of rakes in service</td><td>30</td><td>47</td><td>47</td><td>47</td><td>-</td></tr><tr><td>2</td><td>Asset failure of hallia based MEMU coaches</td><td>120</td><td>97</td><td>86</td><td>57</td><td>-7</td></tr><tr><td>3</td><td>Failure per rake</td><td>4</td><td>2</td><td>1.83</td><td>1.21</td><td>1.29</td></tr></tbody></table></div></div></div><br><div class="chart-container text-center" style="width: 100%; max-width: 600px; margin: 20px auto; border-left: 2px solid black; border-bottom: 2px solid black; position: relative; padding: 20px 0;">  <div style="position: absolute; left: -30px; top: 5%; font-size: 14px; transform: translateY(-50%); color: purple;">4</div> <div style="position: absolute; left: -30px; top: 30%; font-size: 14px; transform: translateY(-50%); color: purple;">3</div> <div style="position: absolute; left: -30px; top: 55%; font-size: 14px; transform: translateY(-50%); color: purple;">2</div> <div style="position: absolute; left: -30px; top: 80%; font-size: 14px; transform: translateY(-50%); color: purple;">1</div> <div style="position: absolute; left: -30px; top: 95%; font-size: 14px; transform: translateY(-50%); color: purple;">0</div>  <h4 style="color: purple; font-weight: bold;">Failure cases per rake</h4>  <div class="d-flex justify-content-between align-items-end" style="height: 300px; position: relative;">  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 100%; width: 100%; border-radius: 5px;">4</div> <p class="mt-2">2021-22</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 50%; width: 100%; border-radius: 5px;">2</div> <p class="mt-2">2022-23</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 45.75%; width: 100%; border-radius: 5px;">1.83</div> <p class="mt-2">2023-24</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 32.25%; width: 100%; border-radius: 5px;">1.29</div> <p class="mt-2">2024-25<br>(upto NOV-24)</p> </div> </div>  <p style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); font-weight: bold; color: purple;">Years</p> </div>';
      } else if (title === 'Failure Analysis') {
        content = '<div class="container my-5"> <h2 class="text-primary">Month Wise Failure Analysis FY 2024-25</h2> <table class="table table-bordered"> <thead> <tr> <th>SN</th> <th>Head</th> <th>APR</th> <th>MAY</th> <th>JUNE</th> <th>JULY</th> <th>AUG</th> <th>SEP</th> <th>OCT</th> <th>NOV</th> <th>Total</th> </tr> </thead> <tbody> <tr> <td>1</td> <td>Wrong operation by LP</td> <td>3</td> <td>4</td> <td>3</td> <td>4</td> <td>1</td> <td>2</td> <td>1</td> <td>4</td> <td>22</td> </tr> <tr> <td>2</td> <td>PU pipe burst</td> <td>1</td> <td>1</td> <td>3</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>4</td> </tr> <tr> <td>3</td> <td>Air suspension below burst</td> <td>1</td> <td>1</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>4</td> <td>BP/MR hose pipe cut</td> <td>-</td> <td>1</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>5</td> <td>Angle/ limit Switch</td> <td>-</td> <td>2</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>6</td> <td>Ferrule joint/check nut joint</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>7</td> <td>MCB action stuck/tap changer</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>8</td> <td>WCO BEAM valve stuck</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>9</td> <td>Brake block</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>10</td> <td>TM internal defect/bearing</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>11</td> <td>Power cable M3 failure</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>12</td> <td>Malfunction of EFRA 2 relay</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>13</td> <td>SK first pick up</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>14</td> <td>MCB oil hit</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>15</td> <td>Pneumatic pipe broken from</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>16</td> <td>Burst MBIC/EFIC cock</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>17</td> <td>DIH tippling</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>18</td> <td>Signal bell not working</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>19</td> <td>No feed in 141A & shunt power cable burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>20</td> <td>BACH Capacitor bank burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>21</td> <td>Brake blader broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>22</td> <td>Line clearance not given (Misled by IB)</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>23</td> <td>Foot step welding broken.</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>24</td> <td>Tripple valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>25</td> <td>TM tripped</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>26</td> <td>4412/4423A wire broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>27</td> <td>Parking brake applied</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td>28</td> <td>Feed valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td></td> <td>Grand Total</td> <td>8</td> <td>8</td> <td>11</td> <td>7</td> <td>3</td> <td>4</td> <td>8</td> <td>7</td> <td>61</td> </tr> </tbody> </table> </div><br><div class="container my-5"><h2>Technical/Nontechnical failure</h2><table class="table table-bordered"><thead><tr><th>Head</th><th>Sub-head</th><th>2023-24</th><th>2024-25 (Up to NOV)</th></tr></thead><tbody><tr><td rowspan="3">Technical</td><td>POH</td><td>12</td><td>8</td></tr><tr><td>Material</td><td>9</td><td>11</td></tr><tr><td>Maintenance</td><td>5</td><td>14</td></tr><tr><td rowspan="3">Non tech</td><td>TRD/OHE</td><td>0</td><td>1</td></tr><tr><td>Miscreant</td><td>19</td><td>2</td></tr><tr><td>Operational/LP</td><td>13</td><td>25</td></tr><tr><td>Total</td><td/><td>57</td><td>61</td></tr></tbody></table></div>';
      } else if (title === 'RAP') {
        content = '<div class="container mt-4">  <table class="table table-bordered table-striped" style="width: 100%; font-size: 14px;"> <thead class="table-warning"> <tr> <th style="width: 5%; text-align: center;">SN</th> <th style="width: 30%; text-align: center;">Head</th> <th style="width: 65%; text-align: center;">RAP</th> </tr> </thead> <tbody> <tr> <td style="text-align: center;">1</td> <td>Crew account</td> <td> 1. Online training related to minor trouble shooting of line failures and operation issues has been given to Crew. Approx. till date 250 Crew has been trained through this training program. It is being continued. <br> 2. Crews are book at MEMU Shed, Jhajha and counselling is being done. </td> </tr> <tr> <td style="text-align: center;">2</td> <td>Power Cable</td> <td> 1. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 136 MCs have intensively checked out of which in 04 MCs bulging of Power cables and melted Power cables has been found and these are jointly attended with staff of Workshop/KPA. <br> 2. Radium marking on power cable nuts. </td> </tr> <tr> <td style="text-align: center;">3</td> <td>TM</td> <td> 1. Grease gun are being used for greasing of TMs during IC schedule as recommended by RDSO. Till date one cycle has been completed and it is continued. <br> 2. Irreversible Temp strip is being fitment on bearing side to observe any abnormal Temp rise in TM for Early changing to arrest line failure. Till date one cycle has been completed and it is continued. <br> 3. Special attention is being paid to cleaning of Mico filters of TM3 & TM4. Till date one cycle is completed and it is continued. </td> </tr> <tr> <td style="text-align: center;">4</td> <td>PU pipe burst</td> <td> A drive has been launched for changing of old PU pipes with white color GARFLON 202 Nylon tube from 01 July24. Out of 187 MCs till date 174 MCs has been completely changed with white color GARFLON 202 Nylon tube. </td> </tr> <tr> <td style="text-align: center;">5</td> <td>MCP oil nil</td> <td> 1. Regular Instruction to NS points is being given regarding cleaning of MCP contactor and checking of cut-in & cut-out of MCP governor as RDSO recommendation. <br> 2. PPIO/Jhajha is liaison the NS point staffs on regular basis during Night stabling of rakes. <br> 3. MEMU Shed, Jhajha officials is visiting NS points regularly. </td> </tr> <tr> <td style="text-align: center;">6</td> <td>Bursting of air Suspension bellow</td> <td> 1. Premature Material failure of 140KN capacity air spring. Joint checking with firm representative has been done. <br> 2. A letter has been written to RDSO to provide proper guideline for replacement of 140KN capacity of air spring. </td> </tr> <tr> <td style="text-align: center;">7</td> <td>Brake Binding</td> <td> 1. Availability of material at CSD/ JAJ is being ensured. <br> 2. Regular chasing at officer level is being done. </td> </tr> <tr> <td style="text-align: center;">8</td> <td>Ferrule joint/check nut joint</td> <td> To arrest chance of opening of Ferrule joint MRIC & BPIC secure with GI wire and proper tightens of its checkout is being ensured during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">9</td> <td>MRIC/EPIC/BPIC cock operated by miscreant</td> <td> EPIC & BPIC are secured with GI wire/cable tie during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">10</td> <td>BP/MR hose pipe cut</td> <td> Counselling to concerned staff has been done for proper securing of loco hose pipe after attachment. </td> </tr> <tr> <td style="text-align: center;">11</td> <td>SR not pick up</td> <td> Counselling of maintenance staff is being done. </td> </tr> </tbody> </table>  <div class="mt-4"> <h5 class="text-primary"> <i class="bi bi-check-square"></i> General RAP </h5> <table class="table table-bordered" style="width: 100%; font-size: 14px;"> <tbody> <tr> <td style="width: 5%; text-align: center;">a)</td> <td> Earmarking of MEMU trained staffs and their deputation during NS to be ensured. </td> </tr> <tr> <td style="text-align: center;">b)</td> <td> Tools and materials availability to be ensured at NS points. </td> </tr> <tr> <td style="text-align: center;">c)</td> <td> Filling of NS Performa and posting it in Groups. </td> </tr> <tr> <td style="text-align: center;">d)</td> <td> Preferably TL staffs to be trained for MEMU. </td> </tr> <tr> <td style="text-align: center;">e)</td> <td> Crew and maintenance staffs to be trained at NS points itself by sending instructors from JAJ. </td> </tr> <tr> <td style="text-align: center;">f)</td> <td> Vifalta se Seekh to be started for maintenance wing and also to be circulated widely. </td> </tr> </tbody> </table> </div> </div>';
      } else if (title === 'Training') {
        content = '<div style="background-color: #FFF5D8; border: 1px solid #FFD700; padding: 20px;"> <h4 style="color: #333333; font-weight: bold;">Training organized status i.e. no of manpower trained till date.</h4> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">A. Physical training</h5> <p style="color: #333333;">Physical Training for Trouble shooting related to online failures of MEMU rakes has been imparted to total 18 nos. of SSE, JE & maintenance staffs in this FY 24-25 till date.</p> </div> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">B. Online training</h5> <p style="color: #333333;">Online training related to trouble shooting of line failures was conducted on 17.05.2024 & 03.07.24. Approx. 250 staffs (CLI, LP and ALP) had participated from SSE & SFO of ECR.</p> </div> <div> <h5 style="color: #333333; font-weight: bold;">Refresher course i.e. no. of Manpower of MEMU Shed Jjajha trained till date</h5> <p style="color: #333333;">Till date a total of 12 staffs has been provided refresher course training at MDWTC/KPA & ETTC/DDU in FY 2024-25.</p> </div> </div>';
      } else if (title === 'Achievements') {
        content = '<div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS 2023-24</h2> <ul class="list-unstyled"> <li>1. One Rake of 16 coaches was provided for PM inauguration of line between Narkatiagunj and Gaunaha. This Rake was inaugurated by Honourable Prime Minister of India, Shri Narendra Modi on 06.03.2024.</li> <li>2. ACWP (Automatic Coach Washing Plant) was inaugurated by General Manager East Central Railway, Shri A.K. Khandelwal on 20.12.2023.</li> <li>3. In the month Jun-23 one 16 coach MEMU rake has been provided to E.Co. Railway to cater the rush during "PURI RATH YATRA".</li> <li>4. In the month Jul-23 one 16 coach MEMU rake has been provided for SHRAVANI MELA SPCL.</li> <li>5. In the month Aug-23 one no. 12 coach MEMU rake has been provided for BPSC Teacher Recruitment Exam on 25.08.2023 & One no. 16 coach MEMU rake has been provided for SHRAVANI MELA SPECIAL on 16.08.2023.</li> <li>6. In the month Oct-23 new MEMU passenger special services (03333 & 03234) between station JAI NAGAR and extension of 03273 & 03274 has been started w.e.f. 13.10.2023. Accordingly, timely maintenance of MEMU rakes have been started by MEMU Shed Jhajha to provide MEMU Services on above mentioned new routes.</li> <li>7. In the month Nov-23 one MEMU rake of 16 coach formation has been provided to work as kartik Purnima puja special train.</li> <li>8. Scrap disposal done in FY 2023-24 : 126 MT of value ₹ 49,33,744.40 against target of 87.78 MT.</li> </ul> </div> </div> </div><br><div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS FY 24-25</h2> <ul class="list-unstyled"> <li>1. In Sept-2024, asset failures has been kept 4, resulting in a rate of 0.08 per rate. This is the lowest rate recorded in FY 2024-25 and represents a 56% reduction compared to the same month last year.</li> <li>2. 80 nos. LED Twin Beam light have been fitted and replaced with Halogen type in DMC of MEMU rakes at MEMU shed Jhajha.</li> <li>3. In the month of JULY-24, a drive has been launched for replacement of all old fitted blue PU pipes with white colour super flexible GARFLON-202 nylon tube in tap changers and switch groups of MEMU motor coaches for prevention of line failure due to PU pipe burst. In last two months such cases become nil. So far, a total of 174 motor coaches have now been fitted with white coloured super flexible GARFLON-202 nylon tube. TDC for 09 remaining coaches: Sep 24.</li> <li>4. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 175 MCs have intensively checked out of which in 11 MCs bulging of Power cables melted Power cables oil leakage from JB has been found and these are jointly attended with staff of Workshop/KPA.</li> <li>5. 01 MEMU rake of 12 coach formation has been provided in June 24 to work as Exam special train (Diploma certificate entrance competitive examination).</li> <li>6. 02 MEMU rakes of 16 coach formation have been provided in July 24 to work as "PURI special train" & 01 rake of 16 coach formation has been provided to work as "SHRAVANI MELA special train".</li> <li>7. 01 MEMU rake of 16 coach formation has been provided in Aug 24 to work as "EXAM SPECIAL train".</li> <li>8. 01 MEMU rake of 16 coach formation has been provided to work as SRSR-DJHR in replacement of 3 phase MEMU in Sept 24.</li> <li>9. The modification work on the pneumatic pipelines in MEMU MC 188004 has been completed to facilitate the inspection of the TFP secondary Junction Box.</li> </ul> </div> </div> </div>'
      } else if (title === 'Awards') {
        content = '<p>Details about Awards...</p>';
      } else if (title === 'In House Developement') {
        content = '<p>Details about Inhouse Development...</p>';
      } else if (title === 'Fire Prevention') {
        content = '<p>Details about Fire Prevention...</p>';
      } else if (title === 'RSP') {
        content = '<p>Details about RSP...</p>';
      } else if (title === 'M&P') {
        content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <table class="table table-bordered table-striped"> <thead> <tr> <th>S.N.</th> <th>Particulars of Work</th> <th>Sanctioned year</th> <th>Anticipated Cost (In Rs.)</th> <th>Qty</th> <th>Remarks</th> </tr> </thead> <tbody> <tr> <td>1.</td> <td>Diesel Engine operated automatic forklifts (GODEL) 8.0 T Diesel FLT Model GX 300( PH-41/CAP) 2-stage MFH 3660 MM ATT Single drive PHEU Type-1 speed 18& Make GODEL or similar.</td> <td>2023-24</td> <td>11,22,115.86</td> <td>01</td> <td>As per Sr.DMM/DNR office, file for TR has mistakenly been submitted to then Sr.COO/MEMU/JAI IREPS platform. Withdrawn of said file is yet to be done and will be put up to Sr.DET/MEMU/JAI for TR.</td> </tr> <tr> <td>2.</td> <td>TROLLEY MOUNTED MOBILE SEWAGE EVACUATION MACHINE with Positive displacement reversible rotary lobe pump of capacity: 150 Litres Per Minute</td> <td>2023-24</td> <td>12,85,448.41</td> <td>01</td> <td>It is under retendering. Indent at Sr. DMM/DNR office.</td> </tr> <tr> <td>3.</td> <td>Supply, installation, & testing of EMSON/Speedometer test bench for MEMU/DEMU coaches. As per technical specification in Annexure-1</td> <td>2024-25</td> <td>15,22,925.59</td> <td>01</td> <td>Detailed estimate has been vetted on 22.11.2024. Indent is under preparation.</td> </tr> </tbody> </table> </div> </div> </div>';
      } else if (title === 'PWP') {
        content = '<div class="container-fluid"><div class="row"><div class="col-12"><table class="table table-bordered table-striped"><thead><tr><th>S.N.</th><th>Year of section/PH</th><th>Name of Works</th><th>Cost (in Rs Thou)</th><th>Remarks</th></tr></thead><tbody><tr><td>1.</td><td>2019-20 (GM Power)</td><td>CAP / PH-42: Conversion of heavy repair line into inspection pit line at MEMU Shed Jhajha (Gm Shahi)</td><td>2433</td><td>Work completed. As SD/DC (G)/AL, LDA for the firm in March-24. Work started by firm.</td></tr><tr><td>2.</td><td>2021-22 (GM Power)</td><td>DF-3/PH-42: Improvement of basic infrastructure at MEMU Shed Jhajha (civil work) consisting of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td><td>4324</td><td>Work started but presently stopped. Regarding of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td></tr><tr><td>3.</td><td>2021-22 (GM Power)</td><td>CAP/PH-42: Augmentation of MEMU Shed Jhajha (Gm Shahi) 1. Approach road to MEMU Shed 2. Two nos. rooms for MEMU staff 3. Testing Lab 4. Toilets facility for Officers 5. Motor cycle stand 6. Conference Hall 7. Separate common urinal and lavatory for female and male employees</td><td>13577</td><td>Work started on 14.12.2022 and is under progress. 1. Approach road completed 2. Motor cycle stand completed 3. Construction of common urinal and lavatory for employees is under progress 4. Construction of conference hall and work of testing lab under progress.</td></tr><tr><td>4.</td><td>2019-20 (GM Power)</td><td>RSP/PH-65: Construction of basic training center at MEMU Shed Jhajha (Gm Shahi)</td><td>517</td><td>Work not yet started.</td></tr></tbody></table></div></div></div>';
      } else if (title === 'POH Related Complaints') {
        content = '<p>Details about POH Related Complaints...</p>';
      } else if (title === 'KPA Related Issues') {
        content = '<p>Details about KPA Related Issues...</p>';
      } else if (title === 'RDSO/RB Guidelines') {
        content = '<p>Details about RDSO/RB Guidelines...</p>';
      } else if (title === 'HQ/HP Instruction') {
        content = '<p>Details about HQ/HP Instruction...</p>';
      } else if (title === 'Contact Details for all memo shed') {
        content = '<p>Contact Details for all Memo Shed...</p>';
      } else if (title === 'VC/ Online Meetings') {
        content = '<p>Details about VC/Online Meetings...</p>';
      } else if (title === 'Internal Visit/Audit') {
        content = '<p>Details about Internal Visit/Audit...</p>';
      } else if (title === 'Safety Drives') {
        content = '<p>Details about Safety Drives...</p>';
      } else if (title === 'RM Complaints') {
          content = '<p>Details about RM Complaints...</p>';
        } 
      else {
        content = '<p>No detailed information available.</p>';
      }
    modalBody.innerHTML = content;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal2'));
    modal.show();
  });
});

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
      content = '<p>Details about Layout...</p>';
    } else if (title === 'Shed History / Glimpses') {
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
      content = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th>#</th><th>Rake Link of MEMU Shed Jhajha</th></tr></thead><tbody><tr><td style="font-weight: bold;">1.</td><td>JAJ-PNBE-DDU-BRR-FUT-NES-FUT-RGD-DNR-RGD-FUT-BRR-BSR-DDU-PNBE-MZP-KIUL-PNBE-DDU-PNBE-AKA-PNBE-BSB-SGRL/BSB-SGTN-BSR-PNBE-GAYA-PNBE-KIUL-MKA-PNBE-BUI-PNBE-DDU-PNBE-BRA-SSM-ARA-SSM-ARA-PNBE-GAYA-PNBE-KIUL-GYA (16 Coach Rake -15 nos)</td></tr><tr><td style="font-weight: bold;">2.</td><td>GAYA-DDJ-DDU-DDS-GAYA-KIUL-GAYA-PNBE-GAYA-DDS-GAYA-DDU-SPG-DDU-GAYA-PNBE-GAYA-PNBE-GAYA-PNBE-GAYA-PNBE-Empty Coach/DNR-BIU-DNR-RPR-PNBE-BIU-PPTA-PNBE-BSR-PNBE-BAJ (16 Coach Rake -8 nos)</td></tr><tr><td style="font-weight: bold;">3.</td><td>SEE-KIR-SPJ-MP-SPJ-BIU-KIR-SPJ-MP-PPTA-DBG-RX-DBG-PPTA-MFP-NKE-MPP-PNBE-BIU-KIR-DNR-RX-MP-NKE-PPTA-NKE-MFP-NKE-MPP-SPJ-KIR-BIU-DBG-PNBE-BIR-PNBE-BAJ (12 Coach Rake -15 nos)</td></tr><tr><td style="font-weight: bold;">4.</td><td>JAJ-PNBE-PPTA-BIU-SPJ-SHC-SPJ-SHC-SPJ-SHC-SPJ-KIR-SEE-CPR-SEE-CPR-SEE (12 Coach Rake -8 nos)</td></tr></tbody></table></div>';
    } else if (title === 'Sections') {
      content = '<div class="container"> <h2 class="text-center">SECTION OF MEMU CAR SHED, Jhajha:</h2> <ul class="list-group"> <li class="list-group-item">PPIO (Planning, Progress and Implementation Office)</li> <li class="list-group-item">Electrical Section</li> <li class="list-group-item">B&B Section(Mechanical + Pneumatic)</li> <li class="list-group-item">Special Repair Section & CNC Pit Wheel Lathe</li> <li class="list-group-item">Store Section</li> <li class="list-group-item">Technical Cell</li> </ul> </div>';
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
      content = '<p>Details about Layout...</p>';
    } else if (title === 'Shed History / Glimpses') {
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
      content = '<div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th>#</th><th>Rake Link of MEMU Shed Jhajha</th></tr></thead><tbody><tr><td style="font-weight: bold;">1.</td><td>JAJ-PNBE-DDU-BRR-FUT-NES-FUT-RGD-DNR-RGD-FUT-BRR-BSR-DDU-PNBE-MZP-KIUL-PNBE-DDU-PNBE-AKA-PNBE-BSB-SGRL/BSB-SGTN-BSR-PNBE-GAYA-PNBE-KIUL-MKA-PNBE-BUI-PNBE-DDU-PNBE-BRA-SSM-ARA-SSM-ARA-PNBE-GAYA-PNBE-KIUL-GYA (16 Coach Rake -15 nos)</td></tr><tr><td style="font-weight: bold;">2.</td><td>GAYA-DDJ-DDU-DDS-GAYA-KIUL-GAYA-PNBE-GAYA-DDS-GAYA-DDU-SPG-DDU-GAYA-PNBE-GAYA-PNBE-GAYA-PNBE-GAYA-PNBE-Empty Coach/DNR-BIU-DNR-RPR-PNBE-BIU-PPTA-PNBE-BSR-PNBE-BAJ (16 Coach Rake -8 nos)</td></tr><tr><td style="font-weight: bold;">3.</td><td>SEE-KIR-SPJ-MP-SPJ-BIU-KIR-SPJ-MP-PPTA-DBG-RX-DBG-PPTA-MFP-NKE-MPP-PNBE-BIU-KIR-DNR-RX-MP-NKE-PPTA-NKE-MFP-NKE-MPP-SPJ-KIR-BIU-DBG-PNBE-BIR-PNBE-BAJ (12 Coach Rake -15 nos)</td></tr><tr><td style="font-weight: bold;">4.</td><td>JAJ-PNBE-PPTA-BIU-SPJ-SHC-SPJ-SHC-SPJ-SHC-SPJ-KIR-SEE-CPR-SEE-CPR-SEE (12 Coach Rake -8 nos)</td></tr></tbody></table></div>';
    } else if (title === 'Sections') {
      content = '<div class="container"> <h2 class="text-center">SECTION OF MEMU CAR SHED, Jhajha:</h2> <ul class="list-group"> <li class="list-group-item">PPIO (Planning, Progress and Implementation Office)</li> <li class="list-group-item">Electrical Section</li> <li class="list-group-item">B&B Section(Mechanical + Pneumatic)</li> <li class="list-group-item">Special Repair Section & CNC Pit Wheel Lathe</li> <li class="list-group-item">Store Section</li> <li class="list-group-item">Technical Cell</li> </ul> </div>';
    } else     if (title === 'Maintainence Activity') {
      content = '<div class="container my-5 text-black"><ul class="list-unstyled"><li><strong>Type of activity by MEMU/CAR/SHED, Jhajha:-</strong></li><li>Trip Inspection (15+0/3 days)</li><li>IA (60+0/5 days)</li><li>IC (240+0/10 days)</li><li>POH (18 months) at KPA Workshop/E.Rly.</li><li><strong>Heavy repair: -</strong> Changing of Transformer, Pantograph, Compressor, VCB, Choketank, Traction Motor, Auxiliary Motors, Radiator, Bogie, Wheel & Axle when required.</li><li><strong>Revised periodicity of maintenance schedule -</strong> Rly. Bd. L. No. 95/Elec (G) 181/19F, Dtd. 14.08.19</li></ul></div>';
    } else if (title === 'POH Activity') {
      content ='<div class="chart-container text-center" style="width: 100%; max-width: 700px; margin: 20px auto; border-left: 2px solid black; border-bottom: 2px solid black; position: relative; padding: 20px;"><div style="position: absolute; left: -40px; top: 5%; font-size: 14px; transform: translateY(-50%); color: blue;">150</div><div style="position: absolute; left: -40px; top: 30%; font-size: 14px; transform: translateY(-50%); color: blue;">100</div><div style="position: absolute; left: -40px; top: 55%; font-size: 14px; transform: translateY(-50%); color: blue;">50</div><div style="position: absolute; left: -40px; top: 95%; font-size: 14px; transform: translateY(-50%); color: blue;">0</div><h4 style="color: red; font-weight: bold;">POH ARISING FY WISE CHART</h4><div style="color: black; font-size: 14px;"><span style="color: red; font-weight: bold;">ARISING</span> | <span style="color: green; font-weight: bold;">DONE</span></div><div class="d-flex justify-content-between align-items-end" style="height: 300px; position: relative;"><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 90%; width: 45%; margin-right: 5%; border-radius: 5px;">136</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 85%; width: 45%; border-radius: 5px;">128</div><p class="mt-2">2021-22</p></div><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 56.67%; width: 45%; margin-right: 5%; border-radius: 5px;">85</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 59.33%; width: 45%; border-radius: 5px;">89</div><p class="mt-2">2022-23</p></div><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 83.33%; width: 45%; margin-right: 5%; border-radius: 5px;">126</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 83.33%; width: 45%; border-radius: 5px;">125</div><p class="mt-2">2023-24</p></div><div class="text-center" style="width: 20%; position: relative;"><div class="bg-danger text-white d-flex align-items-end justify-content-center" style="height: 70%; width: 45%; margin-right: 5%; border-radius: 5px;">105</div><div class="bg-success text-white d-flex align-items-end justify-content-center" style="height: 38%; width: 45%; border-radius: 5px;">57</div><p class="mt-2">2024-25</p></div></div><p style="position: absolute; top: 50%; left: -70px; transform: translateY(-50%) rotate(-90deg); font-weight: bold; color: blue;">ARISING</p><p style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); font-weight: bold;">Years</p></div>'
  } else if (title === 'Asset Failure') {
      content = '<div class="container my-5"><h2>Assets Failure (As per ICMS)</h2><div class="row"><div class="col-12"><table class="table table-bordered"><thead><tr><th>SN</th><th>Head</th><th>2021-22</th><th>2022-23</th><th>2023-24</th><th>2024-25 Upto NOV</th><th>% Inc over last year</th></tr></thead><tbody><tr><td>1</td><td>No. of rakes in service</td><td>30</td><td>47</td><td>47</td><td>47</td><td>-</td></tr><tr><td>2</td><td>Asset failure of hallia based MEMU coaches</td><td>120</td><td>97</td><td>86</td><td>57</td><td>-7</td></tr><tr><td>3</td><td>Failure per rake</td><td>4</td><td>2</td><td>1.83</td><td>1.21</td><td>1.29</td></tr></tbody></table></div></div></div><br><div class="chart-container text-center" style="width: 100%; max-width: 600px; margin: 20px auto; border-left: 2px solid black; border-bottom: 2px solid black; position: relative; padding: 20px 0;">  <div style="position: absolute; left: -30px; top: 5%; font-size: 14px; transform: translateY(-50%); color: purple;">4</div> <div style="position: absolute; left: -30px; top: 30%; font-size: 14px; transform: translateY(-50%); color: purple;">3</div> <div style="position: absolute; left: -30px; top: 55%; font-size: 14px; transform: translateY(-50%); color: purple;">2</div> <div style="position: absolute; left: -30px; top: 80%; font-size: 14px; transform: translateY(-50%); color: purple;">1</div> <div style="position: absolute; left: -30px; top: 95%; font-size: 14px; transform: translateY(-50%); color: purple;">0</div>  <h4 style="color: purple; font-weight: bold;">Failure cases per rake</h4>  <div class="d-flex justify-content-between align-items-end" style="height: 300px; position: relative;">  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 100%; width: 100%; border-radius: 5px;">4</div> <p class="mt-2">2021-22</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 50%; width: 100%; border-radius: 5px;">2</div> <p class="mt-2">2022-23</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 45.75%; width: 100%; border-radius: 5px;">1.83</div> <p class="mt-2">2023-24</p> </div>  <div class="bar text-center" style="width: 20%; position: relative;"> <div class="bg-primary text-white d-flex align-items-end justify-content-center" style="height: 32.25%; width: 100%; border-radius: 5px;">1.29</div> <p class="mt-2">2024-25<br>(upto NOV-24)</p> </div> </div>  <p style="position: absolute; bottom: -30px; left: 50%; transform: translateX(-50%); font-weight: bold; color: purple;">Years</p> </div>';
    } else if (title === 'Failure Analysis') {
      content = '<div class="container my-5"> <h2 class="text-primary">Month Wise Failure Analysis FY 2024-25</h2> <table class="table table-bordered"> <thead> <tr> <th>SN</th> <th>Head</th> <th>APR</th> <th>MAY</th> <th>JUNE</th> <th>JULY</th> <th>AUG</th> <th>SEP</th> <th>OCT</th> <th>NOV</th> <th>Total</th> </tr> </thead> <tbody> <tr> <td>1</td> <td>Wrong operation by LP</td> <td>3</td> <td>4</td> <td>3</td> <td>4</td> <td>1</td> <td>2</td> <td>1</td> <td>4</td> <td>22</td> </tr> <tr> <td>2</td> <td>PU pipe burst</td> <td>1</td> <td>1</td> <td>3</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>4</td> </tr> <tr> <td>3</td> <td>Air suspension below burst</td> <td>1</td> <td>1</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>4</td> <td>BP/MR hose pipe cut</td> <td>-</td> <td>1</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>3</td> </tr> <tr> <td>5</td> <td>Angle/ limit Switch</td> <td>-</td> <td>2</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>6</td> <td>Ferrule joint/check nut joint</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>2</td> </tr> <tr> <td>7</td> <td>MCB action stuck/tap changer</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>8</td> <td>WCO BEAM valve stuck</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>9</td> <td>Brake block</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>10</td> <td>TM internal defect/bearing</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>11</td> <td>Power cable M3 failure</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>12</td> <td>Malfunction of EFRA 2 relay</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>13</td> <td>SK first pick up</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>14</td> <td>MCB oil hit</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>15</td> <td>Pneumatic pipe broken from</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>16</td> <td>Burst MBIC/EFIC cock</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>17</td> <td>DIH tippling</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>18</td> <td>Signal bell not working</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>19</td> <td>No feed in 141A & shunt power cable burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>20</td> <td>BACH Capacitor bank burnt</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>21</td> <td>Brake blader broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>22</td> <td>Line clearance not given (Misled by IB)</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>23</td> <td>Foot step welding broken.</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>24</td> <td>Tripple valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>-</td> <td>1</td> </tr> <tr> <td>25</td> <td>TM tripped</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>26</td> <td>4412/4423A wire broken</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>-</td> <td>1</td> </tr> <tr> <td>27</td> <td>Parking brake applied</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td>28</td> <td>Feed valve defective</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>1</td> <td>1</td> </tr> <tr> <td></td> <td>Grand Total</td> <td>8</td> <td>8</td> <td>11</td> <td>7</td> <td>3</td> <td>4</td> <td>8</td> <td>7</td> <td>61</td> </tr> </tbody> </table> </div><br><div class="container my-5"><h2>Technical/Nontechnical failure</h2><table class="table table-bordered"><thead><tr><th>Head</th><th>Sub-head</th><th>2023-24</th><th>2024-25 (Up to NOV)</th></tr></thead><tbody><tr><td rowspan="3">Technical</td><td>POH</td><td>12</td><td>8</td></tr><tr><td>Material</td><td>9</td><td>11</td></tr><tr><td>Maintenance</td><td>5</td><td>14</td></tr><tr><td rowspan="3">Non tech</td><td>TRD/OHE</td><td>0</td><td>1</td></tr><tr><td>Miscreant</td><td>19</td><td>2</td></tr><tr><td>Operational/LP</td><td>13</td><td>25</td></tr><tr><td>Total</td><td/><td>57</td><td>61</td></tr></tbody></table></div>';
    } else if (title === 'RAP') {
      content = '<div class="container mt-4">  <table class="table table-bordered table-striped" style="width: 100%; font-size: 14px;"> <thead class="table-warning"> <tr> <th style="width: 5%; text-align: center;">SN</th> <th style="width: 30%; text-align: center;">Head</th> <th style="width: 65%; text-align: center;">RAP</th> </tr> </thead> <tbody> <tr> <td style="text-align: center;">1</td> <td>Crew account</td> <td> 1. Online training related to minor trouble shooting of line failures and operation issues has been given to Crew. Approx. till date 250 Crew has been trained through this training program. It is being continued. <br> 2. Crews are book at MEMU Shed, Jhajha and counselling is being done. </td> </tr> <tr> <td style="text-align: center;">2</td> <td>Power Cable</td> <td> 1. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 136 MCs have intensively checked out of which in 04 MCs bulging of Power cables and melted Power cables has been found and these are jointly attended with staff of Workshop/KPA. <br> 2. Radium marking on power cable nuts. </td> </tr> <tr> <td style="text-align: center;">3</td> <td>TM</td> <td> 1. Grease gun are being used for greasing of TMs during IC schedule as recommended by RDSO. Till date one cycle has been completed and it is continued. <br> 2. Irreversible Temp strip is being fitment on bearing side to observe any abnormal Temp rise in TM for Early changing to arrest line failure. Till date one cycle has been completed and it is continued. <br> 3. Special attention is being paid to cleaning of Mico filters of TM3 & TM4. Till date one cycle is completed and it is continued. </td> </tr> <tr> <td style="text-align: center;">4</td> <td>PU pipe burst</td> <td> A drive has been launched for changing of old PU pipes with white color GARFLON 202 Nylon tube from 01 July24. Out of 187 MCs till date 174 MCs has been completely changed with white color GARFLON 202 Nylon tube. </td> </tr> <tr> <td style="text-align: center;">5</td> <td>MCP oil nil</td> <td> 1. Regular Instruction to NS points is being given regarding cleaning of MCP contactor and checking of cut-in & cut-out of MCP governor as RDSO recommendation. <br> 2. PPIO/Jhajha is liaison the NS point staffs on regular basis during Night stabling of rakes. <br> 3. MEMU Shed, Jhajha officials is visiting NS points regularly. </td> </tr> <tr> <td style="text-align: center;">6</td> <td>Bursting of air Suspension bellow</td> <td> 1. Premature Material failure of 140KN capacity air spring. Joint checking with firm representative has been done. <br> 2. A letter has been written to RDSO to provide proper guideline for replacement of 140KN capacity of air spring. </td> </tr> <tr> <td style="text-align: center;">7</td> <td>Brake Binding</td> <td> 1. Availability of material at CSD/ JAJ is being ensured. <br> 2. Regular chasing at officer level is being done. </td> </tr> <tr> <td style="text-align: center;">8</td> <td>Ferrule joint/check nut joint</td> <td> To arrest chance of opening of Ferrule joint MRIC & BPIC secure with GI wire and proper tightens of its checkout is being ensured during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">9</td> <td>MRIC/EPIC/BPIC cock operated by miscreant</td> <td> EPIC & BPIC are secured with GI wire/cable tie during inspection at Shed. </td> </tr> <tr> <td style="text-align: center;">10</td> <td>BP/MR hose pipe cut</td> <td> Counselling to concerned staff has been done for proper securing of loco hose pipe after attachment. </td> </tr> <tr> <td style="text-align: center;">11</td> <td>SR not pick up</td> <td> Counselling of maintenance staff is being done. </td> </tr> </tbody> </table>  <div class="mt-4"> <h5 class="text-primary"> <i class="bi bi-check-square"></i> General RAP </h5> <table class="table table-bordered" style="width: 100%; font-size: 14px;"> <tbody> <tr> <td style="width: 5%; text-align: center;">a)</td> <td> Earmarking of MEMU trained staffs and their deputation during NS to be ensured. </td> </tr> <tr> <td style="text-align: center;">b)</td> <td> Tools and materials availability to be ensured at NS points. </td> </tr> <tr> <td style="text-align: center;">c)</td> <td> Filling of NS Performa and posting it in Groups. </td> </tr> <tr> <td style="text-align: center;">d)</td> <td> Preferably TL staffs to be trained for MEMU. </td> </tr> <tr> <td style="text-align: center;">e)</td> <td> Crew and maintenance staffs to be trained at NS points itself by sending instructors from JAJ. </td> </tr> <tr> <td style="text-align: center;">f)</td> <td> Vifalta se Seekh to be started for maintenance wing and also to be circulated widely. </td> </tr> </tbody> </table> </div> </div>';
    } else if (title === 'Training') {
      content = '<div style="background-color: #FFF5D8; border: 1px solid #FFD700; padding: 20px;"> <h4 style="color: #333333; font-weight: bold;">Training organized status i.e. no of manpower trained till date.</h4> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">A. Physical training</h5> <p style="color: #333333;">Physical Training for Trouble shooting related to online failures of MEMU rakes has been imparted to total 18 nos. of SSE, JE & maintenance staffs in this FY 24-25 till date.</p> </div> <div style="margin-bottom: 20px;"> <h5 style="color: #333333; font-weight: bold;">B. Online training</h5> <p style="color: #333333;">Online training related to trouble shooting of line failures was conducted on 17.05.2024 & 03.07.24. Approx. 250 staffs (CLI, LP and ALP) had participated from SSE & SFO of ECR.</p> </div> <div> <h5 style="color: #333333; font-weight: bold;">Refresher course i.e. no. of Manpower of MEMU Shed Jjajha trained till date</h5> <p style="color: #333333;">Till date a total of 12 staffs has been provided refresher course training at MDWTC/KPA & ETTC/DDU in FY 2024-25.</p> </div> </div>';
    } else if (title === 'Achievements') {
      content = '<div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS 2023-24</h2> <ul class="list-unstyled"> <li>1. One Rake of 16 coaches was provided for PM inauguration of line between Narkatiagunj and Gaunaha. This Rake was inaugurated by Honourable Prime Minister of India, Shri Narendra Modi on 06.03.2024.</li> <li>2. ACWP (Automatic Coach Washing Plant) was inaugurated by General Manager East Central Railway, Shri A.K. Khandelwal on 20.12.2023.</li> <li>3. In the month Jun-23 one 16 coach MEMU rake has been provided to E.Co. Railway to cater the rush during "PURI RATH YATRA".</li> <li>4. In the month Jul-23 one 16 coach MEMU rake has been provided for SHRAVANI MELA SPCL.</li> <li>5. In the month Aug-23 one no. 12 coach MEMU rake has been provided for BPSC Teacher Recruitment Exam on 25.08.2023 & One no. 16 coach MEMU rake has been provided for SHRAVANI MELA SPECIAL on 16.08.2023.</li> <li>6. In the month Oct-23 new MEMU passenger special services (03333 & 03234) between station JAI NAGAR and extension of 03273 & 03274 has been started w.e.f. 13.10.2023. Accordingly, timely maintenance of MEMU rakes have been started by MEMU Shed Jhajha to provide MEMU Services on above mentioned new routes.</li> <li>7. In the month Nov-23 one MEMU rake of 16 coach formation has been provided to work as kartik Purnima puja special train.</li> <li>8. Scrap disposal done in FY 2023-24 : 126 MT of value ₹ 49,33,744.40 against target of 87.78 MT.</li> </ul> </div> </div> </div><br><div class="container-fluid p-4"> <div class="row"> <div class="col-12"> <h2 class="text-primary">ACHIEVEMENTS FY 24-25</h2> <ul class="list-unstyled"> <li>1. In Sept-2024, asset failures has been kept 4, resulting in a rate of 0.08 per rate. This is the lowest rate recorded in FY 2024-25 and represents a 56% reduction compared to the same month last year.</li> <li>2. 80 nos. LED Twin Beam light have been fitted and replaced with Halogen type in DMC of MEMU rakes at MEMU shed Jhajha.</li> <li>3. In the month of JULY-24, a drive has been launched for replacement of all old fitted blue PU pipes with white colour super flexible GARFLON-202 nylon tube in tap changers and switch groups of MEMU motor coaches for prevention of line failure due to PU pipe burst. In last two months such cases become nil. So far, a total of 174 motor coaches have now been fitted with white coloured super flexible GARFLON-202 nylon tube. TDC for 09 remaining coaches: Sep 24.</li> <li>4. An intensive drive for checking of Power cables in MEMU MC has been launched from 09.06.24 till date 175 MCs have intensively checked out of which in 11 MCs bulging of Power cables melted Power cables oil leakage from JB has been found and these are jointly attended with staff of Workshop/KPA.</li> <li>5. 01 MEMU rake of 12 coach formation has been provided in June 24 to work as Exam special train (Diploma certificate entrance competitive examination).</li> <li>6. 02 MEMU rakes of 16 coach formation have been provided in July 24 to work as "PURI special train" & 01 rake of 16 coach formation has been provided to work as "SHRAVANI MELA special train".</li> <li>7. 01 MEMU rake of 16 coach formation has been provided in Aug 24 to work as "EXAM SPECIAL train".</li> <li>8. 01 MEMU rake of 16 coach formation has been provided to work as SRSR-DJHR in replacement of 3 phase MEMU in Sept 24.</li> <li>9. The modification work on the pneumatic pipelines in MEMU MC 188004 has been completed to facilitate the inspection of the TFP secondary Junction Box.</li> </ul> </div> </div> </div>'
    } else if (title === 'Awards') {
      content = '<p>Details about Awards...</p>';
    } else if (title === 'In House Developement') {
      content = '<p>Details about Inhouse Development...</p>';
    } else if (title === 'Fire Prevention') {
      content = '<p>Details about Fire Prevention...</p>';
    } else if (title === 'RSP') {
      content = '<p>Details about RSP...</p>';
    } else if (title === 'M&P') {
      content = '<div class="container-fluid"> <div class="row"> <div class="col-12"> <table class="table table-bordered table-striped"> <thead> <tr> <th>S.N.</th> <th>Particulars of Work</th> <th>Sanctioned year</th> <th>Anticipated Cost (In Rs.)</th> <th>Qty</th> <th>Remarks</th> </tr> </thead> <tbody> <tr> <td>1.</td> <td>Diesel Engine operated automatic forklifts (GODEL) 8.0 T Diesel FLT Model GX 300( PH-41/CAP) 2-stage MFH 3660 MM ATT Single drive PHEU Type-1 speed 18& Make GODEL or similar.</td> <td>2023-24</td> <td>11,22,115.86</td> <td>01</td> <td>As per Sr.DMM/DNR office, file for TR has mistakenly been submitted to then Sr.COO/MEMU/JAI IREPS platform. Withdrawn of said file is yet to be done and will be put up to Sr.DET/MEMU/JAI for TR.</td> </tr> <tr> <td>2.</td> <td>TROLLEY MOUNTED MOBILE SEWAGE EVACUATION MACHINE with Positive displacement reversible rotary lobe pump of capacity: 150 Litres Per Minute</td> <td>2023-24</td> <td>12,85,448.41</td> <td>01</td> <td>It is under retendering. Indent at Sr. DMM/DNR office.</td> </tr> <tr> <td>3.</td> <td>Supply, installation, & testing of EMSON/Speedometer test bench for MEMU/DEMU coaches. As per technical specification in Annexure-1</td> <td>2024-25</td> <td>15,22,925.59</td> <td>01</td> <td>Detailed estimate has been vetted on 22.11.2024. Indent is under preparation.</td> </tr> </tbody> </table> </div> </div> </div>';
    } else if (title === 'PWP') {
      content = '<div class="container-fluid"><div class="row"><div class="col-12"><table class="table table-bordered table-striped"><thead><tr><th>S.N.</th><th>Year of section/PH</th><th>Name of Works</th><th>Cost (in Rs Thou)</th><th>Remarks</th></tr></thead><tbody><tr><td>1.</td><td>2019-20 (GM Power)</td><td>CAP / PH-42: Conversion of heavy repair line into inspection pit line at MEMU Shed Jhajha (Gm Shahi)</td><td>2433</td><td>Work completed. As SD/DC (G)/AL, LDA for the firm in March-24. Work started by firm.</td></tr><tr><td>2.</td><td>2021-22 (GM Power)</td><td>DF-3/PH-42: Improvement of basic infrastructure at MEMU Shed Jhajha (civil work) consisting of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td><td>4324</td><td>Work started but presently stopped. Regarding of leaky roof, valley Gutter Replacement, checking and finishing of leaky roof, gutter is to be done. Painting of steel structure rendered by, has been done. As per SSE/W/LN, Sr DEN/HI has terminated this tender on 15.07.2024 for not turning up of contractor to complete the remaining work since last 06 months. Retender is under progress.</td></tr><tr><td>3.</td><td>2021-22 (GM Power)</td><td>CAP/PH-42: Augmentation of MEMU Shed Jhajha (Gm Shahi) 1. Approach road to MEMU Shed 2. Two nos. rooms for MEMU staff 3. Testing Lab 4. Toilets facility for Officers 5. Motor cycle stand 6. Conference Hall 7. Separate common urinal and lavatory for female and male employees</td><td>13577</td><td>Work started on 14.12.2022 and is under progress. 1. Approach road completed 2. Motor cycle stand completed 3. Construction of common urinal and lavatory for employees is under progress 4. Construction of conference hall and work of testing lab under progress.</td></tr><tr><td>4.</td><td>2019-20 (GM Power)</td><td>RSP/PH-65: Construction of basic training center at MEMU Shed Jhajha (Gm Shahi)</td><td>517</td><td>Work not yet started.</td></tr></tbody></table></div></div></div>';
    } else if (title === 'POH Related Complaints') {
      content = '<p>Details about POH Related Complaints...</p>';
    } else if (title === 'KPA Related Issues') {
      content = '<p>Details about KPA Related Issues...</p>';
    } else if (title === 'RDSO/RB Guidelines') {
      content = '<p>Details about RDSO/RB Guidelines...</p>';
    } else if (title === 'HQ/HP Instruction') {
      content = '<p>Details about HQ/HP Instruction...</p>';
    } else if (title === 'Contact Details for all memo shed') {
      content = '<p>Contact Details for all Memo Shed...</p>';
    } else if (title === 'VC/ Online Meetings') {
      content = '<p>Details about VC/Online Meetings...</p>';
    } else if (title === 'Internal Visit/Audit') {
      content = '<p>Details about Internal Visit/Audit...</p>';
    } else if (title === 'Safety Drives') {
      content = '<p>Details about Safety Drives...</p>';
    } else if (title === 'RM Complaints') {
        content = '<p>Details about RM Complaints...</p>';
      } 
    else {
      content = '<p>No detailed information available.</p>';
    }

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
    modalDialog.style.maxWidth = '95%'; // Set width to 80% of the screen

    modalDialog.style.margintop = 'auto'; // Center the modal

    // modalContent.style.maxHeight = '80vh'; // Allow the content to grow to 80% of viewport height
    modalContent.style.overflow = 'auto'; // Make the content scrollable if it exceeds height
  }
});

// Change "Save Changes" button to "Download PDF"
document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.querySelector('.modal-footer .btn-primary');
  if (saveButton) {
    saveButton.innerText = 'Download PDF';
  }
});


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
searchButton.addEventListener('click', handleSearch);

// Event listener for the clear button
clearButton.addEventListener('click', clearSearch);

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


