from gtts import gTTS
import os

fruits = [
    "Maçã", "Banana", "Uva", "Laranja", "Abacaxi", "Manga", "Pera",
    "Melancia", "Cereja", "Morango", "Pêssego", "Limão", "Romã",
    "Açaí", "Graviola", "Tamarindo", "Jabuticaba", "Pitaya",
    "Mangostão", "Camu Camu", "Rambutan", "Durian", "Lichia",
    "Sapoti", "Carambola", "Physalis", "Amora", "Mirtilo",
    "Framboesa", "Cranberry", "Morango Silvestre", "Tangerina",
    "Toranja", "Pomelo", "Melão", "Melancia Amarela", "Kiwano",
    "Maracujá", "Coco", "Mamão", "Jaca", "Guava", "Longan",
    "Salak", "Caju", "Nêspera", "Damson", "Apricot",
    "Cherymoia", "Bael", "Santol", "Medlar"
]

output_folder = "fruit_audio"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for i, fruit in enumerate(fruits, start=1):
    tts = gTTS(text=fruit, lang='pt')
    filename = f"audio{i}.mp3"
    output_path = os.path.join(output_folder, filename)
    tts.save(output_path)
    print(f"Generated: {output_path}")

print("✅ All fruit audio files created successfully!")
