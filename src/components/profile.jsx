import React, { Component } from 'react';
import Input from './common/input';
import Form from './common/form';

class Profile extends Form {
    state = {}
    render() {
        return (
            <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="rounded-circle mt-5" width="150px" alt="Human" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                    <span className="font-weight-bold">Name</span>
                    <span className="text-black-50">Email</span>
                    <span> </span>
                </div>
            </div>
        );
    }
}

export default Profile;


// const Profile = ({ user }) => {
//     console.log(user)

//     const x = { ...user }
//     console.log(x.email)
//     return (
//         <div className="container rounded bg-white mt-5 mb-5">
//             <div className="row">
//
//                 </div>
//                 <div className="col-md-6 border-right">
//                     <div className="p-3 py-5">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <h4 className="text-right">Profile Settings</h4>
//                         </div>
//                         <div className="row mt-2">
//                             <div className="col-md-6"><label className="labels">Name</label>
//                                 <Input type="text" className="form-control" placeholder="first name" value={x.name} />
//                             </div>
//                             <div className="col-md-6"><label className="labels">Mobile Number</label>
//                                 <Input type="text" className="form-control" placeholder="Enter mobile number" value={x.mobile} />
//                             </div>
//                         </div>
//                         <div className="row mt-3">
//                             <div className="col-md-6"><label className="labels">Country</label>
//                                 <Input type="text" className="form-control" placeholder="Enter Country" value="" />
//                             </div>
//                             <div className="col-md-6"><label className="labels">State/Region</label>
//                                 <Input type="text" className="form-control" value={x.name} placeholder="state" />
//                             </div>
//                         </div>
//                         <div className="row mt-3">
//                             <div className="col-md-8"><label className="labels">Address Line</label>
//                                 <Input type="text" className="form-control" placeholder="Enter Address Line" value={x.address} />
//                             </div>
//                             <div className="col-md-4"><label className="labels">Postcode</label>
//                                 <Input type="text" className="form-control" placeholder="Enter postcode" value="" />
//                             </div>
//                             <div className="col-md-4"><label className="labels">Area</label>
//                                 <Input type="text" className="form-control" placeholder="Enter area" value="" />
//                             </div>
//                             <div className="col-md-8"><label className="labels">Email ID</label>
//                                 <Input type="text" className="form-control" value={x.email} placeholder="email" />
//                             </div>
//                         </div>
//                         <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="p-3 py-5">
//                         <div className="d-flex justify-content-between align-items-center experience">
//                             <span>Selected Car</span>
//                             <span className="border px-3 p-1 add-experience">
//                                 <i className="fa fa-plus"></i>&nbsp;Add Car</span>
//                         </div><br />
//                         <div className="col-md-12"><label className="labels">Experience in Designing</label>
//                             <Input type="text" className="form-control" placeholder="experience" value="" />
//                         </div> <br />
//                         <div className="col-md-12"><label className="labels">Additional Details</label>
//                             <Input type="text" className="form-control" placeholder="additional details" value="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default Profile;
