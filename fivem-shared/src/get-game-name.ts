/**
 * CFX:GET_GAME_NAME
 *
 * 0XE8EAA18B

 * Returns the current game being executed.Possible values:| Return value | Meaning                        || ------------ | ------------------------------ || `fxserver`   | Server-side code ('Duplicity') || `fivem`      | FiveM for GTA V                || `libertym`   | LibertyM for GTA IV            || `redm`       | RedM for Red Dead Redemption 2 |
 * 
 * ------------------------------------------------------------------
 * @returns {string}  The game the script environment is running in.
 */
export function getGameName(): string {
	const getGameName_result = Citizen.invokeNative<string>('0XE8EAA18B', );
	return getGameName_result;
}