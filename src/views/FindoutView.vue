<template>
  <div class="row">
    <div class="col">
      <header class="text-white">
        <NavbarComponent></NavbarComponent>
      </header>
    </div>
  </div>
  <div class="container text-white">
    <div class="row pt-5">
      <div class="col">
        <p class="h1">Demandez un renseignement!</p>
        <p class="lead">L'endroit idéal pour poser toute sorte de questions.</p>
        <p>
          Redigez votre question en la saisissant dans le champs ci-dessous et
          en appuyant sur le bouton demander.
        </p>
        <textarea
          class="writting-zone w-100 mt-5"
          placeholder="Formulez votre demande"
          v-model="question"
        ></textarea>
        <button
          type="button"
          class="btn btn-warning btn-lg text-black mt-3 submit-button"
          @click="handleQuestionSubmit"
        >
          Demander
        </button>
        <div
          v-if="submittedQuestionStatus === 1"
          class="alert alert-success text-warning text-left mt-5"
          role="alert"
        >
          <p>
            Votre question a bien été enregistrée. Vous la retrouverez en bas
            des questions posées dans le volet de droite.
          </p>
          <ul>
            <li v-for="(error, index) in errors" :key="index">
              {{ error.message }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col px-5">
        <div class="px-5 questions-wrapper">
          <div v-if="asks.length > 0">
            <AskComponent v-for="(ask, index) in asks" :key="index" :ask="ask">
            </AskComponent>
          </div>
          <div class="" v-else>There were no values</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AskComponent from "../components/AskComponent.vue";
import NavbarComponent from "../components/NavbarComponent.vue";
import { useUserStore } from "../stores/user";

export default {
  props: {
    user: String,
  },
  data() {
    return {
      question: "",
      response: "",
      submittedQuestionStatus: 0,
      userStore: useUserStore(),
      asks: [],
      options: {
        height: "100%",
        size: 0,
      },
    };
  },
  methods: {
    handleQuestionSubmit() {
      let currentDate = new Date();
      this.asks.push({
        question: this.question,
        author: this.userStore.user,
        datetime: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
        responses: [],
      });
      this.submittedQuestionStatus = 1;
      this.question = "";
    },
  },
  components: { AskComponent, NavbarComponent },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0) !important;
  border-bottom: solid 1px rgba(100, 100, 100, 0.6);
  padding-top: 10px;
  padding-bottom: 10px;
}
.writting-zone,
.writting-zone:focus {
  background-color: rgba(255, 255, 255, 0);
  height: 200px;
  padding: 0 1.26875rem;
  line-height: calc(3.625rem - 2px);
  font-size: 1.125em;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.025rem;
  font-weight: 300;
  border-radius: 1rem;
  color: #ffffff;
  border: solid 1px rgba(255, 255, 255, 0.09);
}

.writting-zone:focus {
  outline: none !important;
  box-shadow: none;
  border: solid 0.1px #ffc720;
}

.writting-zone:focus {
  outline: none !important;
  box-shadow: none;
  border: solid 0.1px #ffc720;
}

.submit-button {
  border-radius: 1rem;
}

.questions-wrapper {
  max-height: 82vh;
  overflow: auto;
}

.alert {
  background-color: inherit;
  border: none;
  padding: 0px;
}

.alert-success {
  color: #ffc720 !important;
}

/* Scrollbar */

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
