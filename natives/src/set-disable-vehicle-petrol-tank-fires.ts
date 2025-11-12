import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_VEHICLE_PETROL_TANK_FIRES
 *
 * 0xA6175150F92EE83B

 * 
 * Sets whether a petrol tank fire can occur
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setDisableVehiclePetrolTankFires(vehicle: VehicleIndex, val: boolean): void {
	const setDisableVehiclePetrolTankFires_result = Citizen.invokeNative<void>('0xA6175150F92EE83B', vehicle, val);
	return setDisableVehiclePetrolTankFires_result;
}