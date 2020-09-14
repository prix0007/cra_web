import React from 'react';

import Grid from '@material-ui/core/Grid';
import Banner from "../../components/Banner";

import ExpandableView from "../../components/ExpandableView";

const meetingData = [
        {
            name: "Meeting 17 Jan 2020",
            additionalText: "Meeting Headed by General Secretary. Conclusion 17 Jan:",
            items : [
                    "C Wing Floor 3 and 0 : Supervised by Aman, Maintenance Secretary",
                    "B Wing Floor 3 and 2 : Supervised by Amit, Maintenance Secretary",
                    "B Wing Floor 1 and 0 : Supervised by Archit, Maintenance Secretary",
                    "C Wing Floor 1 and 2 : Supervised by Richa, Maintenance Councilor",
                    "Complaints must be solved within 24 hrs from Registration, after that higher authorities will be contacted",
                    "Modifications under Review of Mess Menu",
                    "Complaint Register is already present in mess, hostler just need to ask for that",
                   " Maintenance Committee decided to solve Morning Water Shortage problem",
                    "All the Maintenance Problems will be dealt efficiently and goal is Complaint free floors till 26 Jan 2020"
                ]
        },
        {
            name: "Meeting 19 Feb 2020",
            additionalText: "Meeting Headed by Maintenance Secretary (Aman Priyadarshi, 3rd Year)",
            items : [
                "Have a meeting with Shashi Sir",
            ]
        },
    ]

const Meeting = () => {
    return (
        <Grid container>
            <Banner heading={"Meetings"} />
            <Grid item xs={1} />
            <Grid item xs={10} >
                {
                    meetingData.map((data , index) => {
                        return (
                            <ExpandableView
                                heading={data.name}
                                additionalText={data.additionalText}
                                items={data.items}
                            />
                        )
                    })
                }
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}

export default Meeting