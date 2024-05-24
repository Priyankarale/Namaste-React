import React from 'react';
import ReactDom from 'react-dom';

const Parent=React.createElement('h1',{},"Hello From React Parcel");
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(Parent);