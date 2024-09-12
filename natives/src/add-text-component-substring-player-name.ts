/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME
 *
 * 0x60D332F23943B34F

 * 
 * ------------------------------------------------------------------
 * @param {string} playerName
 */
export function addTextComponentSubstringPlayerName(playerName: string): void {
	const addTextComponentSubstringPlayerName_result = Citizen.invokeNative<void>('0x60D332F23943B34F', playerName);
	return addTextComponentSubstringPlayerName_result;
}