export default function TeamMember(props) {
    return (
        <div className="col-md-4">
            <div className="team-detail wow bounce" data-wow-delay="0.2s"> 
                <img src={props.userPicturePath} className="img-fluid" />
                <h4>{props.memberName}</h4>
                <p>{props.vacancy}</p>
            </div>
        </div>
    );
}