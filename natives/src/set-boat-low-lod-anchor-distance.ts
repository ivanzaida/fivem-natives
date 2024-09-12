import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_LOW_LOD_ANCHOR_DISTANCE
 *
 * 0xBA1F8721D3730F2B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} lodDistance
 */
export function setBoatLowLodAnchorDistance(vehicle: VehicleIndex, lodDistance: number): void {
	const setBoatLowLodAnchorDistance_result = Citizen.invokeNative<void>('0xBA1F8721D3730F2B', vehicle, lodDistance);
	return setBoatLowLodAnchorDistance_result;
}