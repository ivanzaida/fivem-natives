/**
 * WEAPON:SET_PLAYER_TARGETTABLE_FOR_AIR_DEFENCE_SPHERE
 *
 * 0xE3C69C184ADC05C0

 * 
 * ------------------------------------------------------------------
 * @param {number} player
 * @param {number} sphere
 * @param {boolean} targettable
 */
export function setPlayerTargettableForAirDefenceSphere(player: number, sphere: number, targettable: boolean): void {
	const setPlayerTargettableForAirDefenceSphere_result = Citizen.invokeNative<void>('0xE3C69C184ADC05C0', player, sphere, targettable);
	return setPlayerTargettableForAirDefenceSphere_result;
}