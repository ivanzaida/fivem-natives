/**
 * CFX:GET_CURRENT_GAME_NAME
 *
 * 0XACA18ECD

 * This native returns the currently used game's name.
 * 
 * ------------------------------------------------------------------
 * @returns {string}  The game name as a string, one of the following values: gta4, gta5, rdr3
 */
export function getCurrentGameName(): string {
	const getCurrentGameName_result = Citizen.invokeNative<string>('0XACA18ECD', );
	return getCurrentGameName_result;
}