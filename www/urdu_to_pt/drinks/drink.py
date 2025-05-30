from gtts import gTTS
import os

drinks = [
    {"name": "Água", "audio": "audio1.mp3"},
    {"name": "Sumo", "audio": "audio2.mp3"},
    {"name": "Leite", "audio": "audio3.mp3"},
    {"name": "Chá", "audio": "audio4.mp3"},
    {"name": "Café", "audio": "audio5.mp3"},
    {"name": "Refrigerante", "audio": "audio6.mp3"},
    {"name": "Vinho", "audio": "audio7.mp3"},
    {"name": "Cerveja", "audio": "audio8.mp3"},
    {"name": "Água de Coco", "audio": "audio9.mp3"},
    {"name": "Limonada", "audio": "audio10.mp3"},
    {"name": "Aperol Spritz", "audio": "audio11.mp3"},
    {"name": "Mojito", "audio": "audio12.mp3"},
    {"name": "Caipirinha", "audio": "audio13.mp3"},
    {"name": "Martini", "audio": "audio14.mp3"},
    {"name": "Smoothie", "audio": "audio15.mp3"},
    {"name": "Milkshake", "audio": "audio16.mp3"},
]

pasta = "drink_audios"
os.makedirs(pasta, exist_ok=True)

for bebida in drinks:
    texto = bebida["name"]
    arquivo = bebida["audio"]
    caminho = os.path.join(pasta, arquivo)

    tts = gTTS(text=texto, lang='pt')
    tts.save(caminho)
    print(f"Gerado: {caminho}")

print("Todos os áudios em português foram gerados com sucesso!")
