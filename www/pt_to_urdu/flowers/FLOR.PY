from gtts import gTTS
import os

# List of professions in Urdu
professions_urdu = [
    "گلاب",  # Doctor
    "گل لالہ",  # Teacher
    "سورج مکھی",  # Engineer
    "چنبیلی",  # Lawyer
    "گیندا",  # Nurse
    "آرکڈ",  # Host
    " گلابی",  # Police Officer
    "ڈاہلیا",  # Accountant
    "لیونڈر",  # Driver
    " گل داودی",  # Housewife
    "جربرا",  # Journalist
    "کنول کا پھول",  # Artist
    "گل صدبرگ",  # Scientist
    "  نیلا گھنٹی",  # Fashion Designer
    "گل خطمی",  # Musician
    "میگنولیا",  # Technician
"کنول",  # Technician
    "بنفشه"  # Technician
]

# Directory to save audio files
audio_dir = "FLOWERS"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files for each profession in Urdu
for i, profession in enumerate(professions_urdu, start=1):
    audio_file = os.path.join(audio_dir, f"audio{i}.mp3")
    tts = gTTS(text=profession, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
