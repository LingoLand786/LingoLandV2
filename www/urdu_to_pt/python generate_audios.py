from gtts import gTTS
import os

# List of answers to generate audio for
answers = [
    "صبح بخیر",   # Correct answer for 'Good Morning' in Urdu
    "شام بخیر",   # Correct answer for 'Good Evening' in Urdu
    "دوپہر بخیر", # Correct answer for 'Good Afternoon' in Urdu
    "السلام علیکم",       # Correct answer for 'Hello' in Urdu
    "خدا حافظ",     # Correct answer for 'Goodbye' in Urdu
    "آپ کیسے ہیں؟", # Correct answer for 'How are you?' in Urdu
    "میں ٹھیک ہوں، شکریہ", # Correct answer for 'I am fine, thank you' in Urdu
    "پھر ملیں گے!",   # Correct answer for 'See you later!' in Urdu
    "آپ سے مل کر خوشی ہوئی!", # Correct answer for 'Nice to meet you!' in Urdu
    "شکریہ"  # Correct answer for 'Thank you' in Urdu
]

# Function to generate audio for each answer using gTTS
def generate_audio(answer, index):
    # Create a gTTS object
    tts = gTTS(text=answer, lang='ur')  # Use 'ur' for Urdu

    # Saving the audio to file
    file_name = f"audio_files/answer_{index + 1}.mp3"
    tts.save(file_name)
    print(f"Audio for answer {index + 1} saved as {file_name}")

# Create the audio files directory if it doesn't exist
os.makedirs("audio_files", exist_ok=True)

# Generate audio for all answers
for index, answer in enumerate(answers):
    generate_audio(answer, index)

print("Audio files have been generated successfully.")
