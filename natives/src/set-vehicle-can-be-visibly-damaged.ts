import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_BE_VISIBLY_DAMAGED
 *
 * 0x6BFFBDE3C98A828E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} visibleDamageFlag
 */
export function setVehicleCanBeVisiblyDamaged(vehicle: VehicleIndex, visibleDamageFlag: boolean): void {
	const setVehicleCanBeVisiblyDamaged_result = Citizen.invokeNative<void>('0x6BFFBDE3C98A828E', vehicle, visibleDamageFlag);
	return setVehicleCanBeVisiblyDamaged_result;
}