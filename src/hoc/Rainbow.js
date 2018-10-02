import React from 'react';

const Rainbow = (WrappedComponent) => {
    const color = ['Red', 'Green', 'Blue'];
    const randomColor = color[Math.floor(Math.random() * 2)];
    const className = randomColor+'-text';
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default Rainbow;