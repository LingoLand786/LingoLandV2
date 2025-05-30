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
                audioSrc: "audios/dia2.mp3",
                opcoes: ["بس", "گاڑی", "ٹیکسی"],
                respostaCorreta: "بس"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra "بس" é?',
                imagens: ["d2Busimg.jpeg", "car.jpg", "aviao.jpg"],
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
                pergunta: "Escreve esta palavra em urdu: Autocarro",
                letras: ["ب", "س"],
                respostaCorreta: "بس"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "بس" em portugues?',
                opcoes: ["Autocarro", "Carro", "Bicicleta", "Avião"],
                respostaCorreta: "Autocarro"
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
                pergunta: 'Esta palavra em urdu "بارش" é? ',
                opcoes: ["Inverno", "Trovoada", "Neve", "Chuva"],
                respostaCorreta: "Chuva"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra é "بارش" ?',
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
                audioSrc: "audios/dia3som.mp3",
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
                pergunta: "Escreva esta palavra em urdu: Ovelha",
                letras: ["ب", "ک", "ر", "ی"],
                respostaCorreta: "بکری"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra "بھیڑ" é?',
                imagens: ["d4img1.jpeg", "d4img2.jpeg", "d4img3.jpeg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/dia2novoo2.mp3",
                opcoes: ["بکری", "بھیڑ", "سانپ"],
                respostaCorreta: "بھیڑ"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreve esta palavra em portugues: بھیڑ?",
                letras: ["o", "v", "e", "l", "h", "a"],
                respostaCorreta: "ovelha"
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
                pergunta: 'Esta palavra "سورج" é?',
                imagens: ["d5img.jpg", "d5img2.jpg", "d5img3.jpg"],
                respostaCorretaIndex: 1
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz este áudio em urdu?",
                audioSrc: "audios/dia5som6.mp3",
                opcoes: ["Lua", "Estrela", "Sol"],
                respostaCorreta: "Sol"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz Sol em urdu?",
                opcoes: ["آلو", "ستارہ", "سورج", "چاند"],
                respostaCorreta: "سورج"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreve esta palavra em portugues: سورج",
                letras: ["s", "o", "l"],
                respostaCorreta: "sol"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "سورج" em portugues?',
                opcoes: ["Estrela", "Lua", "Sol", "Nuvem"],
                respostaCorreta: "Sol"
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
                pergunta:'Esta palavra "گلابی" em português é?',
                opcoes: ["Azul", "Rosa", "Amarelo", "Vermelho"],
                respostaCorreta: "Rosa"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra "گلابی" é?',
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
                opcoes: ["نیلا", "پیلا", "گلابی", "جامنی"],
                respostaCorreta: "گلابی"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Rosa",
                letras: ["گ", "ل", "ا", "ب", "ی"],
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
                audioSrc: "audios/dia8.mp3",
                opcoes: ["Gelo", "Neve", "Chuva"],
                respostaCorreta: "Gelo"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Esta palavra  "برف"  é?',
                opcoes: ["Chuva", "Gelo", "Neve", "Vento"],
                respostaCorreta: "Gelo"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz gelo em urdu?",
                opcoes: ["ہوا", "سیلاب", "بارش", "برف"],
                respostaCorreta: "برف"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra "برف" é?',
                imagens: ["neve.jpg", "chuvaa.jpg", "33.jpg"],
                respostaCorretaIndex: 2
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: برف",
                letras: ["g", "e", "l", "o"],
                respostaCorreta: "Gelo",
                espacoAutomatico: true
            },
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
                audioSrc: "audios/NOVOTULIPA.mp3",
                opcoes: ["Rosa", "Girassol", "Tulipa"],
                respostaCorreta: "Tulipa"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'O que é esta palavra "گل لالہ" ?',
                imagens: ["Tulipa.jpg", "Rose.jpg", "Girasold8.jpg"],
                respostaCorretaIndex: 0
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
                respostaCorreta: "گل لالہ",
                espacoAutomatico: true,
                ordemLetras: ["گ", "ل", "ل", "ا", "ل", "ہ"]
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Esta palavra em português é? ٹیولپ",
                opcoes: ["Cravo", "Rosa", "Girasol", "Tulipa"],
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
                pergunta: 'Esta palavra "کتاب" em português é?',
                opcoes: ["Lapis", "Livro", "Mochila", "Borracha"],
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
                pergunta: 'Esta palavra "Livro" em urdu é?',
                opcoes: ["پینسل", "صفحہ", "کتاب", "ربر"],
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
                pergunta: 'Esta palavra "کتاب" é?',
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
                pergunta: 'Esta palavra "گاجر" é? ',
                imagens: ["Cenoura.jpg", "batata.jpg", "tomate.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Cenoura",
                letras: ["گ", "ا", "ج", "ر"],
                respostaCorreta: "گاجر"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Esta palavra "گاجر" é?',
                opcoes: ["Melancia", "Tomate", "Cenoura", "Batata"],
                respostaCorreta: "Cenoura"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz Cenoura em urdu?",
                opcoes: ["ٹماٹر", "گاجر", "بند گوبھی", "لہسن"],
                respostaCorreta: "گاجر"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/dia10p.mp3",
                opcoes: [ "Tomate", "Cenoura", "Batata"],
                respostaCorreta: "Cenoura"
            }
        ]
    },
    11: {
        titulo: "Pêssego (آڑو)",
        aoAcabarDia: {
            // irParaDia: 12,
            voltarPara: "dias.html?diaFinalizado=11"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/dia11.mp3",
                opcoes: ["Cereja", "Laranja", "Pêssego"],
                respostaCorreta: "Pêssego"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz pêssego em urdu?",
                opcoes: ["آڑو", "ٹیولپ", "سورج مکھی", "سورج"],
                respostaCorreta: "آڑو"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Pêssego",
                letras: ["آ", "ڑ", "و"],
                respostaCorreta: "آڑو"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Esta palavra "آڑو" é?',
                imagens: ["pessego.png", "cereija.jpg", "laranja.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "آڑو" em português?',
                opcoes: ["Pera", "Laranja", "Pêssego", "Cereja"],
                respostaCorreta: "Pêssego"
            }
        ]
    },
    12: {
        titulo: "Gato - بلی",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=12"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "بلی" em português?',
                opcoes: ["Rato", "Cachorro", "Gato", "Coelho"],
                respostaCorreta: "Gato"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz gato em urdu?",
                opcoes: ["چوہا", "کتا", "بلی", "خرگوش"],
                respostaCorreta: "بلی"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Gato",
                letras: ["ب", "ل", "ی"],
                respostaCorreta: "بلی"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "بلی" em português?',
                opcoes: ["Cão", "Leão", "Gato", "Peixe"],
                respostaCorreta: "Gato"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Qual destas imagens é "بلی" ?',
                imagens: ["gato.jpg", "cao.jpg", "esquilo.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    13: {
        titulo: "Peixe - مچھلی",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=13"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/NOVOPEIXE.mp3",
                opcoes: ["Peixe", "Tubarão", "Golfinho"],
                respostaCorreta: "Peixe"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Qual destas imagens é 'مچھلی' ?",
                imagens: ["peixeee.jpg", "carangueijo.jpg", "gaivota.jpg"],
                respostaCorretaIndex: 0
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Peixe",
                letras: ["م", "چ", "ھ", "ل", "ی"],
                respostaCorreta: "مچھلی"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz peixe em urdu?",
                opcoes: ["پرندہ", "مچھلی", "سانپ", "کچھوا"],
                respostaCorreta: "مچھلی"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: مچھلی",
                letras: ["p", "e", "i", "x", "e"],
                respostaCorreta: "peixe"
            }
        ]
    },
    14: {
        titulo: "Mochila - بیگ",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=14"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "بیگ" em português?',
                opcoes: ["Mochila", "Livro", "Lápis", "Borracha"],
                respostaCorreta: "Mochila"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Mochila",
                letras: ["ب", "ی", "گ"],
                respostaCorreta: "بیگ"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz mochila em urdu?",
                opcoes: ["پینسل", "کتاب", "بیگ", "ربر"],
                respostaCorreta: "بیگ"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: بیگ",
                letras: ["m", "o", "c", "h", "i", "l", "a"],
                respostaCorreta: "mochila"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Qual destas imagens é 'بیگ' ?",
                imagens: ["mochila.jpg", "pincel.jpg", "clipes.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    15: {
        titulo: "Amarelo - پیلا",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=15"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/NOVOAMARELO.mp3",
                opcoes: ["Verde", "Azul", "Amarelo"],
                respostaCorreta: "Amarelo"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Esta palavra "پیلا" em portugues é?',
                opcoes: ["Amarelo", "Azul", "Vermelho", "Verde"],
                respostaCorreta: "Amarelo"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Amarelo",
                letras: ["پ", "ی", "ل", "ا"],
                respostaCorreta: "پیلا"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz amarelo em urdu?",
                opcoes: ["پیلا", "نیلا", "سرخ", "سبز"],
                respostaCorreta: "پیلا"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Qual destas imagens é "پیلا" ?',
                imagens: ["amarelo.jpg", "verde.jpg", "vermelhoo.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    16: {
        titulo: "Pinguim - پینگوئن",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=16"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "پینگوئن" em português?',
                opcoes: ["Ganso", "Pato", "Pinguim", "Gaivota"],
                respostaCorreta: "Pinguim"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Pinguim",
                letras: ["پ", "ی", "ن", "گ", "و", "ئ", "ن"],
                respostaCorreta: "پینگوئن"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz pinguim em urdu?",
                opcoes: ["بطخ", "پینگوئن", "ہنس", "گلہری"],
                respostaCorreta: "پینگوئن"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: پینگوئن",
                letras: ["p", "i", "n", "g", "u", "i", "m"],
                respostaCorreta: "pinguim",
                classeExtra: "texto-pequeno"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Qual destas imagens representa "پینگوئن"?',
                imagens: ["pinguin.jpg", "foca.jpg", "pexe.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    17: {
        titulo: "Pão - روٹی",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=17"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/NOVOPAO.mp3",
                opcoes: ["Pão", "Bolo", "Biscoito"],
                respostaCorreta: "Pão"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "روٹی" em português?',
                opcoes: ["PãBiscoitoo", "Bolo", "Pão", "Torta"],
                respostaCorreta: "Pão"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: pão",
                letras: ["ر", "و", "ٹ", "ی"],
                respostaCorreta: "روٹی"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz pão em urdu?",
                opcoes: ["بسکٹ", "کیک", "روٹی", "پائی"],
                respostaCorreta: "روٹی"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Qual destas imagens é 'روٹی' ?",
                imagens: ["pao.jpg", "gelado.jpg", "bolo.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    18: {
        titulo: "Banana - کیلا",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=18"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "کیلا" em português?',
                opcoes: ["Laranja", "Maçã", "Banana", "Uva"],
                respostaCorreta: "Banana"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Banana",
                letras: ["ک", "ی", "ل", "ا"],
                respostaCorreta: "کیلا"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz banana em urdu?",
                opcoes: ["کیلا", "سیب", "سنترہ", "انگور"],
                respostaCorreta: "کیلا"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: کیلا",
                letras: ["b", "a", "n", "a", "n", "a"],
                respostaCorreta: "banana"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: 'Qual destas imagens é "کیلا"  ?',
                imagens: ["bananaa.png", "uvas.jpg", "pomegranate.avif"],
                respostaCorretaIndex: 0
            }
        ]
    },
    19: {
        titulo: "Ovo - انڈا",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=19"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA_AUDIO,
                pergunta: "O que diz o áudio em urdu?",
                audioSrc: "audios/NOVOOVO.mp3",
                opcoes: ["Ovo", "Pão", "Arroz"],
                respostaCorreta: "Ovo"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "انڈا" em português?',
                opcoes: ["Ovo", "Pão", "Arroz", "Sopa"],
                respostaCorreta: "Ovo"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Ovo",
                letras: ["ا", "ن", "ڈ", "ا"],
                respostaCorreta: "انڈا"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz ovo em urdu?",
                opcoes: ["روٹی", "انڈا", "چاول", "سوپ"],
                respostaCorreta: "انڈا"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Qual destas imagens é 'انڈا' ?",
                imagens: ["ovo.jpg", "franboesa.jpg", "morangos.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    },
    20: {
        titulo: "Café - کافی",
        aoAcabarDia: {
            voltarPara: "dias.html?diaFinalizado=20"
        },
        perguntas: [
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: 'Como se diz "کافی" em português?',
                opcoes: ["Café", "Chá", "Leite", "Sumo"],
                respostaCorreta: "Café"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em urdu: Café",
                letras: ["ک", "ا", "ف", "ی"],
                respostaCorreta: "کافی"
            },
            {
                tipo: tiposPergunta.MULTIPLA_ESCOLHA,
                pergunta: "Como se diz café em urdu?",
                opcoes: ["کافی", "چائے", "دودھ", "جوس"],
                respostaCorreta: "کافی"
            },
            {
                tipo: tiposPergunta.FORMAR_PALAVRA,
                pergunta: "Escreva esta palavra em português: کافی",
                letras: ["c", "a", "f", "e"],
                respostaCorreta: "cafe"
            },
            {
                tipo: tiposPergunta.IMAGEM,
                pergunta: "Qual destas imagens é 'کافی' ?",
                imagens: ["cafe.jpg", "abacate.webp", "kiwi.jpg"],
                respostaCorretaIndex: 0
            }
        ]
    }
};
