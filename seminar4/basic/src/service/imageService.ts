import { PrismaClient } from "@prisma/client";
import { ImageCreateResponseDto } from "../interfaces/image/ImageCreateResponseDto";

const prisma = new PrismaClient();

//* 이미지 업로드
const uploadImage = async (image: string): Promise<ImageCreateResponseDto> => {
  const data = await prisma.image.create({
    data: {
      image: location,
    },
  });

  const result: ImageCreateResponseDto = {
    id: data.id,
    image: data.image as string,
  };

  return result;
};

const imageService = {
  uploadImage,
};

export default imageService;
