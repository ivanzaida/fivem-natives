/**
 * GRAPHICS:SET_CURRENT_PLAYER_TCMODIFIER
 *
 * 0xFE602AB8B7E9AF7D

 * 
 * ------------------------------------------------------------------
 * @param {string} currentModifierName
 */
export function setCurrentPlayerTcmodifier(currentModifierName: string): void {
	const setCurrentPlayerTcmodifier_result = Citizen.invokeNative<void>('0xFE602AB8B7E9AF7D', currentModifierName);
	return setCurrentPlayerTcmodifier_result;
}