import './style.css';

interface Props {
  url?: string;
}

export default function SnapshotGallery({ url }: Props) {
  return (
    <div className="snapshot_gallery">
      <div className="slide">
        <div className="preview">
          <img alt="snapshot gallery" src={url} />
        </div>
      </div>
    </div>
  );
}
