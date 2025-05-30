from gtts import gTTS

# Texto que será convertido em áudio
texto = "آڑو"

# Converter o texto para áudio
tts = gTTS(text=texto, lang='ur')

# Salvar o áudio como um arquivo MP3
tts.save("dia11.mp3")

print("Áudio salvo com sucesso como 'dia11.mp3'!")