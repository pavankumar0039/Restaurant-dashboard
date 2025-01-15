import React from 'react'

function Navbar() {
   
    const styles={
        navcontainer:{
           
            height:"3rem",
            marginLeft:"15rem",
            display:"flex",
            alignItems:"center"
        },
        navnamecontainer:{
            marginTop:"1rem",
            padding:"1rem"

        },
        navname:{
            fontSize:"20px",
            fontWeight:"bold"
        }

    }
   
  return (
    <div>
       <nav style={styles.navcontainer}>
        <div style={styles.navnamecontainer}>
            <span style={styles.navname}>Dashboard</span>
        </div>
       </nav>

    </div>
  )
}

export default Navbar
