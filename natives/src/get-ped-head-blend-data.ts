import { PedIndex, PedHeadBlendData } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HEAD_BLEND_DATA
 *
 * 0x5CB7287FD7611BC7

 * 
 * Gets the current blend data for a given ped, this data can be fed back into SET_PED_HEAD_BLEND_DATA
 * 
 * The pointer is to a padded struct that matches the arguments to SET_PED_HEAD_BLEND_DATA(...). There are 4 bytes of padding after each field.
 * pass this struct in the second parameter
 * struct headBlendData
 * {
 *     int shapeFirst;
 *     int padding1;
 *     int shapeSecond;
 *     int padding2;
 *     int shapeThird;
 *     int padding3;
 *     int skinFirst;
 *     int padding4;
 *     int skinSecond;
 *     int padding5;
 *     int skinThird;
 *     int padding6;
 *     float shapeMix;
 *     int padding7;
 *     float skinMix;
 *     int padding8;
 *     float thirdMix;
 *     int padding9;
 *     bool isParent;
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedHeadBlendData} targetBlendData [Ref]
 * @returns {boolean}  
 */
export function getPedHeadBlendData(ped: PedIndex, targetBlendData: PedHeadBlendData /* ptr */): boolean {
	const getPedHeadBlendData_result = Citizen.invokeNative<boolean>('0x5CB7287FD7611BC7', ped, targetBlendData.dataView);
	return getPedHeadBlendData_result;
}