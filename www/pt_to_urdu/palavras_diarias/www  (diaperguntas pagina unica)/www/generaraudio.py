from gtts import gTTS

# Texto que será convertido em áudio
texto = "انڈا"

# Converter o texto para áudio
tts = gTTS(text=texto, lang='ur')

# Salvar o áudio como um arquivo MP3
tts.save("NOVOOVO.mp3")

print("Áudio salvo com sucesso como 'NOVOOVO.mp3'!")