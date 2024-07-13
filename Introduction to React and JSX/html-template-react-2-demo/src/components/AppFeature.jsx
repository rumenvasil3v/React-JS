export default function AppFeature(props) {
    return (
        <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
            <div className="media-body text-right media-right-margin">
                <h5>{props.featureName}</h5>
                <p>{props.featureCharacteristics}</p>
            </div>
            <div className="media-right icon-border"> <span className="fa fa-bolt" aria-hidden="true"></span> </div>
        </div>
    );
}