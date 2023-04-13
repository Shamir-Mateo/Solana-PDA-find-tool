import FontClass from "src/types/enums/FontClass";
import HeaderText from "src/components/text/HeaderText";
import type { Props } from "src/components/text/HeaderText";

export default function Header3(props: Omit<Props, "fontClass">) {
  return <HeaderText {...props} fontClass={FontClass.Header3} />;
}
