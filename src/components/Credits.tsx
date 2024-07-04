import React, { memo } from 'react';

const Credits = () => {
  return (
    <div className="container-xxl px-4 py-5 bg-green-50 rounded-lg">
      <h2 className="mb-8 text-3xl text-center font-bold text-teal-900">Credits, Tools & Sources</h2>
      <table className="w-full table-auto">
        <tbody>
          <tr className="border-t">
            <th className="align-top px-4 py-2 text-left">Visualization Tools</th>
            <td className="px-4 py-2">
              <a href="https://www.tableau.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Tableau</a>
            </td>
          </tr>
          <tr className="border-t">
            <th className="align-top px-4 py-2 text-left">Web Framework & Libraries</th>
            <td className="px-4 py-2">
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Next.js</a> <br />
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">React</a> <br />
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Tailwind CSS</a>
            </td>
          </tr>
          <tr className="border-t">
            <th className="align-top px-4 py-2 text-left">Site Hosting</th>
            <td className="px-4 py-2">
              <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Vercel</a>
            </td>
          </tr>
          <tr className="border-t">
            <th className="align-top px-4 py-2 text-left">Kaggle Datasets</th>
            <td className="px-4 py-2">
              <a href="https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Most Streamed Spotify Songs 2023</a> <br />
              <a href="https://www.kaggle.com/datasets/meeraajayakumar/spotify-user-behavior-dataset" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Spotify User Behavior Dataset</a> <br />
              <a href="https://www.kaggle.com/datasets/meeratif/spotify-most-streamed-artists-of-all-time" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Spotify Most Streamed Artists</a> <br />
              <a href="https://www.kaggle.com/datasets/asaniczka/top-spotify-songs-in-73-countries-daily-updated" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Top Spotify Songs in 73 Countries</a> <br />
              <a href="https://www.kaggle.com/datasets/josephinelsy/spotify-top-hit-playlist-2010-2022" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Spotify Top Hit Playlist (2010-2023)</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(Credits);
