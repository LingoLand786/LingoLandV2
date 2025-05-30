from gtts import gTTS  # Import gTTS for text-to-speech
import os

# Define the Latin alphabet
alphabet = [chr(i) for i in range(ord('A'), ord('Z') + 1)]

# Output folder for audio files
output_folder = "audio_alphabet_portuguese"

# Ensure the output folder exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Open a file to save the list
list_file = os.path.join(output_folder, "alphabet_list.txt")
with open(list_file, "w", encoding="utf-8") as file:
    # Generate audio for each letter and write to file
    for letter in alphabet:
        # Generate audio using gTTS with Portuguese (Portugal)
        tts = gTTS(text=letter, lang='pt', tld='pt')  # 'pt' = Portuguese, 'tld=pt' = Portugal accent

        # Save the audio file
        output_file = os.path.join(output_folder, f"{letter}.mp3")
        tts.save(output_file)
        print(f"Generated: {output_file}")

        # Write to the list file
        file.write(f"{letter}\n")

print("Portuguese alphabet audio generation complete!")
