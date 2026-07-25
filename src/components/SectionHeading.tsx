export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <span className="section-label">Section</span>
      <h2>{title}</h2>
    </div>
  );
}
