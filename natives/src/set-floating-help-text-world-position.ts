import { EEHelpTextFloatingId } from '@ivanzaida/structures'

/**
 * HUD:SET_FLOATING_HELP_TEXT_WORLD_POSITION
 *
 * 0xF2095B7705BD9724

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpTextFloatingId} id
 * @param {number} worldPosX
 * @param {number} worldPosY
 * @param {number} worldPosZ
 */
export function setFloatingHelpTextWorldPosition(id: EEHelpTextFloatingId | number, worldPosX: number, worldPosY: number, worldPosZ: number): void {
	const setFloatingHelpTextWorldPosition_result = Citizen.invokeNative<void>('0xF2095B7705BD9724', id, worldPosX, worldPosY, worldPosZ);
	return setFloatingHelpTextWorldPosition_result;
}