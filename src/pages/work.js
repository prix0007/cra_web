import React from 'react';
import Banner from "../components/Banner";
import Grid from "@material-ui/core/Grid";
import Meeting from "./work/meeting";
import Emergencies from "./work/emergencies";
import MatterOfConcern from "./work/matter_of_concern";
import WorkInProgress from "./work/work_in_progress";
import Completed from "./work/completed";

import {workData } from './tempData/work';
import ImageCard from "../components/ImageCard";

const work = ({pageState}) => {
    console.log(pageState);

    const getContent = () => {
        switch (pageState.work){
            case 1: return <Meeting />;
            case 2: return <Emergencies />;
            case 3: return <MatterOfConcern />;
            case 4: return <WorkInProgress />;
            case 5: return <Completed />;
            default: return <h1>Something Went Wrong Please Try Again</h1>
        }
    }

    return (
        <Grid container>

            {
                pageState.work === 0 ?
                    <Grid container>
                        <Banner heading={"Work"} />
                        <Grid container>
                            <Grid item xs={1} />
                            <Grid item xs={10} >
                                {
                                    workData.map((item, index) => {
                                        return (
                                            <ImageCard
                                                name={item.name}
                                                post={item.date}
                                                email={item.text}
                                                img={item.image}
                                                />
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                    </Grid>
                    :
                    getContent()
            }
        </Grid>
    )
}

export default work;