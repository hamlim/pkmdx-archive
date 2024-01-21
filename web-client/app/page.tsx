// import { ForwardRefEditor as Editor } from "@/local/ForwardRefEditor";
// import { Editor } from "@/local/NovelEditor";
import { PlateEditor as Editor } from "@/local/PlateEditor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Editor />
    </main>
  );
}
