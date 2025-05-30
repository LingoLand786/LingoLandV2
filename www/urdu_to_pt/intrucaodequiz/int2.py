from gtts import gTTS
import os

# Portuguese phrases matching your HTML <audio> tags
phrases = [
    "Como você se chama?",        # answer_1.mp3 - nome
    "Meu nome é...",              # answer_2.mp3 - resposta
    "Desculpe",                   # answer_3.mp3 - desculpe
    "Por favor",                  # answer_4.mp3 - porfavor
    "Obrigado",                   # answer_5.mp3 - obrigado
    "De nada",                    # answer_6.mp3 - denada
    "Adeus",                      # answer_7.mp3 - adeus
    "Tudo bem",                   # answer_8.mp3 - tudobem
    "Tenha um bom dia",          # answer_9.mp3 - bomdia
    "De onde você é?"             # answer_10.mp3 - onde
]

output_folder = "audio_files"

# Create folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Generate mp3 files
for i, phrase in enumerate(phrases, start=1):
    tts = gTTS(text=phrase, lang='pt')
    filename = f"answer_{i}.mp3"
    output_path = os.path.join(output_folder, filename)
    tts.save(output_path)
    print(f"Generated: {output_path}")

print("🎉 All audio files created successfully!")
