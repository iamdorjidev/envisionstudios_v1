export default function Loader({ hidden }) {
  return (
    <div className={`loader${hidden ? ' hide' : ''}`}>
      <img src="/image/logo-cropped.png" alt="enVision Studio" className="loader-logo" />
    </div>
  );
}
