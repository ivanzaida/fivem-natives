import { BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:_ADD_BLIP_FOR_AREA
 *
 * 0X6228F159

 * Adds a rectangular blip for the specified coordinates/area.It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.By default, the blip will show as a regular blip with the specified color/sprite if it is outside of the minimap view.Example image:![minimap](https://i.imgur.com/qLbXWcQ.png)![big map](https://i.imgur.com/0j7O7Rh.png)(Native name is likely to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)This is the server-side RPC native equivalent of the client native [\_ADD\_BLIP\_FOR\_AREA](?_0xCE5D0E5E315DB238).
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate of the center of the blip.
 * @param {number} y The Y coordinate of the center of the blip.
 * @param {number} z The Z coordinate of the center of the blip.
 * @param {number} width The width of the blip.
 * @param {number} height The height of the blip.
 * @returns {BlipIndex}  A handle to the blip.
 */
export function addBlipForArea(x: number, y: number, z: number, width: number, height: number): BlipIndex {
	const addBlipForArea_result = Citizen.invokeNative<BlipIndex>('0X6228F159', x, y, z, width, height);
	return addBlipForArea_result;
}