from gtts import gTTS
import os

# Hotel booking phrases in Portuguese
phrases = {
    'reservation': 'Gostaria de fazer uma reserva',
    'price': 'Quanto custa por noite?',
    'room': 'Preciso de um quarto para duas pessoas',
    'checkin': 'Tenho uma reserva em nome de...',
    'roomnumber': 'Qual é o número do meu quarto?',
    'breakfast': 'O café da manhã está incluído?',
    'towels': 'Preciso de toalhas limpas',
    'wifi': 'O Wi-Fi é gratuito?',
    'checkout': 'Qual é o horário do check-out?'
}

# Function to generate audio for each phrase
def generate_audio(text, filename):
    try:
        # Create a gTTS object
        tts = gTTS(text=text, lang='pt')  # Use 'pt' for Portuguese
        
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