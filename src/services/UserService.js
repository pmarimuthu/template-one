import http from "../http-common";

class UserService {
    list() {
      return http.post("/user/list");
    }

    create(userBean) {
        return http.post(`/user/create`, userBean)
    }
    
  }
  
  export default new UserService();