<template>
  <div class="d-flex align-items-center px-5 pb-5 mt-5">
    <div class="flex-shrink-0">
      <img
        src="https://i.pravatar.cc/300"
        width="60"
        height="60"
        alt="avatar"
        class="rounded-circle img-thumbnail border-warning bg-warning"
      />
    </div>
    <div class="flex-grow-1 ms-3">
      {{ ask.question }}
      <div>
        -
        <br />
        <small class="d-flex">
          <span> {{ ask.author }} le {{ ask.datetime }} </span>
        </small>
      </div>
      <div>
        <span @click="handleRespondClick(ask)" class="reply-text">
          Répondre
          <span
            class="badge rounded-pill text-bg-warning ml-2"
            v-if="ask.responses.length > 0"
          >
            {{ ask.responses.length }}
          </span>
        </span>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade modal-xl text-black"
    id="replyModal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content pb-4">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Réponse</h1>
        </div>
        <div class="modal-body pb-5">
          <div class="row">
            <div class="col">
              <p class="h2">Important!</p>
              <p>
                Prenez toujours le soins de donner des réponses dans le respect
                des règles de la communauté. Le non respect de ces règles
                peuvent entrainer des sanctions précises. Ces conditions
                d'utilisation sont
                <span class="reply-text">disponibles ici</span>.
              </p>

              <textarea
                class="response-writting-zone w-100 mt-3"
                placeholder="Formulez votre réponse."
                v-model="response"
              ></textarea>
              <button
                type="button"
                class="btn btn-warning text-black mt-3 w-100"
                @click="handleResponseSubmit"
              >
                Ajouter une réponse
              </button>
            </div>
            <div class="col border-start border-color-black">
              <p class="lead">Demande de base</p>
              <p class="highlight p-3 rounded askedQuestionPlaceholder"></p>
              <p class="lead h3">Réponse(s) des pairs</p>
              <div v-if="currentAsk.responses">
                <div
                  v-for="(response, index) in currentAsk.responses"
                  :key="index"
                  class="d-flex align-items-center mt-5"
                >
                  <div class="flex-shrink-0">
                    <img
                      src="https://i.pravatar.cc/300"
                      width="60"
                      height="60"
                      alt="avatar"
                      class="rounded-circle img-thumbnail border-warning bg-warning"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    {{ response.response }}
                    <div>
                      <small class="d-flex">
                        <span>
                          {{ response.author }} le {{ response.datetime }}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>Aucune réponse pour le moment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";
import { Modal } from "bootstrap";

export default {
  props: ["ask"],
  data() {
    return {
      userStore: useUserStore(),
      response: "",
      currentAsk: { question: "", responses: [] },
    };
  },
  methods: {
    handleRespondClick(ask) {
      this.currentAsk = ask;
      let myModal = document.querySelector("#replyModal");
      const modalQuestionPlaceholder = myModal.querySelector(
        ".askedQuestionPlaceholder"
      );
      modalQuestionPlaceholder.textContent = `${this.currentAsk.question}`;
      let modal = new Modal(myModal);
      modal.show();
    },
    handleResponseSubmit() {
      let currentDate = new Date();
      console.log("current ask", this.currentAsk.question);
      console.log("current ask", this.currentAsk.responses);
      this.currentAsk.responses.push({
        response: this.response,
        author: this.userStore.user,
        datetime: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
      });
      this.response = "";
    },
  },
};
</script>

<style scoped>
.response-writting-zone,
.response-writting-zone:focus {
  background-color: rgba(255, 255, 255, 0);
  height: 180px;
  padding: 0 1.26875rem;
  line-height: calc(3.625rem - 2px);
  font-size: 1.125em;
  font-family: "Inter", sans-serif;
  letter-spacing: 0.025rem;
  font-weight: 300;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.2);
}
.reply-text {
  color: #ffc720;
  cursor: pointer;
}
.highlight {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
