export default function CustomerReview(props) {
    return (
        <div className="slider-item">
            <div className="test-img"><img src={props.imagePath} alt="Placeholder" width="157" height="157" /></div>
            <div className="test-text"><span className="title"><span>{props.customerName}</span> {props.customerPosition}</span> {props.customerOpinion}</div>
        </div>
    );
}
