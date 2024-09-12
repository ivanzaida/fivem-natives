import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_DEFORM_WHEELS
 *
 * 0x1E00EF437AE43BB8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canDeformWheels
 */
export function setVehicleCanDeformWheels(vehicle: VehicleIndex, canDeformWheels: boolean): void {
	const setVehicleCanDeformWheels_result = Citizen.invokeNative<void>('0x1E00EF437AE43BB8', vehicle, canDeformWheels);
	return setVehicleCanDeformWheels_result;
}