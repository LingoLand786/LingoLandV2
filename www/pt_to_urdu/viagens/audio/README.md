# Audio Files for Language Lessons

This directory contains audio files for the language lessons. Each lesson has its own subdirectory with the corresponding audio files.

## Directory Structure

```
audio/
├── hotel/
│   ├── reservation.mp3
│   ├── price.mp3
│   ├── room.mp3
│   ├── checkin.mp3
│   ├── roomnumber.mp3
│   ├── breakfast.mp3
│   ├── towels.mp3
│   ├── wifi.mp3
│   └── checkout.mp3
├── emergency/
│   ├── help.mp3
│   ├── police.mp3
│   ├── robbed.mp3
│   ├── doctor.mp3
│   ├── ambulance.mp3
│   ├── pain.mp3
│   ├── lost.mp3
│   ├── embassy.mp3
│   └── consulate.mp3
└── restaurant/
    ├── menu.mp3
    ├── order.mp3
    ├── special.mp3
    ├── no-spice.mp3
    ├── less-spicy.mp3
    ├── more-water.mp3
    ├── bill.mp3
    ├── card.mp3
    └── service.mp3
```

## Adding Audio Files

1. Create the appropriate subdirectory for your lesson (e.g., `hotel/`, `emergency/`, `restaurant/`)
2. Add your audio files in MP3 format
3. Name the files exactly as specified in the JavaScript code
4. Ensure the audio files are clear and properly recorded
5. Keep the audio files under 1MB each for better performance

## Audio File Requirements

- Format: MP3
- Bitrate: 128kbps or higher
- Sample Rate: 44.1kHz
- Channels: Mono or Stereo
- Duration: Keep phrases short and clear
- Volume: Normalized to -14 LUFS

## Testing Audio

To test if the audio files are working:

1. Open the lesson in a web browser
2. Click the play button next to any phrase
3. The audio should play immediately
4. If you see an error message, check:
   - File exists in the correct location
   - File name matches exactly
   - File format is correct
   - File is not corrupted 