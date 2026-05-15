// Sirf function ke brackets mein {} lagana hai
function ArrivalProp({ title, tagline }) { 
    return (
        <div className="new-arrival">
            <div className="text">
                <h6 className="gsp-text">{title}</h6>
                <h5 className="gsp-text">{tagline}</h5>
            </div>
        </div>
    );
}

export default ArrivalProp;