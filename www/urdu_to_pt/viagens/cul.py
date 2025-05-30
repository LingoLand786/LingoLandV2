from gtts import gTTS
import os

# List of Urdu phrases to generate audio for
phrases = [
    "A paz esteja com você",
    "E com você esteja a paz",
    "Como você está?",
]

# Directory to save audio files
audio_dir = "audios"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, phrase in enumerate(phrases, start=1):
    audio_file = os.path.join(audio_dir, f"audio{i}.mp3")
    tts = gTTS(text=phrase, lang='pt')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
