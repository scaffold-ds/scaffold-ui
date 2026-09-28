import { Button } from "@scaffold-ds/react"

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-start justify-start bg-zinc-50">
            <main className="flex flex-col gap-8 w-full max-w-8xl items-start justify-between py-16 px-16">
                <div className="flex flex-row gap-4 w-fit">
                    <Button size="large">Default</Button>
                    <Button variant="error" size="large">Error</Button>
                    <Button variant="warning" size="large">Warning</Button>
                    <Button variant="tonal" size="large">Tonal</Button>
                    <Button variant="outline" size="large">Outline</Button>
                    <Button variant="text" size="large">Text</Button>
                    <Button variant="elevated" size="large">Elevated</Button>
                    <Button variant="underline" size="large">Underline</Button>
                </div>
                <div className="flex flex-row gap-4 w-fit">
                    <Button>Default</Button>
                    <Button variant="error">Error</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="tonal">Tonal</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="text">Text</Button>
                    <Button variant="elevated">Elevated</Button>
                    <Button variant="underline">Underline</Button>
                </div>
                <div className="flex flex-row gap-4 w-fit">
                    <Button size="small">Default</Button>
                    <Button variant="error" size="small">Error</Button>
                    <Button variant="warning" size="small">Warning</Button>
                    <Button variant="tonal" size="small">Tonal</Button>
                    <Button variant="outline" size="small">Outline</Button>
                    <Button variant="text" size="small">Text</Button>
                    <Button variant="elevated" size="small">Elevated</Button>
                    <Button variant="underline" size="small">Underline</Button>
                </div>
            </main>
        </div>
    );
}