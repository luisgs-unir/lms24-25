import os
from PIL import Image

def crop_images(input_dir, output_dir, crop_height=5):
    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Iterate over all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
            # Open the image file
            img_path = os.path.join(input_dir, filename)
            with Image.open(img_path) as img:
                # Crop the image
                width, height = img.size
                cropped_img = img.crop((0, crop_height, width, height))
                
                # Save the cropped image to the output directory
                output_path = os.path.join(output_dir, filename)
                cropped_img.save(output_path)
                print(f"Cropped {filename} and saved to {output_path}")

if __name__ == "__main__":
    # Define input and output directories
    input_directory = '.'
    output_directory = '.\\output'
    
    # Crop images
    crop_images(input_directory, output_directory)