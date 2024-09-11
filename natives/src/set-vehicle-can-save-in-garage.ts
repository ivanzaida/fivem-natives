import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_SAVE_IN_GARAGE
 *
 * 0xC13B5C4CC421EA79

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canSave
 */
export function setVehicleCanSaveInGarage(vehicle: VehicleIndex, canSave: boolean): void {
	const setVehicleCanSaveInGarage_result = Citizen.invokeNative<void>('0xC13B5C4CC421EA79', vehicle, canSave);
	return setVehicleCanSaveInGarage_result;
}