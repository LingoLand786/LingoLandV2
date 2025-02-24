from gtts import gTTS
import os

# List of Urdu fruit names to generate audio for
phrases = [
    "پانی",
    "جوس",
    "دودھ",
    "چائے",
    "کافی",
    "سافٹ ڈرنک",
    "شراب",
      "بیئر",
    "ناریل کا پانی",
    "لیموں کا رس",
    "ایپرول سپریٹز",
    "موجیٹو",
    "کائپیرنہ",
    "مارٹینی",
    "سموتھی",
    "ملک شیک",
   
]

# Directory to save audio files
audio_dir = "drink_audios"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, phrase in enumerate(phrases, start=1):
    audio_file = os.path.join(audio_dir, f"audio{i}.mp3")
    tts = gTTS(text=phrase, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
