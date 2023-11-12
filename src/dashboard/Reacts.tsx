import { request } from 'http';
import { type } from 'os';
import React from 'react';

export function Reacts() {
  let fileReader: FileReader;
  const [file, setFile] = React.useState<any | undefined>(undefined);
  const [selectedMatch, setSelectedMatch] = React.useState<any | undefined>(undefined);

  const handleFileRead = (e: any) => {
    const content = fileReader.result;
    if (typeof content !== 'string') return;
    console.log(typeof content, content);
    const parsedContent = JSON.parse(content);
    if (typeof parsedContent !== 'object' && !parsedContent.overlayConfigs) return;
    const config = parsedContent.overlayConfigs.filter((config: any) => config.type === 11)[0];
    setFile(config.config.matches);
  };

  const handleFileChosen = (file: any | undefined) => {
    if (file === undefined || file === null) return;
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <div className="m-5">
      <div className="flex justify-between">
        <select
          name="selectedMatch"
          value={selectedMatch}
          onChange={(e) => {
            setSelectedMatch(e.target.value);
          }}
          id=""
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {Array.isArray(file) &&
            file.map((match: any, index: number) => (
              <option key={index} value={index}>
                {match.matchConfig.teamLeft.name} - {match.matchConfig.teamRight.name}
              </option>
            ))}
        </select>
      </div>
      <input
        className="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="file"
        accept="application/JSON"
        onChange={(e) => {
          handleFileChosen(e.target.files![0]);
        }}
      />
    </div>
  );
}
