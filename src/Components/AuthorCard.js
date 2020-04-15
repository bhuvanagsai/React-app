import React, { Component } from "react";
import {AuthorImageContainer,AuthorContact,AuthorDetails,AuthorInfo} from './Styles';

class Author extends Component {
  render() {
    return (
      <AuthorContact>
          <AuthorDetails>
              <AuthorInfo color = "#8dc63f" fontWeight = "600" fontSize = "13px">AUTHOR</AuthorInfo>
              <AuthorInfo color = "#606060" fontWeight = "700" fontSize = "20px">Sandra Fortin</AuthorInfo>
          </AuthorDetails>
          <AuthorImageContainer src = {require("../Assets/author-photo.jpg")} alt = "author image" />
          <a href= "Author_image">sandra@chow.com</a>
          <p>I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</p>
      </AuthorContact>
    );
  }
}
export default Author;
