import { toast } from "sonner";



const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

export const uploadImage = async (data: File) => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    let imageUrl;
    const formData = new FormData();
    formData.append('image', data)

    const toastId = toast.loading('image uploader processing ....')
    try {
        const res = await fetch(img_hosting_url, {
            method: 'POST',
            body: formData,

        });
        const imgResponse = await res.json();
        if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            toast.success('Image process successfull', { id: toastId, duration: 1000 })
            imageUrl = imgURL
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        toast.error(error?.data?.message, { id: toastId, duration: 1000 })

    }

    return imageUrl;

}