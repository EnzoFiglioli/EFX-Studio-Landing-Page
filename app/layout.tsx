import { Geist } from "next/font/google";
import "./globals.css"; // eslint-ignore-line
import { Metadata } from 'next'

const geistSans = Geist({
    variable: "--font-geist-mono",
    subsets: ["latin"]
})

// === CÓDIGO DE SEO MEJORADO ===
export const metadata: Metadata = {
    // 1. Title (más descriptivo y con palabras clave)
    title: 'EFX Studio | Desarrollo de Software a Medida: Web Apps, Mobile y Automatización',
    
    // 2. Description (fundamental para el snippet de Google)
    description: 'Potencia tu negocio con aplicaciones a medida. EFX Studio desarrolla soluciones digitales, Web Apps, Mobile Apps y sistemas de Automatización rápidos y escalables para optimizar procesos.',
    
    // 3. Keywords
    keywords: ['desarrollo de software a medida', 'web apps', 'mobile apps', 'automatización de procesos', 'agencia de desarrollo', 'eficiencia digital'],
    
    // 4. Autor
    author: 'EFX Studio',

    openGraph: {
        title: 'EFX Studio | Soluciones Digitales a Medida',
        description: 'Desarrollo de Apps, Automatización y Web Apps escalables.',
        url: 'URL_DE_TU_PAGINA', // Cambia esto por la URL real
        siteName: 'EFX Studio',
        images: [
            {
                url: '/opengraph-image.png', // Crea una imagen de 1200x630px para compartir
                width: 1200,
                height: 630,
                alt: 'EFX Studio Desarrollo de Software',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    },
    
    // 6. Opcional: Twitter Card
    twitter: {
        card: 'summary_large_image', // Muestra una imagen grande
        title: 'EFX Studio | Potencia tu Negocio con Software',
        description: 'Aplicaciones que impulsan la eficiencia y el crecimiento de tu empresa.',
        creator: '@TU_USUARIO_TWITTER', // Si tienes una cuenta de Twitter
        images: ['/opengraph-image.png'], // Usa la misma imagen
    },
} 

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <html lang="es">
            <body 
            className={`${geistSans.variable}`}>
                {children}
            </body>
        </html>
    )
}