export default function HtmlConvetor({ htmlString }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}
