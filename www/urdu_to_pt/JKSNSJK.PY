from gtts import gTTS
import os

# اردو حروفِ تہجی
urdu_alphabet = [
    "الف", "بے", "پے", "تے", "ٹے", "ثے", "جیم", "چے", "حے", "خے",
    "دال", "ڈال", "ذال", "رے", "ڑے", "زے", "ژے", "سین", "شین", "صاد",
    "ضاد", "طے", "ظے", "عین", "غین", "فے", "قاف", "کاف", "گاف",
    "لام", "میم", "نون", "واؤ", "ہے", "یے", "بڑی یے"
]

# آڈیو فائلز کے لیے فولڈر بنائیں
audio_dir = "urdu_alphabet_audios"
os.makedirs(audio_dir, exist_ok=True)

# ہر حرف کے لیے آڈیو فائل بنائیں
for i, harf in enumerate(urdu_alphabet, start=1):
    audio_file = os.path.join(audio_dir, f"harf_{i}.mp3")
    tts = gTTS(text=harf, lang='ur')
    tts.save(audio_file)
    print(f"محفوظ ہوگیا: {audio_file}")

print("تمام اردو حروف کے آڈیو فائلز تیار ہوگئے ہیں۔")
