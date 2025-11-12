import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SWING_BOAT_BOOM_TO_RATIO
 *
 * 0x53E0C0174C1459B3

 * 
 * Swing the boat boom to ratio
 * 
 * Sets the boat boom position for the `TR3` trailer.
 * Ratio value is between `0.0` and `1.0`, where `0.0` is 90 degrees to the left of the boat, and `1.0` is just slightly to the right/back of the boat.
 * To get the current boom position ratio, use GET_BOAT_BOOM_POSITION_RATIO
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} targetRatio
 */
export function swingBoatBoomToRatio(vehicle: VehicleIndex, targetRatio: number): void {
	const swingBoatBoomToRatio_result = Citizen.invokeNative<void>('0x53E0C0174C1459B3', vehicle, targetRatio);
	return swingBoatBoomToRatio_result;
}