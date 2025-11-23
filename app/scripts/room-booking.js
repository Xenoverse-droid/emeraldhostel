export async function getRooms() {
    const roomData = await fetch('./data/room-data.json');
    const rooms = await roomData.json()
    return rooms
}

