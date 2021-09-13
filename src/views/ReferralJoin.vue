<script>
import TopNav from "@/components/TopNav.vue"

import ReferralJoinService from "@/services/ReferralJoinService";
import UserService from "@/services/UserService";

export default {
  setup(context, props) {
    console.log("ReferralJoin > script setup ...");
  },

  data() {
    return {
      profile: {
        referralCode: null,
        phone: null,
        email: null,
        gender: null,
        maritalStatus: null,
      },
    };
  },

  created() {
    console.log("created() ...");
    ReferralJoinService.list()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    onJoin() {
      console.log("onJoin() ...");
      console.log(this.profile);
      ReferralJoinService.activate(this.profile.referralCode)
        .then((response) => {
          if (response.data.id) {
            this.createUser();
          } else {
            console.log("Unable to activate.");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    createUser() {
      console.log("createUser() ...");
      console.log(this.profile);
      UserService.create(this.profile)
        .then((respone) => {
          console.log(respone);
        })
        .catch((e) => {
          console.log(e);
        });
    },

  },

  components: {
    TopNav
  }
};
</script>

<template>
  Referral Join
  <div>
    <label for="referralCode">Referral Code:</label>
    <input
      type="text"
      v-model="profile.referralCode"
      name="referralCode"
      placeholder="Referral Code"
    />
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input
      type="text"
      v-model="profile.phone"
      name="phone"
      placeholder="Phone Number"
    />
  </div>
  <div>
    <label for="email">Email:</label>
    <input
      type="email"
      v-model="profile.email"
      name="email"
      placeholder="Email Id"
    />
  </div>
  <div>
    <label for="gender">Gender:</label>
    <input
      type="radio"
      v-model="profile.gender"
      name="gender"
      value="male"
    />Male
    <input
      type="radio"
      v-model="profile.gender"
      name="gender"
      value="female"
    />Female
  </div>
  <div>
    <label for="maritalStatus">Marital Status:</label>
    <select v-model="profile.maritalStatus" name="maritalStatus">
      <option value="married">Married</option>
      <option value="unmarried">Unmarried</option>
    </select>
  </div>
  <div>
    <button @click="onJoin">Join</button>
  </div>
</template>
