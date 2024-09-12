import { Vector3, FloatRef, BoolRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_SAVE_HOUSE_DETAILS_AFTER_SUCCESSFUL_LOAD
 *
 * 0xD1CA4C3A111D9BBF

 * 
 * ------------------------------------------------------------------
 * @param {Vector3} vecReturnCoords [Ref]
 * @param {FloatRef} outHeading [Ref]
 * @param {BoolRef} outFadeIn [Ref]
 * @param {BoolRef} outSnapToGround [Ref]
 * @returns {boolean}  
 */
export function getSaveHouseDetailsAfterSuccessfulLoad(vecReturnCoords: Vector3 /* ptr */, outHeading: FloatRef /* ptr */, outFadeIn: BoolRef /* ptr */, outSnapToGround: BoolRef /* ptr */): boolean {
	const vecReturnCoordsPtr = new Vector3Ref();
	const getSaveHouseDetailsAfterSuccessfulLoad_result = Citizen.invokeNative<boolean>('0xD1CA4C3A111D9BBF', vecReturnCoordsPtr.dataView, outHeading.dataView, outFadeIn.dataView, outSnapToGround.dataView);
	vecReturnCoordsPtr.copyToVector(vecReturnCoords);
	return getSaveHouseDetailsAfterSuccessfulLoad_result;
}