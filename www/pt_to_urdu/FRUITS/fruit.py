from gtts import gTTS
import os

# List of Urdu fruit names to generate audio for
phrases = [
    "سیب",
    "کیلا",
    "انگور",
    "کینو",
    "انناس",
    "آم",
    "ناشپاتی",
    "تربوز",
    "چیری",
    "اسٹرابیری",
    "آڑو",
    "لیموں",
    "انار",
    "اکائی",
    "گریویولا",
    "املی",
    "جابوٹی کبا",
    "پتھایا",
    "منگوسٹین",
    "کمو کمو",
    "رامبوٹان",
    "ڈورین",
    "لیچی",
    "چیکو",
    "ستارہ پھل",
    "پھیزالیس",
    "بلیک بیری",
    "بلیو بیری",
    "رس بھری",
    "کرین بیری",
    "جنگلی اسٹرابیری",
    "چھوٹا مالٹا",
    "چکوترا",
    "پومیلو",
    "خربوزہ",
    "پیلے تربوز",
    "کانٹے دار خربوزہ",
    "پھل دار پودا",
    "ناریل",
    "پپیتا",
    "کٹہل",
    "امرود",
    "لمبی",
    "سانپ پھل",
    "کاجو",
    "لوکاٹ",
    "آلو بخارا",
    "خوبانی",
    "چیریمویہ",
    "بیل",
    "سینٹول",
    "میڈلر"
]

# Directory to save audio files
audio_dir = "audios"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, phrase in enumerate(phrases, start=1):
    audio_file = os.path.join(audio_dir, f"audio{i}.mp3")
    tts = gTTS(text=phrase, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
