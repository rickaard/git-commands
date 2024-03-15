import { getActiveFileName, terminal } from "../helpers";

export default () => {
  const activeFile = getActiveFileName();

  if (!activeFile) return;

  terminal().sendText(`git diff ${activeFile}`);
};
