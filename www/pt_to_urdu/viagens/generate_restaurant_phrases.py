from gtts import gTTS
import os

# Restaurant phrases in Urdu
phrases = {
    'table': 'کیا آپ کے پاس ایک میز ہے؟',
    'menu': 'میں مینو دیکھ سکتا/سکتی ہوں؟',
    'order': 'میں آرڈر کرنا چاہتا/چاہتی ہوں',
    'recommend': 'آپ کیا تجویز کرتے ہیں؟',
    'vegetarian': 'کیا آپ کے پاس سبزی خور کھانے ہیں؟',
    'spicy': 'کیا یہ مصالحہ دار ہے؟',
    'water': 'میں پانی لے سکتا/سکتی ہوں؟',
    'bill': 'میں بل لے سکتا/سکتی ہوں؟',
    'delicious': 'یہ بہت مزیدار ہے',
    'more': 'کیا میں اور لے سکتا/سکتی ہوں؟',
    'less': 'کیا آپ اس میں مصالہ کم کر سکتے ہیں؟',
    'takeaway': 'کیا میں یہ گھر لے جا سکتا/سکتی ہوں؟',
    'allergy': 'مجھے ... سے الرجی ہے',
    'thank-you': 'شکریہ، یہ بہت اچھا تھا'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='ur')  # Use 'ur' for Urdu
        
        # Create the audio directory if it doesn't exist
        os.makedirs('audio/restaurant', exist_ok=True)
        
        # Save the audio file
        file_path = f'audio/restaurant/{filename}.mp3'
        tts.save(file_path)
        print(f"✅ Audio generated successfully: {file_path}")
    except Exception as e:
        print(f"❌ Error generating audio for {filename}: {str(e)}")

# Generate audio for all phrases
for filename, text in phrases.items():
    generate_audio(text, filename)

print("\nAll restaurant audio files have been generated successfully!") 