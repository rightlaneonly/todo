import React from 'react';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';

const CanvasPage = () =>
{
    return(
        <div id="canvas" className="Page">
            <PageTitle />
            <LoggedInName />
            <CardUI />
        </div>
    );
}

export default CanvasPage;
