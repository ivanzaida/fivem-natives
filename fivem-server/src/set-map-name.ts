/**
 * CFX:SET_MAP_NAME
 *
 * 0xB7BA82DC

 * 
 * ------------------------------------------------------------------
 * @param {string} mapName
 */
export function setMapName(mapName: string): void {
	const setMapName_result = Citizen.invokeNative<void>('0xB7BA82DC', mapName);
	return setMapName_result;
}