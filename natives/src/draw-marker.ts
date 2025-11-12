import { EMarkerType, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_MARKER
 *
 * 0x7E763410A91A972B

 * 
 * enum MarkerTypes
 * {
 *     MarkerTypeUpsideDownCone = 0,
 *  MarkerTypeVerticalCylinder = 1,
 *    MarkerTypeThickChevronUp = 2,
 *  MarkerTypeThinChevronUp = 3,
 *   MarkerTypeCheckeredFlagRect = 4,
 *   MarkerTypeCheckeredFlagCircle = 5,
 *     MarkerTypeVerticleCircle = 6,
 *  MarkerTypePlaneModel = 7,
 *  MarkerTypeLostMCDark = 8,
 *  MarkerTypeLostMCLight = 9,
 *     MarkerTypeNumber0 = 10,
 *    MarkerTypeNumber1 = 11,
 *    MarkerTypeNumber2 = 12,
 *    MarkerTypeNumber3 = 13,
 *    MarkerTypeNumber4 = 14,
 *    MarkerTypeNumber5 = 15,
 *    MarkerTypeNumber6 = 16,
 *    MarkerTypeNumber7 = 17,
 *    MarkerTypeNumber8 = 18,
 *    MarkerTypeNumber9 = 19,
 *    MarkerTypeChevronUpx1 = 20,
 *    MarkerTypeChevronUpx2 = 21,
 *    MarkerTypeChevronUpx3 = 22,
 *    MarkerTypeHorizontalCircleFat = 23,
 *    MarkerTypeReplayIcon = 24,
 *     MarkerTypeHorizontalCircleSkinny = 25,
 *     MarkerTypeHorizontalCircleSkinny_Arrow = 26,
 *   MarkerTypeHorizontalSplitArrowCircle = 27,
 *     MarkerTypeDebugSphere = 28,
 *    MarkerTypeDallorSign = 29,
 *     MarkerTypeHorizontalBars = 30,
 *     MarkerTypeWolfHead = 31
 * };
 * 
 * dirX/Y/Z represent a heading on each axis in which the marker should face, alternatively you can rotate each axis independently with rotX/Y/Z (and set dirX/Y/Z all to 0).
 * 
 * faceCamera - Rotates only the y-axis (the heading) towards the camera
 * 
 * p19 - no effect, default value in script is 2
 * 
 * rotate - Rotates only on the y-axis (the heading)
 * 
 * textureDict - Name of texture dictionary to load texture from (e.g. "GolfPutting")
 * 
 * textureName - Name of texture inside dictionary to load (e.g. "PuttingMarker")
 * 
 * drawOnEnts - Draws the marker onto any entities that intersect it
 * 
 * basically what he said, except textureDict and textureName are totally not const char, or if so, then they are always set to 0/NULL/nullptr in every script I checked, eg:
 * 
 * bj.c: graphics::draw_marker(6, vParam0, 0f, 0f, 1f, 0f, 0f, 0f, 4f, 4f, 4f, 240, 200, 80, iVar1, 0, 0, 2, 0, 0, 0, false);
 * 
 * his is what I used to draw an amber downward pointing chevron "V", has to be redrawn every frame.  The 180 is for 180 degrees rotation around the Y axis, the 50 is alpha, assuming max is 100, but it will accept 255.
 * 
 * GRAPHICS::DRAW_MARKER(2, v.x, v.y, v.z + 2, 0, 0, 0, 0, 180, 0, 2, 2, 2, 255, 128, 0, 50, 0, 1, 1, 0, 0, 0, 0);
 * 
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
 * @param {boolean} bounce Whether the marker should bounce up and down
 * @param {boolean} faceCam Whether the marker should face the camera
 * @param {EEulerRotOrder} rotOrder
 * @param {boolean} rotate Whether the marker should rotate automatically on the Z axis.
 * @param {string} txdName Streamed texture dictionary name
 * @param {string} texName Streamed texture name
 * @param {boolean} invert Render inverted
 */
export function drawMarker(markerType: EMarkerType | number, scrVecPositionX: number, scrVecPositionY: number, scrVecPositionZ: number, scrVecDirectionX: number, scrVecDirectionY: number, scrVecDirectionZ: number, scrVecRotationX: number, scrVecRotationY: number, scrVecRotationZ: number, scrVecScaleX: number, scrVecScaleY: number, scrVecScaleZ: number, colR: number = 255, colG: number = 100, colB: number = 0, colA: number = 100, bounce: boolean = false, faceCam: boolean = false, rotOrder: EEulerRotOrder | number = 2, rotate: boolean = false, txdName: string = null!, texName: string = null!, invert: boolean = false): void {
	const drawMarker_result = Citizen.invokeNative<void>('0x7E763410A91A972B', markerType, scrVecPositionX, scrVecPositionY, scrVecPositionZ, scrVecDirectionX, scrVecDirectionY, scrVecDirectionZ, scrVecRotationX, scrVecRotationY, scrVecRotationZ, scrVecScaleX, scrVecScaleY, scrVecScaleZ, colR, colG, colB, colA, bounce, faceCam, rotOrder, rotate, txdName, texName, invert);
	return drawMarker_result;
}