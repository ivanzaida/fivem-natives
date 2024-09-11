import { EBriefType } from '@ivanzaida/structures'

/**
 * GRAPHICS:SCALEFORM_MOVIE_METHOD_ADD_PARAM_LATEST_BRIEF_STRING
 *
 * 0x2EF4D786C0BC9419

 * 
 * ------------------------------------------------------------------
 * @param {EBriefType} briefType
 */
export function scaleformMovieMethodAddParamLatestBriefString(briefType: EBriefType | number): void {
	const scaleformMovieMethodAddParamLatestBriefString_result = Citizen.invokeNative<void>('0x2EF4D786C0BC9419', briefType);
	return scaleformMovieMethodAddParamLatestBriefString_result;
}