import { MovieMeshSetId, EMoviemeshsetstate } from '@ivanzaida/structures'

/**
 * GRAPHICS:QUERY_MOVIE_MESH_SET_STATE
 *
 * 0x097EC9C4BC1C0F2E

 * 
 * ------------------------------------------------------------------
 * @param {MovieMeshSetId} id
 * @returns {EMoviemeshsetstate}  
 */
export function queryMovieMeshSetState(id: MovieMeshSetId): EMoviemeshsetstate {
	const queryMovieMeshSetState_result = Citizen.invokeNative<EMoviemeshsetstate>('0x097EC9C4BC1C0F2E', id);
	return queryMovieMeshSetState_result;
}