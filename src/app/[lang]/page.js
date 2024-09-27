import Home from '../page'

export default function Page({ params }) {
  return <Home params={params} />
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ja' },
    { lang: 'ko' },
    { lang: 'ru' },
    { lang: 'de' },
    { lang: 'fr' },
    { lang: 'it' },
    { lang: 'es' },
    { lang: 'zh' },
  ]
}