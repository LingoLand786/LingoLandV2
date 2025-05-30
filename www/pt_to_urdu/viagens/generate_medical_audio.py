import os
from bs4 import BeautifulSoup
from gtts import gTTS
import re

def create_directory_if_not_exists(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def extract_urdu_phrases(html_file):
    with open(html_file, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')
        
        # Find all table rows
        rows = soup.find_all('tr')
        phrases = []
        
        for row in rows:
            # Find Urdu text (second column)
            urdu_cell = row.find_all('td')
            if len(urdu_cell) >= 2:
                urdu_text = urdu_cell[1].text.strip()
                # Find audio button to get the audio ID
                audio_btn = row.find('button', class_='audio-btn')
                if audio_btn and 'onclick' in audio_btn.attrs:
                    onclick = audio_btn['onclick']
                    # Extract audio ID from onclick attribute
                    audio_id_match = re.search(r"playAudio\('(.*?)'\)", onclick)
                    if audio_id_match:
                        audio_id = audio_id_match.group(1)
                        phrases.append((urdu_text, audio_id))
        
        return phrases

def generate_audio_files(phrases, output_dir):
    for urdu_text, audio_id in phrases:
        # Create full path for audio file
        audio_path = os.path.join(output_dir, f"{audio_id}.mp3")
        
        # Skip if file already exists
        if os.path.exists(audio_path):
            print(f"Audio file already exists: {audio_path}")
            continue
        
        try:
            # Generate audio using gTTS
            tts = gTTS(text=urdu_text, lang='ur')
            tts.save(audio_path)
            print(f"Generated audio for: {urdu_text} -> {audio_path}")
        except Exception as e:
            print(f"Error generating audio for {urdu_text}: {str(e)}")

def main():
    # Base directory for audio files
    base_audio_dir = os.path.join(os.path.dirname(__file__), 'audio')
    lesson_file = 'lesson_medical_phrases.html'
    lesson_path = os.path.join(os.path.dirname(__file__), lesson_file)
    
    if not os.path.exists(lesson_path):
        print(f"Lesson file not found: {lesson_path}")
        return
    
    print(f"\nProcessing {lesson_file}...")
    
    # Extract phrases from HTML
    phrases = extract_urdu_phrases(lesson_path)
    
    # Create directory for audio files
    lesson_audio_dir = os.path.join(base_audio_dir, 'medical')
    create_directory_if_not_exists(lesson_audio_dir)
    
    # Generate audio files
    generate_audio_files(phrases, lesson_audio_dir)

if __name__ == "__main__":
    main() 