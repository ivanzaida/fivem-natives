import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_EXTRA_BROKEN_OFF
 *
 * 0xFCFC8401A76A332D

 * 
 * Returns true if specified extra part is broken off. It only works for extras that can break off during collisions, non-breakable extras always return false. Also returns true if the breakable extra is toggled off through script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extra
 * @returns {boolean}  
 */
export function isExtraBrokenOff(vehicle: VehicleIndex, extra: number): boolean {
	const isExtraBrokenOff_result = Citizen.invokeNative<boolean>('0xFCFC8401A76A332D', vehicle, extra);
	return isExtraBrokenOff_result;
}