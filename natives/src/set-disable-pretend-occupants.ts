import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_PRETEND_OCCUPANTS
 *
 * 0xA80E7D11DB73C8BA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setDisablePretendOccupants(vehicle: VehicleIndex, val: boolean): void {
	const setDisablePretendOccupants_result = Citizen.invokeNative<void>('0xA80E7D11DB73C8BA', vehicle, val);
	return setDisablePretendOccupants_result;
}