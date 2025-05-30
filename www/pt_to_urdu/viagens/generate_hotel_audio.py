from gtts import gTTS
import os

# Hotel booking phrases in Urdu
phrases = {
    'reservation': 'میں ریزرویشن کرنا چاہتا/چاہتی ہوں',
    'price': 'ایک رات کا کرایہ کتنا ہے؟',
    'room': 'مجھے دو افراد کے لیے کمرہ چاہیے',
    'checkin': 'میرا ریزرویشن ... کے نام پر ہے',
    'roomnumber': 'میرے کمرے کا نمبر کیا ہے؟',
    'breakfast': 'ناشتہ شامل ہے؟',
    'towels': 'مجھے صاف تولیے چاہیے',
    'wifi': 'وائی فائی مفت ہے؟',
    'checkout': 'چیک آؤٹ کا وقت کیا ہے؟'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='ur')  # Use 'ur' for Urdu
        
        # Create the audio directory if it doesn't exist
        os.makedirs('audio/hotel', exist_ok=True)
        
        # Save the audio file
        file_path = f'audio/hotel/{filename}.mp3'
        tts.save(file_path)
        print(f"✅ Audio generated successfully: {file_path}")
    except Exception as e:
        print(f"❌ Error generating audio for {filename}: {str(e)}")

# Generate audio for all phrases
for filename, text in phrases.items():
    generate_audio(text, filename)

print("\nAll audio files have been generated successfully!") 