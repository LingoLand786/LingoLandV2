from gtts import gTTS
import os

# List of animals with just their Urdu names
animals = [
    { "urdu": "کتا" },
    { "urdu": "بلی" },
    { "urdu": "ہاتھی" },
    { "urdu": "شیر" },
    { "urdu": "چیتا" },
    { "urdu": "خرگوش" },
    { "urdu": "گھوڑا" },
    { "urdu": "گائے" },
    { "urdu": "بھیڑ" },
    { "urdu": "بکرا" },
    { "urdu": "سور" },
    { "urdu": "بطخ" },
    { "urdu": "مرغا" },
    { "urdu": "مرغی" },
    { "urdu": "ریچھ" },
    { "urdu": "بندر" },
    { "urdu": "چوہا" },
    { "urdu": "لومڑی" },
    { "urdu": "بھیڑیا" },
    { "urdu": "سانپ" },
    { "urdu": "مگرمچھ" },
    { "urdu": "کبوتر" },
    { "urdu": "کوا" },
    { "urdu": "طوطا" },
    { "urdu": "عقاب" },
    { "urdu": "الو" },
    { "urdu": "ڈولفن" },
    { "urdu": "شارک" },
    { "urdu": "وہیل" },
    { "urdu": "کچھوا" },
    { "urdu": "آکٹوپس" },
    { "urdu": "ہرن" },
    { "urdu": "اونٹ" },
    { "urdu": "زیبرا" },
    { "urdu": "پانڈا" },
    { "urdu": "گھونگا" },
    { "urdu": "چیونٹی" },
    { "urdu": "تتلی" },
    { "urdu": "مکڑی" },
    { "urdu": "ٹڈا" },
    { "urdu": "بچھو" },
    { "urdu": "مچھلی" },
    { "urdu": "سمندری ستارہ" },
    { "urdu": "پینگوئن" },
    { "urdu": "مارموٹ" }
]

# Directory to save audio files
audio_dir = "audio"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, animal in enumerate(animals, start=1):
    audio_file = os.path.join(audio_dir, f"{i}.mp3")
    tts = gTTS(text=animal['urdu'], lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
