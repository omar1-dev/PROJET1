from PIL import Image

# Charger une image depuis un fichier
photo_path = "photo.jpg"  # Remplacez par le chemin de votre image
image = Image.open(photo_path)

# Afficher des informations sur l'image
print(f"Taille de l'image: {image.size}")  # (largeur, hauteur)
print(f"Format de l'image: {image.format}")  # Par exemple: JPEG, PNG

# Afficher l'image
image.show()

# Sauvegarder l'image sous un autre nom
image.save("nouvelle_photo.jpg")