import React from 'react'

const Home = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome Ketan</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <body>
                <h1 style={{textAlign:"center",background:"powderblue",fontSize:"150px"}}>Welcome to wonderful festival</h1>
                <p style={{paddingTop:"80px",textAlign:"center",fontSize:"30px",background:"skyblue"}}>Register Below</p>
            </body>
        </section>
    );
};

export default Home;