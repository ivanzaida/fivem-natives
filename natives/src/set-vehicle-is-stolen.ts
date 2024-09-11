import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_IS_STOLEN
 *
 * 0xD37CA6D6F8993BB9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} isStolen
 */
export function setVehicleIsStolen(vehicle: VehicleIndex, isStolen: boolean): void {
	const setVehicleIsStolen_result = Citizen.invokeNative<void>('0xD37CA6D6F8993BB9', vehicle, isStolen);
	return setVehicleIsStolen_result;
}