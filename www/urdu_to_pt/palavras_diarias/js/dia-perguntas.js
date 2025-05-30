// Tipos de perguntas suportados
const tiposPergunta = {
  MULTIPLA_ESCOLHA: 'multipla',
  MULTIPLA_ESCOLHA_AUDIO: 'multipla_audio',
  IMAGEM: 'imagem',
  IMAGEM_AREA: 'imagem_area',
  AUDIO: 'audio',
  FORMAR_PALAVRA: 'formar_palavra',
  TEXTO: 'texto'
};

// Configuração dos dias e suas perguntas
const diasConfig = {
    1: {
        titulo: "Água (پانی)",
        aoAcabarDia: {
            // irParaDia: 2,
            voltarPara: "dias.html?diaFinalizado=1"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/dia1som1.mp3",
                opcoes: ["Bolo", "Chá", "Água"],
                respostaCorreta: "Água"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz água em urdu?",
                opcoes: ["پانی", "ٹیولپ", "سورج مکھی", "سورج"],
                respostaCorreta: "پانی"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Água",
                letras: ["پ", "ا", "ن", "ی"],
                respostaCorreta: "پانی"
            },
            {
                tipo: tiposPergunta.IMAGEM_AREA,
                pergunta: "Onde está پانی?",
                imagem: "d1img1.jpg",
                areaCorreta: {
                    xMin: 0,  
                    yMin: 60,
                    xMax: 80,
                    yMax: 100
                }
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'O que é a palavra "پانی" em urdu?',
                imagens: ["aguad1.jpg", "cortaleaod1.jpg", "Vacad1.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    2: {
        titulo: "Autocarro/Bus (بس)",
        aoAcabarDia: {
            // irParaDia: 3,
            voltarPara: "dias.html?diaFinalizado=2"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz este audio?",
                audioSrc: "dia2.mp3",
                opcoes: ["بس", "گاڑی", "ٹیکسی"],
                respostaCorreta: "بس"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra "بس" é?',
                imagens: ["d2Busimg.jpeg", "d2Busimg2.jpeg", "d2Busimg3.jpeg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz autocarro em urdu?",
                opcoes: ["گاڑی", "بس", "وین", "ٹیکسی"],
                respostaCorreta: "بس"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Como se escreve autocarro em urdu?",
                letras: ["ب", "س"],
                respostaCorreta: "بس"
            }
        ]
    },
    3: {
        titulo: "Chuva (بارش)",
        aoAcabarDia: {
            // irParaDia: 4,
            voltarPara: "dias.html?diaFinalizado=3"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra em português é? بارش",
                opcoes: ["Inverno", "Trovoada", "Neve", "Chuva"],
                respostaCorreta: "Chuva"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Esta palavra é: بارش.",
                imagens: ["Chuva.jpg", "Tempestade.jpg", "pexe.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra para o urdu: Chuva",
                letras: ["ب", "ا", "ر", "ش"],
                respostaCorreta: "بارش"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: بارش",
                letras: ["C", "h", "u", "v", "a"],
                respostaCorreta: "Chuva"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz este áudio em urdu?",
                audioSrc: "dia3som.mp3",
                opcoes: ["Chuva", "Tempestade", "Terra"],
                respostaCorreta: "Chuva"
            }
        ]
    },
    4: {
        titulo: "Ovelha (بھیڑ)",
        aoAcabarDia: {
            // irParaDia: 5,
            voltarPara: "dias.html?diaFinalizado=4"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz ovelha em urdu?",
                opcoes: ["بھیڑ", "بکری", "ہاتھی", "گائے"],
                respostaCorreta: "بکری"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Completa a palavra em urdu:",
                letras: ["ب", "ک", "ر", "ی"],
                respostaCorreta: "بکری"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Então a palavra "بھیڑ" é?',
                imagens: ["d4img1.jpeg", "d4img2.jpeg", "d4img3.jpeg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio?",
                audioSrc: "dia2novoo2.mp3",
                opcoes: ["بھیڑ", "بکری", "سانپ"],
                respostaCorreta: "بھیڑ"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Como se escreve ovelha em urdu?",
                letras: ["ب", "ھ", "ی", "ڑ"],
                respostaCorreta: "بھیڑ"
            }
        ]
    },
    5: {
        titulo: "Sol (سورج)",
        aoAcabarDia: {
            // irParaDia: 6,
            voltarPara: "dias.html?diaFinalizado=5"
        },
        perguntas: [
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'O que é a palavra "سورج" em urdu?',
                imagens: ["d5img.jpg", "d5img2.jpg", "d5img3.jpg"],
                respostaCorretaIndex: 1
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz este áudio em urdu?",
                audioSrc: "dia5som3.mp3",
                opcoes: ["Sol", "Lua", "Estrela"],
                respostaCorreta: "Sol"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz Sol em urdu?",
                opcoes: ["آلو", "ستارہ", "سورج", "چاند"],
                respostaCorreta: "سورج"
            }
        ]
    },
    6: {
        titulo: "Rosa (گلابی)",
        aoAcabarDia: {
            // irParaDia: 7,
            voltarPara: "dias.html?diaFinalizado=6"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "گلابی em português é:",
                opcoes: ["Azul", "Rosa", "Amarelo", "Vermelho"],
                respostaCorreta: "Rosa"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Esta palavra é? گلابی",
                imagens: ["Azul.jpg", "Rosa.jpg", "vermelho.jpg"],
                respostaCorretaIndex: 1
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: گلابی",
                letras: ["R", "o", "s", "a"],
                respostaCorreta: "Rosa"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz Rosa em urdu?",
                opcoes: ["گلابی", "پیلا", "نیلا", "جامنی"],
                respostaCorreta: "گلابی"
            }
        ]
    },
    7: {
        titulo: "Gelo (برف)",
        aoAcabarDia: {
            // irParaDia: 8,
            voltarPara: "dias.html?diaFinalizado=7"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "dia8.mp3",
                opcoes: ["Gelo", "Neve", "Chuva"],
                respostaCorreta: "Gelo"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra em português é? برف",
                opcoes: ["Gelo", "Neve", "Chuva", "Vento"],
                respostaCorreta: "Gelo"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz gelo em urdu?",
                opcoes: ["برف", "بارش", "ہوا", "سیلاب"],
                respostaCorreta: "برف"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'O que é a palavra "برف" em urdu?',
                imagens: ["neve.jpg", "chuvaa.jpg", "33.jpg"],
                respostaCorretaIndex: 2
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: برف",
                letras: ["g", "e", "l", "o"],
                respostaCorreta: "Gelo"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Gelo",
                letras: ["ب", "ر", "ف", "س"],
                respostaCorreta: "برف"
            }
        ]
    },
    8: {
        titulo: "Tulipa (گل لالہ)",
        aoAcabarDia: {
            // irParaDia: 9,
            voltarPara: "dias.html?diaFinalizado=8"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "dia8.mp3",
                opcoes: ["Tulipa", "Rosa", "Girassol"],
                respostaCorreta: "Tulipa"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'O que é a palavra " گل لالہ " em urdu?',
                imagens: ["Tulipa.jpg", "Rose.jpg", "Girasold8.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Complete a palavra",
                letras: ["T", "u", "l", "i", "p", "a"],
                respostaCorreta: "Tulipa"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz tulipa em urdu?",
                opcoes: ["گل لالہ", "برف", "بارش", "ہوا"],
                respostaCorreta: "گل لالہ"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Tulipa",
                letras: ["گ", "ل", "ل", "ا", "ل", "ہ"],
                respostaCorreta: "گل لالہ"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra em português é? ٹیولپ",
                opcoes: ["Tulipa", "Rosa", "Girasol", "Cravo"],
                respostaCorreta: "Tulipa"
            }
        ]
    },
    9: {
        titulo: "Livro (کتاب)",
        aoAcabarDia: {
            // irParaDia: 10,
            voltarPara: "dias.html?diaFinalizado=9"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra em português é? کتاب",
                opcoes: ["Livro", "Lapis", "Mochila", "Borracha"],
                respostaCorreta: "Livro"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Livro",
                letras: ["ک", "ت", "ا", "ب"],
                respostaCorreta: "کتاب"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra em português é? کتاب",
                opcoes: ["کتاب", "صفحہ", "پینسل", "ربر"],
                respostaCorreta: "کتاب"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: کتاب",
                letras: ["L", "i", "v", "r", "o"],
                respostaCorreta: "Livro"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Esta palavra é: کتاب",
                imagens: ["livro1.jpg", "borracha.jpg", "lapis.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    10: {
        titulo: "Cenoura (گاجر)",
        aoAcabarDia: {
            // irParaDia: 11,
            voltarPara: "dias.html?diaFinalizado=10"
        },
        perguntas: [
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Esta palavra é: گاجر",
                imagens: ["Cenoura.jpg", "batata.jpg", "tomate.jpg", "melancia.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: گاجر",
                letras: ["C", "e", "n", "o", "u", "r", "a"],
                respostaCorreta: "Cenoura"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Cenoura",
                letras: ["گ", "ا", "ج", "ر"],
                respostaCorreta: "گاجر"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra é: گاجر",
                opcoes: ["Melancia", "Tomate", "Cenoura", "Batata"],
                respostaCorreta: "Cenoura"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz Cenoura em urdu?",
                opcoes: ["گاجر", "ٹماٹر", "بند گوبھی", "لہسن"],
                respostaCorreta: "گاجر"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "dia10p.mp3",
                opcoes: ["Melancia", "Cenoura", "Tomate", "Batata"],
                respostaCorreta: "Cenoura"
            }
        ]
    },
    11: {
        titulo: "Pêssego (آڑو)",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=11"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "dia11.mp3",
                opcoes: ["Pêssego", "Limão", "Maçã", "Laranja"],
                respostaCorreta: "Pêssego"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: آڑو",
                letras: ["P", "ê", "s", "s", "e", "g", "o"],
                respostaCorreta: "Pêssego"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Esta palavra é: آڑو",
                imagens: ["pessego.jpg", "cereija.jpg", "maca.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "آڑو" em português?',
                opcoes: ["Pêssego", "Maçã", "Limão", "Cereja"],
                respostaCorreta: "Pêssego"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz pêssego em urdu?",
                opcoes: ["لیموں", "چیری", "آڑو", "سیب"],
                respostaCorreta: "آڑو"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Pêssego",
                letras: ["آ", "ڑ", "و"],
                respostaCorreta: "آڑو"
            }
        ]
    }
};
