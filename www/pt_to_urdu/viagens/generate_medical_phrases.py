from gtts import gTTS
import os

# Medical phrases in Urdu
phrases = {
    'need-doctor': 'مجھے ڈاکٹر کی ضرورت ہے',
    'hospital': 'ہسپتال کہاں ہے؟',
    'pain': 'مجھے درد ہے',
    'help': 'مجھے مدد چاہیے',
    'fever': 'مجھے بخار ہے',
    'headache': 'مجھے سر درد ہے',
    'nausea': 'مجھے متلی ہے',
    'dizzy': 'مجھے چکر آ رہے ہیں',
    'medicine': 'مجھے دوا چاہیے',
    'allergy': 'مجھے ... سے الرجی ہے',
    'how-often': 'دن میں کتنی بار؟',
    'ambulance': 'ایمبولینس بلاؤ!',
    'emergency': 'یہ ایک ایمرجنسی ہے!',
    'urgent-help': 'مجھے فوری مدد چاہیے'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='ur')  # Use 'ur' for Urdu
        
        # Create the audio directory if it doesn't exist
        os.makedirs('audio/medical', exist_ok=True)
        
        # Save the audio file
        file_path = f'audio/medical/{filename}.mp3'
        tts.save(file_path)
        print(f"✅ Audio generated successfully: {file_path}")
    except Exception as e:
        print(f"❌ Error generating audio for {filename}: {str(e)}")

# Generate audio for all phrases
for filename, text in phrases.items():
    generate_audio(text, filename)

print("\nAll medical audio files have been generated successfully!") 