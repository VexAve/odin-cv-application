import type { EventObject, GeneralInformation } from "../types";
import { camelToTitle } from "../utils";

interface Props {
  generalInformation: GeneralInformation;
  isEditing: boolean;
  onChange: (e: EventObject, key: string) => void;
  onClick: () => void;
}

function GeneralInformationSection({ generalInformation, isEditing, onChange, onClick }: Props) {
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
    <button onClick={onClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </>;
}

export default GeneralInformationSection
