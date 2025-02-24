from gtts import gTTS
import os

# List of professions in Urdu
professions_urdu = [
    "ڈاکٹر",  # Doctor
    "استاد",  # Teacher
    "انجینئر",  # Engineer
    "وکیل",  # Lawyer
    "نرس",  # Nurse
    "میزبان",  # Host
    "پولیس آفیسر",  # Police Officer
    "محاسب",  # Accountant
    "ڈرائیور",  # Driver
    "خاتونِ خانہ",  # Housewife
    "صحافی",  # Journalist
    "فنکار",  # Artist
    "سائنسدان",  # Scientist
    "فیشن ڈیزائنر",  # Fashion Designer
    "موسیقار",  # Musician
    "ٹیکنیشن"  # Technician
]

# Directory to save audio files
audio_dir = "AUDIOFILES"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files for each profession in Urdu
for i, profession in enumerate(professions_urdu, start=1):
    audio_file = os.path.join(audio_dir, f"audio{i}.mp3")
    tts = gTTS(text=profession, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
