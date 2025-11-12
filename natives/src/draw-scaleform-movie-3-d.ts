import { ScaleformIndex, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_SCALEFORM_MOVIE_3D
 *
 * 0x3D1B3BF5963D08DE

 * 
 * movies are drawn in order, with the latest drawn on top.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} scaleformMovieId
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotationX
 * @param {number} rotationY
 * @param {number} rotationZ
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} scaleZ
 * @param {number} worldSizeX
 * @param {number} worldSizeY
 * @param {number} worldSizeZ
 * @param {EEulerRotOrder} rotOrder
 */
export function drawScaleformMovie_3D(scaleformMovieId: ScaleformIndex, posX: number, posY: number, posZ: number, rotationX: number, rotationY: number, rotationZ: number, scaleX: number, scaleY: number, scaleZ: number, worldSizeX: number, worldSizeY: number, worldSizeZ: number, rotOrder: EEulerRotOrder | number = 2): void {
	const drawScaleformMovie_3D_result = Citizen.invokeNative<void>('0x3D1B3BF5963D08DE', scaleformMovieId, posX, posY, posZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, worldSizeX, worldSizeY, worldSizeZ, rotOrder);
	return drawScaleformMovie_3D_result;
}