import React from 'react';

const Sidebar = ({selectedTab , setselectedTab}) => {

  // const handelOnClick = (tabName) => 
  // {
  //   setselectedTab(tabName);
  // }
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-dark sidebar" style={{ width: '200px' }}>
      <a Href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
      <li
          className="nav-item"
          onClick={() => {
            setselectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-black ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        
        <li className="nav-item" onClick={() => {setselectedTab("Add post")}}>
          <a Href="#" className={`nav-link link-body-emphasis ${selectedTab ==="Add post" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            Add post
          </a>
        </li>
        
       
      </ul>
      <hr />
      <div className="dropdown">
        <a Href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li><a className="dropdown-item" Href="#">New project...</a></li>
          <li><a className="dropdown-item" Href="#">Settings</a></li>
          <li><a className="dropdown-item" Href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" Href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
