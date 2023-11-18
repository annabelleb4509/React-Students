
function Score ({scores}) {

    const scoreDetails = scores.map((s, index) => (
    <div
    score={s} 
    key={index}
    >
        <div 
            style={{
                fontWeight: "bold", 
            }}
        >
            <span>Date: {s.date} &nbsp; &nbsp; Score: {s.score}</span>
        </div>
    </div>
  
    ));


    return (
        <div>
            {scoreDetails}
            <br></br>
        </div>
    );
};



export default Score