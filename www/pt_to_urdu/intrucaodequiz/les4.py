from gtts import gTTS
import os

# List of questions and their Urdu translations
questions_and_answers = [
    ("صبح بخیر، تم کیسے ہو؟"),
    ("تم کہاں سے ہو؟"),
    ("ایک اچھا ہفتہ گزارو"),
    ("کیا حال ہے؟"),
    ("تمہارا دن کیسا گزر رہا ہے؟"),
    ("ہیلو، پارٹی میں خوش آمدید!"),
    ("امید ہے تم ٹھیک ہو"),
    ("تم سے مل کر خوشی ہوئی"),
    ("تمہیں دیکھ کر اچھا لگا"),
    ("سب کچھ کیسا ہے؟")
]

# Function to generate audio for each Urdu translation using gTTS
def generate_audio(translation, index):
    # Create a gTTS object for the Urdu translation
    tts = gTTS(text=translation, lang='ur')  # Use 'ur' for Urdu

    # Saving the audio to file
    file_name = f"audio_files/answer_{index + 1}.mp3"
    tts.save(file_name)
    print(f"Audio for answer {index + 1} saved as {file_name}")

# Create the audio files directory if it doesn't exist
os.makedirs("audio_files", exist_ok=True)

# Generate audio for all Urdu translations
for index, translation in enumerate(questions_and_answers):
    generate_audio(translation, index)

print("Audio files have been generated successfully.")
