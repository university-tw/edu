import 'focus-visible'
import '@/styles/tailwind.css'
import {DefaultSeo} from "next-seo";

export default function App({Component, pageProps}) {
    return <>
        <DefaultSeo titleTemplate={'%s | A++程式設計 - University.tw 教育'}
                    defaultTitle={'A++程式設計 - University.tw 教育'}
                    description={'University.tw教育 打造符合新時代新課綱需求的課程，讓學生能夠在學習中獲得成就感'}
        />
        <Component {...pageProps} />
    </>
}
