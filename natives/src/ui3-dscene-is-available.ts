/**
 * GRAPHICS:UI3DSCENE_IS_AVAILABLE
 *
 * 0xAFF91C9040AC6A43

 * 
 * Returns whether the UI 3D scene manager is not in use already: only one user can interface with the
 * manager at a given time.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function ui3DsceneIsAvailable(): boolean {
	const ui3DsceneIsAvailable_result = Citizen.invokeNative<boolean>('0xAFF91C9040AC6A43', );
	return ui3DsceneIsAvailable_result;
}