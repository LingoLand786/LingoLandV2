from gtts import gTTS
import os

# List of family members with names and Urdu names
family_members = [
    { 
        "name": "Pai", 
        "urdu": "والد", 
        "audio": "audio/father.mp3"
    },
    { 
        "name": "Mãe", 
        "urdu": "والدہ", 
        "audio": "audio/mother.mp3"
    },
    { 
        "name": "Padrasto", 
        "urdu": "سوتیلا باپ", 
        "audio": "audio/stepfather.mp3"
    },
    { 
        "name": "Madrasta", 
        "urdu": "سوتیلی ماں", 
        "audio": "audio/stepmother.mp3"
    },
    { 
        "name": "Irmão", 
        "urdu": "بھائی", 
        "audio": "audio/brother.mp3"
    },
    { 
        "name": "Irmã", 
        "urdu": "بہن", 
        "audio": "audio/sister.mp3"
    },
    { 
        "name": "Irmão Mais Velho", 
        "urdu": "بڑا بھائی", 
        "audio": "audio/elder_brother.mp3"
    },
    { 
        "name": "Irmã Mais Velha", 
        "urdu": "بڑی بہن", 
        "audio": "audio/elder_sister.mp3"
    },
    { 
        "name": "Irmão Mais Novo", 
        "urdu": "چھوٹا بھائی", 
        "audio": "audio/younger_brother.mp3"
    },
    { 
        "name": "Irmã Mais Nova", 
        "urdu": "چھوٹی بہن", 
        "audio": "audio/younger_sister.mp3"
    },
    { 
        "name": "Meio-Irmão", 
        "urdu": "سوتیلا بھائی", 
        "audio": "audio/stepbrother.mp3"
    },
    { 
        "name": "Meia-Irmã", 
        "urdu": "سوتیلی بہن", 
        "audio": "audio/stepsister.mp3"
    },
    { 
        "name": "Marido", 
        "urdu": "شوہر", 
        "audio": "audio/husband.mp3"
    },
    { 
        "name": "Esposa", 
        "urdu": "بیوی", 
        "audio": "audio/wife.mp3"
    },
    { 
        "name": "Cunhado (irmão do marido)", 
        "urdu": "دیور", 
        "audio": "audio/brother_in_law1.mp3"
    },
    { 
        "name": "Cunhado (irmão da esposa)", 
        "urdu": "سالہ", 
        "audio": "audio/brother_in_law2.mp3"
    },
    { 
        "name": "Avô Paterno", 
        "urdu": "دادا", 
        "audio": "audio/paternal_grandfather.mp3"
    },
    { 
        "name": "Avó Paterna", 
        "urdu": "دادی", 
        "audio": "audio/paternal_grandmother.mp3"
    },
    { 
        "name": "Avô Materno", 
        "urdu": "نانا", 
        "audio": "audio/maternal_grandfather.mp3"
    },
    { 
        "name": "Avó Materna", 
        "urdu": "نانی", 
        "audio": "audio/maternal_grandmother.mp3"
    },
    { 
        "name": "Tio Paterno", 
        "urdu": "چچا", 
        "audio": "audio/paternal_uncle.mp3"
    },
    { 
        "name": "Tia Paterna", 
        "urdu": "پھوپھی", 
        "audio": "audio/paternal_aunt.mp3"
    },
    { 
        "name": "Tio Materno", 
        "urdu": "ماموں", 
        "audio": "audio/maternal_uncle.mp3"
    },
    { 
        "name": "Tia Materna", 
        "urdu": "خالہ", 
        "audio": "audio/maternal_aunt.mp3"
    }
]

# Create audio files with the correct Urdu pronunciation for each family member
os.makedirs("audio", exist_ok=True)

for member in family_members:
    # Get the Urdu name of the family member
    urdu_name = member["urdu"]
    audio_file = member["audio"]
    
    # Generate the audio file using gTTS
    tts = gTTS(text=urdu_name, lang='ur')
    tts.save(audio_file)
    print(f"Saved: {audio_file}")

print("All audio files have been generated.")
