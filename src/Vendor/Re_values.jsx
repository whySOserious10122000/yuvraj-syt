import * as Yup from 'yup';

export const login = Yup.object({
    fname: Yup.string().min(2).max(20).required("Please Enter your First Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    area: Yup.string().min(2).max(20).required("Please Enter your area"),
    pincode: Yup.string().min(2).required("please enter your pincode"),
    country: Yup.string().required("Please Select your country"),
    address: Yup.string().min(2).max(20).required("Please Enter your address"),
    skype: Yup.string().email().required("Please Enter Your skype id"),
    city: Yup.string().required("Please Enter your city"),
    State: Yup.string().required("Please Select your state"),
    mobile: Yup.string().max(10).required("Please Enter your Number "),
    phone : Yup.string().max(10).required("Please Enter your Number "),

    // registation-2

    aname: Yup.string().min(2).max(20).required("Please Enter your agency Name"),
    fax: Yup.string().min(2).max(20).required("Please Enter your fax"),
    year: Yup.string().required("Please Select your Years in Business*"),
    tds: Yup.string().required("Please Select your Years in Business*"),
    panimg: Yup.string().required("Please attach Pan card Image"),
    url: Yup.string().min(2).max(20).required("Please Enter your Website url"),
    optional: Yup.string().min(2).max(20).required("Please Enter your data"),
    optional1: Yup.string().min(2).max(20).required("Please Enter your data"),
    pcard: Yup.string().min(2).max(20).required("Please Enter pan no"),
    State1: Yup.string().min(2).max(20).required("Please Enter your State"),
    alogo: Yup.string().required("Please attach agency Logo*"),
    btype: Yup.string().required("Please Select your Business Type"),
    smode: Yup.string().required("Please Select your Securitization Mode"),
    mbook: Yup.string().required("Please Select your Monthly Booking Volume"),
    tds1: Yup.string().required("Please Select your tds"),
    optional3: Yup.string().min(2).max(20).required("Please Enter your data"),
    city1: Yup.string().required("Please Select your city"),


    // registation-3

    gst: Yup.string().min(2).max(20).required("Please Enter your agency GSTIN"),
    cperson: Yup.string().min(2).max(20).required("Please Enter your contact person"),
    cemail: Yup.string().email().required("Please Enter Your correspondence mail ID"),
    code: Yup.string().min(2).max(20).required("Please Enter your code"),
    stype: Yup.string().required("Please Select your supply type"),
    AClassification: Yup.string().required("Please Select your agency classification"),
    gst1: Yup.string().min(2).max(20).required("Please Enter your gst no"),
    gststatus: Yup.string().required("Please Select your agency classification"),
    address1: Yup.string().min(2).max(20).required("Please Enter your address"),

    // registation-3

    name: Yup.string().min(2).max(20).required("Please Enter your  Name"),
    rcode: Yup.string().min(2).max(20).required("Please Enter your Refferal Code"),
    password: Yup.string().min(2).max(8).required("Please Enter your password"),

    // registation-4

    pid: Yup.string().min(2).max(20).required("Please Enter your Package ID"),
    Gender: Yup.string().min(2).max(20).required("Please Enter your Gender"),
    pname: Yup.string().min(2).max(20).required("Please Enter your Package Name"),
    Category: Yup.string().min(2).max(20).required("Please Enter your Category"),
    Category1: Yup.string().required("Please select your Category"),
    panimg1: Yup.string().required("Please attach Pan card Image"),
    
    // registation-5

    Location: Yup.string().required("Please select your Location"),
    Location1: Yup.string().required("Please select your Location"),
    Hotel: Yup.string().required("Please select your Hotel"),
    Hotel1: Yup.string().required("Please select your Hotel"),
    HotelType: Yup.string().required("Please select your Hotel Type"),
    HotelType1: Yup.string().required("Please select your Hotel Type"),
    days: Yup.string().required("Please select your days"),
    YN5: Yup.string().required("Please select anny one"),
    YN4: Yup.string().required("Please select anny one"),
    YN3: Yup.string().required("Please select anny one"),
    YN2: Yup.string().required("Please select anny one"),
    YN1: Yup.string().required("Please select anny one"),
    YN: Yup.string().required("Please select anny one"),

    // registation-5

    lname: Yup.string().min(2).max(20).required("Please Enter your Last Name"),

    // registation-6

    pass: Yup.string().min(2).max(8).required("Please Enter your Old Password"),
    npass: Yup.string().min(2).max(8).required("Please Enter your New Password"),
    cnpass: Yup.string().min(2).max(8).required("Please Enter your Confirm New Password"),
    
    // registation-6
    
    Departure: Yup.string().min(2).max(8).required("Please Enter yourDeparture"),
});

