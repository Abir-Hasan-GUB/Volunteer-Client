import React from 'react';
import './ActiveUserList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const actionIconTrash = <FontAwesomeIcon icon={faTrashAlt} />

const ActivityUserList = (props) => {
    return (
        <div className="container userListInClmn">
           <div className="ListRow">
           <div className="row">
                <div className="col-md-3">
                    <span>{props.name}</span>
                </div>
                <div className="col-md-3">
                    <span>{props.email}</span>
                </div>
                <div className="col-md-2">
                    <span>{props.date}</span>
                </div>
                <div className="col-md-3">
                    <span>{props.description}</span>
                </div>
                <div className="col-md-1">
                    <span className="TrashIcon">{actionIconTrash}</span>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ActivityUserList;