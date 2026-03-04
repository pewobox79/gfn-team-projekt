function createImgUrl(urlString: string) {
    const baseUrl = "http://localhost:1337"
    return baseUrl + urlString


}

function getOptimizedImage(imageObject: any) {

    if (!imageObject) 
        
        return {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCQV0JduDI9swIp_Oy32i_omTZAnoYMPR4A&s",
            alt: "Lucky Cat"
        }
        

    const alt = imageObject?.alternativeText || "mein Bild"

    if (imageObject?.formats?.medium?.url) {

        return {
            url: createImgUrl(imageObject.formats.medium.url),
            alt
        }
    }

    return {
        url: createImgUrl(imageObject?.url),
        alt
    }
}

export default getOptimizedImage