import React from 'react';
import Button from './Button';

const App = () => {
    let _styles={...style.default};
    if(props.disable){
            _styles={..._styles,...style.disable};
    }
    return (
        <div>
            <Button disabled/>
        </div>
    );
}

export default App;
