import React, { Component } from "react";
import {AuthorImageContainer,AuthorContact,AuthorDetails,AuthorInfo,AuthorName} from '../AuthorCard/Styles';

class Author extends Component {
  render() {
    return (
      <AuthorContact>
          <AuthorDetails>
              <AuthorInfo>AUTHOR</AuthorInfo>
              <AuthorName>Sandra Fortin</AuthorName>
          </AuthorDetails>
          <AuthorImageContainer src = {require('../../assets/author-photo.jpg')} alt = "author image" />
          <a href= "Author_image">sandra@chow.com</a>
          <p>I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</p>
      </AuthorContact>
    );
  }
}
export default Author;
