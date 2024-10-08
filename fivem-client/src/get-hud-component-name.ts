/**
 * CFX:GET_HUD_COMPONENT_NAME
 *
 * 0xA91866BC

 * 
 * ------------------------------------------------------------------
 * @param {number} id The hud component id.
 * @returns {string}  The hud component name.
 */
export function getHudComponentName(id: number): string {
	const getHudComponentName_result = Citizen.invokeNative<string>('0xA91866BC', id);
	return getHudComponentName_result;
}