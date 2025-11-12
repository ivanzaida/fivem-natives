/**
 * MOBILE:CELL_HORIZONTAL_MODE_TOGGLE
 *
 * 0xF3D5C578ED6C7528

 * 
 * if the bool "Toggle" is "true" so the phone is lean.
 * if the bool "Toggle" is "false" so the phone is not lean.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function cellHorizontalModeToggle(active: boolean): void {
	const cellHorizontalModeToggle_result = Citizen.invokeNative<void>('0xF3D5C578ED6C7528', active);
	return cellHorizontalModeToggle_result;
}