import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_VEHICLE_ENGINE_FIRES
 *
 * 0x64134834C866AE60

 * 
 * Sets whether an engine fire can occur
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setDisableVehicleEngineFires(vehicle: VehicleIndex, val: boolean): void {
	const setDisableVehicleEngineFires_result = Citizen.invokeNative<void>('0x64134834C866AE60', vehicle, val);
	return setDisableVehicleEngineFires_result;
}