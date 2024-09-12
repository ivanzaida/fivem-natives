import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HOVER_MODE_WING_RATIO
 *
 * 0x3D82B1EAD5216876

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wingRatio
 */
export function setHoverModeWingRatio(vehicle: VehicleIndex, wingRatio: number): void {
	const setHoverModeWingRatio_result = Citizen.invokeNative<void>('0x3D82B1EAD5216876', vehicle, wingRatio);
	return setHoverModeWingRatio_result;
}