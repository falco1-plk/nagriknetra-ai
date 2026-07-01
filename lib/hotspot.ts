export function detectHotspots(reports: any[]) {
  const hotspots: any[] = [];

  const visited = new Set<number>();

  for (let i = 0; i < reports.length; i++) {

    if (visited.has(i)) continue;

    const current = reports[i];

    const cluster = [current];

    for (let j = i + 1; j < reports.length; j++) {

      const other = reports[j];

      const distance = getDistance(
        Number(current.latitude),
        Number(current.longitude),
        Number(other.latitude),
        Number(other.longitude)
      );

      if (distance < 1000) {
        cluster.push(other);
        visited.add(j);
      }
    }

    if (cluster.length >= 3) {
      hotspots.push(cluster);
    }
  }

  return hotspots;
}

function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371000;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;

  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) *
      Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return (
    2 *
    R *
    Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  );
}