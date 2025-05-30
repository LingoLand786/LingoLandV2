from gtts import gTTS
import os

# List of Portuguese phrases from the HTML content
phrases = [
    "Preciso de ajuda!",
    "Chame a polícia!",
    "Fui roubado(a)",
    "Preciso de um médico",
    "Chame uma ambulância",
    "Estou com dor",
    "Estou perdido(a)",
    "Onde fica a embaixada brasileira?",
    "Preciso falar com o consulado"
]

# Corresponding audio file names
file_names = [
    "help", "police", "robbed",
    "doctor", "ambulance", "pain",
    "lost", "embassy", "consulate"
]

# Directory to save audio files
audio_dir = "emergency"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for phrase, name in zip(phrases, file_names):
    audio_path = os.path.join(audio_dir, f"{name}.mp3")
    tts = gTTS(text=phrase, lang='pt')
    tts.save(audio_path)
    print(f"Saved: {audio_path}")

print("All Portuguese audio files have been generated.")
