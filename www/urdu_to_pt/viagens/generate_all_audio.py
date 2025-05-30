from gtts import gTTS
import os

# Dictionary of lessons and their phrases
lessons = {
    'emergency': [
        ("Preciso de ajuda!", "help"),
        ("Chame a polícia!", "police"),
        ("Fui roubado(a)", "robbed"),
        ("Preciso de um médico", "doctor"),
        ("Chame uma ambulância", "ambulance"),
        ("Estou com dor", "pain"),
        ("Estou perdido(a)", "lost"),
        ("Onde fica a embaixada brasileira?", "embassy"),
        ("Preciso falar com o consulado", "consulate")
    ],
    'airport': [
        ("Onde está o check-in?", "checkin"),
        ("Qual é o portão de embarque?", "gate"),
        ("Preciso de um carrinho de bagagem", "cart"),
        ("Onde posso trocar dinheiro?", "exchange"),
        ("Qual é o horário do voo?", "flight_time")
    ],
    'market': [
        ("Quanto custa?", "how_much"),
        ("Posso pechinchar?", "bargain"),
        ("Tem desconto?", "discount"),
        ("Aceita cartão?", "card"),
        ("Onde fica o caixa?", "cashier")
    ],
    'directions': [
        ("Como chego a...?", "how_to_get"),
        ("Fica longe daqui?", "is_it_far"),
        ("Pode me mostrar no mapa?", "show_map"),
        ("Vire à direita", "turn_right"),
        ("Vire à esquerda", "turn_left")
    ],
    'restaurant': [
        ("Posso ver o cardápio?", "menu"),
        ("Quero fazer uma reserva", "reservation"),
        ("A conta, por favor", "bill"),
        ("Está incluído o serviço?", "service"),
        ("Posso pagar com cartão?", "pay_card")
    ],
    'medical': [
        ("Onde fica o hospital?", "hospital"),
        ("Preciso de um médico", "need_doctor"),
        ("Estou com febre", "fever"),
        ("Tenho dor de cabeça", "headache"),
        ("Onde fica a farmácia?", "pharmacy")
    ]
}

# Create audios directory if it doesn't exist
base_dir = "audios"
os.makedirs(base_dir, exist_ok=True)

# Generate audio files for each lesson
for lesson, phrases in lessons.items():
    # Create lesson directory
    lesson_dir = os.path.join(base_dir, lesson)
    os.makedirs(lesson_dir, exist_ok=True)
    
    # Generate audio files
    for phrase, filename in phrases:
        audio_path = os.path.join(lesson_dir, f"{filename}.mp3")
        tts = gTTS(text=phrase, lang='pt')
        tts.save(audio_path)
        print(f"Saved: {audio_path}")

print("All audio files have been generated successfully!") 