import React from "react";

const PageNotFound = () => {
  return (
    <div className=".d-flex .justify-content-center">
      <img src="https://i.imgur.com/QIxIKBH.png" className="container row col-lg-3 offset-lg-4" alt="ghost" />
      <div id="info" className="container row col-lg-7 offset-lg-2">
        <h2 className="offset-md-3">
          Error 404 This page could not be found.
        </h2>
        <h4>    
            Once alive and now dead, this ghost appears to have some unfinished
            business. Could it be with you? Or the treasure hidden under the
            floorboards of the old mansion in the hills that may never reach its
            rightful owner, a compassionate school teacher in Yorkshire.
        </h4>
        
      </div>
    </div>
  );
};
export default PageNotFound;
