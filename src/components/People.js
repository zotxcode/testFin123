import React, {useState, useRef} from "react";
import Swal from "sweetalert2";

import {
  ReactComponent as HappyFace
} from "../assets/7-icons/happy-face.svg";

import person1 from "../assets/4-people/gaetan-houssin.jpg";
import person2 from "../assets/4-people/nicolas-lebarreau.jpg";
import person3 from "../assets/4-people/jerome-mahuet.jpg";
import person4 from "../assets/4-people/manuela-faveri.jpg";
import person5 from "../assets/4-people/darlene-chabrat.jpg";
import person6 from "../assets/4-people/romane-regad.jpg";
import person7 from "../assets/4-people/tania-ferreira.jpg";

function People() {
  const displayPic = useRef(null);
    const [action, setAction] = useState("none");
    let [tempPeople, setTempPeople] = useState({
      name: "",
      image: null,
      position: "",
      desc: "",
    });
    const [people, setPeople] = useState([
      { image: person1, name: "Frank Ltarnam", position: "CEO", desc: "" },
      {
        image: person2,
        name: "Bob Shefley",
        position: "UI/UX Designer",
        desc: "",
      },
      {
        image: person3,
        name: "Jason Stewars",
        position: "Full-stack Developer",
        desc: "",
      },
      {
        image: person4,
        name: "Sabrina Rachel",
        position: "Marketing",
        desc: "",
      },
      {
        image: person5,
        name: "Marisa Lawren",
        position: "Customer Support",
        desc: "",
      },
      {
        image: person6,
        name: "Romane Regard",
        position: "Jr UI/UX Designer",
        desc: "",
      },
      {
        image: person7,
        name: "Tania Ferreira",
        position: "Business Analyst",
        desc: "",
      },
    ]);

  const PersonFrame = ({image, name, position, index}) => {
    return (
      <div
        onClick={() => ShowPopUp({index: index})}
        id={"person" + index}
        className="person shadow-sm rounded m-4 w-calc-5 text-center position-relative"
      >
        {action !== "editDel" && (
          <span onClick={() => handleShow({ act: "edit", index: index })}>
            <i className="ico-pencil"></i>
          </span>
        )}
        {action === "editDel" && (
          <label htmlFor={"radio" + index}>
            <input
              id={"radio" + index}
              onChange={() => handleRadioChange({ index: index })}
              type="radio"
              name="people[]"
            />
          </label>
        )}
        {image ? (
          <div
            className="people-frame"
            style={{ backgroundImage: "url(" + image + ")" }}
          >
            &nbsp;
          </div>
        ) : (
          <div className="people-frame">&nbsp;</div>
        )}
        <div className="name pt-1">{name}</div>
        <div className="position pb-1">{position}</div>
      </div>
    );
  };

  const GetActionButton = (props) => {
    if (props.act === 'editDel') {
      return (
        <div>
          <button className="btn btn-cancel" onClick={() => setAction("none")}>cancel</button>
          <button className="btn " onClick={() => deletePerson()}><i className="ico-trash"></i></button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn btn-edit mr-2" onClick={() => setAction("editDel")}>edit</button>
          <button className="btn btn-add" onClick={() => handleShow({ act: "add", index: people.length })}>
            add
          </button>
        </div>
      );
    }
  };

  const deletePerson = () => {
    people.splice(tempPeople.index, 1);
    setPeople(people);
    handleClose();
  }

  const handleRadioChange = (props) => {
    const p = {...people};
    const person = p[props.index];
    person['index'] = props.index 
    setTempPeople(person);
  }

  const saveChanges = () => {
    const tmp = {...tempPeople};
    const i = tmp.index;
    delete tmp['index'];
    if (action === 'edit') {
      people[i] = tmp;
      console.log('after save people');
      console.log(people);
    } else {
      people.push(tmp);
    }
    handleClose();
  }

  const handleClose = () => {
    tempPeople = setTempPeople({
      name: "",
      image: null,
      position: "",
      desc: "",
    });
    setAction('none');
  };
  const handleShow = (props) => {
    if (props.act === 'edit') {
      let p = {...people};
      let tmp = p[props.index];
      tmp.index = props.index;
      setTempPeople(tmp);
      setAction("edit");
    } else {
      setTempPeople({name: '', image: null, position: '', desc: '', index: props.index});
      setAction("add");
    }
  };

  const removeImage = (props) => {
    const tmp = {...tempPeople, image: null};
    setTempPeople(tmp);
    console.log(tempPeople);
    displayPic.current.style = {};
  }

  const changeImage = (e) => {
    let tmp = {...tempPeople}
    var reader = new FileReader();
    reader.onload = function (upload) {
      tmp.image = upload.target.result;
      setTempPeople(tmp);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const RenderModal = () => {
    const showHideClass =
      (action === "edit") | (action === "add") ? "show d-block" : "hide d-none";
    return (
      <div>
        <div
          onClick={() => handleClose()}
          className={"fade modal-backdrop " + showHideClass}
        ></div>
        <div
          role="dialog"
          aria-modal={true}
          className={"fade modal " + showHideClass}
          tabIndex="-1"
        >
          <div
            role="document"
            className="modal-dialog"
            style={{ display: "block", paddingLeft: "15px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title h4 text-blue">{action} people</div>
                <button
                  onClick={() => handleClose()}
                  type="button"
                  className="close"
                >
                  <span aria-hidden="true">×</span>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group text-center">
                  <div
                    ref={displayPic}
                    style={
                      tempPeople.image
                        ? {
                            backgroundImage: "url(" + tempPeople.image + ")",
                            backgroundSize: "cover",
                          }
                        : {}
                    }
                    className="people-img-wrap rounded-circle bg-blue-2 m-auto d-inline-block position-relative"
                  >
                    <label
                      className="ico-pencil-2 rounded-circle p-2 shadow"
                      htmlFor="file"
                    ></label>
                    <input
                      onChange={(e) => changeImage(e)}
                      className="d-none"
                      id="file"
                      type="file"
                      encType="multipart/form-data"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="deletePhoto" onClick={() => removeImage()}><i className="ico-trash"></i>Delete Picture</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-blue" htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    defaultValue={tempPeople.name}
                    onBlur={(e) =>
                      setTempPeople({ ...tempPeople, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="text-blue" htmlFor="position">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    placeholder="Enter position"
                    defaultValue={tempPeople.position}
                    onBlur={(e) =>
                      setTempPeople({ ...tempPeople, position: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label className="text-blue" htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter description"
                    defaultValue={tempPeople.desc}
                    onBlur={(e) =>
                      setTempPeople({ ...tempPeople, desc: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-cancel mr-2" onClick={() => handleClose()}>Cancel</button>
                <button className="btn btn-save" onClick={() => saveChanges()}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const ShowPopUp = (props) => {
    const person = people[props.index];
    Swal.fire({
      html:
        '<div class="d-flex"><div><img src="' +
        person.image +
        '" /></div>' +
        '<div class="text-left p-3"><h5 class="name">' +
        person.name +
        '</h5><h6 class="position font-weight-light">' +
        person.position +
        "</h6><br><br>" +
        '<p class="description">' +
        person.desc +
        "</p></div></div>",
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: false,
    });
  }

  return (
    <div className="my-5">
      <div className="mb-5 d-flex">
        <div className="mx-3 ">
          <div className="p-3 rounded-circle bg-pink pink-icon-shadow">
            <HappyFace fill="white" />
          </div>
        </div>
        <div className="col-md-5">
          <h2 className="display-5 font-weight-bold text-blue">
            Our important people is listed here
          </h2>
        </div>
        <div className="flex-grow-1 text-right">
          <GetActionButton act={action} />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {people.map((value, index) => {
          return (
            <PersonFrame
              key={"people" + index}
              image={value.image}
              name={value.name}
              position={value.position}
              index={index}
            />
          );
        })}
      </div>

      <RenderModal />

      
    </div>
  );
}


export default People;
