import axios from "axios";

class DadosDaPrevisao {
  constructor() {
    this.baseUrl =
      "https://i8t0ve2kdk.execute-api.us-east-2.amazonaws.com/api/v1";
  }

  async obterDados() {
    try {
      const resposta = await axios.get(this.baseUrl);
      return resposta.data;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default new DadosDaPrevisao();
