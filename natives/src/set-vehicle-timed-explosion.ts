import { VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TIMED_EXPLOSION
 *
 * 0x9EBBAB4F81D0BDAC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} ped
 * @param {number} timeFromNow
 */
export function setVehicleTimedExplosion(vehicle: VehicleIndex, ped: PedIndex, timeFromNow: number): void {
	const setVehicleTimedExplosion_result = Citizen.invokeNative<void>('0x9EBBAB4F81D0BDAC', vehicle, ped, timeFromNow);
	return setVehicleTimedExplosion_result;
}