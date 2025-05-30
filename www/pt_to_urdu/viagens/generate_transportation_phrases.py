from gtts import gTTS
import os

# Transportation phrases in Urdu
phrases = {
    'ticket': 'میں ٹکٹ لینا چاہتا/چاہتی ہوں',
    'where-to': 'یہ کہاں جاتا ہے؟',
    'when': 'یہ کب جاتا ہے؟',
    'how-much': 'ٹکٹ کی قیمت کتنی ہے؟',
    'one-way': 'میں ایک طرف کا ٹکٹ چاہتا/چاہتی ہوں',
    'round-trip': 'میں واپسی کا ٹکٹ چاہتا/چاہتی ہوں',
    'next-stop': 'اگلا اسٹاپ کونسا ہے؟',
    'get-off': 'میں یہاں اترنا چاہتا/چاہتی ہوں',
    'transfer': 'میں کہاں سے ٹرانسفر کر سکتا/سکتی ہوں؟',
    'schedule': 'کیا آپ کے پاس ٹائم ٹیبل ہے؟',
    'delay': 'کیا ٹرین/بس لیٹ ہے؟',
    'platform': 'یہ کس پلیٹ فارم سے جاتا ہے؟',
    'luggage': 'میرا سامان کہاں رکھ سکتا/سکتی ہوں؟',
    'help': 'کیا آپ میری مدد کر سکتے ہیں؟'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='ur')  # Use 'ur' for Urdu
        
        # Create the audio directory if it doesn't exist
        os.makedirs('audio/transportation', exist_ok=True)
        
        # Save the audio file
        file_path = f'audio/transportation/{filename}.mp3'
        tts.save(file_path)
        print(f"✅ Audio generated successfully: {file_path}")
    except Exception as e:
        print(f"❌ Error generating audio for {filename}: {str(e)}")

# Generate audio for all phrases
for filename, text in phrases.items():
    generate_audio(text, filename)

print("\nAll transportation audio files have been generated successfully!") 