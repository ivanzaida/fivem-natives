import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_COLOURS_WHICH_CAN_BE_SET
 *
 * 0xEEBEB450F9417D7F

 * 
 * Returns a bitset that shows which colours will have a visible effect when you call one of
 * the "set colour" commands. Use IS_BIT_SET 0,1,2,3,4 for Colours 1,2,3,4,5
 * 
 * Some kind of flags.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleColoursWhichCanBeSet(vehicle: VehicleIndex): number {
	const getVehicleColoursWhichCanBeSet_result = Citizen.invokeNative<number>('0xEEBEB450F9417D7F', vehicle);
	return getVehicleColoursWhichCanBeSet_result;
}