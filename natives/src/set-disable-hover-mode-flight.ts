import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_DISABLE_HOVER_MODE_FLIGHT
 *
 * 0x2C97F1F248685957

 * 
 * Disables "wings" for some flying vehicles. Works only for oppressor _2_ and deluxo.
 * For deluxo it just immediately removes vehicle's "wings" and you will be not able to fly up.
 * For oppressor 2 it will remove wings right after you land. And you will not able to fly up anymore too.
 * But for opressor 2 you still can fly if you somehow get back in the air.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} specialFlightAllowed
 */
export function setDisableHoverModeFlight(vehicle: VehicleIndex, specialFlightAllowed: boolean): void {
	const setDisableHoverModeFlight_result = Citizen.invokeNative<void>('0x2C97F1F248685957', vehicle, specialFlightAllowed);
	return setDisableHoverModeFlight_result;
}