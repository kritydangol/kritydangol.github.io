import React from 'react'

const Home = () => {
    return (
        <>

            <div class="nav">
                <nav id="nav"></nav>
            </div>

            {/* Landing Section */}
            <section class="container landing">
                <div class="row">
                    <div class="col-lg-6 left">
                        <p class="subH">
                            Krity Dangol
                        </p>
                        <h2 class="head">Frontend Developer</h2>
                        <p>
                            Over the past 4 years, i have been doing projects as a frontend developer/designer, Lorem ipsum
                            dolor minus laborum accusamus non laudantium accusantium alias vitae aliquam dolor laboriosam quo
                            iusto!
                        </p>
                        <a href="/" class="link">View Projects</a>
                        &nbsp;&nbsp;or&nbsp;&nbsp;
                        <a href="/" class="link">Download CV</a>
                    </div>

                    <div class="col-lg-6 right">
                        <img src="../images/logo-circle-06.png" alt="" class="imageRot" />
                    </div>
                </div>
            </section>

            <section class="container projects">
                <div class="row">
                    <div class="col">
                        <p class="subH">
                            Selected Projects
                        </p>
                        <h3 class="midH">
                            Case Studies
                        </h3>
                    </div>
                </div>
                <div class="row pt-4" id="worksCard">
                </div>
            </section>
        </>
    )
}

export default Home