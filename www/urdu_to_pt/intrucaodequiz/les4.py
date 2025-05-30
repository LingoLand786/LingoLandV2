from gtts import gTTS
import os

# Portuguese phrases for Introducao 4
phrases = [
    "Bom dia, como estás?",                  # answer_1.mp3 - goodmorning
    "De onde você é?",                       # answer_2.mp3 - howdoyoudo
    "Tenha um bom fim de semana",            # answer_3.mp3 - niceweekend
    "O que há?",                             # answer_4.mp3 - whatsup
    "Como está o seu dia?",                  # answer_5.mp3 - howsyourday
    "Olá, bem-vindo à festa!",               # answer_6.mp3 - party
    "Espero que esteja bem",                 # answer_7.mp3 - hopewell
    "Bom te conhecer",                       # answer_8.mp3 - goodtomeetyou
    "É bom ver você",                        # answer_9.mp3 - nicetoseeyou
    "Como está tudo?"                        # answer_10.mp3 - howseverything
]

output_folder = "audios4"

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

print("🎉 All Introducao 4 audio files created successfully!")
