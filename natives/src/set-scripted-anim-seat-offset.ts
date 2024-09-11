import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_SCRIPTED_ANIM_SEAT_OFFSET
 *
 * 0x3DE9177F07328831

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} distance
 */
export function setScriptedAnimSeatOffset(ped: PedIndex, distance: number): void {
	const setScriptedAnimSeatOffset_result = Citizen.invokeNative<void>('0x3DE9177F07328831', ped, distance);
	return setScriptedAnimSeatOffset_result;
}