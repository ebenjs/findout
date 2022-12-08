<template>
  <div class="row h-100">
    <div
      class="col-lg-6 mx-auto text-center h-100 d-flex flex-column align-items-center justify-content-center"
    >
      <p class="h2 text-white site-name">Findout</p>
      <p class="site-desc">
        Massa tincidunt nunc pulvinar sapien et. Lectus arcu bibendum at varius.
        Ipsum dolor sit amet consectetur adipiscing.
      </p>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="acceptedTerms"
        />
        <label class="form-check-label text-white">
          J'accepte les
          <span
            class="terms-text"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >termes et conditions d'utilisation</span
          >
        </label>
      </div>
      <div class="input-group mt-5 pb-5 w-50">
        <input
          type="text"
          class="form-control pseudo-input"
          placeholder="Pseudo"
          aria-label="Pseudo"
          aria-describedby="button-addon2"
          v-model="username"
        />
        <button
          class="btn btn-warning"
          type="button"
          id="button-addon2"
          @click="handleUsernameSubmit"
        >
          Rejoindre
        </button>
      </div>
      <div
        v-if="errors.length > 0"
        class="alert alert-danger text-left mt-2"
        role="alert"
      >
        <h3>Erreur</h3>
        <p>Impossible d'accéder à la page en raison des erreurs suivantes :</p>
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error.message }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade modal-lg"
    id="exampleModal"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Conditions d'utilisations
          </h1>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          placerat scelerisque dolor, non pharetra dolor mollis sed. Quisque vel
          aliquam metus. Nulla bibendum facilisis elit quis hendrerit. Sed
          pellentesque maximus ipsum, vitae efficitur mi ullamcorper in. Nunc
          vitae laoreet erat, vel rhoncus tortor. Fusce dignissim velit urna,
          cursus semper risus gravida quis. Duis eu erat nec mauris consectetur
          vulputate at ac diam. Nunc gravida finibus ex rhoncus pellentesque. In
          aliquet tempus mi, quis lacinia mi sodales sit amet. Mauris gravida
          erat sed tellus eleifend, eu volutpat arcu efficitur. Phasellus
          vehicula sapien quis porta rutrum. Mauris vitae velit non purus tempus
          suscipit. Phasellus vitae interdum turpis. Vestibulum posuere, elit
          vitae sollicitudin varius, lacus augue hendrerit velit, quis finibus
          quam massa ac tortor. Sed et lacus sem. Morbi dignissim gravida mauris
          in fringilla. Nulla in pellentesque nibh. Donec sed nulla auctor,
          consectetur mi id, rhoncus neque. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Ut id dui in
          erat pharetra aliquam. Nunc condimentum, risus et volutpat porttitor,
          lacus felis placerat ligula, vitae pharetra nisl diam eu ipsum. Aenean
          condimentum ac orci nec ultrices. Nunc quis porttitor nisl. Sed
          elementum nulla nisl, et mollis enim feugiat a. Praesent tristique
          pulvinar dolor ac ultricies. Sed nec sollicitudin quam. Sed imperdiet
          ante non risus scelerisque tempor. Nunc at vestibulum tellus.
          Suspendisse sodales ante a nisi commodo pretium. Maecenas finibus
          faucibus ullamcorper. Duis pulvinar risus id nunc malesuada imperdiet.
          Maecenas aliquam sit amet arcu pellentesque ullamcorper. Vivamus ut
          interdum ante, non fermentum tortor. Donec feugiat in nibh eget
          scelerisque. Curabitur sodales eleifend nisl non ullamcorper.
          Pellentesque at finibus ligula, ac semper est. Morbi id tristique
          lectus, sit amet dapibus mauris. Phasellus nec lacus ac nisi dictum
          pretium. Morbi et purus dolor. Suspendisse ullamcorper pharetra sem
          nec facilisis. Etiam ornare eros sed libero faucibus ornare. Sed
          venenatis massa dignissim sodales malesuada. Praesent tempor ligula at
          eros faucibus, vitae lacinia nibh volutpat. Curabitur sapien massa,
          pharetra id facilisis vitae, sagittis et mi. Fusce a facilisis dui.
          Phasellus congue blandit consequat. In volutpat tempus enim nec
          viverra. Nulla euismod placerat ante sed scelerisque. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec faucibus quam
          magna, in luctus lectus maximus eu. Ut ac ex pretium, tempor dolor
          vitae, facilisis felis. Donec sit amet erat fermentum, tincidunt elit
          vel, sollicitudin diam. In luctus ultrices arcu, interdum ultricies
          velit semper a. Proin sed fringilla mauris. Vestibulum erat ex,
          vulputate ac lobortis id, rutrum non dui. Pellentesque nisl quam,
          consequat vel vulputate sagittis, consequat nec libero. Nam tincidunt
          sem sed mi maximus elementum. Nulla a interdum nisi. Nullam mattis
          tellus vel mauris bibendum dictum. Aliquam varius, lorem eget semper
          viverra, leo nisi sagittis lorem, in dapibus urna nibh condimentum
          nibh. Curabitur ut blandit leo.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-bs-dismiss="modal">
            Sortir
          </button>
          <button type="button" class="btn btn-warning">Entrer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      userStore: useUserStore(),
      username: "",
      formCorrect: false,
      acceptedTerms: false,
      errors: [],
    };
  },
  methods: {
    handleUsernameSubmit() {
      this.errors = [];
      if (!this.username.trim().length > 0) {
        this.errors.push({ message: "Le pseudo est requis" });
      }
      if (!this.acceptedTerms) {
        this.errors.push({
          message: "Vous devez accepter les termes et conditions",
        });
      }
      if (!this.errors.length > 0) {
        this.userStore.setUser(this.username);
        this.$router.push({
          name: "findout",
          params: {
            user: this.username,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.site-name {
  color: #ffffff;
  font-size: 4.25em;
  font-weight: 200;
}
.site-desc {
  color: rgba(255, 255, 255, 0.361);
  font-size: 2em;
  font-weight: 200;
}

.pseudo-input,
.pseudo-input:focus {
  background-color: rgba(255, 255, 255, 0);
  height: 3.625rem;
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

.pseudo-input:focus {
  outline: none !important;
  box-shadow: none;
  border: solid 0.1px #ffc720;
}

#button-addon2 {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.terms-text {
  cursor: pointer;
  color: aquamarine;
}

.alert {
  background-color: inherit;
  color: rgb(255, 53, 53);
  border: solid 0.1px rgba(255, 53, 53, 0.8);
}
</style>
