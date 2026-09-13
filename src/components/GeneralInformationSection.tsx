import type { GeneralInformation } from "../types";
import { camelToTitle } from "../utils";

interface Props {
  generalInformation: GeneralInformation;
  isEditing: boolean;
}

function GeneralInformationSection({ generalInformation, isEditing }: Props) {
  return <>
    <dl>General Information</dl>
    {Object.entries(generalInformation).map(([key, value]) =>
      <>
        <dt>{camelToTitle(key)}: </dt>
        <dd>
          {isEditing
            ? <input type="text" value={value} />
            : value || 'N/A'
          }
        </dd>
      </>
    )}
  </>;
}

export default GeneralInformationSection
