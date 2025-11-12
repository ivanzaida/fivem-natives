/**
 * HUD:SET_WARNING_MESSAGE_OPTION_ITEMS
 *
 * 0x0C5A80A9E096D529

 * 
 * Some sort of list displayed in a warning message. Yet unknown how to prevent repeating.
 * Param names copied from the corresponding scaleform function "SET_LIST_ROW".
 * Example: https://i.imgur.com/arKvOYx.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} highlight
 * @param {string} nameString
 * @param {number} cash
 * @param {number} rp
 * @param {number} lvl
 * @param {number} col
 * @returns {boolean}  
 */
export function setWarningMessageOptionItems(highlight: number, nameString: string, cash: number, rp: number, lvl: number, col: number): boolean {
	const setWarningMessageOptionItems_result = Citizen.invokeNative<boolean>('0x0C5A80A9E096D529', highlight, nameString, cash, rp, lvl, col);
	return setWarningMessageOptionItems_result;
}