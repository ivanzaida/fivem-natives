/**
 * CFX:SET_WATER_AREA_CLIP_RECT
 *
 * 0x9FCD2EE6

 * Sets world clip boundaries for water quads file (water.xml, water_heistisland.xml)Used internally by LOAD_GLOBAL_WATER_FILE
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} maxX
 * @param {number} maxY
 */
export function setWaterAreaClipRect(minX: number, minY: number, maxX: number, maxY: number): void {
	const setWaterAreaClipRect_result = Citizen.invokeNative<void>('0x9FCD2EE6', minX, minY, maxX, maxY);
	return setWaterAreaClipRect_result;
}