import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BOAT_SINKS_WHEN_WRECKED
 *
 * 0xF1FCF5569978D854

 * 
 * Determines whether a boat should be set to sink when wrecked or not. If this is never set, a boat has
 * has a 50% chance of sinking or floating when wrecked.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} shouldSink
 */
export function setBoatSinksWhenWrecked(vehicle: VehicleIndex, shouldSink: boolean): void {
	const setBoatSinksWhenWrecked_result = Citizen.invokeNative<void>('0xF1FCF5569978D854', vehicle, shouldSink);
	return setBoatSinksWhenWrecked_result;
}