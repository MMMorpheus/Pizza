import { FC } from "react";
import ContentLoader from "react-content-loader";

const Skeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={400}
    viewBox="0 0 275 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="40" y="210" rx="10" ry="10" width="180" height="20" />
    <rect x="0" y="240" rx="20" ry="20" width="260" height="80" />
    <rect x="0" y="0" rx="30" ry="30" width="260" height="200" />
    <rect x="0" y="335" rx="10" ry="10" width="100" height="40" />
    <rect x="160" y="335" rx="10" ry="10" width="100" height="40" />
  </ContentLoader>
);

export default Skeleton;