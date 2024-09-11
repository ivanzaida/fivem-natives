import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_CARGOBOB_EXTA_PICKUP_RANGE
 *
 * 0x72BECCF4B829522E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} rangeIncrease
 */
export function setCargobobExtaPickupRange(vehicle: VehicleIndex, rangeIncrease: number): void {
	const setCargobobExtaPickupRange_result = Citizen.invokeNative<void>('0x72BECCF4B829522E', vehicle, rangeIncrease);
	return setCargobobExtaPickupRange_result;
}