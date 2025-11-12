import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_OUT_OF_CONTROL
 *
 * 0xE251D2995353C61E

 * 
 * Tested on the player's current vehicle. Unless you kill the driver, the vehicle doesn't loose control, however, if enabled, explodeOnImpact is still active. The moment you crash, boom.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} killPedsInVehicle
 * @param {boolean} explodeOnNextImpact
 */
export function setVehicleOutOfControl(vehicle: VehicleIndex, killPedsInVehicle: boolean = true, explodeOnNextImpact: boolean = true): void {
	const setVehicleOutOfControl_result = Citizen.invokeNative<void>('0xE251D2995353C61E', vehicle, killPedsInVehicle, explodeOnNextImpact);
	return setVehicleOutOfControl_result;
}