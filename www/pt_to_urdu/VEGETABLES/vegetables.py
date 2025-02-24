from gtts import gTTS
import os

# List of Urdu vegetable names to generate audio for
vegetables = [
    "آلو",  # Potato
    "گاجر",  # Carrot
    "پیاز",  # Onion
    "ٹماٹر",  # Tomato
    "شلجم",  # Turnip
    "کھیرا",  # Cucumber
    "لہسن",  # Garlic
    "پالک",  # Spinach
    "گوبھی",  # Cabbage
    "سلاد پتہ",  # Lettuce
    "چقندر",  # Beetroot
    "مولی",  # Radish
    "شلجم",  # Turnip
    "یام",  # Yam
    "لوبیا",  # Beans
    "مٹر",  # Peas
    "چنے",  # Chickpea
    "کدو",  # Pumpkin
    "چوچو",  # Chayote
    "تورئی",  # Zucchini
    "بک چوئے",  # Bok Choy
    "بینگن",  # Jiló
    "بھنڈی",  # Okra
    "گوبھی",  # Cauliflower
    "بروکلی",  # Broccoli
    "کیلے",  # Kale
    "کیلے کا پھول",  # Banana Flower
    "اروی",  # Taro
    "کساوا"  # Cassava
]

# Directory to save audio files
audio_dir = "vegetable_audios"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, vegetable in enumerate(vegetables, start=1):
    audio_file = os.path.join(audio_dir, f"vegetable_audio{i}.mp3")
    tts = gTTS(text=vegetable, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All vegetable audio files have been generated.")
