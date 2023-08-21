import axios from "axios";
class DadosDaPrevisao {
  constructor() {
    // this.producao_url =
      // "https://i8t0ve2kdk.execute-api.us-east-2.amazonaws.com/api/v1";
    this.local = "/api/v1/forecast/locale/6754/days/15";
  }

  async obterDados() {
    const parametro = {
      method: "GET",
      params: { token: "f8d367bbf613624394fd1ae1d27ce608" },
      headers: { "Content-Type": "application/json" },
    };

    try {
      const resposta = await axios.get(this.local, parametro);
      return resposta.data;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default new DadosDaPrevisao();
