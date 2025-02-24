from gtts import gTTS  # Import gTTS for text-to-speech
import os

# Define a list of colors with their Urdu and Romanized names
colors = [
    {"urdu": "سرخ", "romanized": "Surkh"},      # Red
    {"urdu": "نیلا", "romanized": "Neela"},     # Blue
    {"urdu": "سبز", "romanized": "Sabz"},       # Green
    {"urdu": "پیلا", "romanized": "Peela"},     # Yellow
    {"urdu": "کالا", "romanized": "Kala"},      # Black
    {"urdu": "سفید", "romanized": "Safed"},     # White
    {"urdu": "نارنجی", "romanized": "Naranji"}, # Orange
    {"urdu": "جامنی", "romanized": "Jamni"},    # Purple
    {"urdu": "سرمئی", "romanized": "Sarmayi"},  # Gray
    {"urdu": "گلابی", "romanized": "Gulabi"},   # Pink
    {"urdu": "بھورا", "romanized": "Bhoora"},   # Brown
    {"urdu": "سنہری", "romanized": "Sunehri"}, # Gold
    {"urdu": "چاندی", "romanized": "Chandi"},   # Silver
    {"urdu": "فیروزی", "romanized": "Ferozi"},  # Turquoise
    {"urdu": "چینی", "romanized": "Cheeni"},    # Beige
    {"urdu": "سالمون", "romanized": "Salmon"},  # Salmon
    {"urdu": "کریم", "romanized": "Karim"},     # Caramel
    {"urdu": "لےوینڈا", "romanized": "Lavender"}, # Lavender
    {"urdu": "سیان", "romanized": "Cyan"},      # Cyan
    {"urdu": "بیج", "romanized": "Beige"},      # Tan
    {"urdu": "لیموں", "romanized": "Lemon"},    # Lime
    {"urdu": "بورڈو", "romanized": "Bordeaux"}, # Dark Red
    {"urdu": "کرمسی", "romanized": "Crimson"},  # Crimson
    {"urdu": "فیوکیا", "romanized": "Fuchsia"}, # Fuchsia
    {"urdu": "گہرا فیروزی", "romanized": "Gehra Ferozi"} # Dark Turquoise
]

# Output folder for audio files
output_folder = "audio"

# Ensure the output folder exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Open a file to save the Romanized and Urdu list
list_file = os.path.join(output_folder, "colors_list.txt")
with open(list_file, "w", encoding="utf-8") as file:
    # Generate audio for each color and write to file
    for color in colors:
        urdu_text = color["urdu"]
        romanized = color["romanized"]
        
        # Generate audio using gTTS
        tts = gTTS(text=urdu_text, lang='ur')
        
        # Save the audio file with the romanized name
        output_file = os.path.join(output_folder, f"{romanized.lower()}.mp3")
        tts.save(output_file)
        print(f"Generated: {output_file}")
        
        # Write to the list file
        file.write(f"{romanized} - {urdu_text}\n")

print("Audio generation and list file creation complete!")
