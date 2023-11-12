import React from 'react';
import './index.dashboard.css';
import data from '../maps.json';
const modes = data.maps;

export function MapSet() {
  return (
    <div className="m-5">
      <div className=""></div>
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <Map team1={undefined} team2={undefined} />
      <div className="mt-7 flex justify-between">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </div>
    </div>
  );
}

function Map({ team1, team2 }: MapProps) {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  return (
    <div className="mt-2 flex justify-between">
      <button className="mr-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Draw</button>
      <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {team1 ? team1.city : 'Team 1'}
      </button>
      <div className="mr-2 inline-block relative grow">
        <select
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value, value);
          }}
          value={value}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {modes.map((mode: mode, index: number) => (
            <optgroup label={mode.name} key={index}>
              {mode.maps.map((map: map, index: number) => (
                <option key={index}>{map.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {team2 ? team2.city : 'Team 2'}
      </button>
    </div>
  );
}
