import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MOVE_RATE_OVERRIDE
 *
 * 0xB27B08E34AC92345

 * 
 * Min: 0.00
 * Max: 10.00
 * 
 * Can be used in combo with fast run cheat.
 * 
 * When value is set to 10.00:
 * Sprinting without fast run cheat: 66 m/s
 * Sprinting with fast run cheat: 77 m/s
 * 
 * Needs to be looped!
 * 
 * Note: According to IDA for the Xbox360 xex, when they check bgt they seem to have the min to 0.0f, but the max set to 1.15f not 10.0f.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} desiredRate
 */
export function setPedMoveRateOverride(ped: PedIndex, desiredRate: number): void {
	const setPedMoveRateOverride_result = Citizen.invokeNative<void>('0xB27B08E34AC92345', ped, desiredRate);
	return setPedMoveRateOverride_result;
}