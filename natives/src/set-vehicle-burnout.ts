import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BURNOUT
 *
 * 0xDD76094F9005AA09

 * 
 * On accelerating, spins the driven wheels with the others braked, so you don't go anywhere.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableBurnout
 */
export function setVehicleBurnout(vehicle: VehicleIndex, enableBurnout: boolean): void {
	const setVehicleBurnout_result = Citizen.invokeNative<void>('0xDD76094F9005AA09', vehicle, enableBurnout);
	return setVehicleBurnout_result;
}