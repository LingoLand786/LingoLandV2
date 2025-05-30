from gtts import gTTS
import os

# List of Urdu vegetable names to generate audio for
market = [
    "یہ کتنے کا ہے",  
    " کیا آپ کریڈٹ کارڈ قبول کرتے ہیں", 
    "کیا یہ دوسرے سائز میں ہے",  
    "سبزیوں کا سیکشن کہاں ہے",  
    "مجھے رعایت چاہیے",  
    "کاؤنٹر کہاں ہے", 
    "کیا آپ تازہ پھل بیچتے ہیں", 
    "آپ کے اوقاتِ کار کیا ہیں",  
    "کیا بیگز دستیاب ہیں", 
    "مجھے مدد کی ضرورت ہے",  
    "کیا میں نقد ادائیگی کر سکتا ہوں", 
    "دودھ کے سیکشن کہاں ہے",  
    "کیا یہ پروڈکٹ رعایتی ہے",  
    "کیا آپ ہوم ڈلیوری کرتے ہیں ", 
    "پارکنگ کہاں ہے",  
    "فی کلو قیمت کیا ہے",  
    "کیا میں یہ آزما سکتا ہوں..                                                                                                                                                                                                  ",  
    "کیا کوئی سستا پروڈکٹ ہے", 
    "ترسیل میں کتنا وقت لگتا ہے", 
    "کیا آپ کے پاس کیٹلاگ ہے",  
    "کیا اس پروڈکٹ کی وارنٹی ہے", 
    "کیا آپ کے پاس باقی پیسے ہیں",  
    
   
] 

# Directory to save audio files
audio_dir = "market_audios"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, vegetable in enumerate(market, start=1):
    audio_file = os.path.join(audio_dir, f"market_audios{i}.mp3")
    tts = gTTS(text=vegetable, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All aiport audio files have been generated.")
