import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:GET_RESERVED_MISSION_ENTITIES_IN_AREA
 *
 * 0x1B402403FBCD3843

 * 
 * ------------------------------------------------------------------
 * @param {number} locationX
 * @param {number} locationY
 * @param {number} locationZ
 * @param {boolean} includeLocalScripts
 * @param {IntRef} numReservedPeds [Ref]
 * @param {IntRef} numReservedVehicles [Ref]
 * @param {IntRef} numReservedObjects [Ref]
 */
export function getReservedMissionEntitiesInArea(locationX: number, locationY: number, locationZ: number, includeLocalScripts: boolean, numReservedPeds: IntRef /* ptr */, numReservedVehicles: IntRef /* ptr */, numReservedObjects: IntRef /* ptr */): void {
	const getReservedMissionEntitiesInArea_result = Citizen.invokeNative<void>('0x1B402403FBCD3843', locationX, locationY, locationZ, includeLocalScripts, numReservedPeds.dataView, numReservedVehicles.dataView, numReservedObjects.dataView);
	return getReservedMissionEntitiesInArea_result;
}