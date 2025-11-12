import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_HEAD_BLEND_DATA
 *
 * 0x60746B88

 * 
 * The data set with this function auguments the ped variation, it does _not_ replace it and a variation will be required on the ped too.
 * 
 * The "shape" parameters control the shape of the ped's face. The "skin" parameters control the skin tone. ShapeMix and skinMix control how much the first and second IDs contribute,(typically mother and father.) ThirdMix overrides the others in favor of the third IDs. IsParent is set for "children" of the player character's grandparents during old-gen character creation. It has unknown effect otherwise.
 * 
 * The IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.
 * 
 * !!!Can someone add working example for this???
 * 
 * try this:
 *        headBlendData headData;
 *        GET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), &headData);
 * 
 *        SET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), headData.shapeFirst, headData.shapeSecond, headData.shapeThird, headData.skinFirst, headData.skinSecond
 *           , headData.skinThird, headData.shapeMix, headData.skinMix, headData.skinThird, 0);
 * 
 * 
 * For more info please refer to this topic.
 * gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped entity
 * @param {number} shapeFirstID Controls the shape of the first ped's face
 * @param {number} shapeSecondID Controls the shape of the second ped's face
 * @param {number} shapeThirdID Controls the shape of the third ped's face
 * @param {number} skinFirstID Controls the first id's skin tone
 * @param {number} skinSecondID Controls the second id's skin tone
 * @param {number} skinThirdID Controls the third id's skin tone
 * @param {number} shapeMix 0.0  1.0 Of whose characteristics to take Mother  Father (shapeFirstID and shapeSecondID)
 * @param {number} skinMix 0.0  1.0 Of whose characteristics to take Mother  Father (skinFirstID and skinSecondID)
 * @param {number} thirdMix Overrides the others in favor of the third IDs.
 * @param {boolean} isParent IsParent is set for "children" of the player character's grandparents during oldgen character creation. It has unknown effect otherwise.
 */
export function setPedHeadBlendData(ped: PedIndex, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void {
	const setPedHeadBlendData_result = Citizen.invokeNative<void>('0x60746B88', ped, shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent);
	return setPedHeadBlendData_result;
}