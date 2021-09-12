import http from "../http-common";

class ReferralJoinService {
    list() {
      return http.post("/user-referral/list");
    }

    activate(referralCode) {
        return http.post(`/user-referral/activate/${referralCode}`)
    }
  
    get(userId) {
      return http.post(`/user-referral/get/${userId}`);
    }
  
    create(userId) {
      return http.post("/user-referral/create/${userId}");
    }
  
    delete(userId, data) {
      return http.delete(`/user-referral/${userId}`, data);
    }

  }
  
  export default new ReferralJoinService();