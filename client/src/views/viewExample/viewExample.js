import React from 'react';
import { PostList } from '../../components'
import './viewExample.css';

const viewExample = () => {

//remember to always have a "parent" element that encloses all view components in it. :)
//if you don't do this your view won't render!

    return (
        <div className="parent">
            <h1>Hi, I'm just an example :) follow my flow!</h1>
            <PostList />
        </div>
    )

}

export default viewExample;