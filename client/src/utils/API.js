import axios from "axios";
import { CommentActions } from "semantic-ui-react";

export default {

  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  update: function(updatedUser) {
    return axios.put(`/api/users/${updatedUser._id}`, updatedUser)
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout")
  }
};