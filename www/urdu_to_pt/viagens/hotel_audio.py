from gtts import gTTS
import os

# List of Urdu phrases to generate audio for
phrases = [
    "میں ایک کمرہ بک کرنا چاہوں گا، براہ کرم۔",
    "کیا آپ کے پاس [تاریخ] کے لیے کمرے دستیاب ہیں؟",
    "رات کے لیے قیمت کیا ہے؟",
    "کیا آپ کریڈٹ کارڈ کے ذریعے ادائیگی قبول کرتے ہیں؟",
    "کیا ناشتہ شامل ہے؟",
    "میرے نام [آپ کا نام] پر ایک بکنگ ہے۔",
    "کیا میں ابھی چیک ان کر سکتا ہوں؟",
    "کیا مجھے سمندر کے نظارے کے ساتھ ایک کمرہ مل سکتا ہے؟",
    "چیک ان اور چیک آؤٹ کے اوقات کیا ہیں؟",
    "کیا آپ مجھے اضافی تولیے بھیج سکتے ہیں؟",
    "میرا کمرہ صاف کرنے کی ضرورت ہے۔",
    "وائی فائی کام نہیں کر رہا ہے۔",
    "کیا آپ مجھے روم سروس کا مینو لا سکتے ہیں؟",
    "میرے کمرے میں ایئر کنڈیشنر کے ساتھ مسئلہ ہے۔",
    "میں چیک آؤٹ کرنا چاہوں گا، براہ کرم۔",
    "کیا آپ میرے لیے ایک ٹیکسی بلا سکتے ہیں؟",
    "کیا میں اپنا سامان یہاں چند گھنٹوں کے لیے چھوڑ سکتا ہوں؟",
    "کیا آپ مجھے ای میل کے ذریعے انوائس بھیج سکتے ہیں؟",
    "کیا ہوٹل ہوائی اڈے کے لیے ٹرانسپورٹ فراہم کرتا ہے؟"
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
