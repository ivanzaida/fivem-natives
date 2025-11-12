import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_PROP_COLLECTION_LOCAL_INDEX
 *
 * 0xCD420AD1

 * An analogue to [GET_PED_PROP_INDEX](#_0x898CC20EA75BACD8) that returns collection local prop index (inside [GET_PED_PROP_COLLECTION_NAME](#_0x6B5653E4) collection) instead of the global prop index.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {number} anchorPoint One of the anchor points from [SET_PED_PROP_INDEX](_0x93376B65A266EB5F)
 * @returns {number}  Local drawable index of the drawable that is currently used in the given ped and component, or -1 if the ped does not have a prop at the specified anchor point
 */
export function getPedPropCollectionLocalIndex(ped: PedIndex, anchorPoint: number): number {
	const getPedPropCollectionLocalIndex_result = Citizen.invokeNative<number>('0xCD420AD1', ped, anchorPoint);
	return getPedPropCollectionLocalIndex_result;
}