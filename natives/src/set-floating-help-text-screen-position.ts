import { EEHelpTextFloatingId } from '@ivanzaida/structures'

/**
 * HUD:SET_FLOATING_HELP_TEXT_SCREEN_POSITION
 *
 * 0xA0FE5620B9E43942

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpTextFloatingId} id
 * @param {number} posX
 * @param {number} posY
 */
export function setFloatingHelpTextScreenPosition(id: EEHelpTextFloatingId | number, posX: number, posY: number): void {
	const setFloatingHelpTextScreenPosition_result = Citizen.invokeNative<void>('0xA0FE5620B9E43942', id, posX, posY);
	return setFloatingHelpTextScreenPosition_result;
}