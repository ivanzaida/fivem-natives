import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_OPEN_REAR_DOORS_ON_EXPLOSION
 *
 * 0x367040C40E6A5A3A

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} openRearDoorsOnExplosion
 */
export function setOpenRearDoorsOnExplosion(vehicle: VehicleIndex, openRearDoorsOnExplosion: boolean): void {
	const setOpenRearDoorsOnExplosion_result = Citizen.invokeNative<void>('0x367040C40E6A5A3A', vehicle, openRearDoorsOnExplosion);
	return setOpenRearDoorsOnExplosion_result;
}