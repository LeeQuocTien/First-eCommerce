import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useRef} from 'react';

import {  Breadcrumb,
          BreadcrumbItem,
        } from 'reactstrap';

export default function({pages}) {
  return (
    <div>
      <Breadcrumb className='custom-breadcrumb' listTag="div">
        {pages.map((page,idx) => (
          page.tag === 'a' ? 
          <BreadcrumbItem
            key={idx}
            href={page.name === "Home" ? "/" : `/${page.name}`}
            tag="a"
          >
            {page.name}
          </BreadcrumbItem> :
          <BreadcrumbItem
          key={idx}
          active
          tag="span"
        >
          {page.name}
        </BreadcrumbItem>
          
        ))}
      </Breadcrumb>
    </div>
  )
}