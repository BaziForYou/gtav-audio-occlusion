import React from 'react';

import { TableContainer, Table } from '@/electron/renderer/components/Table';

import { useInterior } from '@/electron/renderer/features/interior';

export const PortalInfoList = (): JSX.Element => {
  const { interior } = useInterior();

  if (!interior) {
    return null;
  }

  const portalInfoList = interior.naOcclusionInteriorMetadata.portalInfoList;

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Room from</th>
            <th>Room to</th>
            <th>Interior from</th>
            <th>Interior to</th>
          </tr>
        </thead>
        <tbody>
          {portalInfoList.map((portalInfo, portalInfoIndex) => (
            <tr key={portalInfoIndex}>
              <td>{portalInfoIndex}</td>
              <td>{portalInfo.roomIdx}</td>
              <td>{portalInfo.destRoomIdx}</td>
              <td>{portalInfo.interiorProxyHash}</td>
              <td>{portalInfo.destInteriorHash}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};
