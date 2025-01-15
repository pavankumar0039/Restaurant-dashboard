import React from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiFoodMenu } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
function Sidebar() {
    const styles = {
        sidebarContainer: {
            width: "12rem",
            height: "100vh",
            position:"fixed",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
        },
        profileContainer: {
            marginBottom: "1rem",
        },
        profileBox: {
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            backgroundColor: "#ddd",
            margin: "0 auto",
        },
        profileName: {
            textAlign: "center",
            marginTop: "0.5rem",
            fontWeight: "bold",
        },
        sidebarContent: {
            flex: 1,
        },
        listItem: {
            display: "flex",
            height: "2rem",
            alignItems: "center",
            padding: "0.5rem 0",
            cursor: "pointer",
        },
        contentIcon: {
               display:"flex",
               justifyContent:"center",
               alignItems:'center',
               marginRight:"4px"
              
            // width: "1.5rem",
            // height: "1.5rem",
            // backgroundColor: "#ddd",
            // borderRadius: "50%",
            // marginRight: "0.5rem",
        },
        
        contentName: {
            width:"56%",
            marginLeft: "5px",
            // fontFamily:"sanserif",
            fontSize: "17px",
            fontWeight: "500",
            color: "grey"

        },
        hoverline: {

            width: "3px",
            height: "80%",
            position: "relative",
            backgroundColor: " #7e7ee1",
            right: "-44px",
            borderRadius: "10px"

        },
        lastContainer: {
            borderTop: "1px solid #eee",
            paddingTop: "1rem",
        },
    };

    return (
        <div style={styles.sidebarContainer}>
            <div style={styles.profileContainer}>
                <div style={styles.profileBox}></div>
                <div style={styles.profileName}>Pavan kumar</div>
            </div>

            <div style={styles.sidebarContent}>
                <ul>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                        <MdOutlineSpaceDashboard size={21} className='iconsidebar'/>
                        </div>
                        <div style={styles.contentName}>Dashboard</div>
                        <div style={styles.hoverline}></div>
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                            <IoCartOutline size={21} fontWeight={500} className='iconsidebar'/>
                        </div>
                        <div style={styles.contentName}>Orders</div>
                        <div style={styles.hoverline}></div>
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                        <LuUserRound size={21} className='iconsidebar'/>
                        </div>
                        <div style={styles.contentName}>Customers</div>
                        <div style={styles.hoverline}></div>
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                            <BiFoodMenu size={21} className='iconsidebar'/>
                        </div>
                        <div style={styles.contentName}>Menu</div>
                        <div style={styles.hoverline}></div>
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                            <IoSettingsOutline size={21} className='iconsidebar'/>
                        </div>
                        <div style={styles.contentName}>Settings</div>
                        <div style={styles.hoverline}></div>
                    </li>
                </ul>
            </div>

            <div style={styles.lastContainer}>
                <ul>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                            <AiOutlineLogin size={21} fontWeight={500}/>
                        </div>
                        <div style={styles.contentName}>Login</div>
                    </li>
                    <li style={styles.listItem}>
                        <div style={styles.contentIcon}>
                            <RiLogoutCircleLine size={21} fontWeight={500}/>
                        </div>
                        <div style={styles.contentName}>Logout</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
