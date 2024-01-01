import React from 'react';

const Post = () => {
    const sum=(a:number,b:number)=>{
        return a+b
    }
    return (
        <div>
            <h1>Post3333</h1>
            <button onClick={()=>sum(2,9)}></button>
        </div>
    );
};

export default Post;