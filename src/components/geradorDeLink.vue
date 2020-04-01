<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label for="">Número</label>
            <input type="text" class="form-control" v-model="input.numero" />
            <small>O número que irá receber as mensagens.</small>
          </div>
          <div class="form-group">
            <label for="">Mensagem</label>
            <input type="text" class="form-control" v-model="input.mensagem" />
            <small>O número que irá receber as mensagens.</small>
          </div>
        </form>
      </div>
      <div class="col-12" v-show="link.numero.length === 13">
        <textarea class="form-control" id="link" :value="link.url"></textarea>
        <button
          class="btn btn-block btn-primary"
          id="btn-copy"
          data-clipboard-target="#link"
        >
          Copiar</button
        ><a
          :href="link.url"
          target="_blank"
          class="btn btn-block btn-primary text-white"
        >
          Testar link
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
new ClipboardJS("#btn-copy");
export default {
  name: "geradorDeLink",
  data: function() {
    return {
      input: {
        numero: "",
        mensagem: ""
      }
    };
  },
  computed: {
    link: function() {
      let numero = this.input.numero.replace(/[^0-9]+/g, "");
      let mensagem = this.input.mensagem.replace(/ /g, "%20");
      let url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
      return { url, numero };
    }
  }
};
</script>
