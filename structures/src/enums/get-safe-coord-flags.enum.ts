export enum EGetSafeCoordFlags {
	GscFlagDefault, // Default
	GscFlagOnlyPavement, // Only navmesh polygons marked as pavement
	GscFlagNotIsolated, // Only navmesh polygons not marked as "isolated"
	GscFlagNotInterior = 4, // No navmesh polygons created from interiors
	GscFlagNotWater = 8, // No navmesh polygons marked as water
	GscFlagOnlyNetworkSpawn = 16, // Only navmesh polygons marked as "network spawn candidate"
	GscFlagUseFloodFill = 32, // Specify whether to use a flood-fill from the starting position, as opposed to scanning all polygons within the search volume
}