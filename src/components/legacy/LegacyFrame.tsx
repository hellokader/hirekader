type LegacyFrameProps = {
  title: string;
  src: string;
};

export function LegacyFrame({ title, src }: LegacyFrameProps) {
  return (
    <main className="legacy-shell">
      <iframe className="legacy-frame" src={src} title={title} />
    </main>
  );
}
