import { MpOutfitsData, MpOutfitsDataRequest } from '@ivanzaida/structures'

/**
 * PED:GET_MP_OUTFIT_DATA_FROM_METADATA
 *
 * 0x386E4537DAFC3779

 * 
 * ------------------------------------------------------------------
 * @param {MpOutfitsData} outfitData [Ref]
 * @param {MpOutfitsDataRequest} outfitDataRequest [Ref]
 * @returns {boolean}  
 */
export function getMpOutfitDataFromMetadata(outfitData: MpOutfitsData /* ptr */, outfitDataRequest: MpOutfitsDataRequest /* ptr */): boolean {
	const getMpOutfitDataFromMetadata_result = Citizen.invokeNative<boolean>('0x386E4537DAFC3779', outfitData.dataView, outfitDataRequest.dataView);
	return getMpOutfitDataFromMetadata_result;
}