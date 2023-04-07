import './DisplayJson.css';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';
import { GroupuiList } from '@group-ui/group-ui-react';
import React from 'react';
import data from "./data";

applyPolyfills().then(() => {
    defineCustomElements();
});

function DisplayJson() {
    const socialMediaList = data.SocialMedias;
    return (

        <div>
            <div class="tabs-live-demo container-border">
                <groupui-tabs>
                    <groupui-tab tab="sction1" name="Section 1">
                        <ul>
                            {socialMediaList.map(s => (<li>{s}</li>))}
                        </ul>
                    </groupui-tab>
                    <groupui-tab tab="section2" name="Section 2">
                        {
                            data.Experiences.map((experience, i) => {
                                return (

                                    <div key={i}>
                                        <groupui-card elevation="0">
                                            <div>
                                                <div>
                                                    <a href={experience.url}>
                                                        <groupui-avatar theme="vwag" size="xl" image-source={experience.logo}></groupui-avatar>
                                                    </a>
                                                </div>
                                                <div>
                                                    <groupui-link variant="primary" quiet="false" href={experience.url}>{experience.companyName}</groupui-link>
                                                </div>
                                                {experience.roles.map(function (role, i) {
                                                    return <div key={i}>
                                                        <h5>{role.title}</h5>
                                                        <span>{role.startDate}</span>
                                                        <span>{role.location}</span>
                                                        <p>{role.description}</p>
                                                    </div>
                                                })}
                                            </div>
                                        </groupui-card>
                                        <groupui-divider></groupui-divider>
                                        <br></br>
                                    </div>
                                );
                            })
                        }

                    </groupui-tab>
                    <groupui-tab tab="section3" name="Section 3">
                        {
                            data.Skills.map((skill) => {
                                return (
                                    <div>
                                        <h4>{skill.Area}</h4>
                                        <GroupuiList>
                                            <ul>
                                                {
                                                    skill.SkillSet.map((skillDetail) => {
                                                        return (
                                                            <li>
                                                                {skillDetail.Name}
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </GroupuiList>
                                    </div>
                                );
                            })
                        }
                    </groupui-tab>
                </groupui-tabs>
            </div>

        </div>
    );
}

export default DisplayJson;