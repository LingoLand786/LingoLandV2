from gtts import gTTS
import os

# Portuguese profession names extracted from your HTML in order
professions = [
    "Médico",
    "Professor",
    "Engenheiro",
    "Advogado",
    "Enfermeiro",
    "Anfitrião",
    "Policial",
    "Contador",
    "Motorista",
    "Dona de Casa",
    "Jornalista",
    "Artista",
    "Cientista",
    "Designer de Moda",
    "Músico",
    "Técnico"
]

# Folder to save audios
output_folder = "AUDIOFILES"
os.makedirs(output_folder, exist_ok=True)

for i, profession in enumerate(professions, start=1):
    tts = gTTS(text=profession, lang='pt')
    audio_path = os.path.join(output_folder, f"audio{i}.mp3")
    tts.save(audio_path)
    print(f"Saved audio: {audio_path}")

print("All Portuguese profession audio files have been generated.")
