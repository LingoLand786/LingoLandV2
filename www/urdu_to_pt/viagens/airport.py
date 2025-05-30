from gtts import gTTS
import os

# List of Urdu vegetable names to generate audio for
vegetables = [
    " کہاں چیک ان ہے",  
    " بورڈنگ گیٹ کہاں ہے", 
    "میں نے اپنا پرواز گم کر دیا ہے",  
    "مجھے اپنی پرواز کے بارے میں معلومات چاہیے",  
    "باتھروم کہاں ہے",  
    "یہ ٹکٹ کتنے کا ہے", 
    "بیگیج کلیم کہاں ہے", 
    "میرا سامان گم ہو گیا ہے",  
    "مجھے اپنے ویزا کے بارے میں مدد چاہیے", 
    "مجھے وائی فائی کنیکشن کی ضرورت ہے",  
    "میری پرواز منسوخ ہو گئی ہے", 
    "کیا مجھے کھڑکی والی سیٹ مل سکتی ہے",  
    "بورڈنگ میں کتنا وقت رہ گیا ہے",  
    " کیا یہ پرواز کہیں رکتی ہے",  
    "پرواز کا دورانیہ کتنا ہے",  
    "کیا آپ میری سیٹ کے بارے میں مدد کر سکتے ہیں", 
    "کیا میں یہ ہاتھ کا سامان لا سکتا ہوں",  
    "کیا مجھے کسٹم پر کچھ ظاہر کرنا ہے",  # Zucchini
    "چیک ان کاؤنٹر کب کھلے گا",  # Bok Choy
    "مجھے وہیل چیئر کی ضرورت ہے",  # Jiló
    "اگر پرواز لیٹ ہو جائے تو مجھے کیا کرنا چاہیے", 
   
] 

# Directory to save audio files
audio_dir = "airport_audios"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, vegetable in enumerate(vegetables, start=1):
    audio_file = os.path.join(audio_dir, f"airport_audios{i}.mp3")
    tts = gTTS(text=vegetable, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All aiport audio files have been generated.")
