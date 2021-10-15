// import { getCars } from '../src/services/fakeCarSelectService';
// import { useEffect, useState } from 'react';
import React from "react";

// export default function DataList() {

//     let [list, setList] = useState([])

//     useEffect(() => {
//         data = getCars()
//         setList(data)
//     }, [])

//     return (
//         <datalist id="locations">
//             {list.map(i => <option key={i._id} value={i.name}></option>)}
//         </datalist>
//     )
// }

// // [vc_row css_animation="" row_type="row" use_row_as_full_screen_section="no" type="full_width" angled_section="no" text_align="left" background_image_as_pattern="without_pattern"][vc_column width="1/3"][button size="small" target="_self" hover_type="default" text_align="center" button_shadow="yes" text="Private Quote" color="#ffffff" hover_color="#dd3333" background_color="#faba13" border_radius="5" link="?page_id=153" margin="0px 0px 0px 30px"][/vc_column][vc_column width="1/6"][icon_text box_type="normal" icon="fa-phone-square" icon_type="normal" icon_position="left" icon_size="fa-3x" use_custom_icon_size="no" separator="no" title="+971(4)2365553"][/vc_column][vc_column width="1/6"][icon_text box_type="normal" icon="fa-envelope-square" icon_type="normal" icon_position="left" icon_size="fa-3x" use_custom_icon_size="no" separator="no" title="info@halosky.aero"][/vc_column][vc_column width="1/3"][button size="small" target="_self" hover_type="default" text_align="right" button_shadow="yes" text="Cargo Quote" color="#ffffff" hover_color="#dd3333" background_color="#faba13" border_radius="5" link="?page_id=153" margin="0px 0 0px 190px"][/vc_column][/vc_row][vc_row css_animation="" row_type="row" use_row_as_full_screen_section="no" type="full_width" angled_section="no" text_align="left" background_image_as_pattern="without_pattern" css=".vc_custom_1598893677148{margin-top: -10px !important;}" z_index=""][vc_column width="1/4"][/vc_column][vc_column width="1/2"][vc_column_text]
// // <p style="text-align: center;"><span style="color: #ffffff;"><strong>24/7/365 Available to our Clients</strong></span></p>
// // [/vc_column_text][/vc_column][vc_column width="1/4"][/vc_column][/vc_row] 


export default function DataList({ listItems, listname, onSelect }) {

    return (
        <datalist id={listname}>
            {listItems.map(i => <option key={i._id} value={i.name} label={i.name} >{i.name}</option>)}
        </datalist>
    )
}