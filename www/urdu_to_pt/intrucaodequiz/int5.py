from gtts import gTTS
import os

# Portuguese phrases for Introducao 5
phrases = [
    "Tudo de bom",                               # answer_1.mp3 - tudodebom
    "Prazer em conhecê-lo(a)",                   # answer_2.mp3 - prazer
    "Bem-vindo(a)",                              # answer_3.mp3 - bemvindo
    "Boa sorte",                                 # answer_4.mp3 - boasorte
    "Até logo",                                  # answer_5.mp3 - atelogo
    "Como vai a vida?",                          # answer_6.mp3 - comovai
    "Há quanto tempo!",                           # answer_7.mp3 - tempo (changed to match your Urdu "کافی عرصے بعد!" phrase)
    "O que há de novo?",                         # answer_8.mp3 - oqueha
    "Foi um prazer falar consigo",               # answer_9.mp3 - foiumprazer
    "Até breve"                                  # answer_10.mp3 - atebreve (You included this audio tag, but no matching list item. Added phrase accordingly)
]

output_folder = "audio5"

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

print("🎉 All Introducao 5 audio files created successfully!")
