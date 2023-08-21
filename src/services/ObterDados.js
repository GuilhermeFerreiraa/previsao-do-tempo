import axios from "axios";

class DadosDaPrevisao {
  constructor() {
    this.baseUrl = "/api/v1/forecast/locale/6754/days/15";
  }

  async obterDados() {
    const parametros = {
      method: "GET",
      params: { token: "f8d367bbf613624394fd1ae1d27ce608" },
    };

    try {
      const resposta = await axios.get(this.baseUrl, parametros);
      return resposta.data;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default new DadosDaPrevisao();
