/**
 * HUD:DOES_TEXT_LABEL_EXIST
 *
 * 0x6BA487C862DB8DDF

 * 
 * Checks if the passed gxt name exists in the game files.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabel
 * @returns {boolean}  
 */
export function doesTextLabelExist(textLabel: string): boolean {
	const doesTextLabelExist_result = Citizen.invokeNative<boolean>('0x6BA487C862DB8DDF', textLabel);
	return doesTextLabelExist_result;
}