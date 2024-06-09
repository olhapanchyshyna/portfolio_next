import {MediaLinks} from "../../../features/media-links";

export function SidePanel() {
  return (
    <aside className="fixed -left-[115px] top-[500px] z-50 hidden w-full max-w-[340px] -rotate-90 items-center justify-between min-[900px]:flex">
      <div className="text-[#fff]">Social media</div>
      <div className="h-0 w-[70px] border-[2px] border-[#fff] border-[solid]"></div>
      <MediaLinks />
    </aside>
  );
}
