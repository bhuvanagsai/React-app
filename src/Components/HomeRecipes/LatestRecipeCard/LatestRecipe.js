import React, { Component } from "react";
import {
  HeadLine,
  RecipeLatestWrapper,
  HeaderContainer,
  CenterLine,
} from "./Styles";
import Search from "../../../CommonComponents/Search/Search";
import ViewType from "../ViewType";
import RecipeCard from "../RecipeCard/RecipeCards";
import { withRouter } from "react-router-dom";
import axios from "../../../axios/Axios_Recipe";
import Loader from '../../../CommonComponents/Loader/Loader';
class LatestRecipe extends Component {
  state = {
    Ratings: [null, null, null, null, null],
    Is_list: 0,
    view: 1,
    hover: -1,
    LatestRecipeContent :[],
    loading: false
  };
  componentDidMount(){
    axios.get("/Recipe.json").then((response) =>{
      this.setState({LatestRecipeContent :Object.values(response.data)});
    })
    if(this.state.LatestRecipeContent !== 0){
      setTimeout ( () => this.setState({loading: true})
    ,5000);
    }
  }
  SearchTextHandler = (event) =>{
    const { value } = event.target;
    const lowercasedValue = value.toLowerCase();
    this.handleSearchChange(lowercasedValue);
  }
  handleSearchChange = (lowercasedValue) => {
    this.setState(prevState => {
      const filteredData = prevState.LatestRecipeContent.filter(el =>
        el.RecipeName.toLowerCase().includes(lowercasedValue)
      );
      return{ filteredData};

    });
  };
  ViewHandler = () => {
    let listView = this.state.Is_list;
    let GridView = !this.state.Is_list;
    this.setState({ Is_list: !listView });
    if (listView || GridView) {
      this.setState({ view: !GridView });
    }
  };
  MouseEnterHandler = (id) => {
    this.setState({ hover: id });
  };
  MouseLeaveHandler = () => {
    this.setState({ hover: "-1" });
  };
  buttonHandler = (content) => {
    this.props.history.push({
      pathname: "Recipes",
      state: {
        RecipeData : content
      }
    });
  };
  render() {
    const {filteredData} = this.state;
    return (
      <div className="wrapper wrapper-margin">
        <RecipeLatestWrapper>
          <HeaderContainer>
            <HeadLine>Latest Recipes</HeadLine>
            <CenterLine></CenterLine>
          </HeaderContainer>
          <ViewType
            is_List={this.ViewHandler}
            viewStatus={this.state.view}
          ></ViewType>
          {this.state.loading === false ?  <Loader/> :
            <RecipeCard
              cardDetails={filteredData === undefined ?  this.state.LatestRecipeContent : filteredData}
              viewStatus={this.state.view}
              hover={this.state.hover}
              Ratings={this.state.Ratings}
              HoverImageIn={this.MouseEnterHandler}
              HoverImageOut={this.MouseLeaveHandler}
              buttonHandler={this.buttonHandler}
            />  
          }         
        </RecipeLatestWrapper>
        <Search filterdata = {this.state.LatestRecipeContent} SearchText = {this.SearchTextHandler}/>
      </div>
    );
  }
}
export default withRouter(LatestRecipe);
