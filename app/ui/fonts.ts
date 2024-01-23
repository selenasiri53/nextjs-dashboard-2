import { Inter, Lusitana } from "next/font/google" // new: Lusitana

export const inter = Inter({ subsets: ['latin']});

// new
export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'], 
});