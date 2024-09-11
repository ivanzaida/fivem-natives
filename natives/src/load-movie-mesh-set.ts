import { MovieMeshSetId } from '@ivanzaida/structures'

/**
 * GRAPHICS:LOAD_MOVIE_MESH_SET
 *
 * 0x60E2ADCDDFECC019

 * 
 * ------------------------------------------------------------------
 * @param {string} setName
 * @returns {MovieMeshSetId}  
 */
export function loadMovieMeshSet(setName: string): MovieMeshSetId {
	const loadMovieMeshSet_result = Citizen.invokeNative<MovieMeshSetId>('0x60E2ADCDDFECC019', setName);
	return loadMovieMeshSet_result;
}