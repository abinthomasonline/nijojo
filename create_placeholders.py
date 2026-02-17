#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if it doesn't exist
os.makedirs('public/images', exist_ok=True)

# Brand colors
PRIMARY = '#282C6D'
SECONDARY = '#10B981'
WHITE = '#FFFFFF'
GRAY = '#CCCCCC'

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_text_image(filename, width, height, bg_color, texts):
    """Create a simple placeholder image with text"""
    img = Image.new('RGB', (width, height), color=hex_to_rgb(bg_color))
    draw = ImageDraw.Draw(img)

    # Try to use a system font, fallback to default
    try:
        font_large = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 60)
        font_medium = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 36)
        font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw texts
    y_offset = height // 2 - (len(texts) * 30)
    for text, color, size in texts:
        font = font_large if size == 'large' else (font_medium if size == 'medium' else font_small)
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        x = (width - text_width) // 2
        draw.text((x, y_offset), text, fill=hex_to_rgb(color), font=font)
        y_offset += 70 if size == 'large' else (50 if size == 'medium' else 35)

    img.save(f'public/images/{filename}')
    print(f'✓ Created {filename}')

# 1. Nijo Johny personal photo
create_text_image('nijo-johny.jpg', 400, 500, PRIMARY, [
    ('NIJO JOHNY', WHITE, 'large'),
    ('Personal Photo', SECONDARY, 'medium'),
    ('Placeholder', GRAY, 'small')
])

# 2. OG default image for social media
create_text_image('og-default.jpg', 1200, 630, PRIMARY, [
    ('NIJO JOHNY', WHITE, 'large'),
    ('Entrepreneur & Business Owner', SECONDARY, 'medium'),
    ('nijojo.com', GRAY, 'small')
])

# 3. e-Mithram logo
create_text_image('emithram-logo.png', 300, 80, WHITE, [
    ('e-Mithram', PRIMARY, 'medium')
])

# 4. Universal Tax logo
create_text_image('universal-tax-logo.png', 300, 80, WHITE, [
    ('Universal Tax', PRIMARY, 'medium')
])

# 5. Insurance logo
create_text_image('insurance-logo.png', 300, 80, WHITE, [
    ('Insurance Services', PRIMARY, 'medium')
])

# 6. e-Mithram hero
create_text_image('emithram-hero.jpg', 1200, 600, PRIMARY, [
    ('e-Mithram', WHITE, 'large'),
    ('Digital Service Partner', SECONDARY, 'medium')
])

# 7. Universal Tax hero
create_text_image('universal-tax-hero.jpg', 1200, 600, '#1a1d4a', [
    ('Universal Tax', WHITE, 'large'),
    ('[PLACEHOLDER]', SECONDARY, 'medium')
])

# 8. Insurance hero
create_text_image('insurance-hero.jpg', 1200, 600, PRIMARY, [
    ('Insurance Services', WHITE, 'large'),
    ('[PLACEHOLDER]', SECONDARY, 'medium')
])

print('\n✅ All 8 placeholder images created successfully!')
print('Images saved to: public/images/')
