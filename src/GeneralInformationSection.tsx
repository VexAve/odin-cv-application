import type { GeneralInformation } from "./types";

function GeneralInformationSection({ generalInformation }: { generalInformation: GeneralInformation }) {
  return <>
   <h1>General Information</h1>
   <p>Name: {generalInformation.name || 'N/A'}</p>
   <p>Email: {generalInformation.email || 'N/A'}</p>
   <p>Phone: {generalInformation.phone || 'N/A'}</p>
  </>;
}

export default GeneralInformationSection
