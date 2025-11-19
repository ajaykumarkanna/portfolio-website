import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface AssetChooserProps {
  assets: string[];
  onSelect: (asset: string) => void;
  children: React.ReactNode;
}

export function AssetChooser({ assets, onSelect, children }: AssetChooserProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose from Assets</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-72 w-full rounded-md border p-4">
          <div className="grid grid-cols-3 gap-4">
            {assets.map((asset) => (
              <div key={asset} className="flex flex-col items-center gap-2">
                <img
                  src={`/assets/${asset}`}
                  alt={asset}
                  className="h-24 w-24 object-cover rounded-md"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSelect(`/assets/${asset}`)}
                >
                  Select
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
