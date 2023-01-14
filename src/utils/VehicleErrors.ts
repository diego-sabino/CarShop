export const invalidId = { status: 422, message: 'Invalid mongo id' };
export const notFound = (vehicle: string) => ({ status: 404, message: `${vehicle} not found` });