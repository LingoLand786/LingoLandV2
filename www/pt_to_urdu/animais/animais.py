from gtts import gTTS
import os

# List of animal data with names, Urdu translations, and audio file paths
animals = [
    { "name": "Cachorro", "urdu": "کتا", "image": "animalimg/dog.jpg", "audio": "audio/dog.mp3" },
    { "name": "Gato", "urdu": "بلی", "image": "animalimg/cat.jpg", "audio": "audio/cat.mp3" },
    { "name": "Elefante", "urdu": "ہاتھی", "image": "animalimg/elephant.jpg", "audio": "audio/elephant.mp3" },
    { "name": "Leão", "urdu": "شیر", "image": "animalimg/lion.jpg", "audio": "audio/lion.mp3" },
    { "name": "Tigre", "urdu": "چیتا", "image": "animalimg/tiger.jpg", "audio": "audio/tiger.mp3" },
    { "name": "Coelho", "urdu": "خرگوش", "image": "animalimg/rabbit.jpg", "audio": "audio/rabbit.mp3" },
    { "name": "Cavalo", "urdu": "گھوڑا", "image": "animalimg/horse.jpg", "audio": "audio/horse.mp3" },
    { "name": "Vaca", "urdu": "گائے", "image": "animalimg/cow.jpg", "audio": "audio/cow.mp3" },
    { "name": "Ovelha", "urdu": "بھیڑ", "image": "animalimg/sheep.jpg", "audio": "audio/sheep.mp3" },
    { "name": "Bode", "urdu": "بکرا", "image": "animalimg/goat.jpg", "audio": "audio/goat.mp3" },
    { "name": "Porco", "urdu": "سور", "image": "animalimg/pig.jpg", "audio": "audio/pig.mp3" },
    { "name": "Pato", "urdu": "بطخ", "image": "animalimg/duck.jpg", "audio": "audio/duck.mp3" },
    { "name": "Galo", "urdu": "مرغا", "image": "animalimg/rooster.jpg", "audio": "audio/rooster.mp3" },
    { "name": "Galinha", "urdu": "مرغی", "image": "animalimg/hen.jpg", "audio": "audio/hen.mp3" },
    { "name": "Urso", "urdu": "ریچھ", "image": "animalimg/bear.jpg", "audio": "audio/bear.mp3" },
    { "name": "Macaco", "urdu": "بندر", "image": "animalimg/monkey.jpg", "audio": "audio/monkey.mp3" },
    { "name": "Rato", "urdu": "چوہا", "image": "animalimg/mouse.jpg", "audio": "audio/mouse.mp3" },
    { "name": "Raposa", "urdu": "لومڑی", "image": "animalimg/fox.jpg", "audio": "audio/fox.mp3" },
    { "name": "Lobo", "urdu": "بھیڑیا", "image": "animalimg/wolf.jpg", "audio": "audio/wolf.mp3" },
    { "name": "Cobra", "urdu": "سانپ", "image": "animalimg/snake.jpg", "audio": "audio/snake.mp3" },
    { "name": "Jacaré", "urdu": "مگرمچھ", "image": "animalimg/alligator.jpg", "audio": "audio/alligator.mp3" },
    { "name": "Pombo", "urdu": "کبوتر", "image": "animalimg/pigeon.jpg", "audio": "audio/pigeon.mp3" },
    { "name": "Corvo", "urdu": "کوا", "image": "animalimg/crow.jpg", "audio": "audio/crow.mp3" },
    { "name": "Papagaio", "urdu": "طوطا", "image": "animalimg/parrot.jpg", "audio": "audio/parrot.mp3" },
    { "name": "Águia", "urdu": "عقاب", "image": "animalimg/eagle.jpg", "audio": "audio/eagle.mp3" },
    { "name": "Coruja", "urdu": "الو", "image": "animalimg/owl.jpg", "audio": "audio/owl.mp3" },
    { "name": "Golfinho", "urdu": "ڈولفن", "image": "animalimg/dolphin.jpg", "audio": "audio/dolphin.mp3" },
    { "name": "Tubarão", "urdu": "شارک", "image": "animalimg/shark.jpg", "audio": "audio/shark.mp3" },
    { "name": "Baleia", "urdu": "وہیل", "image": "animalimg/whale.jpg", "audio": "audio/whale.mp3" },
    { "name": "Tartaruga", "urdu": "کچھوا", "image": "animalimg/turtle.jpg", "audio": "audio/turtle.mp3" },
    { "name": "Polvo", "urdu": "آکٹوپس", "image": "animalimg/octopus.jpg", "audio": "audio/octopus.mp3" },
    { "name": "Cervo", "urdu": "ہرن", "image": "animalimg/deer.jpg", "audio": "audio/deer.mp3" },
    { "name": "Camelo", "urdu": "اونٹ", "image": "animalimg/camel.jpg", "audio": "audio/camel.mp3" },
    { "name": "Zebra", "urdu": "زیبرا", "image": "animalimg/zebra.jpg", "audio": "audio/zebra.mp3" },
    { "name": "Panda", "urdu": "پانڈا", "image": "animalimg/panda.jpg", "audio": "audio/panda.mp3" },
    { "name": "Caracol", "urdu": "گھونگا", "image": "animalimg/snail.jpg", "audio": "audio/snail.mp3" },
    { "name": "Formiga", "urdu": "چیونٹی", "image": "animalimg/ant.jpg", "audio": "audio/ant.mp3" },
    { "name": "Borboleta", "urdu": "تتلی", "image": "animalimg/butterfly.jpg", "audio": "audio/butterfly.mp3" },
    { "name": "Aranha", "urdu": "مکڑی", "image": "animalimg/spider.jpg", "audio": "audio/spider.mp3" },
    { "name": "Louva-a-deus", "urdu": "ٹڈا", "image": "animalimg/mantis.jpg", "audio": "audio/mantis.mp3" },
    { "name": "Escorpião", "urdu": "بچھو", "image": "animalimg/scorpion.jpg", "audio": "audio/scorpion.mp3" },
    { "name": "Peixe-palhaço", "urdu": "مچھلی", "image": "animalimg/clownfish.jpg", "audio": "audio/clownfish.mp3" },
    { "name": "Estrela-do-mar", "urdu": "سمندری ستارہ", "image": "animalimg/starfish.jpg", "audio": "audio/starfish.mp3" },
    { "name": "Pinguim", "urdu": "پینگوئن", "image": "animalimg/pinguim.jpg", "audio": "audio/pinguim.mp3" },
    { "name": "Marmot", "urdu": "مارموٹ", "image": "animalimg/marmot.jpg", "audio": "audio/marmot.mp3" },
]

# Directory to save audio files
audio_dir = "audio"
os.makedirs(audio_dir, exist_ok=True)

# Generate audio files
for i, animal in enumerate(animals, start=1):
    audio_file = os.path.join(audio_dir, f"{animal['name']}.mp3")
    tts = gTTS(text=animal['urdu'], lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
