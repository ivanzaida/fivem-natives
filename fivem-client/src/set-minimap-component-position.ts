/**
 * CFX:SET_MINIMAP_COMPONENT_POSITION
 *
 * 0x3E882B23

 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 * 
 * ------------------------------------------------------------------
 * @param {string} name The name of the minimap component to override.
 * @param {string} alignX Equivalent to the alignX field in frontend.xml.
 * @param {string} alignY Equivalent to the alignY field in frontend.xml.
 * @param {number} posX Equivalent to the posX field in frontend.xml.
 * @param {number} posY Equivalent to the posY field in frontend.xml.
 * @param {number} sizeX Equivalent to the sizeX field in frontend.xml.
 * @param {number} sizeY Equivalent to the sizeY field in frontend.xml.
 */
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void {
	const setMinimapComponentPosition_result = Citizen.invokeNative<void>('0x3E882B23', name, alignX, alignY, posX, posY, sizeX, sizeY);
	return setMinimapComponentPosition_result;
}