function SkillTracker(props) {
    return (
        <div className="barWrapper">
            <span className="progressText">{props.skillName}</span>
            <div className="single-progress-txt">
                <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90"
                        aria-valuemin="10" aria-valuemax="100">

                    </div>
                </div>
                <h3>{props.skillPercentage}</h3>
            </div>
        </div>
    );
}

export default SkillTracker;
