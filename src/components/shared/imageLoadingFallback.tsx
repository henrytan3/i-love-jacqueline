import pompomCookie from '../../static/videos/pompom_cookie.gif'
import { Image } from '@chakra-ui/react'

const loadingGIFs = [pompomCookie]

const ImageLoadingFallback = () => {
    return <Image src={loadingGIFs[0]} />
}

ImageLoadingFallback.displayName = 'ImageLoadingFallback'

export default ImageLoadingFallback