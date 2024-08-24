import { Layout } from "./Layout";
import { useProps } from "./useProps";

export const Banner = () => {
  const { movie, truncate } = useProps();
  return (
    <Layout
      movie={movie}
      truncate={truncate}
    />
  );
};
