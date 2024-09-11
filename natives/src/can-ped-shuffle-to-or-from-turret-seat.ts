import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * PED:CAN_PED_SHUFFLE_TO_OR_FROM_TURRET_SEAT
 *
 * 0xB4C8F59204E526EA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} targetShuffleSeat [Ref]
 * @returns {boolean}  
 */
export function canPedShuffleToOrFromTurretSeat(ped: PedIndex, targetShuffleSeat: IntRef /* ptr */): boolean {
	const canPedShuffleToOrFromTurretSeat_result = Citizen.invokeNative<boolean>('0xB4C8F59204E526EA', ped, targetShuffleSeat.dataView);
	return canPedShuffleToOrFromTurretSeat_result;
}