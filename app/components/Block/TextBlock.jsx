import React, { useState } from 'react';

import Attachment from '../Attachment/Attachment';
import BlockTitle from "../BlockTitle/BlockTitle";
import BlockDescription from "../BlockDescription/BlockDescription";


import './block.scss'
// Icons
import BlockIcon from "./icons/quote-right.svg";
import TrashIcon from "./icons/trash-alt.svg";
import AngleIcon from "./icons/angle-up.svg";
import MarkIcon from "./icons/bookmark.svg";
import MarkFullIcon from "./icons/bookmark-full.svg";


export default function TextBlock(props) {
    const scaleid = "scale_" + props.block.timestamp;
    const checkid = "check_" + props.block.timestamp;

    const [scaling, setScaling] = useState(true);

    //fold or open the content of block
    const handleScaling = () => {
        if (scaling) {
            document.getElementById(scaleid).classList.remove("rotate-open");
            document.getElementById(scaleid).classList.toggle("rotate-close");
        } else {
            document.getElementById(scaleid).classList.remove("rotate-close");
            document.getElementById(scaleid).classList.toggle("rotate-open");
        }
        setScaling(!scaling);
    }

    return (
        <div id={props.block.timestamp} className="textBlock blockContent">
            <div className="borderLine"></div>
            <BlockTitle className="blockTitle" time={props.block.timestamp} onChangeTitle={props.handleTitle} title={props.block.title} />
            <button className="iconBtn removeBtn" onClick={props.delBlock.bind(this, props.block.timestamp)}><img src={TrashIcon}></img></button>
            <form className="checkContainer">
                <input className="check" id={checkid} type="checkbox" /><label className="checkmark" htmlFor={checkid}></label>
            </form>
            <div className="iconBtn markBtn">
                <img src={props.block.mark ? MarkFullIcon : MarkIcon} onClick={props.handleMark.bind(this, props.block.timestamp)}></img>
            </div>
            <div className="timeINFO date">{props.addDate}</div>
            <div className="timeINFO time">{props.addTime}</div>
            <div className="blockIcon"><img src={BlockIcon}></img></div>
            <button className="iconBtn scaleBtn" onClick={handleScaling}><img src={AngleIcon} id={scaleid}></img></button>
            {scaling &&
                <div className="blockMain">
                    <BlockDescription
                        description={props.block.description}
                        addDescription={props.addDescription}
                        time={props.block.timestamp}
                        handleLinker={props.handleLinker}
                    />
                    <Attachment
                        paths={props.block.paths}
                        time={props.block.timestamp}
                        addFile={props.addFile}
                        delFile={props.delFile}
                    />
                </div>
            }
        </div>
    )
}
