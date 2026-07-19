import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TeamCard from "../components/TeamCard/TeamCard";

import team from "../data/team";

function About() {

    return (

        <>

            <Navbar />

            <section className="about-page">

                <h1>About LearnHub</h1>

                <h2>Our Mission</h2>

                <p>

                    Our mission is to make quality education
                    accessible to everyone.

                </p>

                <h2>Our Vision</h2>

                <p>

                    We believe learning should be simple,
                    affordable and available worldwide.

                </p>

            </section>

            <section className="team-section">

                <h2>Meet Our Team</h2>

                <div className="features-grid">

                    {

                        team.map((member)=>(

                            <TeamCard
                                key={member.id}
                                member={member}
                            />

                        ))

                    }

                </div>

            </section>

            <section className="timeline">

                <h2>Our Journey</h2>

                <ul>

                    <li>2022 - LearnHub Started</li>

                    <li>2023 - 10,000 Students</li>

                    <li>2024 - 100+ Courses</li>

                    <li>2025 - Global Expansion</li>

                </ul>

            </section>

            <Footer />

        </>

    )

}

export default About;