import { AvaliacaoLetraEnum } from "./avaliacao-letra.enum.js";
export class Termo {
    constructor() {
        this.palavraSecreta = "";
        this.tentativas = 0;
        this.palavraSecreta = this.obterPalavraAleatoria();
    }
    avaliar(palavra) {
        if (palavra.length !== 5)
            return null;
        this.tentativas++;
        const avaliacoes = new Array(palavra.length);
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === this.palavraSecreta[i])
                avaliacoes[i] = AvaliacaoLetraEnum.Correta;
            else if (this.palavraSecreta.includes(palavra[i]))
                avaliacoes[i] = AvaliacaoLetraEnum.PosicaoIncorreta;
            else
                avaliacoes[i] = AvaliacaoLetraEnum.NaoExistente;
        }
        if (avaliacoes.every(a => a === AvaliacaoLetraEnum.Correta)) {
            this.mensagemFinal = `Você acertou a palavra ${this.palavraSecreta}, parabéns!`;
        }
        else if (this.jogadorPerdeu()) {
            this.mensagemFinal = `Você perdeu! A palavra era ${this.palavraSecreta} :-( tente novamente...`;
        }
        return avaliacoes;
    }
    jogadorAcertou(palavra) {
        return palavra === this.palavraSecreta;
    }
    jogadorPerdeu() {
        return this.tentativas === 5;
    }
    obterPalavraAleatoria() {
        const palavras = [
            "ABRIR",
            "AMIGO",
            "BEBER",
            "BOLDO",
            "CAIXA",
            "CASAL",
            "CORPO",
            "DEDOS",
            "DENTE",
            "DIZER",
            "ERROS",
            "FALAR",
            "FESTA",
            "FOGAO",
            "GANHO",
            "GIRAR",
            "GRITO",
            "HORAS",
            "JOGOS",
            "JULHO",
            "LIMAO",
            "LOUCO",
            "MACAS",
            "MAIOR",
            "MELAO",
            "MOLHO",
        ];
        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];
    }
}
//# sourceMappingURL=termo.js.map