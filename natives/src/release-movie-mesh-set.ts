import { MovieMeshSetId } from '@ivanzaida/structures'

/**
 * GRAPHICS:RELEASE_MOVIE_MESH_SET
 *
 * 0xE76A989290862FBF

 * 
 * ------------------------------------------------------------------
 * @param {MovieMeshSetId} id
 */
export function releaseMovieMeshSet(id: MovieMeshSetId): void {
	const releaseMovieMeshSet_result = Citizen.invokeNative<void>('0xE76A989290862FBF', id);
	return releaseMovieMeshSet_result;
}