import sys
import math
from PIL import Image, ImageDraw

def process_images():
    face_img_path = '/Users/jamesseriph/.gemini/antigravity/brain/7c8e875b-f547-485e-837f-3cf6bdbb2ad5/face_constellation_1774661305074.png'
    out_4_img = '/Users/jamesseriph/Desktop/Logos Site - Antigravity/logos-app/public/4_points_constellation.png'
    out_70_img = '/Users/jamesseriph/Desktop/Logos Site - Antigravity/logos-app/public/70_points_face.png'

    try:
        img = Image.open(face_img_path).convert('RGB')
    except Exception as e:
        print(f"Error opening image: {e}")
        return

    # Save exactly the original as the 70 face
    img.save(out_70_img)
    
    width, height = img.size

    # Convert to grayscale to find brightest spots (nodes)
    gray = img.convert('L')
    pixels = gray.load()

    # Find bright pixels (threshold > 240)
    bright_pixels = []
    for y in range(height):
        for x in range(width):
            if pixels[x, y] > 240:
                bright_pixels.append((x, y))

    # Cluster pixels to find roughly the center of each node
    nodes = []
    CLUSTER_RADIUS = 25
    for px, py in bright_pixels:
        found_cluster = False
        for i, (cx, cy, count) in enumerate(nodes):
            if math.hypot(px - cx, py - cy) < CLUSTER_RADIUS:
                # Update running average
                nx = (cx * count + px) / (count + 1)
                ny = (cy * count + py) / (count + 1)
                nodes[i] = (nx, ny, count + 1)
                found_cluster = True
                break
        if not found_cluster:
            nodes.append((px, py, 1))

    print(f"Found {len(nodes)} distinct nodes.")

    # We want exactly 4 nodes that are well-spaced, forming a quadrilateral.
    # To do this, let's pick nodes that are closest to specific quadrants:
    # 1. Top-Left, 2. Top-Right, 3. Bottom-Left, 4. Bottom-Right inside the face bounds.
    # Let's manually pick indices that give a nice shape, or sort by coordinates.
    if len(nodes) < 4:
        print("Not enough nodes found.")
        return

    # Sort nodes left to right
    nodes.sort(key=lambda n: n[0])

    # We want a nice square/diamond. Let's find 4 nodes that have max area.
    import itertools
    best_4 = None
    max_area = 0

    def polygon_area(pts):
        # shoelace formula for 4 points
        # sort points clockwise or counter-clockwise first, or just convex hull
        # simpler: we just pick center-ish points that are far apart.
        pass

    # Actually, the simplest approach: pick 4 nodes that are closest to [ (w/3, h/3), (2w/3, h/3), (2w/3, 2h/3), (w/3, 2h/3) ]
    targets = [ (width/3, height/3), (2*width/3, height/3), (2*width/3, 2*height/3), (width/3, 2*height/3) ]
    chosen_nodes = []
    available_nodes = [ (n[0], n[1]) for n in nodes ]

    for tx, ty in targets:
        best_node = None
        min_dist = float('inf')
        for n in available_nodes:
            d = math.hypot(n[0] - tx, n[1] - ty)
            if d < min_dist:
                min_dist = d
                best_node = n
        chosen_nodes.append(best_node)
        available_nodes.remove(best_node)

    print("Chosen 4 nodes at:", chosen_nodes)

    # Now create a new pure black image
    new_img = Image.new('RGB', (width, height), (0, 0, 0))
    
    # Let's draw subtle connecting lines first
    draw = ImageDraw.Draw(new_img)
    lines = [
        (chosen_nodes[0], chosen_nodes[1]),
        (chosen_nodes[1], chosen_nodes[2]),
        (chosen_nodes[2], chosen_nodes[3]),
        (chosen_nodes[3], chosen_nodes[0])
    ]
    for start, end in lines:
        draw.line([start, end], fill=(120, 140, 160), width=2)
        draw.line([start, end], fill=(60, 80, 100), width=4) # slight glow
    
    # Now copy exactly the circular 40x40 patch from the original image for these 4 nodes
    PATCH_RADIUS = 20
    original_pixels = img.load()
    new_pixels = new_img.load()

    for nx, ny in chosen_nodes:
        ix, iy = int(nx), int(ny)
        for y in range(iy - PATCH_RADIUS, iy + PATCH_RADIUS + 1):
            for x in range(ix - PATCH_RADIUS, ix + PATCH_RADIUS + 1):
                if 0 <= x < width and 0 <= y < height:
                    # blend using radial distance
                    dist = math.hypot(x - ix, y - iy)
                    if dist <= PATCH_RADIUS:
                        # Soft alpha blend brush
                        alpha = max(0, 1.0 - (dist / PATCH_RADIUS))
                        # We apply the original pixel over the black
                        orig_p = original_pixels[x, y]
                        curr_p = new_pixels[x, y]
                        # Mix
                        r = int(orig_p[0] * alpha + curr_p[0] * (1 - alpha))
                        g = int(orig_p[1] * alpha + curr_p[1] * (1 - alpha))
                        b = int(orig_p[2] * alpha + curr_p[2] * (1 - alpha))
                        new_pixels[x, y] = (r, g, b)

    new_img.save(out_4_img)
    print("Successfully generated both images in public/")

if __name__ == '__main__':
    process_images()
