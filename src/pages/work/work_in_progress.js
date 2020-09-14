import React from 'react';

import Grid from '@material-ui/core/Grid';
import Banner from "../../components/Banner";
import ExpandableView from "../../components/ExpandableView";

const progressData = [
    {
        name: "Removal of Large entries on main gate for Hostlers (Expected March End)",
        text: "As soon as our Hostel Website is released, the entrance gate entry will be cut short to only Enrollment Number and Signature."
    },
    {
        name: "Hostel Days (Started from 24 Jan 2020, spanning whole semester)",
        items: [
            "Cultural and Sports Committee of Council has decided to start a new series of events named  \"Hostel days\".",
            "The sole purpose of Hostel Days series is to create a fun environment in the Hostel.",
            "All the events of the Hostel Days series will remain open to all"
        ]
    },{
        name: "Hostel official Portal (Releasing last week February 2020, version 1.0)",
        text: "Hostel Website is currently under development and a beta version is released. The official release of website will be on 20 Feb 2020.",
        items: ["URL : iiitnhostel.tk"]
    },{
        name: "Complaint free floors (On-going, Deadline : last week of Mar 2020)",
        text: "Maintenance Committee along with Quick Response Committee (QRC) has decided to achieve Complaint free floors by end of March 2020.",
    },{
        name: "Hostel constitution (Ongoing)",
        text: "The Constitution of Hostel is under Review Process and is expected to be released in February",
    },
]

const WorkInProgress = () => {
    return (
        <Grid container>
            <Banner heading={"Work in Progress"} />
            <Grid item xs={1}/>
            <Grid item xs={10}>
                {
                    progressData.map((data) => {
                        return (
                            <ExpandableView
                                heading={data.name}
                                additionalText={data.text}
                                items={data.items ? data.items : []}
                                />
                        )
                    })
                }
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    );
}

export default WorkInProgress