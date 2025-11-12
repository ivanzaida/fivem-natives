import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HEAD_BLEND_DATA
 *
 * 0x0A5987DCA39E8BE5

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
 * @param {PedIndex} ped
 * @param {number} head0
 * @param {number} head1
 * @param {number} head2
 * @param {number} tex0
 * @param {number} tex1
 * @param {number} tex2
 * @param {number} headBlend
 * @param {number} texBlend
 * @param {number} varBlend
 * @param {boolean} parent
 */
export function setPedHeadBlendData(ped: PedIndex, head0: number, head1: number, head2: number, tex0: number, tex1: number, tex2: number, headBlend: number, texBlend: number, varBlend: number, parent: boolean = false): void {
	const setPedHeadBlendData_result = Citizen.invokeNative<void>('0x0A5987DCA39E8BE5', ped, head0, head1, head2, tex0, tex1, tex2, headBlend, texBlend, varBlend, parent);
	return setPedHeadBlendData_result;
}