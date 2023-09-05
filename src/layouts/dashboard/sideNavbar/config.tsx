import { Filters, OpenJobs, SavedJobs } from "../../../components/sibebarNav";
import { FiltersSkeleton } from "../../../components/skeletons";

type Props = { pathname: string; toggleMobileSidebar: () => void };
const config = ({ pathname, toggleMobileSidebar }: Props) => {
  const checkLastCharacter = (str: string) => {
    const lastCharacter = str.slice(-1);
    if (str === "/") return str;
    if (lastCharacter === "/") return str.slice(0, str.length - 1);
    return str;
  };
  const trimmedPathname = checkLastCharacter(pathname);
  const content = (
    <>
      {trimmedPathname.startsWith("/job") && (
        <OpenJobs toggleMobileSidebar={toggleMobileSidebar} />
      )}
      {trimmedPathname === "/search-results" && <Filters />}

      {trimmedPathname === "/pipeline" && (
        <SavedJobs toggleMobileSidebar={toggleMobileSidebar} />
      )}
    </>
  );
  return <div>{content}</div>;
};
export default config;
