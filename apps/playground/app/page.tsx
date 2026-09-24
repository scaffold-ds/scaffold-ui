import { Button } from "@scaffold-ds/react"

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-start justify-start bg-zinc-50 font-mono">
            <main className="flex flex-col gap-8 w-full max-w-8xl items-start justify-between py-16 px-16">
                <div className="inline-flex h-10 rounded-full bg-red-500 px-5 text-white">
                    Tailwind Test
                </div>
                <div className="flex flex-row gap-4 w-fit">
                    <Button size="large">Default</Button>
                    <Button variant="outline" size="large">Outline</Button>
                    <Button variant="tonal" size="large">Tonal</Button>
                    <Button variant="text" size="large">Text</Button>
                    <Button variant="elevated" size="large">Elevated</Button>
                    <Button variant="underline" size="large">Underline</Button>
                    <Button variant="error" size="large">Error</Button>
                    <Button variant="alert" size="large">Alert</Button>
                </div>
                <div className="flex flex-row gap-4 w-fit">
                    <Button loading>Default</Button>
                    <Button variant="outline" loading>Outline</Button>
                    <Button variant="tonal" loading>Tonal</Button>
                    <Button variant="text" loading>Text</Button>
                    <Button variant="elevated" loading>Elevated</Button>
                    <Button variant="underline" loading>Underline</Button>
                    <Button variant="error" loading>Error</Button>
                    <Button variant="alert" loading>Alert</Button>
                </div>
                <div className="flex flex-row gap-4 w-fit">
                    <Button size="small">Default</Button>
                    <Button variant="outline" size="small">Outline</Button>
                    <Button variant="tonal" size="small">Tonal</Button>
                    <Button variant="text" size="small">Text</Button>
                    <Button variant="elevated" size="small">Elevated</Button>
                    <Button variant="underline" size="small">Underline</Button>
                    <Button variant="error" size="small">Error</Button>
                    <Button variant="alert" size="small">Alert</Button>
                </div>
            </main>
        </div>
    );
}