import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_BIKE_ON_STAND
 *
 * 0xD3B9FE5F9C40C8B5

 * 
 * Set a given bike to be on it's kick stand
 * 
 * Only works on bikes, both X and Y work in the -1 - 1 range.
 * 
 * X forces the bike to turn left or right (-1, 1)
 * Y forces the bike to lean to the left or to the right (-1, 1)
 * 
 * Example with X -1/Y 1
 * http://i.imgur.com/TgIuAPJ.jpg
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} steerAngle
 * @param {number} leanAngle
 */
export function setBikeOnStand(vehicle: VehicleIndex, steerAngle: number, leanAngle: number): void {
	const setBikeOnStand_result = Citizen.invokeNative<void>('0xD3B9FE5F9C40C8B5', vehicle, steerAngle, leanAngle);
	return setBikeOnStand_result;
}