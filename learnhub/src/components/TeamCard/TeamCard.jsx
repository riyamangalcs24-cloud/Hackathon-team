import "./TeamCard.css";

function TeamCard({ member }) {

    return (

        <div className="team-card">

            <img
                src={member.image}
                alt={member.name}
            />

            <h3>{member.name}</h3>

            <h4>{member.role}</h4>

            <p>{member.bio}</p>

        </div>

    )

}

export default TeamCard;