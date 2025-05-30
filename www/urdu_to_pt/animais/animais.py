from gtts import gTTS
import os

animals = [
    {"name": "Cão", "audio": "1.mp3"},
    {"name": "Gato", "audio": "2.mp3"},
    {"name": "Elefante", "audio": "3.mp3"},
    {"name": "Leão", "audio": "4.mp3"},
    {"name": "Tigre", "audio": "5.mp3"},
    {"name": "Coelho", "audio": "6.mp3"},
    {"name": "Cavalo", "audio": "7.mp3"},
    {"name": "Vaca", "audio": "8.mp3"},
    {"name": "Ovelha", "audio": "9.mp3"},
    {"name": "Bode", "audio": "10.mp3"},
    {"name": "Porco", "audio": "11.mp3"},
    {"name": "Pato", "audio": "12.mp3"},
    {"name": "Galo", "audio": "13.mp3"},
    {"name": "Galinha", "audio": "14.mp3"},
    {"name": "Urso", "audio": "15.mp3"},
    {"name": "Macaco", "audio": "16.mp3"},
    {"name": "Rato", "audio": "17.mp3"},
    {"name": "Raposa", "audio": "18.mp3"},
    {"name": "Lobo", "audio": "19.mp3"},
    {"name": "Cobra", "audio": "20.mp3"},
    {"name": "Jacaré", "audio": "21.mp3"},
    {"name": "Pombo", "audio": "22.mp3"},
    {"name": "Corvo", "audio": "23.mp3"},
    {"name": "Papagaio", "audio": "24.mp3"},
    {"name": "Águia", "audio": "25.mp3"},
    {"name": "Coruja", "audio": "26.mp3"},
    {"name": "Golfinho", "audio": "27.mp3"},
    {"name": "Tubarão", "audio": "28.mp3"},
    {"name": "Baleia", "audio": "29.mp3"},
    {"name": "Tartaruga", "audio": "30.mp3"},
    {"name": "Polvo", "audio": "31.mp3"},
    {"name": "Cervo", "audio": "32.mp3"},
    {"name": "Camelo", "audio": "33.mp3"},
    {"name": "Zebra", "audio": "34.mp3"},
    {"name": "Panda", "audio": "35.mp3"},
    {"name": "Caracol", "audio": "36.mp3"},
    {"name": "Formiga", "audio": "37.mp3"},
    {"name": "Borboleta", "audio": "38.mp3"},
    {"name": "Aranha", "audio": "39.mp3"},
    {"name": "Escorpião", "audio": "41.mp3"},
    {"name": "Peixe-palhaço", "audio": "42.mp3"},
    {"name": "Estrela-do-mar", "audio": "43.mp3"},
    {"name": "Pinguim", "audio": "44.mp3"},
    {"name": "Marmot", "audio": "45.mp3"}
]

pasta = "audio"
os.makedirs(pasta, exist_ok=True)

for animal in animals:
    texto = animal["name"]
    arquivo = animal["audio"]
    caminho = os.path.join(pasta, arquivo)

    tts = gTTS(text=texto, lang='pt')
    tts.save(caminho)
    print(f"Gerado: {caminho}")

print("Todos os áudios de animais foram gerados com sucesso!")
