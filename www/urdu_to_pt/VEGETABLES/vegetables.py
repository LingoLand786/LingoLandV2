from gtts import gTTS
import os

# Vegetable list with Portuguese names and target audio filenames
vegetables = [
    {"pt": "Batata", "filename": "vegetable_audio1.mp3"},
    {"pt": "Cenoura", "filename": "vegetable_audio2.mp3"},
    {"pt": "Cebola", "filename": "vegetable_audio3.mp3"},
    {"pt": "Tomate", "filename": "vegetable_audio4.mp3"},
    {"pt": "Pimentão", "filename": "vegetable_audio5.mp3"},
    {"pt": "Pepino", "filename": "vegetable_audio6.mp3"},
    {"pt": "Alho", "filename": "vegetable_audio7.mp3"},
    {"pt": "Espinafre", "filename": "vegetable_audio8.mp3"},
    {"pt": "Repolho", "filename": "vegetable_audio9.mp3"},
    {"pt": "Alface", "filename": "vegetable_audio10.mp3"},
    {"pt": "Beterraba", "filename": "vegetable_audio11.mp3"},
    {"pt": "Rabanete", "filename": "vegetable_audio12.mp3"},
    {"pt": "Nabo", "filename": "vegetable_audio13.mp3"},
    {"pt": "Inhame", "filename": "vegetable_audio14.mp3"},
    {"pt": "Feijão", "filename": "vegetable_audio15.mp3"},
    {"pt": "Ervilha", "filename": "vegetable_audio16.mp3"},
    {"pt": "Grão-de-bico", "filename": "vegetable_audio17.mp3"},
    {"pt": "Abóbora", "filename": "vegetable_audio18.mp3"},
    {"pt": "Chuchu", "filename": "vegetable_audio19.mp3"},
    {"pt": "Abobrinha", "filename": "vegetable_audio20.mp3"},
    {"pt": "Bok Choy", "filename": "vegetable_audio21.mp3"},
    {"pt": "Jiló", "filename": "vegetable_audio22.mp3"},
    {"pt": "Okra", "filename": "vegetable_audio23.mp3"},
    {"pt": "Couve-flor", "filename": "vegetable_audio24.mp3"},
    {"pt": "Brócolis", "filename": "vegetable_audio25.mp3"},
    {"pt": "Couve", "filename": "vegetable_audio26.mp3"},
    {"pt": "Coração-de-bananeira", "filename": "vegetable_audio27.mp3"},
    {"pt": "Cassava", "filename": "vegetable_audio29.mp3"},
]

output_folder = "vegetable_audios"
os.makedirs(output_folder, exist_ok=True)

for veg in vegetables:
    tts = gTTS(text=veg["pt"], lang='pt')
    filepath = os.path.join(output_folder, veg["filename"])
    tts.save(filepath)
    print(f"Generated audio: {filepath}")

print("✅ All vegetable audio files generated successfully!")
