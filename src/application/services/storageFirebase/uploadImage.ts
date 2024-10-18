import { storage } from "@/application/libs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

interface UploadResponse {
    success: boolean;
    downloadURL?: string;
    error?: string;
}

export async function uploadImage(file: File, folder: string = 'images'): Promise<UploadResponse> {
    try {
        const fileRef = ref(storage, `${folder}/${file.name}`);

        const uploadTask = uploadBytesResumable(fileRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Progresso do upload: ${progress}%`);
                },
                (error) => {
                    reject({ success: false, error: error.message });
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve({ success: true, downloadURL});
                },
            )
        })
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}
