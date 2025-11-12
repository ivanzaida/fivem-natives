import { PedIndex, ETennisDiveDirection } from '@ivanzaida/structures'

/**
 * MISC:PLAY_TENNIS_DIVE_ANIM
 *
 * 0x9A6987280C48639C

 * 
 * Play tennis dive animation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ETennisDiveDirection} direction
 * @param {number} diveHorizontal
 * @param {number} diveVertical
 * @param {number} playRate
 * @param {boolean} slowBlend
 */
export function playTennisDiveAnim(ped: PedIndex, direction: ETennisDiveDirection | number, diveHorizontal: number, diveVertical: number, playRate: number = 1, slowBlend: boolean = false): void {
	const playTennisDiveAnim_result = Citizen.invokeNative<void>('0x9A6987280C48639C', ped, direction, diveHorizontal, diveVertical, playRate, slowBlend);
	return playTennisDiveAnim_result;
}