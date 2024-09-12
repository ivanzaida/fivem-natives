import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEELIE_STATE
 *
 * 0xEAB8DB65

 * Example script: https://pastebin.com/J6XGbkCWList of known states:```1: Not wheeling.65: Vehicle is ready to do wheelie (burnouting).129: Vehicle is doing wheelie.```
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle Vehicle
 * @param {number} state Wheelie state
 */
export function setVehicleWheelieState(vehicle: VehicleIndex, state: number): void {
	const setVehicleWheelieState_result = Citizen.invokeNative<void>('0xEAB8DB65', vehicle, state);
	return setVehicleWheelieState_result;
}