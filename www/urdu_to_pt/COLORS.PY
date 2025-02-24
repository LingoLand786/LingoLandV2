from gtts import gTTS  # Import gTTS for text-to-speech
import os

# Define a list of colors with their Portuguese (Portugal) and Romanized names
colors = [
    {"portuguese": "Vermelho", "romanized": "Vermelho"},  # Red
    {"portuguese": "Azul", "romanized": "Azul"},          # Blue
    {"portuguese": "Verde", "romanized": "Verde"},        # Green
    {"portuguese": "Amarelo", "romanized": "Amarelo"},    # Yellow
    {"portuguese": "Preto", "romanized": "Preto"},        # Black
    {"portuguese": "Branco", "romanized": "Branco"},      # White
    {"portuguese": "Laranja", "romanized": "Laranja"},    # Orange
    {"portuguese": "Roxo", "romanized": "Roxo"},          # Purple
    {"portuguese": "Cinzento", "romanized": "Cinzento"},  # Gray
    {"portuguese": "Rosa", "romanized": "Rosa"},          # Pink
    {"portuguese": "Castanho", "romanized": "Castanho"},  # Brown
    {"portuguese": "Dourado", "romanized": "Dourado"},    # Gold
    {"portuguese": "Prateado", "romanized": "Prateado"},  # Silver
    {"portuguese": "Turquesa", "romanized": "Turquesa"},  # Turquoise
    {"portuguese": "Bege", "romanized": "Bege"},          # Beige
    {"portuguese": "Salmão", "romanized": "Salmao"},      # Salmon
    {"portuguese": "Caramelo", "romanized": "Caramelo"},  # Caramel
    {"portuguese": "Lavanda", "romanized": "Lavanda"},    # Lavender
    {"portuguese": "Ciano", "romanized": "Ciano"},        # Cyan
    {"portuguese": "Lima", "romanized": "Lima"},          # Lime
    {"portuguese": "Bordô", "romanized": "Bordo"},        # Dark Red
    {"portuguese": "Carmesim", "romanized": "Carmesim"},  # Crimson
    {"portuguese": "Fúcsia", "romanized": "Fucsia"},      # Fuchsia
    {"portuguese": "Turquesa Escuro", "romanized": "Turquesa Escuro"}  # Dark Turquoise
]

# Output folder for audio files
output_folder = "audio"

# Ensure the output folder exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Open a file to save the Romanized and Portuguese list
list_file = os.path.join(output_folder, "colors_list.txt")
with open(list_file, "w", encoding="utf-8") as file:
    # Generate audio for each color and write to file
    for color in colors:
        portuguese_text = color["portuguese"]
        romanized = color["romanized"]
        
        # Generate audio using gTTS
        tts = gTTS(text=portuguese_text, lang='pt')
        
        # Save the audio file with the romanized name
        output_file = os.path.join(output_folder, f"{romanized.lower()}.mp3")
        tts.save(output_file)
        print(f"Generated: {output_file}")
        
        # Write to the list file
        file.write(f"{romanized} - {portuguese_text}\n")

print("Audio generation and list file creation complete!")