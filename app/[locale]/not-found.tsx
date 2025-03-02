import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          <span>Not Found</span>
          <span>Ops!</span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Could not find requested resource
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/">Return Home</Link>
          </Button>
        </PageActions>
      </PageHeader>
    </>
  );
}
