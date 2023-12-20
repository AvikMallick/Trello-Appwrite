import { ID, storage } from '@/appwrite';

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    '6560bb6ac8c072fae77b',
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
