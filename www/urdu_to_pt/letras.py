from gtts import gTTS
import os

# Original Romanized names from your Urdu list
romanized_names = [
    "ek", "do", "teen", "chaar", "paanch", "cheh", "saat", "aath", "nao", "das",
    "gyarah", "barah", "terah", "chaudah", "pandrah", "solah", "satrah", "atharah", "unnees", "bees",
    "ikkees", "baees", "taees", "chobees", "pachees", "chhabees", "sattaees", "atthaeis", "untees", "tees"
]

# Portuguese numbers 1 to 30 corresponding to the above Romanized list
portuguese_numbers = [
    "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
    "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte",
    "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco",
    "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "trinta"
]

output_folder = "audio"

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for romanized, portuguese in zip(romanized_names, portuguese_numbers):
    tts = gTTS(text=portuguese, lang='pt')
    output_file = os.path.join(output_folder, f"{romanized.lower()}.mp3")
    tts.save(output_file)
    print(f"Generated: {output_file}")

print("Portuguese audio files generated with original Romanized names!")
