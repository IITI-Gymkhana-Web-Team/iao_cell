import glob
from PIL import Image

if __name__ == "__main__":
    l = glob.glob("/home/ggdv05/projects/jpg2webp/source/*.jpg")
    for i in l:
        name = i[38:-4]
        im = Image.open(i).convert("RGB")
        im.save("{}.webp".format(name), "webp")
        print(im)
