import React from 'react';
import './ActiveUserList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const actionIconTrash = <FontAwesomeIcon icon={faTrashAlt} />

const ActivityUserList = () => {
    return (
        <div className="container userListInClmn">
           <div className="ListRow">
           <div className="row">
                <div className="col-md-3">
                    <span>Abir Hasan</span>
                </div>
                <div className="col-md-3">
                    <span>abir.green.cse@gail.com</span>
                </div>
                <div className="col-md-2">
                    <span>10/12/2018</span>
                </div>
                <div className="col-md-3">
                    <span>Man Is Mortal</span>
                </div>
                <div className="col-md-1">
                    <span className="TrashIcon">{actionIconTrash}</span>
                </div>
            </div>
           </div>




           {/* <div className="one">
           <div className="row">
                <div className="col-md-3">
                    <span>Abir Hasa</span>
                </div>
                <div className="col-md-3">
                    <span>abir.green.cse@gail.com</span>
                </div>
                <div className="col-md-2">
                    <span>10/12/2018</span>
                </div>
                <div className="col-md-3">
                    <span>Man Is Mortal</span>
                </div>
                <div className="col-md-1">
                    <span>Delete</span>
                </div>
            </div>
           </div> */}
        </div>
    );
};

export default ActivityUserList;