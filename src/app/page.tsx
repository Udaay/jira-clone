import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex gap-4">
      <div>
        <Input />
      </div>
      <Button size="lg">Primary</Button>
      <Button size="xs" variant={"secondary"}>
        Secondary
      </Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"tertiary"}>Teritary</Button>
    </div>
  );
}
