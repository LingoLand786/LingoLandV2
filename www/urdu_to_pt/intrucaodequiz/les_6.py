from gtts import gTTS
import os

# Phrases for introducao 6 (Casual Conversations & Farewells)
phrases = [
    "Há quanto tempo!",                    # answer_1.mp3 - haquantotempo
    "Como foi o seu dia?",                 # answer_2.mp3 - comodia
    "Até breve!",                         # answer_3.mp3 - atebreve
    "Bom ouvir de você!",                 # answer_4.mp3 - bomouvir
    "Estava com saudades!",               # answer_5.mp3 - saudades
    "Espero te ver em breve!",            # answer_6.mp3 - esperover
    "Como você tem estado?",              # answer_7.mp3 - comotemestado
    "Te desejo tudo de bom!",             # answer_8.mp3 - tudodebom
    "Foi ótimo te ver!",                  # answer_9.mp3 - foiotimover
    "Foi bom colocar a conversa em dia!" # answer_10.mp3 - conversadia
]

output_folder = "audio6"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for i, phrase in enumerate(phrases, start=1):
    tts = gTTS(text=phrase, lang='pt')
    filename = f"answer_{i}.mp3"
    output_path = os.path.join(output_folder, filename)
    tts.save(output_path)
    print(f"Generated: {output_path}")

print("✅ All Introducao 6 audio files created successfully!")
