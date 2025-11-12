import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ACT_AS_IF_HAS_SIREN_ON
 *
 * 0xA29F097488D811A6

 * 
 * This is a reset flag, it must be called each frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} actAsIfSirenOn
 */
export function setVehicleActAsIfHasSirenOn(vehicle: VehicleIndex, actAsIfSirenOn: boolean): void {
	const setVehicleActAsIfHasSirenOn_result = Citizen.invokeNative<void>('0xA29F097488D811A6', vehicle, actAsIfSirenOn);
	return setVehicleActAsIfHasSirenOn_result;
}