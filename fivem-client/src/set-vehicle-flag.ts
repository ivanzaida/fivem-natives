import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_FLAG
 *
 * 0x63AE1A34

 * This native is a setter for [`GET_VEHICLE_HAS_FLAG`](#_0xD85C9F57).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set flag for.
 * @param {number} flagIndex Flag index.
 * @param {boolean} value true to enable the flag, false to disable it.
 * @returns {boolean}  
 */
export function setVehicleFlag(vehicle: VehicleIndex, flagIndex: number, value: boolean): boolean {
	const setVehicleFlag_result = Citizen.invokeNative<boolean>('0x63AE1A34', vehicle, flagIndex, value);
	return setVehicleFlag_result;
}