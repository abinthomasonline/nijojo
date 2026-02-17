#!/usr/bin/env python3
import struct
import zlib

def create_png_with_colors(filename, width, height, colors):
    """Create a PNG file with horizontal color stripes"""

    def make_chunk(chunk_type, data):
        chunk = chunk_type + data
        crc = zlib.crc32(chunk) & 0xffffffff
        return struct.pack('>I', len(data)) + chunk + struct.pack('>I', crc)

    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'

    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr_chunk = make_chunk(b'IHDR', ihdr_data)

    # IDAT chunk - create striped pattern
    raw_data = b''
    stripe_height = height // len(colors)

    for y in range(height):
        raw_data += b'\x00'  # Filter type
        color_idx = min(y // stripe_height, len(colors) - 1)
        raw_data += bytes(colors[color_idx]) * width

    compressed_data = zlib.compress(raw_data, 9)
    idat_chunk = make_chunk(b'IDAT', compressed_data)

    # IEND chunk
    iend_chunk = make_chunk(b'IEND', b'')

    # Write PNG file
    with open(f'public/images/{filename}', 'wb') as f:
        f.write(png_signature + ihdr_chunk + idat_chunk + iend_chunk)

    print(f'✓ Created {filename}')

# Brand colors
PRIMARY_RGB = (40, 44, 109)  # #282C6D - Blue
SECONDARY_RGB = (16, 185, 129)  # #10B981 - Green
WHITE_RGB = (255, 255, 255)
LIGHT_GRAY = (240, 240, 240)

print('Recreating logo placeholder images with visible content...')

# Logos with blue and green stripes
create_png_with_colors('emithram-logo.png', 300, 80, [
    PRIMARY_RGB,      # Top - Blue
    SECONDARY_RGB,    # Middle - Green
    WHITE_RGB         # Bottom - White
])

create_png_with_colors('universal-tax-logo.png', 300, 80, [
    PRIMARY_RGB,      # Top - Blue
    LIGHT_GRAY,       # Middle - Light gray
    WHITE_RGB         # Bottom - White
])

create_png_with_colors('insurance-logo.png', 300, 80, [
    SECONDARY_RGB,    # Top - Green
    PRIMARY_RGB,      # Middle - Blue
    WHITE_RGB         # Bottom - White
])

print('\n✅ All logo images recreated with visible colors!')
print('These will now be visible in the white boxes on hero sections.')
