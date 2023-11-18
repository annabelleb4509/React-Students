import { Fragment, useState } from 'react'
import Score from './Score';

function Student ({ students }) {

    const studentInfo = students.map((s, index) => (
    <div
    student={s} 
    key={index}
    >
        <div 
            style={{
                fontWeight: "bold", 
            }}
        >
            <h2>Name: {s.name}</h2>
        </div>
        <div>{s.bio}</div>
        <Fragment>
        <h3>Score Details:</h3>
            <Score  scores={s.scores}/>
        </Fragment>
    </div>
    ));

    return (
        <>
            <div>{studentInfo} </div>
        </>
    );
}

export default Student;