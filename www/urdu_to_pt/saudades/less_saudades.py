from gtts import gTTS
import os

# List of answers to generate audio for (in Urdu)
answers = [
    "آپ کا نام کیا ہے؟",   # Correct answer for 'What is your name?' in Urdu
    "میرا نام ہے۔",        # Correct answer for 'My name is.' in Urdu
    "معاف کیجیے۔",         # Correct answer for 'Sorry' in Urdu
    "براہ کرم۔",           # Correct answer for 'Please' in Urdu
    "شکریہ۔",              # Correct answer for 'Thank you' in Urdu
    "کوئی بات نہیں۔",      # Correct answer for 'You're welcome' in Urdu
    "اللہ حافظ۔",          # Correct answer for 'Goodbye' in Urdu
    "سب کچھ ٹھیک ہے۔",      # Correct answer for 'Everything is fine' in Urdu
    "اچھا دن گزرے۔",        # Correct answer for 'Have a good day' in Urdu
    "آپ کہاں سے ہیں؟"       # Correct answer for 'Where are you from?' in Urdu
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
