import pyttsx3
import os

# List of answers to generate audio for
answers = [
    "صبح بخیر",   # Correct answer for 'Good Morning' in Urdu
    "شام بخیر",   # Correct answer for 'Good Evening' in Urdu
    "دوپہر بخیر", # Correct answer for 'Good Afternoon' in Urdu
    "ہیلو",       # Correct answer for 'Hello' in Urdu
    "الوداع",     # Correct answer for 'Goodbye' in Urdu
    "آپ کیسے ہیں؟", # Correct answer for 'How are you?' in Urdu
    "میں ٹھیک ہوں، شکریہ", # Correct answer for 'I am fine, thank you' in Urdu
    "پھر ملیں گے!",   # Correct answer for 'See you later!' in Urdu
    "آپ سے مل کر خوشی ہوئی!", # Correct answer for 'Nice to meet you!' in Urdu
    "کیسے جا رہے ہیں؟"  # Correct answer for 'How is it going?' in Urdu
]

# Function to generate audio for each answer
def generate_audio(answer, index):
    engine = pyttsx3.init()

    # Set properties for voice
    voices = engine.getProperty('voices')
    female_voice = None
    for voice in voices:
        if "female" in voice.name.lower():
            female_voice = voice
            break
    if female_voice:
        engine.setProperty('voice', female_voice.id)

    engine.setProperty('rate', 150)  # Speed of speech (optional)
    engine.setProperty('volume', 1)  # Volume level (optional)

    # Saving the audio to file
    file_name = f"audio_files/answer_{index + 1}.mp3"
    engine.save_to_file(answer, file_name)
    print(f"Audio for answer {index + 1} saved as {file_name}")
    
    engine.runAndWait()

# Create the audio files directory if it doesn't exist
os.makedirs("audio_files", exist_ok=True)

# Generate audio for all answers
for index, answer in enumerate(answers):
    generate_audio(answer, index)

print("Audio files have been generated successfully.")
