from gtts import gTTS
import os

# پرتگالی جملے کی لسٹ (جیسے آپ کے HTML میں ہیں)
portuguese_phrases = [
    "Bom dia",
    "Olá",
    "Boa noite",
    "Adeus",
    "Boa tarde",
    "Como está você?",
    "Até logo",
    "Estou bem, obrigado",
    "Prazer em conhecê-lo",
    "Obrigada"
]

output_folder = "audios"

# فولڈر بنائیں اگر موجود نہ ہو
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# ہر جملے کے لیے mp3 فائل بنائیں
for i, phrase in enumerate(portuguese_phrases, start=1):
    tts = gTTS(text=phrase, lang='pt')
    filename = f"answer_{i}.mp3"
    output_path = os.path.join(output_folder, filename)
    tts.save(output_path)
    print(f"Generated audio: {output_path}")

print("تمام آڈیو فائلز کامیابی سے بن گئیں!")
