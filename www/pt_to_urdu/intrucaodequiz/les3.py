from gtts import gTTS
import os

# List of answers to generate audio for (in Urdu)
answers = [
    " میں سے ہوں۔",   # Correct answer for 'Good Morning' in Urdu
    "دوپہر بخیر", # Correct answer for 'Good Afternoon' in Urdu
    "کیا وقت ہوا ہے؟",       # Correct answer for 'Hello' in Urdu
    "آپ کیا کر رہے ہیں؟",     # Correct answer for 'Goodbye' in Urdu
    "یہ ایک خوشی کی بات ہے", # Correct answer for 'How are you?' in Urdu
    "آپ ٹھیک ہیں ", # Correct answer for 'I am fine, thank you' in Urdu
    "  میں اداس ہوں ",   # Correct answer for 'See you later!' in Urdu
    "کتنی دیر ہو چکی ہے؟ ", # Correct answer for 'Nice to meet you!' in Urdu
    "خود کا خیال رکھیں ",  # Correct answer for 'How is it going?' in Urdu
    "آپ کو دیکھ کر خوشی ہوئی "
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
