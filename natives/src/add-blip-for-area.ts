import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:ADD_BLIP_FOR_AREA
 *
 * 0xAF737D3DF3BD2AD0

 * 
 * Adds a rectangular blip for the specified coordinates/area.
 * 
 * It is recommended to use SET_BLIP_ROTATION and SET_BLIP_COLOUR to make the blip not rotate along with the camera.
 * 
 * By default, the blip will show as a _regular_ blip with the specified color/sprite if it is outside of the minimap view.
 * 
 * Example image:
 * minimap https://w.wew.wtf/pdcjig.png
 * big map https://w.wew.wtf/zgcjcm.png
 * 
 * (Native name is _likely_ to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} sizeX
 * @param {number} sizeY
 * @returns {BlipIndex}  
 */
export function addBlipForArea(coorsX: number, coorsY: number, coorsZ: number, sizeX: number, sizeY: number): BlipIndex {
	const addBlipForArea_result = Citizen.invokeNative<BlipIndex>('0xAF737D3DF3BD2AD0', coorsX, coorsY, coorsZ, sizeX, sizeY);
	return addBlipForArea_result;
}