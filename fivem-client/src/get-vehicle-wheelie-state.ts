import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEELIE_STATE
 *
 * 0x137260D1

 * List of known states:```1: Not wheeling.65: Vehicle is ready to do wheelie (burnouting).129: Vehicle is doing wheelie.```
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle Vehicle
 * @returns {number}  Vehicle's current wheelie state.
 */
export function getVehicleWheelieState(vehicle: VehicleIndex): number {
	const getVehicleWheelieState_result = Citizen.invokeNative<number>('0x137260D1', vehicle);
	return getVehicleWheelieState_result;
}