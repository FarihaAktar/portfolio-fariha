import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";


const ProgressBar = ({bar}) => {
    return (
        <div>
            <div label="Fully controlled text animation using react-move">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={bar.end}
                    duration={1.3}
                    easingFunction={easeQuadInOut}
                    repeat
                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <div>
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                              animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({
                                        pathTransition: "none", pathColor: bar.path,
                                        trailColor: "#f0ebcc"
                                    })}
                                />
                                <div style={{ fontSize: 14, marginTop: -5, textAlign: 'center', marginTop: 10 }}>
                                    {bar.tool}
                                </div>
                            </div>
                        );
                    }}
                </AnimatedProgressProvider>
            </div>
        </div>
    );
};

export default ProgressBar;