export const isRentEnabled = (): boolean => {
    const {PUBLIC_RENT_ENABLED} = import.meta.env;

    return /^true$/.test(PUBLIC_RENT_ENABLED);
}