import React from "react";

function Test({ users }) {
    return (
        <>
            <h1>hi there</h1>
            {users.map(({ id, name, age }) => (
                <div key={id}>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                </div>
            ))}

        </>
    );
};

export default Test;