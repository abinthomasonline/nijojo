#!/usr/bin/env python3
import struct
import zlib

def create_png(filename, width, height, r, g, b):
    """Create a simple solid color PNG file"""

    def make_chunk(chunk_type, data):
        chunk = chunk_type + data
        crc = zlib.crc32(chunk) & 0xffffffff
        return struct.pack('>I', len(data)) + chunk + struct.pack('>I', crc)

    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'

    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)  # RGB, 8-bit
    ihdr_chunk = make_chunk(b'IHDR', ihdr_data)

    # IDAT chunk - raw pixel data
    raw_data = b''
    for y in range(height):
        raw_data += b'\x00'  # Filter type (none)
        raw_data += bytes([r, g, b]) * width

    compressed_data = zlib.compress(raw_data, 9)
    idat_chunk = make_chunk(b'IDAT', compressed_data)

    # IEND chunk
    iend_chunk = make_chunk(b'IEND', b'')

    # Write PNG file
    with open(f'public/images/{filename}', 'wb') as f:
        f.write(png_signature + ihdr_chunk + idat_chunk + iend_chunk)

    print(f'✓ Created {filename}')

# Brand colors
PRIMARY_RGB = (40, 44, 109)  # #282C6D
SECONDARY_RGB = (16, 185, 129)  # #10B981
WHITE_RGB = (255, 255, 255)
DARK_RGB = (26, 29, 74)  # #1a1d4a

# Create placeholder images with solid colors
print('Creating placeholder images...')

# 1. Nijo Johny photo - Primary color
create_png('nijo-johny.jpg', 400, 500, *PRIMARY_RGB)

# 2. OG default - Primary color
create_png('og-default.jpg', 1200, 630, *PRIMARY_RGB)

# 3. Logos - White background
create_png('emithram-logo.png', 300, 80, *WHITE_RGB)
create_png('universal-tax-logo.png', 300, 80, *WHITE_RGB)
create_png('insurance-logo.png', 300, 80, *WHITE_RGB)

# 4. Hero images - Primary/Dark colors
create_png('emithram-hero.jpg', 1200, 600, *SECONDARY_RGB)
create_png('universal-tax-hero.jpg', 1200, 600, *DARK_RGB)
create_png('insurance-hero.jpg', 1200, 600, *PRIMARY_RGB)

print('\n✅ All 8 placeholder images created successfully!')
print('These are simple solid-color images. Replace with real images later.')
