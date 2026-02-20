import { Button } from "@/components/ui/button"
import { StickyHeader } from "@/components/ui/sticky-header"

export default function StickyHeaderPage() {
  return (
    <div className="-m-10">
      <StickyHeader
        title="Settings"
        actions={
          <>
            <Button variant="ghost" size="sm" className="text-primary">
              Button text
            </Button>
            <Button variant="outline" size="sm" className="text-primary">
              Button text
            </Button>
            <Button variant="primary" size="sm">
              Button text
            </Button>
          </>
        }
      />
    </div>
  )
}
