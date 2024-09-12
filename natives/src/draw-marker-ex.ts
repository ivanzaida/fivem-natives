import { EMarkerType, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_MARKER_EX
 *
 * 0x9DC025C4B814AA09

 * 
 * ------------------------------------------------------------------
 * @param {EMarkerType} markerType
 * @param {number} scrVecPositionX
 * @param {number} scrVecPositionY
 * @param {number} scrVecPositionZ
 * @param {number} scrVecDirectionX
 * @param {number} scrVecDirectionY
 * @param {number} scrVecDirectionZ
 * @param {number} scrVecRotationX
 * @param {number} scrVecRotationY
 * @param {number} scrVecRotationZ
 * @param {number} scrVecScaleX
 * @param {number} scrVecScaleY
 * @param {number} scrVecScaleZ
 * @param {number} colR
 * @param {number} colG
 * @param {number} colB
 * @param {number} colA
 * @param {boolean} bounce
 * @param {boolean} faceCam
 * @param {EEulerRotOrder} rotOrder
 * @param {boolean} rotate
 * @param {string} txdName
 * @param {string} texName
 * @param {boolean} invert
 * @param {boolean} usePreAlphaDepth
 * @param {boolean} matchEntityRotOrder
 */
export function drawMarkerEx(markerType: EMarkerType | number, scrVecPositionX: number, scrVecPositionY: number, scrVecPositionZ: number, scrVecDirectionX: number, scrVecDirectionY: number, scrVecDirectionZ: number, scrVecRotationX: number, scrVecRotationY: number, scrVecRotationZ: number, scrVecScaleX: number, scrVecScaleY: number, scrVecScaleZ: number, colR: number = 255, colG: number = 100, colB: number = 0, colA: number = 100, bounce: boolean = false, faceCam: boolean = false, rotOrder: EEulerRotOrder | number = 2, rotate: boolean = false, txdName: string = null!, texName: string = null!, invert: boolean = false, usePreAlphaDepth: boolean = true, matchEntityRotOrder: boolean = false): void {
	const drawMarkerEx_result = Citizen.invokeNative<void>('0x9DC025C4B814AA09', markerType, scrVecPositionX, scrVecPositionY, scrVecPositionZ, scrVecDirectionX, scrVecDirectionY, scrVecDirectionZ, scrVecRotationX, scrVecRotationY, scrVecRotationZ, scrVecScaleX, scrVecScaleY, scrVecScaleZ, colR, colG, colB, colA, bounce, faceCam, rotOrder, rotate, txdName, texName, invert, usePreAlphaDepth, matchEntityRotOrder);
	return drawMarkerEx_result;
}