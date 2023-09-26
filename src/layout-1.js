import React from "react";
import './App.css';


export const Hello = () => {
    return (
        <>
            <div>


                {/* part-1 */}
                <div className="d-flex justify-content-center flex-wrap" style={{ gap: "60px", marginTop: "2%", fontSize: "18px" }}>
                    <a href="#" className="text-dark">Home</a>
                    <a href="#" className="text-dark">Page 1</a>
                    <a href="#" className="text-dark">Page 2</a>
                    <a href="#" className="text-dark">Page 3</a>
                    <a href="#" className="text-dark">Page 4</a>
                    <a href="#" className="text-dark">Page 5</a>
                    <a href="#" className="text-dark">Page 6</a>
                    <a href="#" className="text-dark">Page 7</a>
                    <a href="#" className="text-dark">Page 8</a>
                    <a href="#" className="text-dark">Page 9</a>
                </div>


                {/* part-2 */}
                <div className="d-flex flex-wrap justify-content-center  pt-5">
                    <div style={{ width: "855px", marginRight: "5%", marginTop: "10%" }} className="d-flex justify-content-end">
                        <div>
                            <h2 className="Interior"><b>The Interior Design Studio</b></h2>
                            <p style={{ fontSize: "18px", paddingTop: "15px" }} className="Interior-para">With over 30 years of combined experience our mission is to <br></br>
                                bring the most creative, fun, caring experience to <br></br> transforming your house into a home.</p>
                            <button style={{ padding: "10px", width: "30%", borderRadius: "25px", backgroundColor: " #dfbf9f", marginTop: "15px" }} className="Interior-button">learn more</button>
                        </div>
                    </div>
                    <div className="bg-img" style={{
                        backgroundImage:
                            'url("https://images01.nicepage.com/4c/ab/4cab64a46618f3574f6070e6de2f234f.jpeg")',
                        height: "600px",
                        width: "950px",
                        backgroundSize: "cover"
                    }}>
                        <img src="https://images01.nicepage.com/50/f2/50f26c99666cba1e6e1f9d1854637e98.jpeg" height="550px" width="550px" style={{ borderRadius: "50%", marginLeft: "20%", marginTop: "10px" }} className="bg-img-1"></img>
                    </div>
                </div>
                <div style={{ backgroundColor: "#212121", color: "white", padding: "6%",marginTop:'20px' }}>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div>
                            <p style={{ fontSize: "25px", textAlign:"justify" }}>Progressive art can assist people to learn not only about the objective forces at work in the<br></br> society in
                                which they live, but also about the intensely social character of their interior lives.<br></br> Ultimately,
                                it can propel people toward social emancipation. </p>
                            <div className="d-flex justify-content-end pt-3 flex-wrap">
                                <h5>- Salvador Dali</h5>
                            </div>
                        </div>

                    </div>
                </div>



                {/* part-4 */}

                <div className="part-4 d-flex justify-content-center flex-wrap" style={{ gap: "100px", marginRight: "10%", paddingTop: "5%" }}>
                    <div>
                        <h2 style={{ color: "black", paddingTop: "25%" }} className="creative-team"><b>We are creative team of <br></br>architects and designers</b></h2>
                        <p style={{ fontSize: "18px", paddingTop: "10px" }} className="creative-team-para">Our Design Studio is an award winning architecture and interior<br></br> design practice. It works internationally
                            on commissions including<br></br> boutique hotels and restaurants, retail spaces, workspaces,
                            galleries<br></br> and renowned cultural institutions.</p>
                        <button style={{ padding: "10px", width: "30%", borderRadius: "25px", backgroundColor: " #dfbf9f", marginTop: "15px" }} className="creative-team-button">learn more</button>
                    </div>
                    <div style={{ position: "relative" }} className="part4">
                        <img src="https://images01.nicepage.com/d8/7a/d87a2d457dbdb3e68cf02ecdf0bd3c94.jpeg" height="350px" width="350px" style={{ borderRadius: "50%" }} />
                        <p style={{ fontSize: "20px", backgroundColor: "#cc9966", borderRadius: "50%", width: "180px", height: "180px", textAlign: "center", paddingTop: "21%", position: "absolute", top: "250px", right: "50px" }}><b>OUR TEAM</b></p>
                        <img src="https://images01.nicepage.com/21/bb/21bbb263edc3b6aefe0abfccc8eea02d.jpeg" height="230px" width="250px" style={{ borderRadius: "50%", position: "absolute", top: "280px", left: "320px" }} className="team" />
                    </div>
                </div>


                {/* part-5 */}

                <div className="d-flex justify-content-center flex-wrap part-5" style={{ gap: "100px", marginRight: "25%", paddingTop: "5%", marginTop: "8%" }}>
                    <div>
                        <div className="d-flex flex-wrap" style={{ position: "relative" }}>
                            <img src="https://images01.nicepage.com/68/d4/68d426dabbf8e1b55dcdfa1ac4c6e1e0.jpeg" height="320px" width="320px" style={{ borderRadius: "50%" }} />
                            <button style={{ padding: "10px", width: "30%", borderRadius: "25px", backgroundColor: "  #cc9966", border: "none", position: "absolute", top: "220px", left: "250px" }}>view more</button>
                        </div>
                        <h3 style={{ marginTop: "15%", color: "black" }} className="modern"><b>Modern interior places</b></h3>
                        <p style={{ fontSize: "18px" }} className="modern-para">Through a process of research and experimentation, carefully chosen <br></br>materials and crafted details are used to help create unique and <br></br>
                            beautiful spaces. Phasellus scelerisque sed leo quis gravida. Fusce<br></br> lobortis libero ut arcu blandit pharetra.</p>
                    </div>
                    <div className="img2">
                        <div className="d-flex flex-wrap justify-content-center" style={{ position: "relative" }}>
                            <img src="https://images01.nicepage.com/91/0f/910ff296f2cd818421c4866fcd36ee0f.jpeg" height="430px" width="430px" style={{ borderRadius: "50%", position: "absolute", left: "100px" }} className="book-img" />
                            <button style={{ padding: "10px", width: "170px", borderRadius: "25px", backgroundColor: "  #cc9966", border: "none", position: "absolute", top: "320px", left: "400px" }} className="book-button">view more</button>
                        </div>
                        <div className="d-flex flex-wrap" style={{ position: "relative" }}>
                            <img src="https://images01.nicepage.com/da/a2/daa2f7d73a896ff24fbf182fd84f2653.jpeg" height="300px" width="300px" style={{ borderRadius: "50%", position: "absolute", top: "300px" }} className="tablee" />
                            <button style={{ padding: "10px", width: "170px", borderRadius: "25px", backgroundColor: "  #cc9966", border: "none", position: "absolute", top: "520px", left: "200px" }} className="table-button">view more</button>
                        </div>
                    </div>
                </div>


                {/* part-6 */}

                <div className="d-flex flex-wrap part-6 justify-content-center" style={{ gap: "10%", marginLeft: "15%", paddingTop: "5%" }}>
                    <div style={{ paddingTop: "10%" }}>
                        <h1 style={{ color: "black" }} className="all-about"><b>All About Us</b></h1>
                        <p style={{ fontSize: "17px", paddingTop: "7%", lineHeight: "1.8",textAlign:'justify' }} className="all-about-para">We work hard and play hard. A balanced life has led design studio<br></br> to be what it is today.
                            An eye for detail and a non-compromising<br></br> attitude makes sure that all our clients go back happy and most <br></br>the time,
                            come back as well. Our long list of repeat clients speaks<br></br> for itself. With you, we see a facility grow from a concept
                            to<br></br> something tangible and real. As designers, we enjoy this process,<br></br> and we embrace it. Our work showcase signature
                            designs that are<br></br> understated yet sophisticated, straightforward, elegant, functional<br></br> and fun. Balance, light, space
                            and color factor into every design,<br></br> creating a timeless effect.</p>
                        <button style={{ padding: "10px", width: "40%", borderRadius: "25px", backgroundColor: " #dfbf9f", marginTop: "15px" }} className="all-about-button">view more</button>
                    </div>
                    <div className="imges">
                        <div className="d-flex  ">
                            <img src="https://images01.nicepage.com/da/a2/daa2f7d73a896ff24fbf182fd84f2653.jpeg" height="430px" width="480px" className="imges-1" />
                            <img src="	https://images01.nicepage.com/e0/2f/e02fba94da1faf3006ee26772d82bb80.jpeg" height="430px" width="480px" className="imges-1" />
                        </div>
                        <div className="d-flex ">
                            <img src="https://images01.nicepage.com/bd/4b/bd4bcbd4a6e97fe73c30610ab83e21a9.jpeg" height="430px" width="480px" className="imges-1" />
                            <img src="https://images01.nicepage.com/1c/21/1c2196b428f5998a99ba6567cb68d2fd.jpeg" height="430px" width="480px" className="imges-1" />
                        </div>
                    </div>
                </div>

                {/* part-7 */}

                <div className="part-7 d-flex justify-content-center flex-wrap" style={{ marginTop: "5%" }}>
                    <div>
                        <h4 style={{ textAlign: "center", color: "black" }}><b>Latest Projects</b></h4>
                        <p style={{ fontSize: "18px", textAlign: "center" }} className="Projects-para">Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
                        <div className="d-flex flex-wrap justify-content-center" style={{ gap: "10px", marginTop: "5%" }}>
                            <div>
                                <div className="d-flex flex-wrap img-main" style={{ gap: "10px" }}>
                                    <img src="https://images01.nicepage.com/67/6b/676b13d38454f01eafb6d8d873761e17.jpeg" height="330px" width="370px" className="Projects-img" />
                                    <img src="https://images01.nicepage.com/83/4f/834fa01c688fb78f4f0bfcdd1e5d1da2.jpeg" height="330px" width="370px" className="Projects-img"/>
                                </div>
                                <div className="d-flex flex-wrap img-main" style={{ gap: "10px", marginTop: "10px" }}>
                                    <img src="https://images01.nicepage.com/d3/0e/d30ef3549739acd770d4fe2643ec3ded.jpeg" height="330px" width="370px" className="Projects-img" />
                                    <img src="https://images01.nicepage.com/af/d3/afd377e224603dfabddc6e7d688b1eb8.jpeg" height="330px" width="370px" className="Projects-img" />
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <img src="https://images01.nicepage.com/23/89/23890819b9e9c8d43387d68c869e166a.jpeg" height="330px" width="750px" />
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-wrap">
                                <img src="https://images01.nicepage.com/f7/91/f791f19d2cb1398a653d7064822f9e3b.jpeg" height="670px" width="370px" className="proects-img2" />
                                <img src="https://images01.nicepage.com/42/bb/42bb0fc1a0ea9c7ee4df8e9205972bf9.jpeg" height="370px" width="370px" className="proects-img3"  style={{ marginTop: "10px" }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* part-8 */}

                <div className="part-8" style={{
                    backgroundImage:
                        'url("https://images01.nicepage.com/45/41/4541577119af739f6b33e1e7915653e6.jpeg")',
                    height: "400px",
                    width: "100% 100%",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    backgroundPosition: "50% 50%",
                    marginTop: "4%"
                }}>
                    <div style={{ backgroundColor: "rgb(0,0,0,0.6)", height: "400px" }}>

                        <div className="d-flex justify-content-center flex-wrap">
                            <div style={{ position: "relative", marginTop: "8%" }}>
                                <h2 style={{ color: "white", textAlign:"center"}}><b>We make your building more perfect with 25 years of experience</b></h2>
                                <button style={{ padding: "10px", width: "20%", borderRadius: "25px", border: "none", backgroundColor: " #dfbf9f", position: "absolute", left: "400px", top: "70px" }} className="button">learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* part-9 */}

                <div style={{ backgroundColor: "#333333", padding: "5%", color: "white" }}>
                    <div className="d-flex justify-content-center last" style={{ gap: "200px" }}>
                        <div>
                            <img src="https://capp.nicepage.com/6a9027cff3850cd4dbdf97af1483e0ee4919114b/images/default-image.jpg" height="50px" width="90px" />
                        </div>
                        <div className="headline d-flex " style={{ gap: "50px" }}>
                            <div>
                                <p style={{ fontSize: "20px" }}><b>Headline</b></p>
                                <hr style={{ border: "1px solid #808080", width: "250px" }}></hr>
                                <p style={{ fontSize: "19px" }}>Sample footer text</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "20px" }}><b>Headline</b></p>
                                <hr style={{ border: "1px solid #808080", width: "250px" }}></hr>
                                <p style={{ fontSize: "19px" }}>Sample footer text</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "20px" }}><b>Headline</b></p>
                                <hr style={{ border: "1px solid #808080", width: "250px" }}></hr>
                                <p style={{ fontSize: "19px" }}>Sample footer text</p>
                            </div>
                        </div>
                    </div>
                    <p style={{ color: "white", textAlign: "center", marginTop: "5%" }}>Template created with Nicepage.</p>
                </div>


            </div >
        </>
    )
}