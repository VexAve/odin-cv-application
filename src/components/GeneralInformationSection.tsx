import type { GeneralInformation } from "../types";

interface Props {
  generalInformation: GeneralInformation;
  isEditing: boolean;
}

function GeneralInformationSection({ generalInformation, isEditing }: Props) {
  return <>
    <h1>General Information</h1>
    {Object.entries(generalInformation).map(([key, value]) =>
      <p>
        {key}:
        {isEditing
          ? value || 'N/A'
          : <input
            type="text"
            value={value}
          />
        }
      </p>
    )}
  </>;
}

export default GeneralInformationSection
