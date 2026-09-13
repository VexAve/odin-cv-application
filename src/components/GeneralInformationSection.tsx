import type { GeneralInformation } from "../types";
import { camelToTitle } from "../utils";

interface Props {
  generalInformation: GeneralInformation;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>, key: string) => void;
}

function GeneralInformationSection({ generalInformation, isEditing, onChange }: Props) {
  return <>
    <dl>General Information</dl>
    {Object.entries(generalInformation).map(([key, value]) =>
      <>
        <dt>{camelToTitle(key)}:</dt>
        <dd>
          {isEditing
            ? <input type="text" value={value} onChange={(e) => onChange(e, key)} />
            : value || 'N/A'
          }
        </dd>
      </>
    )}
  </>;
}

export default GeneralInformationSection
