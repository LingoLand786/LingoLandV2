from gtts import gTTS
import os

# List of music genres in Urdu to generate audio for
music_genres = [
    "قوالی",  # Pop
    "راک",  # Rock
    "ہپ ہاپ",  # Hip-Hop
    "آر اینڈ بی",  # R&B
    "جاز",  # Jazz
    "کلاسیکی",  # Classical
    "کنٹری",  # Country
    "میٹل",  # Metal
    "ریگے",  # Reggae
    "ریپ",  # Rap
    "ای ڈی ایم",  # EDM
    "بلوز",  # Blues
    "سول",  # Soul
    "فنک",  # Funk
    "فولک",  # Folk
    "کنٹری راک",  # Country Rock
    "انڈی راک",  # Indie Rock
    "ٹیکنو"  # Techno
]

# Directory to save audio files
audio_dir = "genres"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, genre in enumerate(music_genres, start=1):
    audio_file = os.path.join(audio_dir, f"audio{i}.mp3")
    tts = gTTS(text=genre, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
