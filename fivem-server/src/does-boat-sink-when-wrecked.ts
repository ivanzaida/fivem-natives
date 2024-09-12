import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:DOES_BOAT_SINK_WHEN_WRECKED
 *
 * 0X43F15989

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {boolean}  Returns whether or not the boat sinks when wrecked.
 */
export function doesBoatSinkWhenWrecked(vehicle: VehicleIndex): boolean {
	const doesBoatSinkWhenWrecked_result = Citizen.invokeNative<boolean>('0X43F15989', vehicle);
	return doesBoatSinkWhenWrecked_result;
}