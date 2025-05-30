from gtts import gTTS
import os

# Portuguese phrases for introducao 3
phrases = [
    "Eu sou de [....]",             # answer_1.mp3
    "Boa tarde",                    # answer_2.mp3
    "Quantas horas são?",          # answer_3.mp3
    "O que você está fazendo?",    # answer_4.mp3 (corrected from "fazer" to "fazendo")
    "É um prazer",                  # answer_5.mp3
    "Você está bem?",              # answer_6.mp3
    "Eu estou triste",             # answer_7.mp3
    "Há quanto tempo?",            # answer_8.mp3
    "Cuida de ti",                 # answer_9.mp3
    "Bom te ver"                   # answer_10.mp3
]

output_folder = "INT3_AUDIOS"

# Create folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Generate MP3 files
for i, phrase in enumerate(phrases, start=1):
    tts = gTTS(text=phrase, lang='pt')
    filename = f"answer_{i}.mp3"
    output_path = os.path.join(output_folder, filename)
    tts.save(output_path)
    print(f"Generated: {output_path}")

print("🎉 All Introducao 3 audio files created successfully!")
