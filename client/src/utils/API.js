import axios from "axios";
import { CommentActions } from "semantic-ui-react";

export default {

  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  signup: function(signupInfo) {
    return axios.post("/api/users/", signupInfo);
  },

  update: function(updatedUser) {
    return axios.put(`/api/users/${updatedUser.id}`, updatedUser)
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout")
  },

  submitsurvey: function (survey) {
    console.log(survey)
    return axios.post("/api/surveys", survey)
  },

  // submitResult: function (id, freshResults) {
  //   console.log(freshResults)
  //   return axios.put(`/api/surveys/${id}`, freshResults)
  // },

  // getOne: function (id) {
  //   return axios.get(`/api/surveys/:${id}`)
  // },

  // getAll: function () {
  //   return axios.get("/api/surveys")
  // },

  // searchOne: function () {
  //   return axios.get("/api/surveys/:title")
  // }
};