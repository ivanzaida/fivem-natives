export enum ENavmeshRouteResult {
	NavmeshrouteTaskNotFound, // on navmesh task was found on the ped
	NavmeshrouteRouteNotYetTried, // the task has not yet looked for a route
	NavmeshrouteRouteNotFound, // the task has tried & failed to find a route (will keep trying)
	NavmeshrouteRouteFound, // the task has successfully found a route
}