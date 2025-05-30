from gtts import gTTS
import os

colors = [
    {"romanized": "Surkh", "portuguese": "Vermelho"},
    {"romanized": "Neela", "portuguese": "Azul"},
    {"romanized": "Sabz", "portuguese": "Verde"},
    {"romanized": "Peela", "portuguese": "Amarelo"},
    {"romanized": "Kala", "portuguese": "Preto"},
    {"romanized": "Safed", "portuguese": "Branco"},
    {"romanized": "Naranji", "portuguese": "Laranja"},
    {"romanized": "Jamni", "portuguese": "Roxo"},
    {"romanized": "Sarmayi", "portuguese": "Cinza"},
    {"romanized": "Gulabi", "portuguese": "Rosa"},
    {"romanized": "Bhoora", "portuguese": "Marrom"},
    {"romanized": "Sunehri", "portuguese": "Dourado"},
    {"romanized": "Chandi", "portuguese": "Prata"},
    {"romanized": "Ferozi", "portuguese": "Turquesa"},
    {"romanized": "Salmon", "portuguese": "Salmon"},
    {"romanized": "Lavender", "portuguese": "Lavanda"},
    {"romanized": "Lemon", "portuguese": "Verde Limão"},
    {"romanized": "Bordeaux", "portuguese": "Bordeaux"},
    {"romanized": "Crimson", "portuguese": "Carmesim"},
    {"romanized": "Fuchsia", "portuguese": "Fucsia"},
    {"romanized": "Gehra Ferozi", "portuguese": "Turquesa Escuro"},
]

output_folder = "audio"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

list_file = os.path.join(output_folder, "colors_list.txt")

with open(list_file, "w", encoding="utf-8") as file:
    for color in colors:
        # اب ہم پرتگالی نام کو بولیں گے
        portuguese_text = color["portuguese"]
        romanized = color["romanized"]

        # پرتگالی بولنے کے لیے lang='pt'
        tts = gTTS(text=portuguese_text, lang='pt')
        output_file = os.path.join(output_folder, f"{romanized.lower()}.mp3")
        tts.save(output_file)
        print(f"Generated: {output_file}")

        file.write(f"{portuguese_text} - {romanized}\n")

print("Audio generation and list file creation complete!")
