from gtts import gTTS

# List of numbers 1 to 30 in Urdu with their Romanized names
numbers = [
    {"romanized": "Ek", "urdu": "ایک"},
    {"romanized": "Do", "urdu": "دو"},
    {"romanized": "Teen", "urdu": "تین"},
    {"romanized": "Chaar", "urdu": "چار"},
    {"romanized": "Paanch", "urdu": "پانچ"},
    {"romanized": "Cheh", "urdu": "چھ"},
    {"romanized": "Saat", "urdu": "سات"},
    {"romanized": "Aath", "urdu": "آٹھ"},
    {"romanized": "Nao", "urdu": "نو"},
    {"romanized": "Das", "urdu": "دس"},
    {"romanized": "Gyarah", "urdu": "گیارہ"},
    {"romanized": "Barah", "urdu": "بارہ"},
    {"romanized": "Terah", "urdu": "تیرہ"},
    {"romanized": "Chaudah", "urdu": "چودہ"},
    {"romanized": "Pandrah", "urdu": "پندرہ"},
    {"romanized": "Solah", "urdu": "سولہ"},
    {"romanized": "Satrah", "urdu": "سترہ"},
    {"romanized": "Atharah", "urdu": "اٹھارہ"},
    {"romanized": "Unnees", "urdu": "انیس"},
    {"romanized": "Bees", "urdu": "بیس"},
    {"romanized": "Ikkees", "urdu": "اکیس"},
    {"romanized": "Baees", "urdu": "بائیس"},
    {"romanized": "Taees", "urdu": "تئیس"},
    {"romanized": "Chobees", "urdu": "چوبیس"},
    {"romanized": "Pachees", "urdu": "پچیس"},
    {"romanized": "Chhabees", "urdu": "چھبیس"},
    {"romanized": "Sattaees", "urdu": "ستائیس"},
    {"romanized": "Atthaeis", "urdu": "اٹھائیس"},
    {"romanized": "Untees", "urdu": "انتیس"},
    {"romanized": "Tees", "urdu": "تیس"}
]

# Output folder for audio files
output_folder = "audio"

# Ensure the output folder exists
import os
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Open a file to save the Romanized and Urdu list
list_file = os.path.join(output_folder, "numbers_list.txt")
with open(list_file, "w", encoding="utf-8") as file:
    # Generate audio for each number and write to file
    for num in numbers:
        urdu_text = num["urdu"]
        romanized = num["romanized"]
        
        # Generate audio using gTTS
        tts = gTTS(text=urdu_text, lang='ur')
        
        # Save the audio file with the romanized name
        output_file = os.path.join(output_folder, f"{romanized.lower()}.mp3")
        tts.save(output_file)
        print(f"Generated: {output_file}")
        
        # Write to the list file
        file.write(f"{romanized} - {urdu_text}\n")

print("Audio generation and list file creation complete!")
