import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_AIM_GUN_AT_COORD
 *
 * 0xC86A930D894F8CE2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetCoorsX
 * @param {number} targetCoorsY
 * @param {number} targetCoorsZ
 * @param {number} duration
 * @param {boolean} instantBlendToAim Will skip the idle transition and instantly blend to the aim pose
 * @param {boolean} playAimIntro
 */
export function taskAimGunAtCoord(ped: PedIndex, targetCoorsX: number, targetCoorsY: number, targetCoorsZ: number, duration: number, instantBlendToAim: boolean = false, playAimIntro: boolean = false): void {
	const taskAimGunAtCoord_result = Citizen.invokeNative<void>('0xC86A930D894F8CE2', ped, targetCoorsX, targetCoorsY, targetCoorsZ, duration, instantBlendToAim, playAimIntro);
	return taskAimGunAtCoord_result;
}