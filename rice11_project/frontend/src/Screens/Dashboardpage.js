import React, { useEffect, useState } from 'react'
import Navbar from '../Components.js/Navbar'
import Sidebar from '../Components.js/Sidebar'
import { PiUsersThreeLight } from "react-icons/pi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { BsDatabaseCheck } from "react-icons/bs";
import { TbUserStar } from "react-icons/tb";
import Stars from '../Components.js/Stars';
// import { LineChart } from '@mui/x-charts/LineChart';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Dashboardpage() {

    const [visitors, setvisitors] = useState(100)
    const [totalorders, settotalorders] = useState(100)
    async function gettingcounters() {
        const url1 = 'http://localhost:4000/api/user';
        const url2 = 'http://localhost:4000/api/orders';

        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };


            const [response1, response2] = await Promise.all([
                fetch(url1, options),
                fetch(url2, options),
            ]);


            if (!response1.ok || !response2.ok) {
                throw new Error('One or both requests failed');
            }


            const data1 = await response1.json();
            const data2 = await response2.json();


            setvisitors(data1.length)

            settotalorders(data2.orders.length)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



    const options = {
        animationEnabled: true,
        // title: {
        //     text: "Monthly Sales - 2017"
        // },
        axisX: {
            valueFormatString: "MMM"
        },
        width: 350,
        height: 210,
        axisY: {
            title: "",
            lineThickness: 0,
            tickThickness: 0,
            labelFormatter: () => "",
            gridThickness: 0
        },
        data: [
            {
                yValueFormatString: "$#,###",
                xValueFormatString: "MMMM",
                type: "spline",

                dataPoints: [
                    { x: new Date(2017, 0), y: 25060, cursor: "pointer" },
                    { x: new Date(2017, 1), y: 27980, cursor: "pointer" },
                    { x: new Date(2017, 2), y: 42800, cursor: "pointer" },
                    { x: new Date(2017, 3), y: 32400, cursor: "pointer" },
                    { x: new Date(2017, 4), y: 35260, cursor: "pointer" },
                    { x: new Date(2017, 5), y: 33900, cursor: "pointer" },
                    { x: new Date(2017, 6), y: 40000, cursor: "pointer" },
                    { x: new Date(2017, 7), y: 52500, cursor: "pointer" },
                    { x: new Date(2017, 8), y: 32300, cursor: "pointer" },
                    { x: new Date(2017, 9), y: 42000, cursor: "pointer" },
                    { x: new Date(2017, 10), y: 37160, cursor: "pointer" },
                    { x: new Date(2017, 11), y: 38400, cursor: "pointer" }
                ]
            }
        ]
    };

    const options1 = {
        animationEnabled: true,
        // title: {
        //     text: "Server Busy Time"
        // },
        axisX: {

        },
        width: 350,
        height: 210,

        axisY: {

            maximum: 100,
            title: "",
            lineThickness: 0,
            tickThickness: 0,
            labelFormatter: () => "",
            gridThickness: 0
        },
        data: [
            {
                type: "column",
                color: "lightcoral",
                dataPoints: [
                    { label: "12am", y: 30, cursor: "pointer" },
                    { label: "", y: 45, cursor: "pointer" },
                    { label: "2am", y: 60, cursor: "pointer" },
                    { label: "", y: 70, cursor: "pointer" },
                    { label: "4am", y: 10, cursor: "pointer" },
                    { label: "", y: 50, cursor: "pointer" },
                    { label: "6am", y: 55, cursor: "pointer" },
                    { label: "", y: 60, cursor: "pointer" },
                    { label: "8am", y: 72, cursor: "pointer" }
                ]
            }
        ]
    };


    const styles = {
        maindashboard: {
            margin: "0px",
            padding: "0px",
            height: "500rem",
            backgroundColor: "#f3f3f3"
        },
        maincontainer: {
            marginTop: "1rem",
            marginLeft: "15rem",
            padding: "1rem"
        },
        countingcontainers: {

            display: "flex",
            justifyContent: "space-between"
        },
        countingbox: {
            width: "14rem",
            height: "5rem",
            backgroundColor: "white",
            borderRadius: "7px",
            display: "flex",
            alignItems: 'center',
            padding: "10px",
            justifyContent: "spacebetween"
        },
        countname: {
            width: "70%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            paddingLeft: "5px"
        },
        count: {
            fontWeight: "500",
            fontSize: "25px"
        },
        name: {
            color: "grey",
            fontSize: "15px"
        },
        usefullcontainers: {
            display: "flex",
            marginLeft: "15rem",
            padding: "1rem"
        },
        graphcontainers: {
            width: "36%",

        },
        usecontainers: {
            width: "36%",

        },
        userratingcontainer: {
            width: "30%",

        },
        profitcontainer: {
            width: "98%",
            height: "20rem",
            backgroundColor: "white",
            marginTop: "1rem",
            borderRadius: "10px"

        },
        populartimecontainer: {
            width: "98%",
            height: "20rem",
            backgroundColor: "white",
            marginTop: "1rem",
            borderRadius: "10px"


        },
        likeddishes: {
            width: "98%",
            height: "20rem",
            backgroundColor: "white",
            marginTop: "1rem",
            borderRadius: "10px"

        },
        profitcalculator: {
            width: "98%",
            height: "20rem",
            backgroundColor: "white",
            marginTop: "1rem",
            borderRadius: "10px"

        },
        userratingbox: {
            marginTop: "1rem",
            maxWidth: "98%",
            height: "41rem",
            backgroundColor: "white",
            overflowY: "scroll",
            borderRadius: "10px"

        },
        profitcontentbox: {
            padding: "10px"
        },
        pcontainer: {
            height: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"

        },
        checkbox: {
            width: "7rem",
            height: "2rem",
            border: "none",
            backgroundColor: "#f3f3f3",
            borderRadius: "5px",
            padding: "3px"
        },
        profitamount: {
            marginTop: "15px",
            fontWeight: '500',
            fontSize: 'x-large',
            margin: '0px',
            padding: "0px"
        },
        populartimecontentbox: {
            height: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px"


        },
        userratingheadname: {
            display: "flex",
            alignItems: "center"
        },
        anchorviewall: {
            fontSize: "15px",
            textDecoration: "none",
            margin: "0px",
            padding: "0px"
        },
        usericonname: {
            width: "2rem",
            height: "2rem",
            backgroundColor: "#ddd",
            borderRadius: "50%",
            marginRight: "0.5rem",
        },
        username: {
            fontWeight: '500',
        },
        usercontentbox: {

            padding: "10px"

        },
        userratingdate: {
            color: "rgb(195 192 192)"
        },
        discription: {
            margin: "2px",
            padding: "0px",
            textSixe: "15px",
            color: "grey"
        },
        sourcepara: {
            margin: "7px",
            padding: "0px",
            fontWeight: '500'

        },
        likedhead: {
            margin: '5px',
            padding: "0px"
        },
        likecontainer: {

        },
        likeditems: {
            display: "flex",
            marginTop: '7px',
            justifyContent: "space-around"


        },
        dishicon: {
            width: "3rem",
            height: "3rem",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            marginRight: "0.5rem",

        },
        dishname: {
            textalign: "center",
            fontWeight: '600',

            color: "grey"

        },
        dishdiscount: {
            color: "green"
        },
        profitsearchinput: {
            width: "10rem",
            border: "none",
            height: "2rem",
            backgroundColor: "#f3f3f3",
            borderRadius: "5px"
        },
        countingicon: {
            width: "3rem",
            height: "3rem",
            backgroundColor: "#ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            marginRight: "0.5rem",
        },
        imagemenuitems: {
            width: "100%",
            height: "100%",
            objectFit: 'cover',
            borderRadius: "10%"
        }











    }

    useEffect(() => {
        gettingcounters()

    })
    return (
        <div className='maindashboard' style={styles.maindashboard}>

            <Sidebar />
            <Navbar />
            <main>

                <div className='maincontainer' style={styles.maincontainer}>
                    <div className='countingcontainers' style={styles.countingcontainers}>

                        <div className='countingbox' style={styles.countingbox}>
                            <div className='countname' style={styles.countname}>
                                <div className='count' style={styles.count}>{visitors}

                                </div>
                                <div className='name' style={styles.name}>Visitors

                                </div>

                            </div>
                            <div className='countingicon' style={{ ...styles.countingicon, backgroundColor: "#dec6f3" }}>
                                <PiUsersThreeLight size={35} color='blueviolet' />
                            </div>

                        </div>
                        <div className='countingbox' style={styles.countingbox}>
                            <div className='countname' style={styles.countname}>
                                <div className='count' style={styles.count}>{totalorders}

                                </div>
                                <div className='name' style={styles.name}>Orders received

                                </div>

                            </div>
                            <div className='countingicon' style={{ ...styles.countingicon, backgroundColor: "#f3cdcd" }}>
                                <LiaCartArrowDownSolid size={35} color='e96767' />


                            </div>

                        </div>
                        <div className='countingbox' style={styles.countingbox}>
                            <div className='countname' style={styles.countname}>
                                <div className='count' style={styles.count}>$ 2,50,000

                                </div>
                                <div className='name' style={styles.name}>Net earning

                                </div>

                            </div>
                            <div className='countingicon' style={{ ...styles.countingicon, backgroundColor: "#e0eff5" }}>
                                <BsDatabaseCheck color='#70c7eb' size={35} />

                            </div>

                        </div>
                        <div className='countingbox' style={styles.countingbox}>
                            <div className='countname' style={styles.countname}>
                                <div>
                                    <div className='count' style={styles.count}>4.0

                                    </div>
                                    <div className='stars' style={styles.stars}>
                                        <Stars />
                                    </div>
                                </div>
                                <div className='name' style={styles.name}>Customer satisfaction

                                </div>

                            </div>
                            <div className='countingicon' style={{ ...styles.countingicon, backgroundColor: "#ffe8be" }}>
                                <TbUserStar size={35} color='#f5b032' />

                            </div>

                        </div>


                    </div>


                </div>
                <div className='usefullcontainers' style={styles.usefullcontainers}>
                    <div className='graphcontainers' style={styles.graphcontainers}>
                        <div className='profitcontainer' style={styles.profitcontainer}>

                            <div className='profitcontentbox' style={styles.profitcontentbox}>
                                <div className='pcontainer' style={styles.pcontainer}>
                                    <h4 className='headprofit' style={styles.headprofit}>Profit</h4>
                                    <select className="checkbox" name="lastmonth" style={styles.checkbox}>
                                        <option value="lastmonth">last month</option>
                                        <option value="apple">Apple</option>
                                        <option value="banana">Banana</option>
                                        <option value="cherry">Cherry</option>
                                        <option value="date">Date</option>
                                    </select>
                                </div>
                                <spam style={styles.profitamount}>$ 2,30,000</spam>

                            </div>

                            <div className='graph' style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "-15px" }}>
                                <CanvasJSChart options={options} />

                            </div>


                        </div>
                        <div className='populartimecontianer' style={styles.populartimecontainer}>
                            <div className='populartimecontentbox' style={styles.populartimecontentbox}>
                                <h4>Popular Time</h4>
                                <select className="checkbox" name="Week" style={styles.checkbox}>
                                    <option value="week">week</option>
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                    <option value="cherry">Cherry</option>
                                    <option value="date">Date</option>
                                </select>

                            </div>

                            <div className='graph'>
                                <CanvasJSChart options={options1} />

                            </div>


                        </div>

                    </div>
                    <div className='usecontainers' style={styles.usecontainers}>
                        <div className='likeddishes' style={styles.likeddishes}>
                            <div className='profitcontentbox' style={styles.profitcontentbox}>
                                <div className='likecontainer' style={styles.likecontainer}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <h4 className='headprofit' style={styles.likedhead}>Liked Dishes</h4>
                                        <a href='' style={styles.anchorviewall}>(view All)</a>
                                    </div>
                                    <div className='likeditems' style={styles.likeditems}>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/75e696cea5e58c9e042d3e809bb243a4.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Chicken Biriyani</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/536e9b0e0b34796e485620aa1a36c278.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Paneertikka masala</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/9dc91554ce45e92f03aa59bb32b0dff6.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Pav Baji</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/536e9b0e0b34796e485620aa1a36c278.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Paneertikka masala</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>


                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <h4 className='headprofit' style={styles.likedhead}>Dis-Liked Dishes</h4>
                                        <a href='' style={styles.anchorviewall}>(view All)</a>
                                    </div>
                                    <div className='likeditems' style={styles.likeditems}>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/75e696cea5e58c9e042d3e809bb243a4.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Chicken Biriyani</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/536e9b0e0b34796e485620aa1a36c278.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Paneertikka masala</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/9dc91554ce45e92f03aa59bb32b0dff6.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Pav Baji</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25%" }}>
                                            <div style={styles.dishicon}>
                                                <img style={styles.imagemenuitems} src="/images/536e9b0e0b34796e485620aa1a36c278.jpg" alt="Dish" />
                                            </div>
                                            <div style={styles.dishname}>Paneertikka masala</div>
                                            <div style={styles.dishdiscount}>80% </div>
                                        </div>

                                    </div>


                                </div>


                            </div>



                        </div>
                        <div className='profitcalculator' style={styles.profitcalculator}>
                            <div className='profitcontentbox' style={styles.profitcontentbox}>
                                <div className='pcontainer' style={styles.pcontainer}>
                                    <h4 className='headprofit' style={styles.headprofit}>Profit Calculator</h4>
                                </div>
                                <p style={{ color: 'grey', fontSize: "13px" }}>Caluculate the profit of any menu items by searching below. we will give you estimated profit for selected menu</p>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                    <input className='profitsearchinput' style={styles.profitsearchinput} placeholder='search menu'></input>
                                    <p>for next</p>
                                    <select className="checkbox" name="Week" style={styles.checkbox}>
                                        <option value="All">All</option>
                                        <option value="apple">Apple</option>
                                        <option value="banana">Banana</option>
                                        <option value="cherry">Cherry</option>
                                        <option value="date">Date</option>
                                    </select>

                                </div>
                                <p style={{ color: 'grey', fontSize: "13px" }}>Estimated money you earn by selling "panner tikka" next week</p>
                                <spam className="profitcalamount" style={{ fontWeight: "500", fontSize: "large" }}>$ 30,000</spam>

                                <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>

                                    <p style={{ color: 'grey', fontSize: "13px" }}>Apply discount of</p>
                                    <select className="checkbox" name="Week" style={{ ...styles.checkbox, width: '3.5rem' }}>

                                        <option value="apple">10%</option>
                                        <option value="banana">11%</option>
                                        <option value="cherry">12%</option>
                                        <option value="date">15%</option>
                                    </select>
                                    <p style={{ color: 'grey', fontSize: "13px" }}>the profit will be</p>
                                    <p style={{ fontWeight: "500" }}>$20,000</p>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='userratingcontainer' style={styles.userratingcontainer}>
                        <div className='userratingbox' style={styles.userratingbox}>
                            <div className='populartimecontentbox' style={styles.populartimecontentbox}>
                                <div>
                                    <h4 style={{ margin: "0px", padding: "0px" }}>User Ratings</h4>
                                    <a href='' style={styles.anchorviewall}>(view All)</a>
                                </div>
                                <select className="checkbox" name="Week" style={styles.checkbox}>
                                    <option value="All">All</option>
                                    <option value="apple">Apple</option>
                                    <option value="banana">Banana</option>
                                    <option value="cherry">Cherry</option>
                                    <option value="date">Date</option>
                                </select>


                            </div>

                            <div className='usercontentbox' style={styles.usercontentbox}>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <div style={styles.usericonname}></div>
                                    <div style={styles.username} >Tarun Yadav</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", justifyContent: "space-between" }}>
                                    <div style={styles.userratingstars}><Stars /></div>
                                    <div style={styles.userratingdate} >Mon 6 jul 19</div>
                                </div>
                                <div>
                                    <p className='discription' style={styles.discription}>If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles
                                    </p>
                                </div>
                                <div>
                                    <p className='sourcepara' style={styles.sourcepara}>source : Google</p>
                                </div>
                                <div style={{ height: "1px", backgroundColor: "rgb(195 192 192)" }}>

                                </div>


                            </div>
                            <div className='usercontentbox' style={styles.usercontentbox}>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <div style={styles.usericonname}></div>
                                    <div style={styles.username} >Tarun Yadav</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", justifyContent: "space-between" }}>
                                    <div style={styles.userratingstars}><Stars /></div>
                                    <div style={styles.userratingdate} >Mon 6 jul 19</div>
                                </div>
                                <div>
                                    <p className='discription' style={styles.discription}>If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles
                                    </p>
                                </div>
                                <div>
                                    <p className='sourcepara' style={styles.sourcepara}>source : Google</p>
                                </div>
                                <div style={{ height: "1px", backgroundColor: "rgb(195 192 192)" }}>

                                </div>


                            </div>
                            <div className='usercontentbox' style={styles.usercontentbox}>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <div style={styles.usericonname}></div>
                                    <div style={styles.username} >Tarun Yadav</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", justifyContent: "space-between" }}>
                                    <div style={styles.userratingstars}><Stars /></div>
                                    <div style={styles.userratingdate} >Mon 6 jul 19</div>
                                </div>
                                <div>
                                    <p className='discription' style={styles.discription}>If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles
                                    </p>
                                </div>
                                <div>
                                    <p className='sourcepara' style={styles.sourcepara}>source : Google</p>
                                </div>
                                <div style={{ height: "1px", backgroundColor: "rgb(195 192 192)" }}>

                                </div>


                            </div>
                            <div className='usercontentbox' style={styles.usercontentbox}>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <div style={styles.usericonname}></div>
                                    <div style={styles.username} >Tarun Yadav</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", justifyContent: "space-between" }}>
                                    <div style={styles.userratingstars}>
                                        <Stars />
                                    </div>
                                    <div style={styles.userratingdate} >Mon 6 jul 19</div>
                                </div>
                                <div>
                                    <p className='discription' style={styles.discription}>If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles
                                    </p>
                                </div>
                                <div>
                                    <p className='sourcepara' style={styles.sourcepara}>source : Google</p>
                                </div>
                                <div style={{ height: "1px", backgroundColor: "rgb(195 192 192)" }}>

                                </div>


                            </div>
                            <div className='usercontentbox' style={styles.usercontentbox}>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <div style={styles.usericonname}></div>
                                    <div style={styles.username} >Tarun Yadav</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", justifyContent: "space-between" }}>
                                    <div style={styles.userratingstars}>
                                        <Stars />
                                    </div>
                                    <div style={styles.userratingdate} >Mon 6 jul 19</div>
                                </div>
                                <div>
                                    <p className='discription' style={styles.discription}>If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles
                                    </p>
                                </div>
                                <div>
                                    <p className='sourcepara' style={styles.sourcepara}>source : Google</p>
                                </div>
                                <div style={{ height: "1px", backgroundColor: "rgb(195 192 192)" }}>

                                </div>


                            </div>
                            <div className='usercontentbox' style={styles.usercontentbox}>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <div style={styles.usericonname}></div>
                                    <div style={styles.username} >Tarun Yadav</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", justifyContent: "space-between" }}>
                                    <div style={styles.userratingstars}><Stars /></div>
                                    <div style={styles.userratingdate} >Mon 6 jul 19</div>
                                </div>
                                <div>
                                    <p className='discription' style={styles.discription}>If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles
                                    </p>
                                </div>
                                <div>
                                    <p className='sourcepara' style={styles.sourcepara}>source : Google</p>
                                </div>
                                <div style={{ height: "1px", backgroundColor: "rgb(195 192 192)" }}>

                                </div>


                            </div>


                        </div>

                    </div>
                </div>

            </main>

        </div>
    )
}

export default Dashboardpage
