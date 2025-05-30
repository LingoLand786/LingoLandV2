from gtts import gTTS
import os

# List of Urdu translations only
translations = [
    "سب اچھا ہو",
    "آپ سے مل کر خوشی ہوئی",
    "خوش آمدید",
    "اچھی قسمت",
    "پھر ملیں گے",
    "زندگی کیسی جا رہی ہے؟ کافی عرصے بعد!",
    "کیا نیا ہے؟",
    "آپ سے بات کر کے خوشی ہوئی",
    "پھر ملیں گے"
]

# Function to generate audio for each Urdu translation using gTTS
def generate_audio(translation, index):
    # Create a gTTS object for the Urdu translation
    tts = gTTS(text=translation, lang='ur')  # Use 'ur' for Urdu

    # Saving the audio to file
    file_name = f"audio_files/answer_{index + 1}.mp3"
    tts.save(file_name)
    print(f"Audio for translation {index + 1} saved as {file_name}")

# Create the audio files directory if it doesn't exist
os.makedirs("audio_files", exist_ok=True)

# Generate audio for all Urdu translations
for index, translation in enumerate(translations):
    generate_audio(translation, index)

print("Audio files have been generated successfully.")
