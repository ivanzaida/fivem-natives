import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MOVE_RATE_IN_WATER_OVERRIDE
 *
 * 0xFF02104E431CCA25

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} desiredRate
 */
export function setPedMoveRateInWaterOverride(ped: PedIndex, desiredRate: number): void {
	const setPedMoveRateInWaterOverride_result = Citizen.invokeNative<void>('0xFF02104E431CCA25', ped, desiredRate);
	return setPedMoveRateInWaterOverride_result;
}