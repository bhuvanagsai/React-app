import React, { Component } from "react";
import Input from "../Input/Input";
import axios from "../../axios/Axios_Recipe";
import styled from 'styled-components';
import Loader from '../../CommonComponents/Loader/Loader';
import { withRouter } from "react-router-dom";
const Button = styled.button`
    background-color: #8dc63f;
    padding:10px;
    height: auto;
    border: none;
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
    outline:none;
    margin-right: 10px;
    font-size:14px;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
`
class SubmitRecipe extends Component {
  state = {
    submitRecipeForm: {
      RecipeTitle: {
        label: "Recipe Title",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        initialValue :""
      },
      Category: {
        label: "Choose Category",
        elementType: "select",
        elementConfig: {
          options: [
            "All",
            "Breakfast",
            "Lunch",
            "Beverages",
            "Appetizers",
            "Soups",
            "Salads",
            "Beef",
            "Poultry",
            "Pork",
            "Vegetarian",
            "Seafood",
            "Vegetables",
            "Desserts",
            "Freezing",
            "Bread",
          ],
          type: "text",
          placeholder: "All",
        },
        value: "All",
        initialValue :"All"
      },
      Description: {
        label: "Description",
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        initialValue : ""
      },
      Ingredients: {
        label: "Ingredients",
        elementType: "multipleInput",
        elementConfig: {
          type: "text",
          placeholder: [
            "Name of ingredient",
            "Notes (quantity, additional info)",
          ],
        },
        value: [{ value1: "", value2: "" }],
        initialValue : [{ value1: "", value2: "" }]
      },
      Directions: {
        label: "Directions",
        elementType: "Directions",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: [{ value: "" }],
        initialValue: [{ value1: "", value2: "" }]
      },
      prepTime: {
        label: "Preparation Time",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        initialValue:""
      },
      Serves: {
        label: "Serves",
        elementType: "select",
        elementConfig: {
          type: "text",
          placeholder: "Select",
          options: [
            "2 peoples",
            "3 peoples",
            "4 peoples",
            "6 peoples",
          ],
        },
        value: "2 peoples",
        initialValue:""
      },
      cookingTime: {
        label: "Cooking Time",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        value: "",
        initialValue:""
      },
    },
    Dialog: 0,
    Errmsg: null,
    loader: false,
  };
  selectHandler = (data, InputIdentifier) => {
    const updatedRecipeForm = {
      ...this.state.submitRecipeForm,
    };
    const UpdatedFormElement = {
      ...updatedRecipeForm[InputIdentifier.id],
    };
    UpdatedFormElement.value = data;
    updatedRecipeForm[InputIdentifier.id] = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  FormValidation = () => {
    const formFiels = this.state.submitRecipeForm;
    for (const i in formFiels) {
      if (
        formFiels[i].value !== "" &&
        formFiels.Ingredients.value[0].value1 !== "" &&
        formFiels.Ingredients.value[0].value2 !== ""
      ) {
        this.setState({ Errmsg: 1 });
        return true;
      }
    }
    this.setState({ Errmsg: 0 });
    return false;
  };
  
  submitRecipeHandler = (form) => {
    if(this.state.loader === false){
      this.setState({loader:true})
       setTimeout ( () => this.setState({loader: false})
    ,5000);
    }
      const Ratings = [3, 5, 2, 4, 1];
      const imageurl = [
        "recipeThumb-01",
        "recipeThumb-02",
        "recipeThumb-03",
        "recipeThumb-04",
        "recipeThumb-05",
        "recipeThumb-06",
        "recipeThumb-07",
        "recipeThumb-08",
        "recipeThumb-09",
      ];
      const RecipeData = {
        RecipeImage: imageurl[Math.floor(Math.random() * imageurl.length)],
        RecipeName: this.state.submitRecipeForm.RecipeTitle.value,
        Description: this.state.submitRecipeForm.Description.value,
        prepTime: this.state.submitRecipeForm.prepTime.value,
        cooking: this.state.submitRecipeForm.cookingTime.value,
        Rating: Ratings[Math.floor(Math.random() * Ratings.length)],
        servings: this.state.submitRecipeForm.Serves.value,
        preparedBy: "BY SANDRA FORTIN",
        calories: "632 Kcal",
        ingredients: this.state.submitRecipeForm.Ingredients.value.map(
          (data) => {
            return [data.value2 + " " + data.value1].join();
          }
        ),
        directions: this.state.submitRecipeForm.Directions.value,
      };
      axios.post("/Recipe.json", RecipeData).then((response) => {

      })
  };
  inputChangedHandler = (event, InputIdentifier) => {
    const updatedRecipeForm = {
      ...this.state.submitRecipeForm,
    };
    const UpdatedFormElement = {
      ...updatedRecipeForm[InputIdentifier],
    };
    UpdatedFormElement.value = event.target.value;
    updatedRecipeForm[InputIdentifier] = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  IngradientHandler = (event, data, index) => {
    const updatedRecipeForm = {
      ...this.state.submitRecipeForm,
    };
    const UpdatedFormElement = {
      ...updatedRecipeForm.Ingredients,
    };
    const temp = [...UpdatedFormElement.value];
    const storeTemp = { ...temp[index] };
    if (data === "quantity") {
      storeTemp.value2 = event.target.value;
    } else if (data === "name") {
      storeTemp.value1 = event.target.value;
    }
    temp[index] = storeTemp;
    UpdatedFormElement.value = temp;
    updatedRecipeForm.Ingredients = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  addIngHandler = (data) => {
    const updatedRecipeForm = {
      ...this.state.submitRecipeForm,
    };
    const UpdatedFormElement = {
       ...updatedRecipeForm[data] 
    };
    const temp = [...UpdatedFormElement.value];
    temp.push({ value1: "", value2: "" });
    UpdatedFormElement.value = temp;
    updatedRecipeForm[data] = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  deleteIngredient = (index) => {
    const updatedRecipeForm = { 
      ...this.state.submitRecipeForm 
    };
    const UpdatedFormElement = { 
      ...updatedRecipeForm.Ingredients 
    };
    const temp = [...UpdatedFormElement.value];
    temp.splice(index, 1);
    UpdatedFormElement.value = temp;
    updatedRecipeForm.Ingredients = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  addDirectionsHandler = (data) => {
    const updatedRecipeForm = {
      ...this.state.submitRecipeForm 
    };
    const UpdatedFormElement = {
       ...updatedRecipeForm[data] 
    };
    const temp = [...UpdatedFormElement.value];
    temp.push({ value: "" });
    UpdatedFormElement.value = temp;
    updatedRecipeForm[data] = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  setDirections = (event, index) => {
    const updatedRecipeForm = {
      ...this.state.submitRecipeForm 
    };
    const UpdatedFormElement = {
      ...updatedRecipeForm.Directions 
    };
    const temp = [...UpdatedFormElement.value];
    const tempObj = { ...temp[index] };
    tempObj.value = event.target.value;
    temp[index] = tempObj;
    UpdatedFormElement.value = temp;
    updatedRecipeForm.Directions = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  deleteDirections = (index) => {
    const updatedRecipeForm = {
       ...this.state.submitRecipeForm 
    };
    const UpdatedFormElement = {
       ...updatedRecipeForm.Directions 
    };
    const temp = [...UpdatedFormElement.value];
    temp.splice(index, 1);
    UpdatedFormElement.value = temp;
    updatedRecipeForm.Directions = UpdatedFormElement;
    this.setState({ submitRecipeForm: updatedRecipeForm });
  };
  render() {
    let SubmitRecipeArr = [];
    for (let key in this.state.submitRecipeForm) {
      SubmitRecipeArr.push({
        id: key,
        config: this.state.submitRecipeForm[key],
      });
    }
    return (
      <div className="wrapper wrapper-margin" style={{ display: "block" }}>
        {this.state.loader === true ? <Loader/> :
          <form  onSubmit={this.submitRecipeHandler}>
            {SubmitRecipeArr.map((p) => (
              <Input
                key={p.id}
                elementType={p.config.elementType}
                label={p.config.label}
                elementConfig={p.config.elementConfig}
                value={p.config.value}
                changed={(event) => this.inputChangedHandler(event, p.id)}
                selected={(val) => this.selectHandler(val, p)}
                onFocus={this.state.Dialog}
                IngradientHandler={this.IngradientHandler}
                addIngHandler={() => {
                  this.addIngHandler(p.config.label);
                }}
                deleteIngredient={this.deleteIngredient}
                addDirections={() => {
                  this.addDirectionsHandler(p.config.label);
                }}
                setDirections={this.setDirections}
                deleteDirections={this.deleteDirections}
              />
            ))}
            <Button>Submit</Button>
          </form>
        }
      </div>
    );
  }
}
export default withRouter(SubmitRecipe);
