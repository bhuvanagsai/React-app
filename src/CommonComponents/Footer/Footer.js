import React, { Component } from "react";
import {
  SubcribeBtn,
  SubcribeContainer,
  FooterComponent,
  FooterLinks,
  Link,
  Line,
  FooterHeader,CopyRightContainer
} from "../Footer/Styles";
class Footer extends Component {
  state = {
    Archeive: [
      "June 2014",
      "July 2014",
      "August 2014",
      "September 2014",
      "November 2014",
    ],
    Recipes : ["Browse Recipes","Recipe Page","Submit Recipe"]
  };
  render() {
    return (
        <div>
            <div className="wrapper-margin" style={{ backgroundColor: "#333" }}>
                <div className="wrapper" style = {{padding: "15px"}}>
                    <FooterComponent width = "30%">
                        <FooterHeader>
                            <h3>About</h3>
                            <Line></Line>
                        </FooterHeader>
                        <p>
                        Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida
                        est fermentum vulputate. Pellentesque et ipsum in dui malesuada
                        tempus.
                        </p>
                    </FooterComponent>
                    <FooterComponent width="20%">
                        <FooterHeader>
                            <h3>Archives</h3>
                            <Line></Line>
                        </FooterHeader>
                        <FooterLinks>
                        {this.state.Archeive.map((p,index) => (
                            <li key = {index}>
                                <Link href = "">{p}</Link>
                            </li>
                        ))}
                        </FooterLinks>
                    </FooterComponent>
                    <FooterComponent width="20%">
                        <FooterHeader>
                            <h3>Recipes</h3>
                            <Line></Line>
                        </FooterHeader>
                        <FooterLinks>
                        {this.state.Recipes.map((p,index) => (
                            <li key = {index}>
                                <Link href = "">{p}</Link>
                            </li>
                        ))}
                        </FooterLinks>
                    </FooterComponent>
                    <FooterComponent width="30%">
                        <FooterHeader>
                            <h3>Newsletter</h3>
                            <Line></Line>
                        </FooterHeader>
                        
                        <p>
                        Sign up to receive email updates on new product announcements,
                        gift ideas, sales and more.
                        </p>
                        <SubcribeContainer>
                        <input placeholder="mail@example.com" type="text" title = "Enter the mail Id"/>
                        <SubcribeBtn>SUBSCRIBE</SubcribeBtn>
                        </SubcribeContainer>
                    </FooterComponent>
                </div>
            </div>
            <div className="wrapper-margin" style={{ backgroundColor: "#2a2a2a",marginTop:"0px"}} >
                <div className = "wrapper" >
                    <CopyRightContainer>© Copyright 2014 by <a href=" ">Chow</a>. All Rights Reserved.</CopyRightContainer>
                </div>
            </div>
        </div>
    );
  }
}
export default Footer;
