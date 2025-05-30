from gtts import gTTS
import os

# Market phrases in Urdu
phrases = {
    'price': 'یہ کتنا ہے؟',
    'expensive': 'یہ بہت مہنگا ہے',
    'cheaper': 'کیا آپ کم قیمت دے سکتے ہیں؟',
    'quantity': 'میں ... کلو/گرام چاہتا/چاہتی ہوں',
    'fresh': 'کیا یہ تازہ ہے؟',
    'size': 'میرا سائز ... ہے',
    'try-on': 'کیا میں یہ آزما سکتا/سکتی ہوں؟',
    'color': 'کیا آپ کے پاس دوسرے رنگ ہیں؟',
    'change': 'کیا میں یہ تبدیل کر سکتا/سکتی ہوں؟',
    'receipt': 'مجھے رسید چاہیے',
    'bag': 'کیا آپ کے پاس بیگ ہے؟',
    'card': 'کیا آپ کارڈ قبول کرتے ہیں؟',
    'cash': 'میں نقد ادا کروں گا/گی'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='ur')  # Use 'ur' for Urdu
        
        # Create the audio directory if it doesn't exist
        os.makedirs('audio/market', exist_ok=True)
        
        # Save the audio file
        file_path = f'audio/market/{filename}.mp3'
        tts.save(file_path)
        print(f"✅ Audio generated successfully: {file_path}")
    except Exception as e:
        print(f"❌ Error generating audio for {filename}: {str(e)}")

# Generate audio for all phrases
for filename, text in phrases.items():
    generate_audio(text, filename)

print("\nAll market audio files have been generated successfully!") 