
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

export const uploadImage = async (data:any) => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    let imageUrl;
    
    const formData = new FormData();
    formData.append('image', data)

    try {
        const res = await fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
            mode:'no-cors'

        });
        const imgResponse = await res.json();
        if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            console.log( 'inside upload image after succes', imageUrl);
            imageUrl = imgURL
        }
    } catch (error) {

        console.log(error);
    }

    return imageUrl;

}