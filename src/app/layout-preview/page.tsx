import type { Metadata } from "next";
import { LegacyContentFrame } from "@/components/legacy/LegacyContentFrame";
import { MigratedFooter, MigratedHeader } from "@/components/layout/MigratedLayout";

export const metadata: Metadata = {
  title: "Layout Preview"
};

export default function LayoutPreviewPage() {
  return (
    <div className="layout-preview">
      <MigratedHeader mode="home" />
      <LegacyContentFrame title="Legacy homepage content without header and footer" src="/legacy-direct/Kader%20-%20Redesign%20(hirekader).html" />
      <MigratedFooter />
    </div>
  );
}
