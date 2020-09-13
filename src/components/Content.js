import React from "react";

import content1 from "../assets/3-content/content-001.png";
import content2 from "../assets/3-content/content-002.png";

function Content() {
  return (
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <img src={content1} className="img-fluid" alt="content 1" />
          </div>
          <div className="col-sm-12 col-md-4">
              <h2 className="display-5 font-weight-bold text-blue pb-3 pt-5">We can give you our best user experience to your system</h2>
              <p className="font-weight-normal text-secondary">Pellentesque porttitor egestas orci vel pretium. Sed ut rutrum magna. Suspendisse gravida diam nunc, eget lacinia diam maximus eget. Mauris sit amet ullamcorper felis, et pulvinar nisi. Nam pulvinar id purus sed blandit. Aenean tincidunt suscipit volutpat. Curabitur aliquam eros id libero varius lacinia. </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
              <h2 className="display-5 font-weight-bold text-blue pb-3 pt-5">We can give you our best user experience to your system</h2>
              <p className="font-weight-normal text-secondary">Pellentesque porttitor egestas orci vel pretium. Sed ut rutrum magna. Suspendisse gravida diam nunc, eget lacinia diam maximus eget. Mauris sit amet ullamcorper felis, et pulvinar nisi. Nam pulvinar id purus sed blandit. Aenean tincidunt suscipit volutpat. Curabitur aliquam eros id libero varius lacinia. </p>
          </div>
          <div className="col-sm-12 col-md-8">
            <img src={content2} className="img-fluid" alt="content 2" />
          </div>
        </div>
      </div>
  );
}


export default Content;