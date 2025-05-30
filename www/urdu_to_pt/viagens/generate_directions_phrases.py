from gtts import gTTS
import os

# Directions phrases in Urdu
phrases = {
    'where-is': '... کہاں ہے؟',
    'how-to-get': '... تک کیسے پہنچوں؟',
    'lost': 'میں گم ہو گیا/گی ہوں',
    'map': 'کیا آپ مجھے نقشے پر دکھا سکتے ہیں؟',
    'hotel': 'ہوٹل کہاں ہے؟',
    'restaurant': 'ریستوران کہاں ہے؟',
    'bathroom': 'باتھ روم کہاں ہے؟',
    'train-station': 'ریل گاڑی اسٹیشن کہاں ہے؟',
    'bus-stop': 'میں بس کہاں سے پکڑ سکتا/سکتی ہوں؟',
    'which-bus': '... کے لیے کونسی بس جاتی ہے؟',
    'taxi': 'میں ٹیکسی کہاں سے لے سکتا/سکتی ہوں؟',
    'far': 'کیا یہ یہاں سے دور ہے؟',
    'how-long': 'کتنا وقت لگے گا؟',
    'walking': 'کیا میں پیدل جا سکتا/سکتی ہوں؟'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='ur')  # Use 'ur' for Urdu
        
        # Create the audio directory if it doesn't exist
        os.makedirs('audio/directions', exist_ok=True)
        
        # Save the audio file
        file_path = f'audio/directions/{filename}.mp3'
        tts.save(file_path)
        print(f"✅ Audio generated successfully: {file_path}")
    except Exception as e:
        print(f"❌ Error generating audio for {filename}: {str(e)}")

# Generate audio for all phrases
for filename, text in phrases.items():
    generate_audio(text, filename)

print("\nAll directions audio files have been generated successfully!") 